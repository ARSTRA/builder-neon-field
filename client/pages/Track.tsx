import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Search,
  Package,
  MapPin,
  Clock,
  CheckCircle,
  Truck,
  Plane,
  Ship,
  AlertCircle,
  Download,
  Calendar,
  RotateCcw,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TrackingEvent {
  date: string;
  time: string;
  location: string;
  status: string;
  description: string;
  icon: React.ReactNode;
  completed: boolean;
}

interface PackageData {
  trackingId: string;
  status: "in_transit" | "delivered" | "picked_up" | "customs" | "exception";
  currentLocation: string;
  destination: string;
  origin: string;
  estimatedDelivery: string;
  service: string;
  weight: string;
  dimensions: string;
  events: TrackingEvent[];
  coordinates: { lat: number; lng: number };
  progress: number;
  carrier: string;
  packageImage: string;
}

export default function Track() {
  const [searchParams] = useSearchParams();
  const [trackingId, setTrackingId] = useState(searchParams.get("id") || "");
  const [packageData, setPackageData] = useState<PackageData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isRedeliveryDialogOpen, setIsRedeliveryDialogOpen] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const [redeliveryData, setRedeliveryData] = useState({
    date: "",
    timeSlot: "",
    instructions: "",
  });
  const [reportData, setReportData] = useState({
    issueType: "",
    description: "",
    priority: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock data for demonstration
  const getMockPackageData = (id: string): PackageData => ({
    trackingId: id,
    status: "in_transit",
    currentLocation: "Los Angeles, CA",
    destination: "New York, NY",
    origin: "Shanghai, China",
    estimatedDelivery: "Dec 18, 2024",
    service: "Express Air Freight",
    weight: "2.5 kg",
    dimensions: "30x20x15 cm",
    progress: 65,
    carrier: "GlobalTrack Express",
    packageImage:
      "https://images.pexels.com/photos/6754998/pexels-photo-6754998.jpeg",
    coordinates: { lat: 34.0522, lng: -118.2437 },
    events: [
      {
        date: "Dec 13, 2024",
        time: "08:45",
        location: "Los Angeles, CA",
        status: "In Transit",
        description: "Package is on the way to destination facility",
        icon: <Truck className="h-5 w-5" />,
        completed: false,
      },
      {
        date: "Dec 12, 2024",
        time: "14:30",
        location: "Los Angeles, CA",
        status: "Arrived at Facility",
        description: "Package arrived at Los Angeles sorting facility",
        icon: <Package className="h-5 w-5" />,
        completed: true,
      },
      {
        date: "Dec 11, 2024",
        time: "09:15",
        location: "San Francisco, CA",
        status: "Departed",
        description: "Departed from San Francisco international hub",
        icon: <Plane className="h-5 w-5" />,
        completed: true,
      },
      {
        date: "Dec 10, 2024",
        time: "16:45",
        location: "Shanghai, China",
        status: "Picked Up",
        description: "Package picked up from origin and processed",
        icon: <CheckCircle className="h-5 w-5" />,
        completed: true,
      },
    ],
  });

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) {
      setError("Please enter a tracking number");
      return;
    }

    setLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      if (trackingId.toLowerCase().startsWith("gt")) {
        setPackageData(getMockPackageData(trackingId));
      } else {
        setError("Tracking number not found. Please check and try again.");
        setPackageData(null);
      }
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (searchParams.get("id")) {
      handleSearch(new Event("submit") as any);
    }
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200";
      case "in_transit":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "picked_up":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "exception":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-6 w-6 text-green-600" />;
      case "in_transit":
        return <Truck className="h-6 w-6 text-blue-600" />;
      case "exception":
        return <AlertCircle className="h-6 w-6 text-red-600" />;
      default:
        return <Clock className="h-6 w-6 text-gray-600" />;
    }
  };

  // Quick Actions Handlers
  const handleDownloadReceipt = () => {
    if (!packageData) return;

    // Create a mock receipt PDF content
    const receiptContent = `
GlobalTrack Logistics - Shipping Receipt
========================================

Tracking ID: ${packageData.trackingId}
Service: ${packageData.service}
Origin: ${packageData.origin}
Destination: ${packageData.destination}
Weight: ${packageData.weight}
Dimensions: ${packageData.dimensions}
Status: ${packageData.status.replace("_", " ").toUpperCase()}
Estimated Delivery: ${packageData.estimatedDelivery}

Generated on: ${new Date().toLocaleDateString()}
    `;

    // Create and download file
    const blob = new Blob([receiptContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `GlobalTrack_Receipt_${packageData.trackingId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Receipt Downloaded",
      description: "Your shipping receipt has been downloaded successfully.",
    });
  };

  const handleScheduleRedelivery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!redeliveryData.date || !redeliveryData.timeSlot) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Redelivery Scheduled",
      description: `Your package will be redelivered on ${redeliveryData.date} during ${redeliveryData.timeSlot}.`,
    });

    setIsRedeliveryDialogOpen(false);
    setRedeliveryData({ date: "", timeSlot: "", instructions: "" });
  };

  const handleReportIssue = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportData.issueType || !reportData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Issue Reported",
      description:
        "Your issue has been reported. Our support team will contact you within 24 hours.",
    });

    setIsReportDialogOpen(false);
    setReportData({ issueType: "", description: "", priority: "" });
  };

  const handleCallSupport = () => {
    toast({
      title: "Calling Support",
      description: "Connecting you to +1 (555) 123-4567...",
    });
    // In a real app, this could trigger a phone call
  };

  const handleLiveChat = () => {
    navigate("/chat");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-shipblue-600 to-shipblue-800 text-white py-12 lg:py-16">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1996989/pexels-photo-1996989.jpeg')] bg-cover bg-center opacity-30"></div>
        <div className="relative container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Track Your Package
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-6 lg:mb-8 leading-relaxed">
              Real-time GPS tracking with live updates every step of the way
            </p>

            {/* Enhanced Search Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6 lg:p-8">
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Input
                        type="text"
                        placeholder="Enter your tracking number (e.g., SN123456789)"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        className="bg-white text-gray-800 placeholder:text-gray-500 text-base lg:text-lg py-4 lg:py-6 pl-12 border-0 shadow-lg rounded-xl"
                      />
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 lg:h-6 lg:w-6 text-gray-500" />
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 lg:py-6 px-6 lg:px-8 text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                    >
                      {loading ? "Searching..." : "Track Package"}
                    </Button>
                  </div>
                  {error && (
                    <div className="bg-red-500/20 border border-red-400 rounded-lg p-4 text-red-100">
                      <div className="flex items-center">
                        <AlertCircle className="h-5 w-5 mr-2" />
                        {error}
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Tracking Overview Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
                Advanced Package Tracking Technology
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience the future of logistics with our state-of-the-art
                tracking system powered by real-time GPS, AI-driven analytics,
                and seamless integration across global networks.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Image Side */}
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3582491/pexels-photo-3582491.jpeg"
                  alt="GPS tracking technology"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-shipblue-600/30 to-orange-500/20 rounded-2xl"></div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800">
                      Live Tracking Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-800">
                  Real-Time GPS Monitoring
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our advanced GPS tracking system provides precise location
                  data updated every 15 minutes, ensuring you always know
                  exactly where your package is throughout its journey.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Satellite-Grade Precision
                      </h4>
                      <p className="text-gray-600">
                        Military-grade GPS accuracy within 3-meter radius
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Live Updates
                      </h4>
                      <p className="text-gray-600">
                        Automatic notifications for every milestone
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Interactive Maps
                      </h4>
                      <p className="text-gray-600">
                        Visual journey tracking with estimated arrival times
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Feature Set */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-6 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-800">
                  AI-Powered Logistics Intelligence
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Leveraging artificial intelligence and machine learning, our
                  system predicts potential delays, optimizes routes in
                  real-time, and provides proactive solutions to ensure on-time
                  delivery.
                </p>

                <div className="bg-gradient-to-r from-shipblue-50 to-orange-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Smart Delivery Predictions
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-shipblue-600">
                        99.2%
                      </div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">
                        4hrs
                      </div>
                      <div className="text-sm text-gray-600">
                        Avg. Prediction
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-shipblue-600">
                        98.7%
                      </div>
                      <div className="text-sm text-gray-600">
                        On-Time Delivery
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative lg:order-1">
                <img
                  src="https://images.pexels.com/photos/6754998/pexels-photo-6754998.jpeg"
                  alt="AI logistics technology"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-shipblue-600/30 to-orange-500/20 rounded-2xl"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">
                      Smart Analytics
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Capability 1 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img
                      src="https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg"
                      alt="Global tracking network"
                      className="w-full h-32 object-cover rounded-xl opacity-90 transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent rounded-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Global Network Coverage
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Track packages across 120+ countries with seamless
                    integration between carriers and logistics partners.
                  </p>
                  <div className="text-2xl font-bold text-blue-600">120+</div>
                  <div className="text-sm text-gray-500">Countries Covered</div>
                </CardContent>
              </Card>

              {/* Capability 2 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img
                      src="https://images.pexels.com/photos/7706382/pexels-photo-7706382.jpeg"
                      alt="Real-time analytics"
                      className="w-full h-32 object-cover rounded-xl opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/50 to-transparent rounded-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Clock className="h-12 w-12 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Real-Time Updates
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Receive instant notifications and updates every 15 minutes
                    with precise location data and status changes.
                  </p>
                  <div className="text-2xl font-bold text-green-600">15min</div>
                  <div className="text-sm text-gray-500">Update Frequency</div>
                </CardContent>
              </Card>

              {/* Capability 3 */}
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img
                      src="https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg"
                      alt="Advanced analytics"
                      className="w-full h-32 object-cover rounded-xl opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-600/50 to-transparent rounded-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CheckCircle className="h-12 w-12 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Predictive Analytics
                  </h3>
                  <p className="text-gray-600 mb-4">
                    AI-powered predictions for delivery times, potential delays,
                    and route optimizations in real-time.
                  </p>
                  <div className="text-2xl font-bold text-orange-600">
                    99.2%
                  </div>
                  <div className="text-sm text-gray-500">Accuracy Rate</div>
                </CardContent>
              </Card>
            </div>

            {/* Advanced Features Section */}
            <div className="mt-16 bg-gradient-to-r from-shipblue-50 to-orange-50 rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Advanced Tracking Features
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Experience next-generation logistics technology with features
                  designed for modern supply chain management
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Package className="h-8 w-8 text-shipblue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Package Insights
                  </h4>
                  <p className="text-sm text-gray-600">
                    Detailed package information, photos, and handling
                    instructions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <MessageCircle className="h-8 w-8 text-shipblue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Smart Notifications
                  </h4>
                  <p className="text-sm text-gray-600">
                    Proactive alerts via SMS, email, and push notifications
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Calendar className="h-8 w-8 text-shipblue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Delivery Scheduling
                  </h4>
                  <p className="text-sm text-gray-600">
                    Flexible delivery windows and rescheduling options
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Download className="h-8 w-8 text-shipblue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Digital Documentation
                  </h4>
                  <p className="text-sm text-gray-600">
                    Electronic receipts, invoices, and customs documentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Package Information */}
        {packageData && (
          <div className="max-w-7xl mx-auto">
            {/* Status Overview */}
            <Card className="mb-8 shadow-xl border-0">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Package Image & Basic Info */}
                  <div className="lg:col-span-1">
                    <div className="relative">
                      <img
                        src={packageData.packageImage}
                        alt="Package in transit"
                        className="w-full h-64 object-cover rounded-2xl shadow-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`${getStatusColor(packageData.status)} border font-semibold`}
                        >
                          {packageData.status.replace("_", " ").toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Status Details */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      {getStatusIcon(packageData.status)}
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          Tracking: {packageData.trackingId}
                        </h2>
                        <p className="text-gray-600">{packageData.carrier}</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{packageData.origin}</span>
                        <span>{packageData.progress}% Complete</span>
                        <span>{packageData.destination}</span>
                      </div>
                      <Progress value={packageData.progress} className="h-3" />
                    </div>

                    {/* Key Information Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600 flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            Current Location:
                          </span>
                          <span className="font-semibold text-blue-600">
                            {packageData.currentLocation}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600 flex items-center">
                            <Package className="h-4 w-4 mr-2" />
                            Service:
                          </span>
                          <span className="font-semibold">
                            {packageData.service}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-gray-600 flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            Weight:
                          </span>
                          <span className="font-semibold">
                            {packageData.weight}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600 flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            Est. Delivery:
                          </span>
                          <span className="font-semibold text-orange-600">
                            {packageData.estimatedDelivery}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Destination:</span>
                          <span className="font-semibold">
                            {packageData.destination}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-gray-600">Dimensions:</span>
                          <span className="font-semibold">
                            {packageData.dimensions}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Tracking Timeline */}
              <div className="lg:col-span-2">
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">
                      Tracking Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {packageData.events.map((event, index) => (
                        <div key={index} className="relative">
                          {/* Timeline Line */}
                          {index < packageData.events.length - 1 && (
                            <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
                          )}

                          <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div
                              className={`flex-shrink-0 p-3 rounded-full border-2 ${
                                event.completed
                                  ? "bg-green-100 border-green-500 text-green-600"
                                  : "bg-blue-100 border-blue-500 text-blue-600"
                              }`}
                            >
                              {event.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                  <h4 className="font-semibold text-gray-900 text-lg">
                                    {event.status}
                                  </h4>
                                  <div className="text-sm text-gray-500">
                                    {event.date} at {event.time}
                                  </div>
                                </div>
                                <p className="text-gray-700 mb-2">
                                  {event.description}
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {event.location}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Live Map */}
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <MapPin className="h-6 w-6 text-shipblue-600" />
                      Live Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Enhanced Mock Map */}
                    <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 h-64 rounded-xl overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/1996989/pexels-photo-1996989.jpeg"
                        alt="Map view"
                        className="w-full h-full object-cover opacity-40"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                          <div className="w-12 h-12 bg-shipblue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                            <MapPin className="h-6 w-6 text-white" />
                          </div>
                          <p className="font-semibold text-gray-800">
                            {packageData.currentLocation}
                          </p>
                          <p className="text-sm text-gray-600">
                            GPS Tracking Active
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                          <span className="font-semibold text-blue-800">
                            Current Location
                          </span>
                        </div>
                        <p className="text-sm text-blue-700">
                          {packageData.currentLocation}
                        </p>
                      </div>

                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          <span className="font-semibold text-green-800">
                            Final Destination
                          </span>
                        </div>
                        <p className="text-sm text-green-700">
                          {packageData.destination}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      variant="outline"
                      onClick={handleDownloadReceipt}
                      className="w-full justify-start hover:bg-shipblue-50 hover:border-shipblue-300 transition-all duration-200"
                    >
                      <Download className="h-4 w-4 mr-3" />
                      Download Receipt
                    </Button>

                    <Dialog
                      open={isRedeliveryDialogOpen}
                      onOpenChange={setIsRedeliveryDialogOpen}
                    >
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start hover:bg-orange-50 hover:border-orange-300 transition-all duration-200"
                        >
                          <RotateCcw className="h-4 w-4 mr-3" />
                          Schedule Redelivery
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Schedule Redelivery</DialogTitle>
                          <DialogDescription>
                            Choose a new delivery date and time that works for
                            you.
                          </DialogDescription>
                        </DialogHeader>
                        <form
                          onSubmit={handleScheduleRedelivery}
                          className="space-y-4"
                        >
                          <div className="space-y-2">
                            <Label htmlFor="redelivery-date">
                              Preferred Date *
                            </Label>
                            <Input
                              id="redelivery-date"
                              type="date"
                              required
                              min={new Date().toISOString().split("T")[0]}
                              value={redeliveryData.date}
                              onChange={(e) =>
                                setRedeliveryData((prev) => ({
                                  ...prev,
                                  date: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="time-slot">Time Slot *</Label>
                            <Select
                              value={redeliveryData.timeSlot}
                              onValueChange={(value) =>
                                setRedeliveryData((prev) => ({
                                  ...prev,
                                  timeSlot: value,
                                }))
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select time slot" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="9am-12pm">
                                  9:00 AM - 12:00 PM
                                </SelectItem>
                                <SelectItem value="12pm-3pm">
                                  12:00 PM - 3:00 PM
                                </SelectItem>
                                <SelectItem value="3pm-6pm">
                                  3:00 PM - 6:00 PM
                                </SelectItem>
                                <SelectItem value="6pm-9pm">
                                  6:00 PM - 9:00 PM
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="instructions">
                              Special Instructions
                            </Label>
                            <Textarea
                              id="instructions"
                              placeholder="Any special delivery instructions..."
                              value={redeliveryData.instructions}
                              onChange={(e) =>
                                setRedeliveryData((prev) => ({
                                  ...prev,
                                  instructions: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <div className="flex gap-3">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => setIsRedeliveryDialogOpen(false)}
                              className="flex-1"
                            >
                              Cancel
                            </Button>
                            <Button
                              type="submit"
                              className="flex-1 bg-orange-500 hover:bg-orange-600"
                            >
                              Schedule
                            </Button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>

                    <Dialog
                      open={isReportDialogOpen}
                      onOpenChange={setIsReportDialogOpen}
                    >
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start hover:bg-red-50 hover:border-red-300 transition-all duration-200"
                        >
                          <AlertCircle className="h-4 w-4 mr-3" />
                          Report Issue
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Report an Issue</DialogTitle>
                          <DialogDescription>
                            Let us know about any problems with your shipment.
                          </DialogDescription>
                        </DialogHeader>
                        <form
                          onSubmit={handleReportIssue}
                          className="space-y-4"
                        >
                          <div className="space-y-2">
                            <Label htmlFor="issue-type">Issue Type *</Label>
                            <Select
                              value={reportData.issueType}
                              onValueChange={(value) =>
                                setReportData((prev) => ({
                                  ...prev,
                                  issueType: value,
                                }))
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select issue type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="damaged">
                                  Package Damaged
                                </SelectItem>
                                <SelectItem value="missing">
                                  Package Missing/Lost
                                </SelectItem>
                                <SelectItem value="delayed">
                                  Delivery Delayed
                                </SelectItem>
                                <SelectItem value="wrong-address">
                                  Wrong Delivery Address
                                </SelectItem>
                                <SelectItem value="customs">
                                  Customs Issue
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="priority">Priority</Label>
                            <Select
                              value={reportData.priority}
                              onValueChange={(value) =>
                                setReportData((prev) => ({
                                  ...prev,
                                  priority: value,
                                }))
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select priority" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                                <SelectItem value="urgent">Urgent</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="description">Description *</Label>
                            <Textarea
                              id="description"
                              placeholder="Please describe the issue in detail..."
                              required
                              value={reportData.description}
                              onChange={(e) =>
                                setReportData((prev) => ({
                                  ...prev,
                                  description: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <div className="flex gap-3">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => setIsReportDialogOpen(false)}
                              className="flex-1"
                            >
                              Cancel
                            </Button>
                            <Button
                              type="submit"
                              className="flex-1 bg-red-500 hover:bg-red-600"
                            >
                              Report Issue
                            </Button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>

                {/* Support */}
                <Card className="shadow-xl border-0 bg-gradient-to-br from-shipblue-600 to-shipblue-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">
                      Need Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      variant="secondary"
                      onClick={handleCallSupport}
                      className="w-full justify-start bg-white/20 hover:bg-white/30 text-white border-white/30 transition-all duration-200"
                    >
                      <Phone className="h-4 w-4 mr-3" />
                      Call Support
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={handleLiveChat}
                      className="w-full justify-start bg-white/20 hover:bg-white/30 text-white border-white/30 transition-all duration-200"
                    >
                      <MessageCircle className="h-4 w-4 mr-3" />
                      Live Chat
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        {!packageData && !loading && (
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-shipblue-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-shipblue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="h-8 w-8 text-shipblue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Need Help Finding Your Package?
                </h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Enter your tracking number above to get real-time updates on
                  your shipment. For tracking numbers starting with 'GT', our
                  system provides detailed location tracking and delivery
                  estimates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => window.open("tel:+15551234567", "_self")}
                    className="bg-gradient-to-r from-shipblue-600 to-orange-500 hover:from-shipblue-700 hover:to-orange-600 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Support
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => (window.location.href = "/contact")}
                    className="border-2 border-shipblue-600 text-shipblue-600 hover:bg-shipblue-600 hover:text-white px-8 py-3 font-semibold transition-all duration-300"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Live Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
