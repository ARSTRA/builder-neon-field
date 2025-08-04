import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Package, MapPin, Clock, CheckCircle, Truck, Plane, Ship, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TrackingEvent {
  date: string;
  time: string;
  location: string;
  status: string;
  description: string;
  icon: React.ReactNode;
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
    estimatedDelivery: "Dec 15, 2024",
    service: "Express Air Freight",
    weight: "2.5 kg",
    dimensions: "30x20x15 cm",
    coordinates: { lat: 34.0522, lng: -118.2437 },
    events: [
      {
        date: "Dec 12, 2024",
        time: "14:30",
        location: "Los Angeles, CA",
        status: "In Transit",
        description: "Package arrived at Los Angeles sorting facility",
        icon: <Truck className="h-5 w-5" />
      },
      {
        date: "Dec 11, 2024",
        time: "09:15",
        location: "San Francisco, CA",
        status: "In Transit",
        description: "Departed from San Francisco hub",
        icon: <Plane className="h-5 w-5" />
      },
      {
        date: "Dec 10, 2024",
        time: "16:45",
        location: "Shanghai, China",
        status: "Picked Up",
        description: "Package picked up from origin",
        icon: <Package className="h-5 w-5" />
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
        return "bg-green-100 text-green-800";
      case "in_transit":
        return "bg-blue-100 text-blue-800";
      case "picked_up":
        return "bg-yellow-100 text-yellow-800";
      case "exception":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "in_transit":
        return <Truck className="h-5 w-5 text-blue-600" />;
      case "exception":
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Track Your Package</h1>
          <p className="text-xl text-gray-600">Enter your tracking number to get real-time updates</p>
        </div>

        {/* Search Form */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardContent className="p-6">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Enter tracking number (e.g., GT123456789)"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Button 
                type="submit" 
                disabled={loading}
                className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
              >
                {loading ? "Searching..." : "Track Package"}
              </Button>
            </form>
            {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-md text-red-700">
                {error}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Package Information */}
        {packageData && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Package Details */}
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {getStatusIcon(packageData.status)}
                    Tracking: {packageData.trackingId}
                    <Badge className={getStatusColor(packageData.status)}>
                      {packageData.status.replace("_", " ").toUpperCase()}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Shipment Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Service:</span>
                          <span className="font-medium">{packageData.service}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Weight:</span>
                          <span className="font-medium">{packageData.weight}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Dimensions:</span>
                          <span className="font-medium">{packageData.dimensions}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Delivery Information</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Origin:</span>
                          <span className="font-medium">{packageData.origin}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Destination:</span>
                          <span className="font-medium">{packageData.destination}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Est. Delivery:</span>
                          <span className="font-medium text-orange-600">{packageData.estimatedDelivery}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tracking Events */}
              <Card>
                <CardHeader>
                  <CardTitle>Tracking History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {packageData.events.map((event, index) => (
                      <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-b-0">
                        <div className="flex-shrink-0 p-2 bg-royal-100 rounded-full">
                          {event.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                            <h4 className="font-semibold text-gray-800">{event.status}</h4>
                            <div className="text-sm text-gray-600">
                              {event.date} at {event.time}
                            </div>
                          </div>
                          <p className="text-gray-600 mb-1">{event.description}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Section */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Current Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Mock Google Maps - In production, use actual Google Maps API */}
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-royal-600 mx-auto mb-2" />
                      <p className="text-gray-600 font-medium">{packageData.currentLocation}</p>
                      <p className="text-sm text-gray-500">Live GPS Tracking</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold text-blue-800">Current Location</span>
                      </div>
                      <p className="text-sm text-blue-700">{packageData.currentLocation}</p>
                    </div>
                    
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="font-semibold text-green-800">Destination</span>
                      </div>
                      <p className="text-sm text-green-700">{packageData.destination}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Actions */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Package className="h-4 w-4 mr-2" />
                    Download Receipt
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Clock className="h-4 w-4 mr-2" />
                    Schedule Redelivery
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Report Issue
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Demo Notice */}
        {!packageData && !loading && (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6 text-center">
              <Package className="h-12 w-12 text-royal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Try Demo Tracking</h3>
              <p className="text-gray-600 mb-4">
                Use tracking number <code className="bg-gray-100 px-2 py-1 rounded">GT123456789</code> to see a demo of our tracking system.
              </p>
              <Button
                onClick={() => {
                  setTrackingId("GT123456789");
                  setTimeout(() => handleSearch(new Event("submit") as any), 100);
                }}
                variant="outline"
                className="border-royal-600 text-royal-600 hover:bg-royal-600 hover:text-white"
              >
                Try Demo
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
