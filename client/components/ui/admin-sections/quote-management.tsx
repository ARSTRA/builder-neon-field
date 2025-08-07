import { useState } from "react";
import {
  BarChart3,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  Download,
  Plus,
  Edit,
  Eye,
  Trash2,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  FileText,
  Send,
  Calculator,
  Package,
  Truck,
  Ship,
  Plane,
  Calendar,
  User,
  Globe,
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
import { useToast } from "@/hooks/use-toast";

export function QuoteManagement() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedQuote, setSelectedQuote] = useState<any>(null);
  const [isEditQuoteOpen, setIsEditQuoteOpen] = useState(false);

  // Sample data for quotes
  const quoteStats = [
    {
      title: "Pending Quotes",
      value: "42",
      change: "+8.2%",
      trend: "up",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-yellow-500",
    },
    {
      title: "Accepted Today",
      value: "18",
      change: "+15.3%",
      trend: "up",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "bg-green-500",
    },
    {
      title: "Total Quote Value",
      value: "$847K",
      change: "+22.1%",
      trend: "up",
      icon: <DollarSign className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      title: "Conversion Rate",
      value: "73.2%",
      change: "+5.8%",
      trend: "up",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-purple-500",
    },
  ];

  const quotes = [
    {
      id: "QT240001",
      customer: "TechCorp Solutions",
      company: "TechCorp Inc.",
      email: "procurement@techcorp.com",
      phone: "+1 (555) 123-4567",
      requestDate: "2024-12-15",
      expiryDate: "2024-12-22",
      status: "pending",
      priority: "high",
      service: "Air Freight",
      origin: "New York, NY",
      destination: "London, UK",
      weight: "450 kg",
      dimensions: "120x80x60 cm",
      value: "$25,000",
      estimatedCost: "$3,200",
      notes: "Urgent delivery required for product launch. Temperature-controlled cargo.",
      validUntil: "2024-12-22",
    },
    {
      id: "QT240002",
      customer: "Global Manufacturing",
      company: "Global Mfg Ltd.",
      email: "logistics@globalmfg.com",
      phone: "+1 (555) 987-6543",
      requestDate: "2024-12-14",
      expiryDate: "2024-12-28",
      status: "accepted",
      priority: "medium",
      service: "Ocean Freight",
      origin: "Los Angeles, CA",
      destination: "Tokyo, Japan",
      weight: "2,500 kg",
      dimensions: "Container 40ft",
      value: "$150,000",
      estimatedCost: "$8,500",
      notes: "Regular shipment, standard handling required.",
      validUntil: "2024-12-28",
    },
    {
      id: "QT240003",
      customer: "Fashion Retailers",
      company: "Fashion Plus LLC",
      email: "shipping@fashionplus.com",
      phone: "+1 (555) 456-7890",
      requestDate: "2024-12-13",
      expiryDate: "2024-12-20",
      status: "declined",
      priority: "low",
      service: "Ground Transport",
      origin: "Atlanta, GA",
      destination: "Miami, FL",
      weight: "150 kg",
      dimensions: "80x60x40 cm",
      value: "$8,000",
      estimatedCost: "$450",
      notes: "Budget constraints, looking for alternative options.",
      validUntil: "2024-12-20",
    },
    {
      id: "QT240004",
      customer: "E-Commerce Plus",
      company: "E-Commerce Solutions",
      email: "quotes@ecommerceplus.com",
      phone: "+1 (555) 321-0987",
      requestDate: "2024-12-15",
      expiryDate: "2024-12-25",
      status: "under_review",
      priority: "urgent",
      service: "Express Delivery",
      origin: "Chicago, IL",
      destination: "São Paulo, Brazil",
      weight: "85 kg",
      dimensions: "60x40x30 cm",
      value: "$12,000",
      estimatedCost: "$1,200",
      notes: "International express delivery with customs clearance.",
      validUntil: "2024-12-25",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "accepted":
        return <Badge className="bg-green-100 text-green-800">Accepted</Badge>;
      case "declined":
        return <Badge className="bg-red-100 text-red-800">Declined</Badge>;
      case "under_review":
        return <Badge className="bg-blue-100 text-blue-800">Under Review</Badge>;
      case "expired":
        return <Badge className="bg-gray-100 text-gray-800">Expired</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "urgent":
        return <Badge className="bg-red-100 text-red-800">Urgent</Badge>;
      case "high":
        return <Badge className="bg-orange-100 text-orange-800">High</Badge>;
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>;
      case "low":
        return <Badge className="bg-green-100 text-green-800">Low</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{priority}</Badge>;
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

  const handleAcceptQuote = (quoteId: string) => {
    toast({
      title: "Quote Accepted",
      description: `Quote ${quoteId} has been accepted and customer will be notified.`,
    });
  };

  const handleDeclineQuote = (quoteId: string) => {
    toast({
      title: "Quote Declined",
      description: `Quote ${quoteId} has been declined with reason sent to customer.`,
    });
  };

  const handleEditQuote = (quote: any) => {
    setSelectedQuote(quote);
    setIsEditQuoteOpen(true);
  };

  const handleSaveQuote = () => {
    toast({
      title: "Quote Updated",
      description: "Quote has been updated and customer will be notified of changes.",
    });
    setIsEditQuoteOpen(false);
    setSelectedQuote(null);
  };

  const handleSendQuote = (quoteId: string) => {
    toast({
      title: "Quote Sent",
      description: `Updated quote ${quoteId} has been sent to the customer.`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quote Management</h1>
          <p className="text-gray-600">
            Manage shipping quotes, pricing, and customer negotiations
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Quotes
          </Button>
          <Button
            onClick={() => setIsEditQuoteOpen(true)}
            className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Quote
          </Button>
        </div>
      </div>

      {/* Quote Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quoteStats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 mr-1 text-red-500" />
                    )}
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
      <Tabs defaultValue="quotes" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="quotes">All Quotes</TabsTrigger>
          <TabsTrigger value="pricing">Pricing Rules</TabsTrigger>
          <TabsTrigger value="templates">Quote Templates</TabsTrigger>
        </TabsList>

        {/* Quotes Tab */}
        <TabsContent value="quotes" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Quote Requests</CardTitle>
                <div className="flex space-x-2 mt-4 sm:mt-0">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search quotes..."
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
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="accepted">Accepted</SelectItem>
                      <SelectItem value="declined">Declined</SelectItem>
                      <SelectItem value="under_review">Under Review</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {quotes.map((quote) => (
                  <div
                    key={quote.id}
                    className="p-6 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-royal-100 to-orange-100 rounded-lg flex items-center justify-center">
                          {getServiceIcon(quote.service)}
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <h3 className="font-semibold text-gray-900">{quote.id}</h3>
                            {getStatusBadge(quote.status)}
                            {getPriorityBadge(quote.priority)}
                          </div>
                          <p className="text-sm text-gray-600">{quote.customer}</p>
                          <p className="text-sm text-gray-500">{quote.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-right mr-4">
                          <p className="text-2xl font-bold text-royal-600">{quote.estimatedCost}</p>
                          <p className="text-sm text-gray-500">Estimated Cost</p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => setSelectedQuote(quote)}>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleEditQuote(quote)}>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Quote
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleSendQuote(quote.id)}>
                              <Send className="h-4 w-4 mr-2" />
                              Send Quote
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAcceptQuote(quote.id)}>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Accept
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDeclineQuote(quote.id)}>
                              <XCircle className="h-4 w-4 mr-2" />
                              Decline
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-600">Service:</span>
                        <p className="font-medium">{quote.service}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Route:</span>
                        <p className="font-medium">{quote.origin} → {quote.destination}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Weight:</span>
                        <p className="font-medium">{quote.weight}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Valid Until:</span>
                        <p className="font-medium">{quote.validUntil}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">{quote.notes}</p>
                      <div className="flex space-x-2">
                        {quote.status === "pending" && (
                          <>
                            <Button
                              size="sm"
                              onClick={() => handleAcceptQuote(quote.id)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Accept
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDeclineQuote(quote.id)}
                              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                            >
                              <XCircle className="h-4 w-4 mr-1" />
                              Decline
                            </Button>
                          </>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditQuote(quote)}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pricing Rules Tab */}
        <TabsContent value="pricing" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Pricing Rules & Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Base Pricing Rules</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <span>Air Freight (per kg)</span>
                      <span className="font-medium">$12.50</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <span>Ocean Freight (per kg)</span>
                      <span className="font-medium">$2.80</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <span>Ground Transport (per kg)</span>
                      <span className="font-medium">$1.50</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <span>Express Delivery (per kg)</span>
                      <span className="font-medium">$25.00</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Price Calculator</h4>
                  <div className="space-y-3">
                    <div>
                      <Label>Service Type</Label>
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
                    <div>
                      <Label>Weight (kg)</Label>
                      <Input type="number" placeholder="Enter weight" />
                    </div>
                    <div>
                      <Label>Distance (km)</Label>
                      <Input type="number" placeholder="Enter distance" />
                    </div>
                    <Button className="w-full">
                      <Calculator className="h-4 w-4 mr-2" />
                      Calculate Price
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Quote Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2">Standard Air Freight</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Template for regular air freight shipments
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Use Template
                  </Button>
                </div>
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2">Express Delivery</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Template for urgent express deliveries
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Use Template
                  </Button>
                </div>
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2">Bulk Ocean Freight</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Template for large ocean freight shipments
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Use Template
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Edit Quote Modal */}
      <Dialog open={isEditQuoteOpen} onOpenChange={setIsEditQuoteOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>
              {selectedQuote ? `Edit Quote ${selectedQuote.id}` : "Create New Quote"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customer-name">Customer Name</Label>
                <Input 
                  id="customer-name" 
                  defaultValue={selectedQuote?.customer} 
                  placeholder="Customer name" 
                />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input 
                  id="company" 
                  defaultValue={selectedQuote?.company} 
                  placeholder="Company name" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="service-type">Service Type</Label>
                <Select defaultValue={selectedQuote?.service}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Air Freight">Air Freight</SelectItem>
                    <SelectItem value="Ocean Freight">Ocean Freight</SelectItem>
                    <SelectItem value="Ground Transport">Ground Transport</SelectItem>
                    <SelectItem value="Express Delivery">Express Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select defaultValue={selectedQuote?.priority}>
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
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="origin">Origin</Label>
                <Input 
                  id="origin" 
                  defaultValue={selectedQuote?.origin} 
                  placeholder="Origin location" 
                />
              </div>
              <div>
                <Label htmlFor="destination">Destination</Label>
                <Input 
                  id="destination" 
                  defaultValue={selectedQuote?.destination} 
                  placeholder="Destination location" 
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="weight">Weight</Label>
                <Input 
                  id="weight" 
                  defaultValue={selectedQuote?.weight} 
                  placeholder="Weight" 
                />
              </div>
              <div>
                <Label htmlFor="dimensions">Dimensions</Label>
                <Input 
                  id="dimensions" 
                  defaultValue={selectedQuote?.dimensions} 
                  placeholder="L x W x H" 
                />
              </div>
              <div>
                <Label htmlFor="estimated-cost">Estimated Cost</Label>
                <Input 
                  id="estimated-cost" 
                  defaultValue={selectedQuote?.estimatedCost} 
                  placeholder="$0.00" 
                />
              </div>
            </div>

            <div>
              <Label htmlFor="quote-notes">Notes</Label>
              <Textarea 
                id="quote-notes" 
                defaultValue={selectedQuote?.notes} 
                placeholder="Additional notes and requirements..." 
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="valid-until">Valid Until</Label>
                <Input 
                  id="valid-until" 
                  type="date" 
                  defaultValue={selectedQuote?.validUntil} 
                />
              </div>
              <div>
                <Label htmlFor="quote-status">Status</Label>
                <Select defaultValue={selectedQuote?.status}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="under_review">Under Review</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="declined">Declined</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={() => setIsEditQuoteOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveQuote}>
              Save Quote
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Quote Details Modal */}
      {selectedQuote && !isEditQuoteOpen && (
        <Dialog open={!!selectedQuote} onOpenChange={() => setSelectedQuote(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Quote Details - {selectedQuote.id}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Customer Information</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">Name:</span> {selectedQuote.customer}</div>
                    <div><span className="text-gray-600">Company:</span> {selectedQuote.company}</div>
                    <div><span className="text-gray-600">Email:</span> {selectedQuote.email}</div>
                    <div><span className="text-gray-600">Phone:</span> {selectedQuote.phone}</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Shipment Details</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">Service:</span> {selectedQuote.service}</div>
                    <div><span className="text-gray-600">Weight:</span> {selectedQuote.weight}</div>
                    <div><span className="text-gray-600">Dimensions:</span> {selectedQuote.dimensions}</div>
                    <div><span className="text-gray-600">Value:</span> {selectedQuote.value}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Route & Pricing</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="text-gray-600">Origin:</span> {selectedQuote.origin}</div>
                  <div><span className="text-gray-600">Destination:</span> {selectedQuote.destination}</div>
                  <div><span className="text-gray-600">Estimated Cost:</span> <span className="font-bold text-royal-600">{selectedQuote.estimatedCost}</span></div>
                  <div><span className="text-gray-600">Valid Until:</span> {selectedQuote.validUntil}</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Status & Priority</h4>
                <div className="flex space-x-4">
                  {getStatusBadge(selectedQuote.status)}
                  {getPriorityBadge(selectedQuote.priority)}
                </div>
              </div>

              {selectedQuote.notes && (
                <div>
                  <h4 className="font-semibold mb-2">Notes</h4>
                  <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">{selectedQuote.notes}</p>
                </div>
              )}
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setSelectedQuote(null)}>
                Close
              </Button>
              <Button onClick={() => handleEditQuote(selectedQuote)}>
                Edit Quote
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
