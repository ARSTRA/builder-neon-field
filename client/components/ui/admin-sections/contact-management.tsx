import { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
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
  Reply,
  Archive,
  Star,
  User,
  Calendar,
  MapPin,
  Save,
  X,
  Building,
  Globe,
  MessageCircle,
  PhoneCall,
  History,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactManagement() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [editingContactId, setEditingContactId] = useState<string | null>(null);
  const [editContactData, setEditContactData] = useState<any>({});
  const [isAddingContact, setIsAddingContact] = useState(false);
  const [contactHistory, setContactHistory] = useState<any[]>([]);
  const [isViewingHistory, setIsViewingHistory] = useState(false);

  // Sample data
  const contactStats = [
    {
      title: "Total Messages",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: <Mail className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      title: "Pending Responses",
      value: "43",
      change: "+8.2%",
      trend: "up",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-yellow-500",
    },
    {
      title: "Resolved Today",
      value: "156",
      change: "+15.3%",
      trend: "up",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "bg-green-500",
    },
    {
      title: "Average Response",
      value: "2.4h",
      change: "-12.1%",
      trend: "down",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "bg-purple-500",
    },
  ];

  const [contacts, setContacts] = useState([
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@techcorp.com",
      phone: "+1 (555) 123-4567",
      alternatePhone: "+1 (555) 123-4568",
      company: "TechCorp Solutions",
      jobTitle: "Logistics Manager",
      address: "123 Business Ave, Tech City, TC 12345",
      website: "https://techcorp.com",
      industry: "Technology",
      preferredContact: "email",
      subject: "Inquiry about Air Freight Services",
      message:
        "Hello, I'm interested in your air freight services for our upcoming shipment to Europe. Could you please provide a quote for 500kg of electronics equipment?",
      status: "open",
      priority: "high",
      type: "inquiry",
      createdAt: "2024-12-15 14:30",
      lastReply: "2024-12-15 15:45",
      assignedTo: "Sarah Johnson",
      tags: ["air-freight", "europe", "electronics"],
      notes: "Potential high-value client, expedite response",
      lastModified: "2024-12-15 16:00",
      modifiedBy: "Admin",
    },
    {
      id: "2",
      name: "Emily Rodriguez",
      email: "emily@globalmanufacturing.com",
      phone: "+1 (555) 987-6543",
      alternatePhone: "+1 (555) 987-6544",
      company: "Global Manufacturing Inc.",
      jobTitle: "Supply Chain Director",
      address: "456 Industrial Blvd, Manufacturing City, MC 54321",
      website: "https://globalmanufacturing.com",
      industry: "Manufacturing",
      preferredContact: "phone",
      subject: "Tracking Issue - GT240001",
      message:
        "I'm having trouble tracking my shipment GT240001. The last update was 3 days ago and I need to know the current status urgently.",
      status: "in_progress",
      priority: "urgent",
      type: "support",
      createdAt: "2024-12-15 10:15",
      lastReply: "2024-12-15 11:30",
      assignedTo: "Mike Thompson",
      tags: ["tracking", "urgent", "gt240001"],
      notes: "Regular customer, priority support required",
      lastModified: "2024-12-15 12:00",
      modifiedBy: "Mike Thompson",
    },
    {
      id: "3",
      name: "David Chen",
      email: "david.chen@retailplus.com",
      phone: "+1 (555) 456-7890",
      alternatePhone: "+1 (555) 456-7891",
      company: "Retail Plus",
      jobTitle: "Procurement Manager",
      address: "789 Commerce St, Retail City, RC 98765",
      website: "https://retailplus.com",
      industry: "Retail",
      preferredContact: "email",
      subject: "Bulk Shipping Quote Request",
      message:
        "We're looking for a long-term partnership for our monthly shipments from Asia to North America. Approximately 10 containers per month.",
      status: "closed",
      priority: "medium",
      type: "quote",
      createdAt: "2024-12-14 16:20",
      lastReply: "2024-12-15 09:15",
      assignedTo: "Anna Davis",
      tags: ["bulk-shipping", "long-term", "asia"],
      notes: "Contract signed, monthly recurring business",
      lastModified: "2024-12-15 10:00",
      modifiedBy: "Anna Davis",
    },
    {
      id: "4",
      name: "Lisa Thompson",
      email: "lisa@fashiontrends.com",
      phone: "+1 (555) 321-0987",
      alternatePhone: "+1 (555) 321-0988",
      company: "Fashion Trends Ltd.",
      jobTitle: "Operations Director",
      address: "321 Fashion Ave, Style City, SC 11111",
      website: "https://fashiontrends.com",
      industry: "Fashion",
      preferredContact: "phone",
      subject: "Complaint about Delayed Delivery",
      message:
        "Our shipment was supposed to arrive 3 days ago but it's still in transit. This is causing significant delays in our production schedule.",
      status: "escalated",
      priority: "urgent",
      type: "complaint",
      createdAt: "2024-12-14 08:45",
      lastReply: "2024-12-15 13:20",
      assignedTo: "Customer Success Team",
      tags: ["delay", "complaint", "production"],
      notes: "Provide compensation offer, escalate to management",
      lastModified: "2024-12-15 14:00",
      modifiedBy: "Customer Success Team",
    },
  ]);

  const templates = [
    {
      id: "1",
      name: "Quote Response",
      subject: "Quote for Your Shipping Requirements",
      content:
        "Thank you for your interest in GlobalTrack Logistics. We have prepared a competitive quote based on your requirements...",
    },
    {
      id: "2",
      name: "Tracking Update",
      subject: "Tracking Update for Your Shipment",
      content:
        "We wanted to provide you with an update on your shipment. Your package is currently...",
    },
    {
      id: "3",
      name: "Delivery Confirmation",
      subject: "Your Shipment Has Been Delivered",
      content:
        "Great news! Your shipment has been successfully delivered. Here are the delivery details...",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-blue-100 text-blue-800">Open</Badge>;
      case "in_progress":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
        );
      case "closed":
        return <Badge className="bg-green-100 text-green-800">Closed</Badge>;
      case "escalated":
        return <Badge className="bg-red-100 text-red-800">Escalated</Badge>;
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "inquiry":
        return <MessageSquare className="h-4 w-4" />;
      case "support":
        return <Phone className="h-4 w-4" />;
      case "quote":
        return <Mail className="h-4 w-4" />;
      case "complaint":
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Mail className="h-4 w-4" />;
    }
  };

  const handleReply = (contactId: string) => {
    toast({
      title: "Reply Sent",
      description: `Reply sent to contact ${contactId} successfully.`,
    });
  };

  const handleStatusUpdate = (contactId: string, newStatus: string) => {
    toast({
      title: "Status Updated",
      description: `Contact ${contactId} status updated to ${newStatus}.`,
    });
  };

  const handleAssign = (contactId: string, agent: string) => {
    toast({
      title: "Contact Assigned",
      description: `Contact ${contactId} assigned to ${agent}.`,
    });
  };

  const handleEditContact = (contact: any) => {
    setEditingContactId(contact.id);
    setEditContactData({ ...contact });
    setIsEditingContact(true);
  };

  const handleSaveContact = () => {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === editingContactId
          ? {
              ...editContactData,
              lastModified: new Date()
                .toISOString()
                .slice(0, 16)
                .replace("T", " "),
              modifiedBy: "Admin",
            }
          : contact,
      ),
    );
    setIsEditingContact(false);
    setEditingContactId(null);
    setEditContactData({});
    toast({
      title: "Contact Updated",
      description: "Contact information has been successfully updated.",
    });
  };

  const handleDeleteContact = (contactId: string) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== contactId));
    toast({
      title: "Contact Deleted",
      description: "Contact has been successfully deleted.",
      variant: "destructive",
    });
  };

  const handleAddContact = () => {
    const newContact = {
      id: Date.now().toString(),
      name: editContactData.name || "",
      email: editContactData.email || "",
      phone: editContactData.phone || "",
      alternatePhone: editContactData.alternatePhone || "",
      company: editContactData.company || "",
      jobTitle: editContactData.jobTitle || "",
      address: editContactData.address || "",
      website: editContactData.website || "",
      industry: editContactData.industry || "",
      preferredContact: editContactData.preferredContact || "email",
      subject: editContactData.subject || "",
      message: editContactData.message || "",
      status: "open",
      priority: editContactData.priority || "medium",
      type: editContactData.type || "inquiry",
      createdAt: new Date().toISOString().slice(0, 16).replace("T", " "),
      lastReply: "",
      assignedTo: "Unassigned",
      tags: [],
      notes: editContactData.notes || "",
      lastModified: new Date().toISOString().slice(0, 16).replace("T", " "),
      modifiedBy: "Admin",
    };
    setContacts((prev) => [newContact, ...prev]);
    setIsAddingContact(false);
    setEditContactData({});
    toast({
      title: "Contact Added",
      description: "New contact has been successfully added.",
    });
  };

  const handleViewHistory = (contact: any) => {
    // Mock history data - in real app, this would come from API
    const mockHistory = [
      {
        id: "1",
        action: "Contact Created",
        details: "Contact was initially created",
        timestamp: contact.createdAt,
        performedBy: "System",
      },
      {
        id: "2",
        action: "Email Updated",
        details: `Email changed from old@email.com to ${contact.email}`,
        timestamp: contact.lastModified,
        performedBy: contact.modifiedBy,
      },
      {
        id: "3",
        action: "Status Updated",
        details: `Status changed to ${contact.status}`,
        timestamp: contact.lastReply,
        performedBy: contact.assignedTo,
      },
    ];
    setContactHistory(mockHistory);
    setIsViewingHistory(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Contact Management
          </h1>
          <p className="text-gray-600">
            Manage customer inquiries, support tickets, and communications
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Button
            variant="outline"
            onClick={() =>
              toast({
                title: "Exporting Contact Report",
                description: "Contact data is being exported to CSV format...",
              })
            }
          >
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button
            onClick={() => setIsComposeOpen(true)}
            className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            Compose Message
          </Button>
        </div>
      </div>

      {/* Contact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactStats.map((stat, index) => (
          <Card
            key={index}
            className="border-0 shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <span
                      className={`text-sm font-medium ${
                        stat.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      from last week
                    </span>
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
      <Tabs defaultValue="messages" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Messages Tab */}
        <TabsContent value="messages" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Customer Messages</CardTitle>
                <div className="flex space-x-2 mt-4 sm:mt-0">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search messages..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="in_progress">In Progress</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                      <SelectItem value="escalated">Escalated</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="inquiry">Inquiry</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="quote">Quote</SelectItem>
                      <SelectItem value="complaint">Complaint</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="p-6 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedMessage(contact)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>
                            {contact.name
                              ? contact.name
                                  .split(" ")
                                  .map((n) => (n ? n[0] : ""))
                                  .join("")
                              : "C"}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-gray-900">
                              {contact.name}
                            </h3>
                            {getTypeIcon(contact.type)}
                          </div>
                          <p className="text-sm text-gray-600 flex items-center">
                            <Mail className="h-3 w-3 mr-1" />
                            {contact.email}
                          </p>
                          <p className="text-sm text-gray-600 flex items-center">
                            <Phone className="h-3 w-3 mr-1" />
                            {contact.phone}
                          </p>
                          <p className="text-sm text-gray-600 flex items-center">
                            <Building className="h-3 w-3 mr-1" />
                            {contact.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(contact.status)}
                        {getPriorityBadge(contact.priority)}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem
                              onClick={() => handleReply(contact.id)}
                            >
                              <Reply className="h-4 w-4 mr-2" />
                              Reply
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleEditContact(contact)}
                            >
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Contact
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleViewHistory(contact)}
                            >
                              <History className="h-4 w-4 mr-2" />
                              View History
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleAssign(contact.id, "New Agent")
                              }
                            >
                              <User className="h-4 w-4 mr-2" />
                              Assign
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleStatusUpdate(contact.id, "closed")
                              }
                            >
                              <Archive className="h-4 w-4 mr-2" />
                              Close
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleDeleteContact(contact.id)}
                              className="text-red-600"
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        {contact.subject}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {contact.message}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{contact.createdAt}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>Last reply: {contact.lastReply}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>Assigned to: {contact.assignedTo}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {contact.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contacts Tab */}
        <TabsContent value="contacts" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Contact Directory</CardTitle>
                <div className="flex space-x-2 mt-4 sm:mt-0">
                  <Button
                    variant="outline"
                    onClick={() =>
                      toast({
                        title: "Importing Contacts",
                        description:
                          "Contact import feature will be available soon...",
                      })
                    }
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Import
                  </Button>
                  <Button
                    onClick={() => {
                      setEditContactData({});
                      setIsAddingContact(true);
                    }}
                    className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Contact
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="p-6 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback className="text-lg">
                            {contact.name
                              ? contact.name
                                  .split(" ")
                                  .map((n) => (n ? n[0] : ""))
                                  .join("")
                              : "C"}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {contact.name}
                            </h3>
                            {contact.preferredContact === "email" && (
                              <Mail className="h-4 w-4 text-blue-500" />
                            )}
                            {contact.preferredContact === "phone" && (
                              <Phone className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                          <p className="text-gray-600 font-medium mb-1">
                            {contact.jobTitle} at {contact.company}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Mail className="h-3 w-3 mr-2" />
                              {contact.email}
                            </div>
                            <div className="flex items-center">
                              <Phone className="h-3 w-3 mr-2" />
                              {contact.phone}
                            </div>
                            {contact.alternatePhone && (
                              <div className="flex items-center">
                                <PhoneCall className="h-3 w-3 mr-2" />
                                {contact.alternatePhone} (Alt)
                              </div>
                            )}
                            {contact.website && (
                              <div className="flex items-center">
                                <Globe className="h-3 w-3 mr-2" />
                                <a
                                  href={contact.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  {contact.website.replace("https://", "")}
                                </a>
                              </div>
                            )}
                          </div>
                          {contact.address && (
                            <div className="flex items-start mt-2 text-sm text-gray-600">
                              <MapPin className="h-3 w-3 mr-2 mt-1 flex-shrink-0" />
                              {contact.address}
                            </div>
                          )}
                          {contact.notes && (
                            <div className="mt-2 p-2 bg-yellow-50 rounded text-sm text-gray-700">
                              <div className="flex items-start">
                                <AlertCircle className="h-3 w-3 mr-1 mt-0.5 text-yellow-600" />
                                <span className="font-medium">Notes:</span>
                              </div>
                              <p>{contact.notes}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-gray-100 text-gray-800">
                          {contact.industry}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem
                              onClick={() => handleEditContact(contact)}
                            >
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Contact
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleViewHistory(contact)}
                            >
                              <History className="h-4 w-4 mr-2" />
                              View History
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => setSelectedMessage(contact)}
                            >
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Send Message
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleDeleteContact(contact.id)}
                              className="text-red-600"
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete Contact
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 flex justify-between">
                      <span>Created: {contact.createdAt}</span>
                      <span>
                        Last Modified: {contact.lastModified} by{" "}
                        {contact.modifiedBy}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Email Templates</CardTitle>
                <Button className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Template
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">
                        {template.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            toast({
                              title: "Edit Template",
                              description: `Opening edit form for ${template.name}...`,
                            })
                          }
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            toast({
                              title: "Preview Template",
                              description: `Showing preview for ${template.name}...`,
                            })
                          }
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            toast({
                              title: "Delete Template",
                              description: `Are you sure you want to delete ${template.name}?`,
                              variant: "destructive",
                            })
                          }
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {template.subject}
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {template.content}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Response Time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-8 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-gray-900">
                      2.4 hours
                    </p>
                    <p className="text-sm text-gray-600">
                      Average Response Time
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <p className="font-semibold">First Response</p>
                      <p className="text-gray-600">1.2 hours</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold">Resolution Time</p>
                      <p className="text-gray-600">4.8 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Contact Types Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Support Requests</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">General Inquiries</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Quote Requests</span>
                    <span className="font-medium">20%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Complaints</span>
                    <span className="font-medium">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Contact Management Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Auto-Response Settings</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-response">Enable Auto-Response</Label>
                    <Switch id="auto-response" defaultChecked />
                  </div>
                  <div>
                    <Label htmlFor="response-time">
                      Target Response Time (hours)
                    </Label>
                    <Input
                      id="response-time"
                      type="number"
                      defaultValue="2"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Notification Settings</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-notifications">
                      Email Notifications
                    </Label>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="escalation-alerts">Escalation Alerts</Label>
                    <Switch id="escalation-alerts" defaultChecked />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Assignment Rules</h4>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="default-assignee">Default Assignee</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select default assignee" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Auto-Assign</SelectItem>
                        <SelectItem value="sarah">Sarah Johnson</SelectItem>
                        <SelectItem value="mike">Mike Thompson</SelectItem>
                        <SelectItem value="anna">Anna Davis</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600">
                Save Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Message Details Modal */}
      {selectedMessage && (
        <Dialog
          open={!!selectedMessage}
          onOpenChange={() => setSelectedMessage(null)}
        >
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Message Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>
                    {selectedMessage.name
                      ? selectedMessage.name
                          .split(" ")
                          .map((n: string) => (n ? n[0] : ""))
                          .join("")
                      : "M"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {selectedMessage.name}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 flex items-center">
                      <Mail className="h-3 w-3 mr-1" />
                      {selectedMessage.email}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {selectedMessage.phone}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Building className="h-3 w-3 mr-1" />
                      {selectedMessage.company}
                    </p>
                    {selectedMessage.jobTitle && (
                      <p className="text-sm text-gray-600">
                        {selectedMessage.jobTitle}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2">
                  {getStatusBadge(selectedMessage.status)}
                  {getPriorityBadge(selectedMessage.priority)}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">
                  {selectedMessage.subject}
                </h4>
                <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">
                  {selectedMessage.message}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Created:</span>
                  <p className="font-medium">{selectedMessage.createdAt}</p>
                </div>
                <div>
                  <span className="text-gray-600">Last Reply:</span>
                  <p className="font-medium">{selectedMessage.lastReply}</p>
                </div>
                <div>
                  <span className="text-gray-600">Assigned To:</span>
                  <p className="font-medium">{selectedMessage.assignedTo}</p>
                </div>
                <div>
                  <span className="text-gray-600">Type:</span>
                  <p className="font-medium capitalize">
                    {selectedMessage.type}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Quick Reply</h4>
                <Textarea
                  placeholder="Type your reply here..."
                  className="mb-2"
                />
                <div className="flex justify-between">
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Use template" />
                    </SelectTrigger>
                    <SelectContent>
                      {templates.map((template) => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button onClick={() => handleReply(selectedMessage.id)}>
                    Send Reply
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Compose Message Modal */}
      <Dialog open={isComposeOpen} onOpenChange={setIsComposeOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Compose New Message</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="recipient">To</Label>
              <Input id="recipient" placeholder="Email address" />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Message subject" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message..."
                rows={6}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsComposeOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsComposeOpen(false)}>
                Send Message
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Contact Modal */}
      <Dialog
        open={isEditingContact || isAddingContact}
        onOpenChange={() => {
          setIsEditingContact(false);
          setIsAddingContact(false);
          setEditContactData({});
          setEditingContactId(null);
        }}
      >
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {isAddingContact ? "Add New Contact" : "Edit Contact Information"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 border-b pb-2">
                Basic Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-name">Full Name *</Label>
                  <Input
                    id="edit-name"
                    value={editContactData.name || ""}
                    onChange={(e) =>
                      setEditContactData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <Label htmlFor="edit-job-title">Job Title</Label>
                  <Input
                    id="edit-job-title"
                    value={editContactData.jobTitle || ""}
                    onChange={(e) =>
                      setEditContactData((prev) => ({
                        ...prev,
                        jobTitle: e.target.value,
                      }))
                    }
                    placeholder="Logistics Manager"
                  />
                </div>
                <div>
                  <Label htmlFor="edit-email">Email Address *</Label>
                  <Input
                    id="edit-email"
                    type="email"
                    value={editContactData.email || ""}
                    onChange={(e) =>
                      setEditContactData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <Label htmlFor="edit-company">Company</Label>
                  <Input
                    id="edit-company"
                    value={editContactData.company || ""}
                    onChange={(e) =>
                      setEditContactData((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                    placeholder="TechCorp Solutions"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 border-b pb-2">
                Contact Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-phone">Primary Phone *</Label>
                  <Input
                    id="edit-phone"
                    value={editContactData.phone || ""}
                    onChange={(e) =>
                      setEditContactData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="edit-alt-phone">Alternate Phone</Label>
                  <Input
                    id="edit-alt-phone"
                    value={editContactData.alternatePhone || ""}
                    onChange={(e) =>
                      setEditContactData((prev) => ({
                        ...prev,
                        alternatePhone: e.target.value,
                      }))
                    }
                    placeholder="+1 (555) 123-4568"
                  />
                </div>
                <div>
                  <Label htmlFor="edit-website">Website</Label>
                  <Input
                    id="edit-website"
                    value={editContactData.website || ""}
                    onChange={(e) =>
                      setEditContactData((prev) => ({
                        ...prev,
                        website: e.target.value,
                      }))
                    }
                    placeholder="https://company.com"
                  />
                </div>
                <div>
                  <Label htmlFor="edit-preferred-contact">
                    Preferred Contact Method
                  </Label>
                  <Select
                    value={editContactData.preferredContact || "email"}
                    onValueChange={(value) =>
                      setEditContactData((prev) => ({
                        ...prev,
                        preferredContact: value,
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="both">Either</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="edit-address">Address</Label>
                <Textarea
                  id="edit-address"
                  value={editContactData.address || ""}
                  onChange={(e) =>
                    setEditContactData((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                  placeholder="123 Business Ave, City, State 12345"
                  rows={2}
                />
              </div>
            </div>

            {/* Business Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 border-b pb-2">
                Business Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-industry">Industry</Label>
                  <Select
                    value={editContactData.industry || ""}
                    onValueChange={(value) =>
                      setEditContactData((prev) => ({
                        ...prev,
                        industry: value,
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Manufacturing">
                        Manufacturing
                      </SelectItem>
                      <SelectItem value="Retail">Retail</SelectItem>
                      <SelectItem value="Fashion">Fashion</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Automotive">Automotive</SelectItem>
                      <SelectItem value="Food & Beverage">
                        Food & Beverage
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="edit-priority">Priority Level</Label>
                  <Select
                    value={editContactData.priority || "medium"}
                    onValueChange={(value) =>
                      setEditContactData((prev) => ({
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
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 border-b pb-2">
                Additional Information
              </h4>
              <div>
                <Label htmlFor="edit-notes">Internal Notes</Label>
                <Textarea
                  id="edit-notes"
                  value={editContactData.notes || ""}
                  onChange={(e) =>
                    setEditContactData((prev) => ({
                      ...prev,
                      notes: e.target.value,
                    }))
                  }
                  placeholder="Add any internal notes about this contact..."
                  rows={3}
                />
              </div>
              {isAddingContact && (
                <>
                  <div>
                    <Label htmlFor="edit-subject">Initial Subject</Label>
                    <Input
                      id="edit-subject"
                      value={editContactData.subject || ""}
                      onChange={(e) =>
                        setEditContactData((prev) => ({
                          ...prev,
                          subject: e.target.value,
                        }))
                      }
                      placeholder="Inquiry about services"
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-message">Initial Message</Label>
                    <Textarea
                      id="edit-message"
                      value={editContactData.message || ""}
                      onChange={(e) =>
                        setEditContactData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      placeholder="Initial message or inquiry..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-type">Contact Type</Label>
                    <Select
                      value={editContactData.type || "inquiry"}
                      onValueChange={(value) =>
                        setEditContactData((prev) => ({ ...prev, type: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inquiry">Inquiry</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="quote">Quote Request</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-end space-x-2 pt-4 border-t">
              <Button
                variant="outline"
                onClick={() => {
                  setIsEditingContact(false);
                  setIsAddingContact(false);
                  setEditContactData({});
                  setEditingContactId(null);
                }}
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button
                onClick={isAddingContact ? handleAddContact : handleSaveContact}
                className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
              >
                <Save className="h-4 w-4 mr-2" />
                {isAddingContact ? "Add Contact" : "Save Changes"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact History Modal */}
      <Dialog open={isViewingHistory} onOpenChange={setIsViewingHistory}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Contact History</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {contactHistory.map((entry) => (
              <div
                key={entry.id}
                className="border-l-2 border-gray-200 pl-4 pb-4"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-gray-900">
                    {entry.action}
                  </h4>
                  <span className="text-xs text-gray-500">
                    {entry.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{entry.details}</p>
                <p className="text-xs text-gray-500">by {entry.performedBy}</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
