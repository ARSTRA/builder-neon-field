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
  Phone,
  ArrowLeftRight,
  Wallet,
  Receipt,
  Shield,
  Zap,
  RefreshCw,
  TrendingDown,
  Copy,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
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
import { UserManagement } from "@/components/ui/admin-sections/user-management";
import { ChatManagement } from "@/components/ui/admin-sections/chat-management";
import { useToast } from "@/hooks/use-toast";

export default function Admin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentView, setCurrentView] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Payment & Currency State
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [conversionAmount, setConversionAmount] = useState("100");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [exchangeRates, setExchangeRates] = useState({
    USD: { EUR: 0.85, GBP: 0.73, JPY: 110.0, CAD: 1.25, AUD: 1.35 },
    EUR: { USD: 1.18, GBP: 0.86, JPY: 129.5, CAD: 1.47, AUD: 1.59 },
    GBP: { USD: 1.37, EUR: 1.16, JPY: 150.8, CAD: 1.71, AUD: 1.85 },
  });
  const [isConverting, setIsConverting] = useState(false);

  useEffect(() => {
    // Check if user is admin
    const isAdmin = localStorage.getItem("isAdmin");
    const adminEmail = localStorage.getItem("adminEmail");

    if (!isAdmin || !adminEmail) {
      // Redirect to admin login if not authenticated
      navigate("/admin/login");
    }
  }, [navigate]);

  const sidebarItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      color: "text-blue-600",
    },
    {
      id: "users",
      label: "User Management",
      icon: <Users className="h-5 w-5" />,
      color: "text-green-600",
    },
    {
      id: "payments",
      label: "Payment & Currency",
      icon: <CreditCard className="h-5 w-5" />,
      color: "text-purple-600",
    },
    {
      id: "tracking",
      label: "Tracking Management",
      icon: <Package className="h-5 w-5" />,
      color: "text-orange-600",
    },
    {
      id: "chat",
      label: "Live Chat Support",
      icon: <MessageSquare className="h-5 w-5" />,
      color: "text-pink-600",
    },
    {
      id: "contacts",
      label: "Contact Management",
      icon: <Mail className="h-5 w-5" />,
      color: "text-teal-600",
    },
    {
      id: "general",
      label: "General Settings",
      icon: <Settings className="h-5 w-5" />,
      color: "text-gray-600",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("adminLoginTime");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out from admin portal.",
    });
    navigate("/admin/login");
  };

  const handleExportReport = () => {
    toast({
      title: "Exporting Report",
      description:
        "Your admin report is being generated and will be downloaded shortly.",
    });
    // Simulate report generation
    setTimeout(() => {
      toast({
        title: "Report Ready",
        description: "Admin report has been downloaded successfully.",
      });
    }, 2000);
  };

  const handleQuickAction = () => {
    toast({
      title: "Quick Action Menu",
      description: "Opening quick action panel...",
    });
  };

  const handleNotifications = () => {
    toast({
      title: "Notifications",
      description: "You have 5 new notifications. Opening notification panel...",
    });
  };

  // Currency Conversion Functions
  const handleCurrencyConversion = async () => {
    if (!conversionAmount || isNaN(Number(conversionAmount))) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to convert.",
        variant: "destructive",
      });
      return;
    }

    setIsConverting(true);

    // Simulate API call to get real exchange rates
    setTimeout(() => {
      const amount = parseFloat(conversionAmount);
      let converted = 0;

      if (baseCurrency === targetCurrency) {
        converted = amount;
      } else if (exchangeRates[baseCurrency] && exchangeRates[baseCurrency][targetCurrency]) {
        converted = amount * exchangeRates[baseCurrency][targetCurrency];
      } else {
        // Fallback calculation through USD
        const toUSD = baseCurrency === "USD" ? amount : amount / (exchangeRates["USD"][baseCurrency] || 1);
        converted = targetCurrency === "USD" ? toUSD : toUSD * (exchangeRates["USD"][targetCurrency] || 1);
      }

      setConvertedAmount(converted.toFixed(2));
      setIsConverting(false);

      toast({
        title: "Conversion Complete",
        description: `${amount} ${baseCurrency} = ${converted.toFixed(2)} ${targetCurrency}`,
      });
    }, 1000);
  };

  const handlePaymentMethodToggle = (method: string, enabled: boolean) => {
    toast({
      title: `Payment Method ${enabled ? 'Enabled' : 'Disabled'}`,
      description: `${method} has been ${enabled ? 'enabled' : 'disabled'} for customers.`,
    });
  };

  const currencies = [
    { code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸" },
    { code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺" },
    { code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧" },
    { code: "JPY", name: "Japanese Yen", symbol: "¥", flag: "🇯🇵" },
    { code: "CAD", name: "Canadian Dollar", symbol: "C$", flag: "🇨🇦" },
    { code: "AUD", name: "Australian Dollar", symbol: "A$", flag: "🇦🇺" },
    { code: "CHF", name: "Swiss Franc", symbol: "Fr", flag: "🇨🇭" },
    { code: "CNY", name: "Chinese Yuan", symbol: "¥", flag: "🇨🇳" },
    { code: "INR", name: "Indian Rupee", symbol: "₹", flag: "🇮🇳" },
    { code: "BRL", name: "Brazilian Real", symbol: "R$", flag: "🇧🇷" },
  ];

  const paymentMethods = [
    {
      id: "visa",
      name: "Visa",
      icon: "💳",
      enabled: true,
      fees: "2.9% + $0.30",
      volume: "$1,234,567",
      color: "bg-blue-500",
    },
    {
      id: "mastercard",
      name: "Mastercard",
      icon: "💳",
      enabled: true,
      fees: "2.9% + $0.30",
      volume: "$987,654",
      color: "bg-red-500",
    },
    {
      id: "amex",
      name: "American Express",
      icon: "💳",
      enabled: true,
      fees: "3.5% + $0.30",
      volume: "$543,210",
      color: "bg-green-500",
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: "🅿️",
      enabled: true,
      fees: "2.9% + $0.30",
      volume: "$765,432",
      color: "bg-blue-600",
    },
    {
      id: "stripe",
      name: "Stripe",
      icon: "💳",
      enabled: true,
      fees: "2.9% + $0.30",
      volume: "$1,098,765",
      color: "bg-purple-500",
    },
    {
      id: "apple-pay",
      name: "Apple Pay",
      icon: "🍎",
      enabled: true,
      fees: "2.9% + $0.30",
      volume: "$654,321",
      color: "bg-gray-800",
    },
    {
      id: "google-pay",
      name: "Google Pay",
      icon: "🅖",
      enabled: true,
      fees: "2.9% + $0.30",
      volume: "$432,109",
      color: "bg-blue-400",
    },
    {
      id: "bank-transfer",
      name: "Bank Transfer",
      icon: "🏦",
      enabled: true,
      fees: "1.0% + $5.00",
      volume: "$2,345,678",
      color: "bg-green-600",
    },
    {
      id: "crypto",
      name: "Cryptocurrency",
      icon: "₿",
      enabled: false,
      fees: "1.5% + $2.00",
      volume: "$123,456",
      color: "bg-orange-500",
    },
  ];

  // Dashboard Analytics Data
  const dashboardStats = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+12.5%",
      icon: <Users className="h-6 w-6" />,
      color: "bg-blue-500",
      trend: "up",
    },
    {
      title: "Active Shipments",
      value: "3,421",
      change: "+8.2%",
      icon: <Package className="h-6 w-6" />,
      color: "bg-green-500",
      trend: "up",
    },
    {
      title: "Monthly Revenue",
      value: "$847,293",
      change: "+15.3%",
      icon: <DollarSign className="h-6 w-6" />,
      color: "bg-purple-500",
      trend: "up",
    },
    {
      title: "Support Tickets",
      value: "284",
      change: "-5.7%",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "bg-orange-500",
      trend: "down",
    },
  ];

  const recentUsers = [
    {
      id: "1",
      name: "John Smith",
      email: "john@example.com",
      status: "active",
      joinDate: "2024-12-10",
      shipments: 23,
      revenue: "$12,450",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      status: "active",
      joinDate: "2024-12-08",
      shipments: 45,
      revenue: "$28,670",
    },
    {
      id: "3",
      name: "Mike Chen",
      email: "mike@example.com",
      status: "pending",
      joinDate: "2024-12-12",
      shipments: 0,
      revenue: "$0",
    },
  ];

  const activeChatSessions = [
    {
      id: "1",
      user: "Emily Rodriguez",
      agent: "Sarah Johnson",
      topic: "Shipment Tracking",
      duration: "5 min",
      status: "active",
      priority: "normal",
    },
    {
      id: "2",
      user: "David Wilson",
      agent: "Mike Thompson",
      topic: "Payment Issue",
      duration: "12 min",
      status: "active",
      priority: "high",
    },
    {
      id: "3",
      user: "Lisa Brown",
      agent: "Anna Davis",
      topic: "Service Inquiry",
      duration: "3 min",
      status: "active",
      priority: "low",
    },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">
            Welcome back! Here's what's happening with GlobalTrack today.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Button variant="outline" onClick={handleExportReport}>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button
            onClick={handleQuickAction}
            className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            Quick Action
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
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
                    <TrendingUp
                      className={`h-4 w-4 mr-1 ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}
                    />
                    <span
                      className={`text-sm font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      from last month
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
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      className={
                        user.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {user.status}
                    </Badge>
                    <p className="text-sm text-gray-500 mt-1">
                      {user.joinDate}
                    </p>
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
                <div
                  key={session.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {session.user}
                      </p>
                      <p className="text-sm text-gray-600">{session.topic}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      className={
                        session.priority === "high"
                          ? "bg-red-100 text-red-800"
                          : session.priority === "normal"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                      }
                    >
                      {session.priority}
                    </Badge>
                    <p className="text-sm text-gray-500 mt-1">
                      {session.duration}
                    </p>
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
                <Badge className="bg-yellow-100 text-yellow-800">
                  Processing
                </Badge>
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
                {isSidebarOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

              <div className="flex items-center space-x-2 ml-4 lg:ml-0">
                <div className="w-8 h-8 bg-gradient-to-r from-royal-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GT</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-royal-600">
                    GlobalTrack
                  </span>
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
              <Button
                variant="ghost"
                size="sm"
                className="relative hover:bg-red-50"
                onClick={handleNotifications}
                title="View Notifications"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                  5
                </span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium text-gray-900">
                        Admin User
                      </p>
                      <p className="text-xs text-gray-500">
                        admin@globaltrack.com
                      </p>
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
        <div
          className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
        >
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
                  <div
                    className={`${currentView === item.id ? item.color : "text-gray-400 group-hover:text-gray-600"} transition-colors`}
                  >
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
            {currentView === "users" && <UserManagement />}
            {currentView === "chat" && <ChatManagement />}
            {currentView === "payments" && (
              <div className="space-y-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Payment & Currency Management</h1>
                    <p className="text-gray-600 mt-2">
                      Manage payment methods, currency settings, and conversion rates for global transactions.
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 flex space-x-3">
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Export Transactions
                    </Button>
                    <Button className="bg-gradient-to-r from-royal-600 to-orange-500">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Payment Method
                    </Button>
                  </div>
                </div>

                {/* Payment Overview Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                          <p className="text-3xl font-bold text-gray-900">$2,847,293</p>
                          <div className="flex items-center mt-2">
                            <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                            <span className="text-sm font-medium text-green-600">+12.5%</span>
                            <span className="text-sm text-gray-500 ml-1">this month</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-green-500">
                          <DollarSign className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Transactions</p>
                          <p className="text-3xl font-bold text-gray-900">18,432</p>
                          <div className="flex items-center mt-2">
                            <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                            <span className="text-sm font-medium text-green-600">+8.2%</span>
                            <span className="text-sm text-gray-500 ml-1">this month</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-blue-500">
                          <Receipt className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Processing Fees</p>
                          <p className="text-3xl font-bold text-gray-900">$89,234</p>
                          <div className="flex items-center mt-2">
                            <TrendingDown className="h-4 w-4 mr-1 text-red-500" />
                            <span className="text-sm font-medium text-red-600">-2.1%</span>
                            <span className="text-sm text-gray-500 ml-1">optimized</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-purple-500">
                          <CreditCard className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Success Rate</p>
                          <p className="text-3xl font-bold text-gray-900">99.2%</p>
                          <div className="flex items-center mt-2">
                            <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                            <span className="text-sm font-medium text-green-600">+0.3%</span>
                            <span className="text-sm text-gray-500 ml-1">improved</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-green-600">
                          <Shield className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Main Content Tabs */}
                <Tabs defaultValue="methods" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
                    <TabsTrigger value="methods">Payment Methods</TabsTrigger>
                    <TabsTrigger value="currency">Currency Settings</TabsTrigger>
                    <TabsTrigger value="converter">Currency Converter</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  </TabsList>

                  {/* Payment Methods Tab */}
                  <TabsContent value="methods" className="space-y-6">
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <CreditCard className="h-5 w-5 mr-2 text-purple-600" />
                          Accepted Payment Methods
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {paymentMethods.map((method) => (
                            <Card key={method.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center space-x-3">
                                    <div className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center text-white text-lg`}>
                                      {method.icon}
                                    </div>
                                    <div>
                                      <h3 className="font-semibold text-gray-900">{method.name}</h3>
                                      <p className="text-sm text-gray-500">Fees: {method.fees}</p>
                                    </div>
                                  </div>
                                  <Switch
                                    checked={method.enabled}
                                    onCheckedChange={(checked) => handlePaymentMethodToggle(method.name, checked)}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Monthly Volume:</span>
                                    <span className="font-medium text-gray-900">{method.volume}</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                      className={`h-2 rounded-full ${method.color}`}
                                      style={{ width: `${Math.random() * 80 + 20}%` }}
                                    ></div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Currency Settings Tab */}
                  <TabsContent value="currency" className="space-y-6">
                    <div className="grid lg:grid-cols-2 gap-6">
                      <Card className="border-0 shadow-lg">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Globe className="h-5 w-5 mr-2 text-blue-600" />
                            Supported Currencies
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {currencies.slice(0, 6).map((currency) => (
                              <div key={currency.code} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                                <div className="flex items-center space-x-3">
                                  <span className="text-2xl">{currency.flag}</span>
                                  <div>
                                    <p className="font-medium text-gray-900">{currency.name}</p>
                                    <p className="text-sm text-gray-500">{currency.code} • {currency.symbol}</p>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                                  <Button variant="outline" size="sm">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                          <Button variant="outline" className="w-full mt-4">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Currency
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <RefreshCw className="h-5 w-5 mr-2 text-green-600" />
                            Exchange Rate Settings
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-blue-900">Auto-Update Rates</span>
                                <Switch defaultChecked />
                              </div>
                              <p className="text-sm text-blue-700">Automatically update exchange rates every hour using live market data.</p>
                            </div>

                            <div className="space-y-3">
                              <div className="flex items-center justify-between p-3 border rounded-lg">
                                <div>
                                  <p className="font-medium">USD/EUR</p>
                                  <p className="text-sm text-gray-500">Last updated: 5 min ago</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-bold text-lg">0.8524</p>
                                  <p className="text-sm text-green-600">+0.12%</p>
                                </div>
                              </div>

                              <div className="flex items-center justify-between p-3 border rounded-lg">
                                <div>
                                  <p className="font-medium">USD/GBP</p>
                                  <p className="text-sm text-gray-500">Last updated: 5 min ago</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-bold text-lg">0.7341</p>
                                  <p className="text-sm text-red-600">-0.08%</p>
                                </div>
                              </div>

                              <div className="flex items-center justify-between p-3 border rounded-lg">
                                <div>
                                  <p className="font-medium">EUR/GBP</p>
                                  <p className="text-sm text-gray-500">Last updated: 5 min ago</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-bold text-lg">0.8612</p>
                                  <p className="text-sm text-green-600">+0.05%</p>
                                </div>
                              </div>
                            </div>

                            <Button variant="outline" className="w-full">
                              <RefreshCw className="h-4 w-4 mr-2" />
                              Update All Rates Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* Currency Converter Tab */}
                  <TabsContent value="converter" className="space-y-6">
                    <div className="grid lg:grid-cols-2 gap-6">
                      <Card className="border-0 shadow-lg">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <ArrowLeftRight className="h-5 w-5 mr-2 text-orange-600" />
                            Currency Converter
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="amount">Amount</Label>
                              <div className="relative mt-2">
                                <Input
                                  id="amount"
                                  type="number"
                                  placeholder="Enter amount"
                                  value={conversionAmount}
                                  onChange={(e) => setConversionAmount(e.target.value)}
                                  className="text-lg font-medium h-12"
                                />
                                <DollarSign className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="from-currency">From</Label>
                                <Select value={baseCurrency} onValueChange={setBaseCurrency}>
                                  <SelectTrigger className="h-12 mt-2">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {currencies.map((currency) => (
                                      <SelectItem key={currency.code} value={currency.code}>
                                        <div className="flex items-center space-x-2">
                                          <span>{currency.flag}</span>
                                          <span>{currency.code}</span>
                                          <span className="text-gray-500">- {currency.name}</span>
                                        </div>
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>

                              <div>
                                <Label htmlFor="to-currency">To</Label>
                                <Select value={targetCurrency} onValueChange={setTargetCurrency}>
                                  <SelectTrigger className="h-12 mt-2">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {currencies.map((currency) => (
                                      <SelectItem key={currency.code} value={currency.code}>
                                        <div className="flex items-center space-x-2">
                                          <span>{currency.flag}</span>
                                          <span>{currency.code}</span>
                                          <span className="text-gray-500">- {currency.name}</span>
                                        </div>
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            <Button
                              onClick={handleCurrencyConversion}
                              disabled={isConverting}
                              className="w-full h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                            >
                              {isConverting ? (
                                <>
                                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                                  Converting...
                                </>
                              ) : (
                                <>
                                  <ArrowLeftRight className="h-4 w-4 mr-2" />
                                  Convert Currency
                                </>
                              )}
                            </Button>

                            {convertedAmount && (
                              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <div className="text-center">
                                  <p className="text-sm text-green-700 mb-1">Converted Amount</p>
                                  <p className="text-3xl font-bold text-green-900">
                                    {currencies.find(c => c.code === targetCurrency)?.symbol}{convertedAmount} {targetCurrency}
                                  </p>
                                  <p className="text-sm text-green-600 mt-2">
                                    {conversionAmount} {baseCurrency} = {convertedAmount} {targetCurrency}
                                  </p>
                                  <Button variant="outline" size="sm" className="mt-3" onClick={() => {
                                    navigator.clipboard.writeText(`${convertedAmount} ${targetCurrency}`);
                                    toast({ title: "Copied!", description: "Converted amount copied to clipboard." });
                                  }}>
                                    <Copy className="h-4 w-4 mr-2" />
                                    Copy Result
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Globe className="h-5 w-5 mr-2 text-blue-600" />
                            Quick Conversions
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                              <h3 className="font-semibold text-blue-900 mb-2">Popular Conversions</h3>
                              <p className="text-sm text-blue-700">Frequently used by customers</p>
                            </div>

                            <div className="space-y-3">
                              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                                <div className="flex items-center space-x-2">
                                  <span>🇺🇸 USD</span>
                                  <ArrowLeftRight className="h-4 w-4 text-gray-400" />
                                  <span>🇪🇺 EUR</span>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">1 USD = 0.85 EUR</p>
                                  <p className="text-sm text-green-600">+0.12%</p>
                                </div>
                              </div>

                              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                                <div className="flex items-center space-x-2">
                                  <span>🇺🇸 USD</span>
                                  <ArrowLeftRight className="h-4 w-4 text-gray-400" />
                                  <span>🇬🇧 GBP</span>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">1 USD = 0.73 GBP</p>
                                  <p className="text-sm text-red-600">-0.08%</p>
                                </div>
                              </div>

                              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                                <div className="flex items-center space-x-2">
                                  <span>🇪🇺 EUR</span>
                                  <ArrowLeftRight className="h-4 w-4 text-gray-400" />
                                  <span>🇬🇧 GBP</span>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">1 EUR = 0.86 GBP</p>
                                  <p className="text-sm text-green-600">+0.05%</p>
                                </div>
                              </div>
                            </div>

                            <div className="pt-4 border-t">
                              <Button variant="outline" className="w-full">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Live Market Rates
                              </Button>
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
                          <CardTitle className="flex items-center">
                            <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
                            Payment Method Usage
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {paymentMethods.slice(0, 5).map((method, index) => {
                              const percentage = [35, 22, 18, 15, 10][index];
                              return (
                                <div key={method.id} className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="flex items-center">
                                      <span className="mr-2">{method.icon}</span>
                                      {method.name}
                                    </span>
                                    <span className="font-medium">{percentage}%</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                      className={`h-2 rounded-full ${method.color}`}
                                      style={{ width: `${percentage}%` }}
                                    ></div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Globe className="h-5 w-5 mr-2 text-blue-600" />
                            Currency Distribution
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {currencies.slice(0, 5).map((currency, index) => {
                              const percentage = [45, 25, 15, 10, 5][index];
                              return (
                                <div key={currency.code} className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="flex items-center">
                                      <span className="mr-2">{currency.flag}</span>
                                      {currency.code} - {currency.name}
                                    </span>
                                    <span className="font-medium">{percentage}%</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                                      style={{ width: `${percentage}%` }}
                                    ></div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
            {currentView === "tracking" && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tracking Management
                </h3>
                <p className="text-gray-600 mb-6">
                  Tracking management interface is being loaded...
                </p>
                <Button
                  onClick={() => setCurrentView("dashboard")}
                  variant="outline"
                >
                  Back to Dashboard
                </Button>
              </div>
            )}
            {currentView === "contacts" && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Contact Management
                </h3>
                <p className="text-gray-600 mb-6">
                  Contact management interface is being loaded...
                </p>
                <Button
                  onClick={() => setCurrentView("dashboard")}
                  variant="outline"
                >
                  Back to Dashboard
                </Button>
              </div>
            )}
            {currentView === "general" && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  General Settings
                </h3>
                <p className="text-gray-600 mb-6">
                  General settings interface is being loaded...
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
