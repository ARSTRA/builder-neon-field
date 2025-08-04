import { useState } from "react";
import {
  Package,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  MapPin,
  Calendar,
  Truck,
  Ship,
  Plane,
  CheckCircle,
  AlertCircle,
  Clock,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ShipmentsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("all");

  const shipments = [
    {
      id: "GT240001",
      recipient: "John Smith",
      destination: "New York, NY",
      origin: "Los Angeles, CA",
      status: "in_transit",
      type: "ground",
      date: "2024-12-10",
      deliveryDate: "2024-12-15",
      value: "$1,250.00",
      weight: "25 lbs",
      progress: 75,
      description: "Electronics shipment",
    },
    {
      id: "GT240002",
      recipient: "Sarah Johnson",
      destination: "London, UK",
      origin: "Chicago, IL",
      status: "delivered",
      type: "air",
      date: "2024-12-08",
      deliveryDate: "2024-12-10",
      value: "$3,890.00",
      weight: "10 lbs",
      progress: 100,
      description: "Medical supplies",
    },
    {
      id: "GT240003",
      recipient: "Mike Chen",
      destination: "Singapore",
      origin: "Seattle, WA",
      status: "customs",
      type: "ocean",
      date: "2024-12-05",
      deliveryDate: "2024-12-20",
      value: "$5,200.00",
      weight: "500 lbs",
      progress: 60,
      description: "Machinery parts",
    },
    {
      id: "GT240004",
      recipient: "Emma Wilson",
      destination: "Toronto, CA",
      origin: "Miami, FL",
      status: "pending",
      type: "ground",
      date: "2024-12-12",
      deliveryDate: "2024-12-18",
      value: "$890.00",
      weight: "15 lbs",
      progress: 0,
      description: "Fashion accessories",
    },
    {
      id: "GT240005",
      recipient: "David Rodriguez",
      destination: "Mexico City, MX",
      origin: "San Diego, CA",
      status: "processing",
      type: "ground",
      date: "2024-12-11",
      deliveryDate: "2024-12-16",
      value: "$2,340.00",
      weight: "75 lbs",
      progress: 25,
      description: "Auto parts",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "in_transit":
        return <Truck className="h-4 w-4 text-blue-600" />;
      case "customs":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case "processing":
        return <Clock className="h-4 w-4 text-orange-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
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
      case "processing":
        return "bg-orange-100 text-orange-800";
      case "pending":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "air":
        return <Plane className="h-4 w-4" />;
      case "ocean":
        return <Ship className="h-4 w-4" />;
      case "ground":
        return <Truck className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const filteredShipments = shipments.filter((shipment) => {
    const matchesSearch =
      shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.destination.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || shipment.status === statusFilter;
    const matchesTab = selectedTab === "all" || shipment.status === selectedTab;

    return matchesSearch && matchesStatus && matchesTab;
  });

  const getTabCount = (status: string) => {
    if (status === "all") return shipments.length;
    return shipments.filter((s) => s.status === status).length;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Shipments</h1>
          <p className="text-gray-600">Manage and track all your shipments</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Button variant="outline" className="flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600">
                <Plus className="h-4 w-4 mr-2" />
                New Shipment
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Shipment</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="recipient">Recipient Name</Label>
                    <Input id="recipient" placeholder="Enter recipient name" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter phone number" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="origin">Origin</Label>
                    <Input id="origin" placeholder="Pickup location" />
                  </div>
                  <div>
                    <Label htmlFor="destination">Destination</Label>
                    <Input id="destination" placeholder="Delivery address" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="weight">Weight (lbs)</Label>
                    <Input id="weight" type="number" placeholder="0" />
                  </div>
                  <div>
                    <Label htmlFor="value">Declared Value</Label>
                    <Input id="value" placeholder="$0.00" />
                  </div>
                  <div>
                    <Label htmlFor="type">Shipping Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ground">Ground</SelectItem>
                        <SelectItem value="air">Air Freight</SelectItem>
                        <SelectItem value="ocean">Ocean Freight</SelectItem>
                        <SelectItem value="express">Express</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Package Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the contents..."
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsCreateModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-royal-600 to-orange-500"
                  >
                    Create Shipment
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by ID, recipient, or destination..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="in_transit">In Transit</SelectItem>
                  <SelectItem value="customs">Customs</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="w-full justify-start">
          <TabsTrigger value="all">All ({getTabCount("all")})</TabsTrigger>
          <TabsTrigger value="pending">
            Pending ({getTabCount("pending")})
          </TabsTrigger>
          <TabsTrigger value="processing">
            Processing ({getTabCount("processing")})
          </TabsTrigger>
          <TabsTrigger value="in_transit">
            In Transit ({getTabCount("in_transit")})
          </TabsTrigger>
          <TabsTrigger value="delivered">
            Delivered ({getTabCount("delivered")})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="space-y-1">
                {filteredShipments.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No shipments found
                    </h3>
                    <p className="text-gray-500">
                      Try adjusting your search or filters
                    </p>
                  </div>
                ) : (
                  filteredShipments.map((shipment, index) => (
                    <div
                      key={shipment.id}
                      className={`p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                        index === filteredShipments.length - 1
                          ? "border-b-0"
                          : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gray-100 rounded-lg">
                            {getTypeIcon(shipment.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-semibold text-gray-900 text-lg">
                                {shipment.id}
                              </h3>
                              <Badge
                                className={getStatusColor(shipment.status)}
                              >
                                {shipment.status.replace("_", " ")}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <p className="text-gray-500">Recipient</p>
                                <p className="font-medium">
                                  {shipment.recipient}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500">Route</p>
                                <p className="font-medium">
                                  {shipment.origin} → {shipment.destination}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500">Weight / Value</p>
                                <p className="font-medium">
                                  {shipment.weight} / {shipment.value}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500">Delivery Date</p>
                                <p className="font-medium">
                                  {shipment.deliveryDate}
                                </p>
                              </div>
                            </div>
                            <div className="mt-3">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm text-gray-600">
                                  Progress
                                </span>
                                <span className="text-sm font-medium">
                                  {shipment.progress}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-gradient-to-r from-royal-600 to-orange-500 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${shipment.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            title="View Details"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            title="Download Label"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit Shipment
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <MapPin className="h-4 w-4 mr-2" />
                                Track Package
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Calendar className="h-4 w-4 mr-2" />
                                Schedule Delivery
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
