import { useState } from "react";
import { 
  Search, 
  MapPin, 
  Package, 
  Truck, 
  Ship, 
  Plane, 
  CheckCircle, 
  Clock,
  AlertCircle,
  Calendar,
  Navigation,
  Info,
  Download,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function TrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [selectedShipment, setSelectedShipment] = useState<string | null>("GT240001");
  const [activeTab, setActiveTab] = useState("details");

  const recentlyTracked = [
    { id: "GT240001", status: "in_transit", destination: "New York, NY" },
    { id: "GT240002", status: "delivered", destination: "London, UK" },
    { id: "GT240003", status: "customs", destination: "Singapore" },
  ];

  const trackingData = {
    "GT240001": {
      id: "GT240001",
      status: "in_transit",
      recipient: "John Smith",
      origin: "Los Angeles, CA",
      destination: "New York, NY",
      currentLocation: "Denver, CO",
      expectedDelivery: "Dec 15, 2024",
      type: "ground",
      weight: "25 lbs",
      value: "$1,250.00",
      carrier: "GlobalTrack Express",
      service: "Ground Shipping",
      progress: 75,
      timeline: [
        {
          status: "Package picked up",
          location: "Los Angeles, CA",
          date: "Dec 10, 2024",
          time: "09:30 AM",
          completed: true,
          icon: <Package className="h-4 w-4" />
        },
        {
          status: "In transit",
          location: "Phoenix, AZ",
          date: "Dec 11, 2024",
          time: "02:15 PM",
          completed: true,
          icon: <Truck className="h-4 w-4" />
        },
        {
          status: "Arrived at sorting facility",
          location: "Denver, CO",
          date: "Dec 12, 2024",
          time: "11:45 AM",
          completed: true,
          current: true,
          icon: <MapPin className="h-4 w-4" />
        },
        {
          status: "Out for delivery",
          location: "New York, NY",
          date: "Dec 15, 2024",
          time: "Expected",
          completed: false,
          icon: <Truck className="h-4 w-4" />
        },
        {
          status: "Delivered",
          location: "New York, NY",
          date: "Dec 15, 2024",
          time: "Expected",
          completed: false,
          icon: <CheckCircle className="h-4 w-4" />
        }
      ]
    },
    "GT240002": {
      id: "GT240002",
      status: "delivered",
      recipient: "Sarah Johnson",
      origin: "Chicago, IL",
      destination: "London, UK",
      currentLocation: "London, UK",
      expectedDelivery: "Delivered",
      type: "air",
      weight: "10 lbs",
      value: "$3,890.00",
      carrier: "GlobalTrack Air",
      service: "International Air Freight",
      progress: 100,
      timeline: [
        {
          status: "Package picked up",
          location: "Chicago, IL",
          date: "Dec 8, 2024",
          time: "10:00 AM",
          completed: true,
          icon: <Package className="h-4 w-4" />
        },
        {
          status: "Flight departure",
          location: "Chicago, IL",
          date: "Dec 8, 2024",
          time: "06:30 PM",
          completed: true,
          icon: <Plane className="h-4 w-4" />
        },
        {
          status: "Customs clearance",
          location: "London, UK",
          date: "Dec 9, 2024",
          time: "08:15 AM",
          completed: true,
          icon: <CheckCircle className="h-4 w-4" />
        },
        {
          status: "Out for delivery",
          location: "London, UK",
          date: "Dec 10, 2024",
          time: "09:30 AM",
          completed: true,
          icon: <Truck className="h-4 w-4" />
        },
        {
          status: "Delivered",
          location: "London, UK",
          date: "Dec 10, 2024",
          time: "02:45 PM",
          completed: true,
          current: true,
          icon: <CheckCircle className="h-4 w-4" />
        }
      ]
    }
  };

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      setSelectedShipment(trackingNumber.toUpperCase());
      setTrackingNumber("");
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "in_transit":
        return <Truck className="h-5 w-5 text-blue-600" />;
      case "customs":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "in_transit":
        return "bg-blue-100 text-blue-800";
      case "customs":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "air":
        return <Plane className="h-5 w-5" />;
      case "ocean":
        return <Ship className="h-5 w-5" />;
      case "ground":
        return <Truck className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  const currentShipment = selectedShipment ? trackingData[selectedShipment as keyof typeof trackingData] : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Track Packages</h1>
        <p className="text-gray-600">Real-time tracking for all your shipments</p>
      </div>

      {/* Track New Package */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Search className="h-5 w-5 mr-2" />
            Track a Package
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Enter tracking number (e.g., GT240001)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
              />
            </div>
            <Button 
              onClick={handleTrack}
              className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
            >
              Track Package
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recently Tracked */}
      <Card>
        <CardHeader>
          <CardTitle>Recently Tracked</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentlyTracked.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedShipment(item.id)}
                className={`p-4 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${
                  selectedShipment === item.id ? "border-royal-600 bg-royal-50" : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{item.id}</span>
                  <Badge className={getStatusColor(item.status)}>
                    {item.status.replace("_", " ")}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">To: {item.destination}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tracking Details */}
      {currentShipment ? (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  {getTypeIcon(currentShipment.type)}
                </div>
                <div>
                  <CardTitle className="text-xl">{currentShipment.id}</CardTitle>
                  <p className="text-gray-600">{currentShipment.service}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(currentShipment.status)}
                <Badge className={getStatusColor(currentShipment.status)}>
                  {currentShipment.status.replace("_", " ")}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="details">Tracking Details</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="map">Map View</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-6">
                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Delivery Progress</span>
                    <span className="text-sm font-medium text-gray-900">{currentShipment.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-royal-600 to-orange-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${currentShipment.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Key Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-medium text-blue-900">Current Location</span>
                    </div>
                    <p className="text-blue-800">{currentShipment.currentLocation}</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-green-600 mr-2" />
                      <span className="font-medium text-green-900">Expected Delivery</span>
                    </div>
                    <p className="text-green-800">{currentShipment.expectedDelivery}</p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Package className="h-5 w-5 text-orange-600 mr-2" />
                      <span className="font-medium text-orange-900">Weight</span>
                    </div>
                    <p className="text-orange-800">{currentShipment.weight}</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Info className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="font-medium text-purple-900">Value</span>
                    </div>
                    <p className="text-purple-800">{currentShipment.value}</p>
                  </div>
                </div>

                {/* Shipment Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Shipment Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Recipient:</span>
                        <span className="font-medium">{currentShipment.recipient}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Carrier:</span>
                        <span className="font-medium">{currentShipment.carrier}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium">{currentShipment.service}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Route Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Origin:</span>
                        <span className="font-medium">{currentShipment.origin}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Destination:</span>
                        <span className="font-medium">{currentShipment.destination}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Current:</span>
                        <span className="font-medium">{currentShipment.currentLocation}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3 pt-4 border-t">
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Receipt
                  </Button>
                  <Button variant="outline">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Tracking
                  </Button>
                  <Button variant="outline">
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="timeline" className="space-y-4">
                <div className="relative">
                  {currentShipment.timeline.map((event, index) => (
                    <div key={index} className="relative flex items-start space-x-4 pb-6">
                      {/* Timeline line */}
                      {index < currentShipment.timeline.length - 1 && (
                        <div className="absolute left-6 top-10 w-0.5 h-16 bg-gray-200"></div>
                      )}
                      
                      {/* Icon */}
                      <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                        event.completed
                          ? event.current
                            ? "bg-blue-500 border-blue-500 text-white"
                            : "bg-green-500 border-green-500 text-white"
                          : "bg-gray-100 border-gray-300 text-gray-400"
                      }`}>
                        {event.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className={`p-4 rounded-lg border-l-4 ${
                          event.completed
                            ? event.current
                              ? "bg-blue-50 border-blue-500"
                              : "bg-green-50 border-green-500"
                            : "bg-gray-50 border-gray-300"
                        }`}>
                          <div className="flex items-center justify-between mb-1">
                            <h4 className={`font-semibold ${
                              event.completed ? "text-gray-900" : "text-gray-500"
                            }`}>
                              {event.status}
                            </h4>
                            {event.current && (
                              <Badge className="bg-blue-100 text-blue-800">Current</Badge>
                            )}
                          </div>
                          <p className={`text-sm ${
                            event.completed ? "text-gray-600" : "text-gray-400"
                          }`}>
                            {event.location}
                          </p>
                          <p className={`text-sm ${
                            event.completed ? "text-gray-500" : "text-gray-400"
                          }`}>
                            {event.date} at {event.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="map" className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Interactive map view is coming soon. This will show real-time location tracking on a world map.
                  </AlertDescription>
                </Alert>
                
                <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Interactive Map</h3>
                    <p className="text-gray-600">Real-time tracking map will be available here</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Current location: {currentShipment.currentLocation}
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="text-center py-12">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Package Selected</h3>
            <p className="text-gray-600">Enter a tracking number above or select a recently tracked package</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
