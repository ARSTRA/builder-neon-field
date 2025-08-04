import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  Package,
  MessageSquare,
  BarChart3,
  TrendingUp,
  DollarSign,
  MapPin,
  Bell,
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  LogOut,
  Menu,
  X,
  Globe,
  Truck,
  Ship,
  Plane,
  Clock,
  CheckCircle,
  AlertTriangle,
  Star,
  Mail,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { UserManagement } from "@/components/ui/admin-sections/user-management";
import { ChatManagement } from "@/components/ui/admin-sections/chat-management";

export default function Admin() {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Check if user is admin (simplified check)
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      // For demo purposes, auto-set admin status
      localStorage.setItem("isAdmin", "true");
    }
  }, []);

  const sidebarItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      color: "text-blue-600"
    },
    {
      id: "users",
      label: "User Management",
      icon: <Users className="h-5 w-5" />,
      color: "text-green-600"
    },
    {
      id: "payments",
      label: "Payment & Currency",
      icon: <CreditCard className="h-5 w-5" />,
      color: "text-purple-600"
    },
    {
      id: "tracking",
      label: "Tracking Management",
      icon: <Package className="h-5 w-5" />,
      color: "text-orange-600"
    },
    {
      id: "chat",
      label: "Live Chat Support",
      icon: <MessageSquare className="h-5 w-5" />,
      color: "text-pink-600"
    },
    {
      id: "contacts",
      label: "Contact Management",
      icon: <Mail className="h-5 w-5" />,
      color: "text-teal-600"
    },
    {
      id: "general",
      label: "General Settings",
      icon: <Settings className="h-5 w-5" />,
      color: "text-gray-600"
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  // Dashboard Analytics Data
  const dashboardStats = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+12.5%",
      icon: <Users className="h-6 w-6" />,
      color: "bg-blue-500",
      trend: "up"
    },
    {
      title: "Active Shipments",
      value: "3,421",
      change: "+8.2%",
      icon: <Package className="h-6 w-6" />,
      color: "bg-green-500",
      trend: "up"
    },
    {
      title: "Monthly Revenue",
      value: "$847,293",
      change: "+15.3%",
      icon: <DollarSign className="h-6 w-6" />,
      color: "bg-purple-500",
      trend: "up"
    },
    {
      title: "Support Tickets",
      value: "284",
      change: "-5.7%",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "bg-orange-500",
      trend: "down"
    }
  ];

  const recentUsers = [
    {
      id: "1",
      name: "John Smith",
      email: "john@example.com",
      status: "active",
      joinDate: "2024-12-10",
      shipments: 23,
      revenue: "$12,450"
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      status: "active",
      joinDate: "2024-12-08",
      shipments: 45,
      revenue: "$28,670"
    },
    {
      id: "3",
      name: "Mike Chen",
      email: "mike@example.com",
      status: "pending",
      joinDate: "2024-12-12",
      shipments: 0,
      revenue: "$0"
    }
  ];

  const activeChatSessions = [
    {
      id: "1",
      user: "Emily Rodriguez",
      agent: "Sarah Johnson",
      topic: "Shipment Tracking",
      duration: "5 min",
      status: "active",
      priority: "normal"
    },
    {
      id: "2",
      user: "David Wilson",
      agent: "Mike Thompson",
      topic: "Payment Issue",
      duration: "12 min",
      status: "active",
      priority: "high"
    },
    {
      id: "3",
      user: "Lisa Brown",
      agent: "Anna Davis",
      topic: "Service Inquiry",
      duration: "3 min",
      status: "active",
      priority: "low"
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with GlobalTrack today.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600">
            <Plus className="h-4 w-4 mr-2" />
            Quick Action
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className={`h-4 w-4 mr-1 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                    <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">from last month</span>
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

      {/* Recent Activity Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent User Registrations</CardTitle>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setCurrentView("users")}
            >
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                      {user.status}
                    </Badge>
                    <p className="text-sm text-gray-500 mt-1">{user.joinDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Chat Sessions */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Active Chat Sessions</CardTitle>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setCurrentView("chat")}
            >
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeChatSessions.map((session) => (
                <div key={session.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">{session.user}</p>
                      <p className="text-sm text-gray-600">{session.topic}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={
                      session.priority === 'high' ? 'bg-red-100 text-red-800' :
                      session.priority === 'normal' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }>
                      {session.priority}
                    </Badge>
                    <p className="text-sm text-gray-500 mt-1">{session.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Health & Performance */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>System Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Server Load</span>
                <span>72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Database Performance</span>
                <span>89%</span>
              </div>
              <Progress value={89} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>API Response Time</span>
                <span>95%</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Recent Shipments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Plane className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">GT240001</span>
                </div>
                <Badge className="bg-blue-100 text-blue-800">In Transit</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Ship className="h-4 w-4 text-green-600" />
                  <span className="text-sm">GT240002</span>
                </div>
                <Badge className="bg-green-100 text-green-800">Delivered</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Truck className="h-4 w-4 text-orange-600" />
                  <span className="text-sm">GT240003</span>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => setCurrentView("users")}
            >
              <Users className="h-4 w-4 mr-2" />
              Add New User
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => setCurrentView("tracking")}
            >
              <Package className="h-4 w-4 mr-2" />
              Create Shipment
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => setCurrentView("chat")}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              View Live Chats
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Mobile Menu */}
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              <div className="flex items-center space-x-2 ml-4 lg:ml-0">
                <div className="w-8 h-8 bg-gradient-to-r from-royal-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GT</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-royal-600">GlobalTrack</span>
                  <span className="text-lg text-orange-500 ml-1">Admin</span>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search users, shipments, or tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-royal-500"
                />
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  5
                </span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium text-gray-900">Admin User</p>
                      <p className="text-xs text-gray-500">admin@globaltrack.com</p>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex flex-col h-full pt-16 lg:pt-0">
            <nav className="flex-1 px-4 py-6 space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-all duration-200 group ${
                    currentView === item.id
                      ? "bg-gradient-to-r from-royal-100 to-orange-100 text-royal-700 border border-royal-200 shadow-sm"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <div className={`${currentView === item.id ? item.color : 'text-gray-400 group-hover:text-gray-600'} transition-colors`}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="p-6">
            {currentView === "dashboard" && renderDashboard()}
            {currentView !== "dashboard" && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {sidebarItems.find(item => item.id === currentView)?.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {sidebarItems.find(item => item.id === currentView)?.label}
                </h3>
                <p className="text-gray-600 mb-6">
                  Management interface for {currentView} is being loaded...
                </p>
                <Button
                  onClick={() => setCurrentView("dashboard")}
                  variant="outline"
                >
                  Back to Dashboard
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
