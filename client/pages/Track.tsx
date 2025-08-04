import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Package, MapPin, Clock, CheckCircle, Truck, Plane, Ship, AlertCircle, Download, Calendar, RotateCcw, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

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
    packageImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    coordinates: { lat: 34.0522, lng: -118.2437 },
    events: [
      {
        date: "Dec 13, 2024",
        time: "08:45",
        location: "Los Angeles, CA",
        status: "In Transit",
        description: "Package is on the way to destination facility",
        icon: <Truck className="h-5 w-5" />,
        completed: false
      },
      {
        date: "Dec 12, 2024",
        time: "14:30",
        location: "Los Angeles, CA",
        status: "Arrived at Facility",
        description: "Package arrived at Los Angeles sorting facility",
        icon: <Package className="h-5 w-5" />,
        completed: true
      },
      {
        date: "Dec 11, 2024",
        time: "09:15",
        location: "San Francisco, CA",
        status: "Departed",
        description: "Departed from San Francisco international hub",
        icon: <Plane className="h-5 w-5" />,
        completed: true
      },
      {
        date: "Dec 10, 2024",
        time: "16:45",
        location: "Shanghai, China",
        status: "Picked Up",
        description: "Package picked up from origin and processed",
        icon: <CheckCircle className="h-5 w-5" />,
        completed: true
      }
    ]
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-royal-600 to-royal-800 text-white py-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Track Your Package</h1>
            <p className="text-xl text-gray-200 mb-8">Real-time GPS tracking with live updates every step of the way</p>

            {/* Enhanced Search Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <Input
                        type="text"
                        placeholder="Enter your tracking number (e.g., GT123456789)"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        className="bg-white text-gray-800 placeholder:text-gray-500 text-lg py-6 pl-12 border-0 shadow-lg"
                      />
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500" />
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 px-8 text-lg font-semibold shadow-lg"
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Advanced Package Tracking Technology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the future of logistics with our state-of-the-art tracking system powered by
                real-time GPS, AI-driven analytics, and seamless integration across global networks.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Image Side */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
                  alt="GPS tracking technology"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-royal-600/20 to-orange-500/20 rounded-2xl"></div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800">Live Tracking Active</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-800">Real-Time GPS Monitoring</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our advanced GPS tracking system provides precise location data updated every 15 minutes,
                  ensuring you always know exactly where your package is throughout its journey.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Satellite-Grade Precision</h4>
                      <p className="text-gray-600">Military-grade GPS accuracy within 3-meter radius</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Live Updates</h4>
                      <p className="text-gray-600">Automatic notifications for every milestone</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Interactive Maps</h4>
                      <p className="text-gray-600">Visual journey tracking with estimated arrival times</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Feature Set */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-6 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-800">AI-Powered Logistics Intelligence</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Leveraging artificial intelligence and machine learning, our system predicts potential delays,
                  optimizes routes in real-time, and provides proactive solutions to ensure on-time delivery.
                </p>

                <div className="bg-gradient-to-r from-royal-50 to-orange-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Smart Delivery Predictions</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-royal-600">99.2%</div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">4hrs</div>
                      <div className="text-sm text-gray-600">Avg. Prediction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-royal-600">98.7%</div>
                      <div className="text-sm text-gray-600">On-Time Delivery</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="AI logistics technology"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-2xl"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Smart Analytics</span>
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
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Global tracking network"
                      className="w-full h-32 object-cover rounded-xl opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent rounded-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Global Network Coverage</h3>
                  <p className="text-gray-600 mb-4">
                    Track packages across 120+ countries with seamless integration between carriers and logistics partners.
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
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Real-time analytics"
                      className="w-full h-32 object-cover rounded-xl opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/50 to-transparent rounded-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Clock className="h-12 w-12 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Real-Time Updates</h3>
                  <p className="text-gray-600 mb-4">
                    Receive instant notifications and updates every 15 minutes with precise location data and status changes.
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
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Advanced analytics"
                      className="w-full h-32 object-cover rounded-xl opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-600/50 to-transparent rounded-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CheckCircle className="h-12 w-12 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Predictive Analytics</h3>
                  <p className="text-gray-600 mb-4">
                    AI-powered predictions for delivery times, potential delays, and route optimizations in real-time.
                  </p>
                  <div className="text-2xl font-bold text-orange-600">99.2%</div>
                  <div className="text-sm text-gray-500">Accuracy Rate</div>
                </CardContent>
              </Card>
            </div>

            {/* Advanced Features Section */}
            <div className="mt-16 bg-gradient-to-r from-royal-50 to-orange-50 rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Advanced Tracking Features</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Experience next-generation logistics technology with features designed for modern supply chain management
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Package className="h-8 w-8 text-royal-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Package Insights</h4>
                  <p className="text-sm text-gray-600">Detailed package information, photos, and handling instructions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <MessageCircle className="h-8 w-8 text-royal-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Smart Notifications</h4>
                  <p className="text-sm text-gray-600">Proactive alerts via SMS, email, and push notifications</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Calendar className="h-8 w-8 text-royal-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Delivery Scheduling</h4>
                  <p className="text-sm text-gray-600">Flexible delivery windows and rescheduling options</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Download className="h-8 w-8 text-royal-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Digital Documentation</h4>
                  <p className="text-sm text-gray-600">Electronic receipts, invoices, and customs documentation</p>
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
                        <Badge className={`${getStatusColor(packageData.status)} border font-semibold`}>
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
                        <h2 className="text-2xl font-bold text-gray-900">Tracking: {packageData.trackingId}</h2>
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
                          <span className="font-semibold text-blue-600">{packageData.currentLocation}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600 flex items-center">
                            <Package className="h-4 w-4 mr-2" />
                            Service:
                          </span>
                          <span className="font-semibold">{packageData.service}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-gray-600 flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            Weight:
                          </span>
                          <span className="font-semibold">{packageData.weight}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600 flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            Est. Delivery:
                          </span>
                          <span className="font-semibold text-orange-600">{packageData.estimatedDelivery}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Destination:</span>
                          <span className="font-semibold">{packageData.destination}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-gray-600">Dimensions:</span>
                          <span className="font-semibold">{packageData.dimensions}</span>
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
                    <CardTitle className="text-2xl text-gray-900">Tracking Timeline</CardTitle>
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
                            <div className={`flex-shrink-0 p-3 rounded-full border-2 ${
                              event.completed 
                                ? 'bg-green-100 border-green-500 text-green-600' 
                                : 'bg-blue-100 border-blue-500 text-blue-600'
                            }`}>
                              {event.icon}
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                  <h4 className="font-semibold text-gray-900 text-lg">{event.status}</h4>
                                  <div className="text-sm text-gray-500">
                                    {event.date} at {event.time}
                                  </div>
                                </div>
                                <p className="text-gray-700 mb-2">{event.description}</p>
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
                      <MapPin className="h-6 w-6 text-royal-600" />
                      Live Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Enhanced Mock Map */}
                    <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 h-64 rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Map view" 
                        className="w-full h-full object-cover opacity-40"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                          <div className="w-12 h-12 bg-royal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                            <MapPin className="h-6 w-6 text-white" />
                          </div>
                          <p className="font-semibold text-gray-800">{packageData.currentLocation}</p>
                          <p className="text-sm text-gray-600">GPS Tracking Active</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                          <span className="font-semibold text-blue-800">Current Location</span>
                        </div>
                        <p className="text-sm text-blue-700">{packageData.currentLocation}</p>
                      </div>
                      
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          <span className="font-semibold text-green-800">Final Destination</span>
                        </div>
                        <p className="text-sm text-green-700">{packageData.destination}</p>
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
                    <Button variant="outline" className="w-full justify-start hover:bg-royal-50 hover:border-royal-300">
                      <Download className="h-4 w-4 mr-3" />
                      Download Receipt
                    </Button>
                    <Button variant="outline" className="w-full justify-start hover:bg-orange-50 hover:border-orange-300">
                      <RotateCcw className="h-4 w-4 mr-3" />
                      Schedule Redelivery
                    </Button>
                    <Button variant="outline" className="w-full justify-start hover:bg-red-50 hover:border-red-300">
                      <AlertCircle className="h-4 w-4 mr-3" />
                      Report Issue
                    </Button>
                  </CardContent>
                </Card>

                {/* Support */}
                <Card className="shadow-xl border-0 bg-gradient-to-br from-royal-600 to-royal-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="secondary" className="w-full justify-start bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <Phone className="h-4 w-4 mr-3" />
                      Call Support
                    </Button>
                    <Button variant="secondary" className="w-full justify-start bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <MessageCircle className="h-4 w-4 mr-3" />
                      Live Chat
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Demo Section */}
        {!packageData && !loading && (
          <>
            {/* Demo Introduction */}
            <section className="relative py-16 bg-gradient-to-r from-royal-600 to-royal-800 text-white mb-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
              <div className="relative max-w-4xl mx-auto text-center px-4">
                <h3 className="text-4xl font-bold mb-4">Experience GlobalTrack Demo</h3>
                <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                  Test our comprehensive tracking system with a live demo shipment. See how our technology
                  provides real-time updates, detailed analytics, and professional-grade logistics management.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <Plane className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Live GPS Tracking</h4>
                    <p className="text-gray-200">Real-time location updates with interactive maps</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <Clock className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Timeline History</h4>
                    <p className="text-gray-200">Detailed journey log with timestamps and locations</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <Package className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Package Details</h4>
                    <p className="text-gray-200">Comprehensive shipment information and status</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Demo CTA Card */}
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Package tracking demo"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-royal-600/80 to-transparent"></div>
                    <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                      <div className="text-white font-semibold">Demo Package</div>
                      <div className="text-white/80 text-sm">Shanghai → New York</div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-royal-100 rounded-full flex items-center justify-center mb-6">
                      <Package className="h-8 w-8 text-royal-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Try Live Demo Tracking</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Experience our complete tracking system with a sample shipment from Shanghai to New York.
                      See real-time updates, interactive maps, and detailed logistics information.
                    </p>

                    <div className="bg-royal-50 rounded-xl p-4 mb-6">
                      <div className="text-sm text-gray-600 mb-2">Demo Tracking Number:</div>
                      <div className="flex items-center justify-between bg-white rounded-lg p-3">
                        <code className="text-lg font-mono text-royal-600 font-bold">GT123456789</code>
                        <Badge className="bg-green-100 text-green-800">Active Demo</Badge>
                      </div>
                    </div>

                    <Button
                      onClick={() => {
                        setTrackingId("GT123456789");
                        setTimeout(() => handleSearch(new Event("submit") as any), 100);
                      }}
                      className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Start Demo Tracking
                      <Package className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-sm text-gray-500 mt-4">
                      * This is a demonstration of our tracking capabilities using simulated data
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
