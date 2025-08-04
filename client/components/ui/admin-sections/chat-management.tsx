import { useState } from "react";
import {
  MessageSquare,
  Users,
  Clock,
  Phone,
  Video,
  Star,
  TrendingUp,
  Filter,
  Search,
  Eye,
  UserCheck,
  AlertCircle,
  CheckCircle,
  MoreHorizontal,
  Send,
  Paperclip,
  Settings,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

export function ChatManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [newMessage, setNewMessage] = useState("");

  const chatStats = [
    {
      title: "Active Chats",
      value: "47",
      change: "+12%",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      title: "Avg Response Time",
      value: "1.2 min",
      change: "-15%",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-green-500",
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      icon: <Star className="h-6 w-6" />,
      color: "bg-yellow-500",
    },
    {
      title: "Resolution Rate",
      value: "94%",
      change: "+3%",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "bg-purple-500",
    },
  ];

  const agents = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah@globaltrack.com",
      status: "online",
      activeChats: 5,
      avgResponseTime: "45s",
      satisfaction: 4.9,
      totalChats: 127,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c3f2?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "2",
      name: "Mike Thompson",
      email: "mike@globaltrack.com",
      status: "online",
      activeChats: 3,
      avgResponseTime: "52s",
      satisfaction: 4.7,
      totalChats: 89,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "3",
      name: "Anna Davis",
      email: "anna@globaltrack.com",
      status: "busy",
      activeChats: 7,
      avgResponseTime: "1m 15s",
      satisfaction: 4.8,
      totalChats: 156,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "4",
      name: "James Wilson",
      email: "james@globaltrack.com",
      status: "away",
      activeChats: 0,
      avgResponseTime: "1m 30s",
      satisfaction: 4.6,
      totalChats: 94,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const activeChats = [
    {
      id: "1",
      customer: "Emily Rodriguez",
      customerEmail: "emily@example.com",
      agent: "Sarah Johnson",
      topic: "Shipment Tracking Issue",
      status: "active",
      priority: "high",
      startTime: "10:30 AM",
      duration: "5 min",
      lastMessage: "Can you please check the status of my shipment GT240001?",
      messageCount: 8,
    },
    {
      id: "2",
      customer: "David Wilson",
      customerEmail: "david@example.com",
      agent: "Mike Thompson",
      topic: "Payment Authorization Failed",
      status: "active",
      priority: "high",
      startTime: "10:15 AM",
      duration: "20 min",
      lastMessage:
        "The payment keeps getting declined even though the card is valid.",
      messageCount: 15,
    },
    {
      id: "3",
      customer: "Lisa Brown",
      customerEmail: "lisa@example.com",
      agent: "Anna Davis",
      topic: "Service Inquiry",
      status: "active",
      priority: "normal",
      startTime: "10:45 AM",
      duration: "3 min",
      lastMessage:
        "I need information about your international shipping rates.",
      messageCount: 4,
    },
    {
      id: "4",
      customer: "Robert Smith",
      customerEmail: "robert@example.com",
      agent: "Sarah Johnson",
      topic: "Account Registration Help",
      status: "waiting",
      priority: "low",
      startTime: "09:30 AM",
      duration: "45 min",
      lastMessage:
        "I'm having trouble completing the KYC verification process.",
      messageCount: 12,
    },
  ];

  const chatHistory = [
    {
      id: "1",
      customer: "John Martinez",
      agent: "Sarah Johnson",
      topic: "Delivery Delay Complaint",
      status: "resolved",
      priority: "high",
      startTime: "Dec 11, 2:30 PM",
      endTime: "Dec 11, 3:15 PM",
      duration: "45 min",
      satisfaction: 5,
      resolution: "Provided compensation and expedited shipping",
    },
    {
      id: "2",
      customer: "Maria Garcia",
      agent: "Mike Thompson",
      topic: "Billing Question",
      status: "resolved",
      priority: "normal",
      startTime: "Dec 11, 1:00 PM",
      endTime: "Dec 11, 1:20 PM",
      duration: "20 min",
      satisfaction: 4,
      resolution: "Explained billing cycle and charges",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-100 text-green-800";
      case "busy":
        return "bg-red-100 text-red-800";
      case "away":
        return "bg-yellow-100 text-yellow-800";
      case "active":
        return "bg-blue-100 text-blue-800";
      case "waiting":
        return "bg-orange-100 text-orange-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "normal":
        return "bg-blue-100 text-blue-800";
      case "low":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleJoinChat = (chatId: string) => {
    console.log("Joining chat:", chatId);
    const chat = activeChats.find((c) => c.id === chatId);
    setSelectedChat(chat);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Live Chat Support Management
          </h1>
          <p className="text-gray-600">
            Monitor and manage customer support conversations
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Analytics
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Chat Settings
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {chatStats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">
                      {stat.change}
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

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">
            Active Chats (
            {activeChats.filter((c) => c.status === "active").length})
          </TabsTrigger>
          <TabsTrigger value="agents">Agents ({agents.length})</TabsTrigger>
          <TabsTrigger value="history">Chat History</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          {/* Filters */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search chats by customer or topic..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-48">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priority</SelectItem>
                      <SelectItem value="high">High Priority</SelectItem>
                      <SelectItem value="normal">Normal Priority</SelectItem>
                      <SelectItem value="low">Low Priority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Chats List */}
          <div className="grid lg:grid-cols-2 gap-6">
            {activeChats.map((chat) => (
              <Card
                key={chat.id}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            chat.status === "active"
                              ? "bg-green-500"
                              : chat.status === "waiting"
                                ? "bg-orange-500"
                                : "bg-gray-500"
                          }`}
                        ></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {chat.customer}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {chat.customerEmail}
                        </p>
                        <p className="text-sm text-gray-500">
                          with {chat.agent}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <Badge className={getPriorityColor(chat.priority)}>
                        {chat.priority}
                      </Badge>
                      <Badge className={getStatusColor(chat.status)}>
                        {chat.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="font-medium text-gray-800">{chat.topic}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {chat.lastMessage}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Started: {chat.startTime}</span>
                    <span>Duration: {chat.duration}</span>
                    <span>{chat.messageCount} messages</span>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => handleJoinChat(chat.id)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Chat
                    </Button>
                    <Button variant="outline" size="sm">
                      <UserCheck className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Transfer Chat</DropdownMenuItem>
                        <DropdownMenuItem>Escalate to Manager</DropdownMenuItem>
                        <DropdownMenuItem>Add Note</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Close Chat
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="agents" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {agents.map((agent) => (
              <Card key={agent.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={agent.avatar} alt={agent.name} />
                        <AvatarFallback>
                          {agent.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                          agent.status === "online"
                            ? "bg-green-500"
                            : agent.status === "busy"
                              ? "bg-red-500"
                              : agent.status === "away"
                                ? "bg-yellow-500"
                                : "bg-gray-500"
                        }`}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {agent.name}
                      </h3>
                      <p className="text-sm text-gray-600">{agent.email}</p>
                      <Badge className={getStatusColor(agent.status)}>
                        {agent.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Active Chats</p>
                      <p className="text-lg font-semibold">
                        {agent.activeChats}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Response Time</p>
                      <p className="text-lg font-semibold">
                        {agent.avgResponseTime}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Satisfaction</p>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <p className="text-lg font-semibold">
                          {agent.satisfaction}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Chats</p>
                      <p className="text-lg font-semibold">
                        {agent.totalChats}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Video className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase">
                        Customer
                      </th>
                      <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase">
                        Agent
                      </th>
                      <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase">
                        Topic
                      </th>
                      <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase">
                        Duration
                      </th>
                      <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase">
                        Satisfaction
                      </th>
                      <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {chatHistory.map((chat) => (
                      <tr key={chat.id} className="hover:bg-gray-50">
                        <td className="py-4 px-6">
                          <div>
                            <p className="font-medium text-gray-900">
                              {chat.customer}
                            </p>
                            <p className="text-sm text-gray-600">
                              {chat.startTime}
                            </p>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <p className="text-gray-900">{chat.agent}</p>
                        </td>
                        <td className="py-4 px-6">
                          <div>
                            <p className="font-medium text-gray-900">
                              {chat.topic}
                            </p>
                            <Badge className={getPriorityColor(chat.priority)}>
                              {chat.priority}
                            </Badge>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <p className="text-gray-900">{chat.duration}</p>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            <span>{chat.satisfaction}/5</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <Badge className={getStatusColor(chat.status)}>
                            {chat.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-6">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Response Time Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <p className="text-gray-500">
                    Response time chart would be displayed here
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <p className="text-gray-500">
                    Satisfaction chart would be displayed here
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Chat View Modal */}
      {selectedChat && (
        <Dialog
          open={!!selectedChat}
          onOpenChange={() => setSelectedChat(null)}
        >
          <DialogContent className="max-w-4xl h-[600px]">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span>Chat with {selectedChat.customer}</span>
                <div className="flex space-x-2">
                  <Badge className={getPriorityColor(selectedChat.priority)}>
                    {selectedChat.priority}
                  </Badge>
                  <Badge className={getStatusColor(selectedChat.status)}>
                    {selectedChat.status}
                  </Badge>
                </div>
              </DialogTitle>
            </DialogHeader>

            <div className="flex h-[500px]">
              {/* Chat Messages */}
              <div className="flex-1 flex flex-col">
                <ScrollArea className="flex-1 p-4 border rounded-lg">
                  <div className="space-y-4">
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-xs">
                        <p className="text-sm">{selectedChat.lastMessage}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {selectedChat.startTime}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs">
                        <p className="text-sm">
                          I'll help you with that right away. Let me check the
                          status of your shipment.
                        </p>
                        <p className="text-xs text-blue-200 mt-1">10:35 AM</p>
                      </div>
                    </div>
                  </div>
                </ScrollArea>

                {/* Message Input */}
                <div className="mt-4 flex space-x-2">
                  <Textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your response..."
                    className="flex-1 min-h-[60px]"
                  />
                  <div className="flex flex-col space-y-2">
                    <Button size="sm" variant="outline">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button size="sm" onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Chat Info Sidebar */}
              <div className="w-80 ml-4 border-l pl-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Customer Info</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="text-gray-600">Name:</span>{" "}
                        {selectedChat.customer}
                      </p>
                      <p>
                        <span className="text-gray-600">Email:</span>{" "}
                        {selectedChat.customerEmail}
                      </p>
                      <p>
                        <span className="text-gray-600">Topic:</span>{" "}
                        {selectedChat.topic}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Chat Details</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="text-gray-600">Agent:</span>{" "}
                        {selectedChat.agent}
                      </p>
                      <p>
                        <span className="text-gray-600">Start Time:</span>{" "}
                        {selectedChat.startTime}
                      </p>
                      <p>
                        <span className="text-gray-600">Duration:</span>{" "}
                        {selectedChat.duration}
                      </p>
                      <p>
                        <span className="text-gray-600">Messages:</span>{" "}
                        {selectedChat.messageCount}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Quick Actions</h4>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                      >
                        <UserCheck className="h-4 w-4 mr-2" />
                        Transfer Chat
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                      >
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Escalate
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start text-red-600"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Close Chat
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
