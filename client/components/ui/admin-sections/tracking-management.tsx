import { useState } from "react";
import {
  Package,
  Plane,
  Ship,
  Truck,
  MapPin,
  Clock,
  CheckCircle,
  AlertTriangle,
  Search,
  Filter,
  Download,
  Plus,
  Edit,
  Eye,
  Trash2,
  MoreHorizontal,
  RefreshCw,
  Navigation,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

export function TrackingManagement() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isCreateShipmentOpen, setIsCreateShipmentOpen] = useState(false);
  const [selectedShipment, setSelectedShipment] = useState<any>(null);

  // Sample data
  const trackingStats = [
    {
      title: "Active Shipments",
      value: "3,421",
      change: "+8.2%",
      trend: "up",
      icon: <Package className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      title: "In Transit",
      value: "2,847",
      change: "+12.1%",
      trend: "up",
      icon: <Navigation className="h-6 w-6" />,
      color: "bg-orange-500",
    },
    {
      title: "Delivered Today",
      value: "156",
      change: "+5.3%",
      trend: "up",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "bg-green-500",
    },
    {
      title: "Delayed Shipments",
      value: "23",
      change: "-15.2%",
      trend: "down",
      icon: <AlertTriangle className="h-6 w-6" />,
      color: "bg-red-500",
    },
  ];

  const shipments = [
    {
      id: "GT240001",
      customer: "TechCorp Solutions",
      origin: "New York, NY",
      destination: "London, UK",
      service: "Air Freight",
      status: "in_transit",
      progress: 75,
      estimatedDelivery: "2024-12-18",
      actualWeight: "45.2 kg",
      dimensions: "120x80x60 cm",
      value: "$25,000",
      lastUpdate: "2024-12-15 14:30",
      currentLocation: "Frankfurt Hub",
    },
    {
      id: "GT240002",
      customer: "Global Manufacturing",
      origin: "Los Angeles, CA",
      destination: "Tokyo, Japan",
      service: "Ocean Freight",
      status: "processing",
      progress: 25,
      estimatedDelivery: "2024-12-28",
      actualWeight: "2,500 kg",
      dimensions: "Container 40ft",
      value: "$150,000",
      lastUpdate: "2024-12-15 10:15",
      currentLocation: "Port of Los Angeles",
    },
    {
      id: "GT240003",
      customer: "E-Commerce Plus",
      origin: "Chicago, IL",
      destination: "Miami, FL",
      service: "Ground Transport",
      status: "delivered",
      progress: 100,
      estimatedDelivery: "2024-12-14",
      actualWeight: "12.8 kg",
      dimensions: "60x40x30 cm",
      value: "$1,200",
      lastUpdate: "2024-12-14 16:45",
      currentLocation: "Delivered",
    },
    {
      id: "GT240004",
      customer: "Fashion Retailers",
      origin: "Atlanta, GA",
      destination: "São Paulo, Brazil",
      service: "Express Delivery",
      status: "delayed",
      progress: 60,
      estimatedDelivery: "2024-12-16",
      actualWeight: "8.5 kg",
      dimensions: "50x35x25 cm",
      value: "$800",
      lastUpdate: "2024-12-15 08:20",
      currentLocation: "Customs Hold - São Paulo",
    },
  ];

  const trackingEvents = [
    {
      id: "1",
      shipmentId: "GT240001",
      status: "Departed Frankfurt Hub",
      location: "Frankfurt, Germany",
      timestamp: "2024-12-15 14:30",
      description: "Package departed international sorting facility",
      icon: <Plane className="h-4 w-4" />,
    },
    {
      id: "2",
      shipmentId: "GT240001",
      status: "Arrived at Hub",
      location: "Frankfurt, Germany",
      timestamp: "2024-12-15 06:15",
      description: "Package arrived at sorting facility",
      icon: <MapPin className="h-4 w-4" />,
    },
    {
      id: "3",
      shipmentId: "GT240002",
      status: "Container Loaded",
      location: "Port of Los Angeles",
      timestamp: "2024-12-15 10:15",
      description: "Container loaded onto vessel MV Pacific Explorer",
      icon: <Ship className="h-4 w-4" />,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "processing":
        return <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>;
      case "in_transit":
        return <Badge className="bg-blue-100 text-blue-800">In Transit</Badge>;
      case "delivered":
        return <Badge className="bg-green-100 text-green-800">Delivered</Badge>;
      case "delayed":
        return <Badge className="bg-red-100 text-red-800">Delayed</Badge>;
      case "cancelled":
        return <Badge className="bg-gray-100 text-gray-800">Cancelled</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case "Air Freight":
        return <Plane className="h-4 w-4" />;
      case "Ocean Freight":
        return <Ship className="h-4 w-4" />;
      case "Ground Transport":
        return <Truck className="h-4 w-4" />;
      case "Express Delivery":
        return <Package className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const handleCreateShipment = () => {
    toast({
      title: "Shipment Created",
      description: "New shipment has been created and tracking number assigned.",
    });
    setIsCreateShipmentOpen(false);
  };

  const handleUpdateStatus = (shipmentId: string) => {
    toast({
      title: "Status Updated",
      description: `Shipment ${shipmentId} status has been updated.`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tracking Management</h1>
          <p className="text-gray-600">
            Monitor and manage all shipments and tracking information
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Sync Tracking
          </Button>
          <Button
            onClick={() => setIsCreateShipmentOpen(true)}
            className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Shipment
          </Button>
        </div>
      </div>

      {/* Tracking Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trackingStats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <span
                      className={`text-sm font-medium ${
                        stat.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">from last week</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <div className="text-white">{stat.icon}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="shipments" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="shipments">All Shipments</TabsTrigger>
          <TabsTrigger value="tracking">Live Tracking</TabsTrigger>
          <TabsTrigger value="locations">Location Management</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Shipments Tab */}
        <TabsContent value="shipments" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Shipment Management</CardTitle>
                <div className="flex space-x-2 mt-4 sm:mt-0">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search shipments..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="in_transit">In Transit</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="delayed">Delayed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    onClick={() => toast({
                      title: "Exporting Shipments",
                      description: "Shipment data is being exported to CSV format...",
                    })}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {shipments.map((shipment) => (
                  <div
                    key={shipment.id}
                    className="p-6 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedShipment(shipment)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-royal-100 to-orange-100 rounded-lg flex items-center justify-center">
                          {getServiceIcon(shipment.service)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{shipment.id}</h3>
                          <p className="text-sm text-gray-600">{shipment.customer}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(shipment.status)}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => setSelectedShipment(shipment)}>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleUpdateStatus(shipment.id)}>
                              <Edit className="h-4 w-4 mr-2" />
                              Update Status
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Navigation className="h-4 w-4 mr-2" />
                              Track Live
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-600">Route:</span>
                        <p className="font-medium">{shipment.origin} → {shipment.destination}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Service:</span>
                        <p className="font-medium">{shipment.service}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Est. Delivery:</span>
                        <p className="font-medium">{shipment.estimatedDelivery}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium">{shipment.progress}%</span>
                      </div>
                      <Progress value={shipment.progress} className="h-2" />
                      <p className="text-sm text-gray-600">
                        Current Location: {shipment.currentLocation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Live Tracking Tab */}
        <TabsContent value="tracking" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Tracking Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingEvents.map((event) => (
                    <div key={event.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                        {event.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-gray-900">{event.status}</h4>
                          <Badge variant="outline" className="text-xs">
                            {event.shipmentId}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{event.description}</p>
                        <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                          <MapPin className="h-3 w-3" />
                          <span>{event.location}</span>
                          <Clock className="h-3 w-3 ml-2" />
                          <span>{event.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>GPS Tracking Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive tracking map would be integrated here</p>
                    <p className="text-sm text-gray-500 mt-2">Real-time GPS tracking visualization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Delivery Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">On-Time Delivery</span>
                      <span className="text-sm font-medium">98.2%</span>
                    </div>
                    <Progress value={98.2} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Customer Satisfaction</span>
                      <span className="text-sm font-medium">96.5%</span>
                    </div>
                    <Progress value={96.5} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Average Transit Time</span>
                      <span className="text-sm font-medium">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Service Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Plane className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Air Freight</span>
                    </div>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Ship className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Ocean Freight</span>
                    </div>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-4 w-4 text-orange-600" />
                      <span className="text-sm">Ground Transport</span>
                    </div>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Package className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Express Delivery</span>
                    </div>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Location Management Tab */}
        <TabsContent value="locations" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Location Update Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Update Shipment Location</CardTitle>
                  <p className="text-sm text-gray-600">
                    Manually update the current location and status of shipments
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Shipment Selection */}
                  <div>
                    <Label htmlFor="shipment-select">Select Shipment</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose shipment to update" />
                      </SelectTrigger>
                      <SelectContent>
                        {shipments.map((shipment) => (
                          <SelectItem key={shipment.id} value={shipment.id}>
                            {shipment.id} - {shipment.customer}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Current Location Display */}
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-blue-900">Current Location</span>
                    </div>
                    <p className="text-blue-800">Frankfurt Hub, Germany</p>
                    <p className="text-sm text-blue-600">Last updated: 2024-12-15 14:30</p>
                  </div>

                  {/* Location Update Form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="new-location">New Location</Label>
                      <Input
                        id="new-location"
                        placeholder="e.g., London Heathrow Airport"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location-type">Location Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hub">Distribution Hub</SelectItem>
                          <SelectItem value="airport">Airport</SelectItem>
                          <SelectItem value="port">Seaport</SelectItem>
                          <SelectItem value="warehouse">Warehouse</SelectItem>
                          <SelectItem value="customs">Customs Office</SelectItem>
                          <SelectItem value="delivery">Delivery Center</SelectItem>
                          <SelectItem value="transit">In Transit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="US">United States</SelectItem>
                          <SelectItem value="UK">United Kingdom</SelectItem>
                          <SelectItem value="DE">Germany</SelectItem>
                          <SelectItem value="FR">France</SelectItem>
                          <SelectItem value="JP">Japan</SelectItem>
                          <SelectItem value="CN">China</SelectItem>
                          <SelectItem value="BR">Brazil</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="e.g., London" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="coordinates">GPS Coordinates (Optional)</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="Latitude (e.g., 51.4700)" />
                      <Input placeholder="Longitude (e.g., -0.4543)" />
                    </div>
                  </div>

                  {/* Status Update */}
                  <div>
                    <Label htmlFor="status-update">Update Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select new status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="departed">Departed from Location</SelectItem>
                        <SelectItem value="arrived">Arrived at Location</SelectItem>
                        <SelectItem value="processing">Processing at Location</SelectItem>
                        <SelectItem value="customs">Customs Clearance</SelectItem>
                        <SelectItem value="delayed">Delayed at Location</SelectItem>
                        <SelectItem value="out_for_delivery">Out for Delivery</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <Label htmlFor="location-notes">Additional Notes</Label>
                    <Textarea
                      id="location-notes"
                      placeholder="Add any additional information about the location update..."
                      rows={3}
                    />
                  </div>

                  {/* Estimated Times */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="departure-time">Estimated Departure</Label>
                      <Input type="datetime-local" id="departure-time" />
                    </div>
                    <div>
                      <Label htmlFor="arrival-time">Estimated Next Arrival</Label>
                      <Input type="datetime-local" id="arrival-time" />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button
                      className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
                      onClick={() => toast({
                        title: "Location Updated",
                        description: "Shipment location has been updated successfully.",
                      })}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Update Location
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => toast({
                        title: "Notification Sent",
                        description: "Customer has been notified of the location update.",
                      })}
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Notify Customer
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => toast({
                        title: "GPS Tracking",
                        description: "Real-time GPS tracking has been activated.",
                      })}
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Enable GPS
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Location History & Map */}
            <div className="space-y-6">
              {/* Recent Location Updates */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Recent Location Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trackingEvents.slice(0, 3).map((event) => (
                      <div key={event.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                          {event.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{event.status}</h4>
                          <p className="text-sm text-gray-600">{event.location}</p>
                          <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            <span>{event.timestamp}</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toast({
                            title: "Editing Location",
                            description: `Editing location update for ${event.shipmentId}...`,
                          })}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location Analytics */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Location Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Most Active Hub</span>
                      <span className="font-medium">Frankfurt Hub</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Average Transit Time</span>
                      <span className="font-medium">3.2 days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Delayed Shipments</span>
                      <span className="font-medium text-red-600">2.3%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">GPS Coverage</span>
                      <span className="font-medium text-green-600">98.7%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Location Actions */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => toast({
                      title: "Bulk Update",
                      description: "Opening bulk location update tool...",
                    })}
                  >
                    <Package className="h-4 w-4 mr-2" />
                    Bulk Location Update
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => toast({
                      title: "Route Optimization",
                      description: "Analyzing optimal routes for pending shipments...",
                    })}
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Optimize Routes
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => toast({
                      title: "Location Report",
                      description: "Generating location analytics report...",
                    })}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => toast({
                      title: "Hub Management",
                      description: "Opening distribution hub management...",
                    })}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Manage Hubs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Advanced Location Management */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Advanced Location Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Geofencing */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Geofencing & Alerts</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Airport Security Zones</p>
                        <p className="text-sm text-gray-600">Automatic notifications for restricted areas</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600">Active</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Customs Boundaries</p>
                        <p className="text-sm text-gray-600">Track customs clearance zones</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600">Active</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Weather Alerts</p>
                        <p className="text-sm text-gray-600">Monitor weather-related delays</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm text-yellow-600">Warning</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Templates */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Location Templates</h4>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto p-3"
                      onClick={() => toast({
                        title: "Template Applied",
                        description: "Standard hub routing template has been applied.",
                      })}
                    >
                      <div className="text-left">
                        <p className="font-medium">Standard Hub Routing</p>
                        <p className="text-sm text-gray-600">Common distribution center path</p>
                      </div>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto p-3"
                      onClick={() => toast({
                        title: "Template Applied",
                        description: "Express delivery route template has been applied.",
                      })}
                    >
                      <div className="text-left">
                        <p className="font-medium">Express Delivery Route</p>
                        <p className="text-sm text-gray-600">Direct routing for urgent shipments</p>
                      </div>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto p-3"
                      onClick={() => toast({
                        title: "Template Applied",
                        description: "International customs route template has been applied.",
                      })}
                    >
                      <div className="text-left">
                        <p className="font-medium">International Customs</p>
                        <p className="text-sm text-gray-600">Standard customs clearance path</p>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Create Shipment Modal */}
      <Dialog open={isCreateShipmentOpen} onOpenChange={setIsCreateShipmentOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create New Shipment</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customer">Customer</Label>
                <Input id="customer" placeholder="Customer name" />
              </div>
              <div>
                <Label htmlFor="service">Service Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="air">Air Freight</SelectItem>
                    <SelectItem value="ocean">Ocean Freight</SelectItem>
                    <SelectItem value="ground">Ground Transport</SelectItem>
                    <SelectItem value="express">Express Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="origin">Origin</Label>
                <Input id="origin" placeholder="Origin location" />
              </div>
              <div>
                <Label htmlFor="destination">Destination</Label>
                <Input id="destination" placeholder="Destination location" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input id="weight" type="number" placeholder="0.0" />
              </div>
              <div>
                <Label htmlFor="dimensions">Dimensions (cm)</Label>
                <Input id="dimensions" placeholder="L x W x H" />
              </div>
              <div>
                <Label htmlFor="value">Value ($)</Label>
                <Input id="value" type="number" placeholder="0.00" />
              </div>
            </div>
            <div>
              <Label htmlFor="notes">Special Instructions</Label>
              <Textarea id="notes" placeholder="Any special handling requirements..." />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsCreateShipmentOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateShipment}>Create Shipment</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Shipment Details Modal */}
      {selectedShipment && (
        <Dialog open={!!selectedShipment} onOpenChange={() => setSelectedShipment(null)}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Shipment Details - {selectedShipment.id}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Shipment Information</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">Customer:</span> {selectedShipment.customer}</div>
                    <div><span className="text-gray-600">Service:</span> {selectedShipment.service}</div>
                    <div><span className="text-gray-600">Status:</span> {getStatusBadge(selectedShipment.status)}</div>
                    <div><span className="text-gray-600">Weight:</span> {selectedShipment.actualWeight}</div>
                    <div><span className="text-gray-600">Dimensions:</span> {selectedShipment.dimensions}</div>
                    <div><span className="text-gray-600">Value:</span> {selectedShipment.value}</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Route & Timeline</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">Origin:</span> {selectedShipment.origin}</div>
                    <div><span className="text-gray-600">Destination:</span> {selectedShipment.destination}</div>
                    <div><span className="text-gray-600">Est. Delivery:</span> {selectedShipment.estimatedDelivery}</div>
                    <div><span className="text-gray-600">Current Location:</span> {selectedShipment.currentLocation}</div>
                    <div><span className="text-gray-600">Last Update:</span> {selectedShipment.lastUpdate}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Progress</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Delivery Progress</span>
                    <span className="text-sm font-medium">{selectedShipment.progress}%</span>
                  </div>
                  <Progress value={selectedShipment.progress} className="h-3" />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setSelectedShipment(null)}>
                Close
              </Button>
              <Button onClick={() => handleUpdateStatus(selectedShipment.id)}>
                Update Status
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
