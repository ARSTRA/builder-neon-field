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
  Share2,
  UserCheck,
  ShieldCheck,
  Activity,
  FileText,
  Headphones,
  Zap,
  Target,
  Database,
  Shield,
  Lock,
  Key,
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

// Import existing admin sections
import { UserManagement } from "@/components/ui/admin-sections/user-management";
import { ChatManagement } from "@/components/ui/admin-sections/chat-management";
import { PaymentManagement } from "@/components/ui/admin-sections/payment-management";
import { TrackingManagement } from "@/components/ui/admin-sections/tracking-management";
import { QuoteManagement } from "@/components/ui/admin-sections/quote-management";
import { ContactManagement } from "@/components/ui/admin-sections/contact-management";
import { GeneralSettings } from "@/components/ui/admin-sections/general-settings";
import { SocialMediaManagement } from "@/components/ui/admin-sections/social-media-management";

// Import dashboard sections for integration
import { ShipmentsSection } from "@/components/ui/dashboard-sections/shipments";
import { TrackingSection } from "@/components/ui/dashboard-sections/tracking";
import { PaymentsSection } from "@/components/ui/dashboard-sections/payments";
import { ProfileSection } from "@/components/ui/dashboard-sections/profile";
import { KYCSection } from "@/components/ui/dashboard-sections/kyc";
import { SettingsSection } from "@/components/ui/dashboard-sections/settings";

import { NotificationDropdown } from "@/components/ui/notification-dropdown";
import { NotificationTest } from "@/components/ui/notification-test";
import { useNotifications } from "@/hooks/use-notifications";
import { useToast } from "@/hooks/use-toast";

export default function UnifiedAdmin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentView, setCurrentView] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { notifications, markAsRead, markAllAsRead, clearAll } =
    useNotifications("admin");

  const [adminInfo] = useState(() => {
    return {
      email: localStorage.getItem("adminEmail") || "admin@globaltrack.com",
      role: localStorage.getItem("adminRole") || "Super Admin",
      name: localStorage.getItem("adminName") || "System Administrator",
    };
  });

  useEffect(() => {
    // Check if user is admin
    const isAdmin = localStorage.getItem("isAdmin");
    const adminEmail = localStorage.getItem("adminEmail");

    if (!isAdmin || !adminEmail) {
      navigate("/login");
    }

    // Handle URL parameters for view
    const urlParams = new URLSearchParams(window.location.search);
    const viewParam = urlParams.get("view");
    if (viewParam && sidebarItems.some((item) => item.id === viewParam)) {
      setCurrentView(viewParam);
    }
  }, [navigate]);

  // Comprehensive admin sidebar structure
  const sidebarItems = [
    {
      id: "dashboard",
      label: "Control Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      color: "text-blue-600",
      category: "overview",
    },
    {
      id: "analytics",
      label: "Analytics & Reports",
      icon: <BarChart3 className="h-5 w-5" />,
      color: "text-purple-600",
      category: "overview",
    },
    // User & Customer Management
    {
      id: "users",
      label: "User Management",
      icon: <Users className="h-5 w-5" />,
      color: "text-green-600",
      category: "management",
    },
    {
      id: "customers",
      label: "Customer Relations",
      icon: <UserCheck className="h-5 w-5" />,
      color: "text-emerald-600",
      category: "management",
    },
    {
      id: "kyc",
      label: "KYC & Verification",
      icon: <ShieldCheck className="h-5 w-5" />,
      color: "text-cyan-600",
      category: "management",
    },
    // Operations Management
    {
      id: "shipments",
      label: "Shipment Operations",
      icon: <Package className="h-5 w-5" />,
      color: "text-orange-600",
      category: "operations",
    },
    {
      id: "tracking",
      label: "Tracking Management",
      icon: <MapPin className="h-5 w-5" />,
      color: "text-red-600",
      category: "operations",
    },
    {
      id: "logistics",
      label: "Logistics Control",
      icon: <Truck className="h-5 w-5" />,
      color: "text-yellow-600",
      category: "operations",
    },
    // Financial Management
    {
      id: "payments",
      label: "Payment Management",
      icon: <CreditCard className="h-5 w-5" />,
      color: "text-purple-600",
      category: "financial",
    },
    {
      id: "billing",
      label: "Billing & Invoices",
      icon: <FileText className="h-5 w-5" />,
      color: "text-indigo-600",
      category: "financial",
    },
    {
      id: "quotes",
      label: "Quote Management",
      icon: <Target className="h-5 w-5" />,
      color: "text-pink-600",
      category: "financial",
    },
    // Communication Management
    {
      id: "chat",
      label: "Live Chat Support",
      icon: <MessageSquare className="h-5 w-5" />,
      color: "text-blue-500",
      category: "communication",
    },
    {
      id: "contacts",
      label: "Contact Management",
      icon: <Mail className="h-5 w-5" />,
      color: "text-teal-600",
      category: "communication",
    },
    {
      id: "notifications",
      label: "Notification Center",
      icon: <Bell className="h-5 w-5" />,
      color: "text-amber-600",
      category: "communication",
    },
    // System Management
    {
      id: "general",
      label: "General Settings",
      icon: <Settings className="h-5 w-5" />,
      color: "text-gray-600",
      category: "system",
    },
    {
      id: "social",
      label: "Social Media",
      icon: <Share2 className="h-5 w-5" />,
      color: "text-blue-400",
      category: "system",
    },
    {
      id: "security",
      label: "Security & Access",
      icon: <Shield className="h-5 w-5" />,
      color: "text-red-500",
      category: "system",
    },
    {
      id: "database",
      label: "Database Management",
      icon: <Database className="h-5 w-5" />,
      color: "text-slate-600",
      category: "system",
    },
  ];

  const categories = [
    {
      id: "overview",
      label: "Overview & Analytics",
      icon: <Activity className="h-4 w-4" />,
    },
    {
      id: "management",
      label: "User & Customer Management",
      icon: <Users className="h-4 w-4" />,
    },
    {
      id: "operations",
      label: "Operations & Logistics",
      icon: <Truck className="h-4 w-4" />,
    },
    {
      id: "financial",
      label: "Financial Management",
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      id: "communication",
      label: "Communication & Support",
      icon: <Headphones className="h-4 w-4" />,
    },
    {
      id: "system",
      label: "System & Configuration",
      icon: <Settings className="h-4 w-4" />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("adminRole");
    localStorage.removeItem("adminLoginTime");
    localStorage.removeItem("adminName");
    toast({
      title: "Logged Out",
      description:
        "You have been successfully logged out from admin control center.",
    });
    navigate("/login");
  };

  const handleExportReport = () => {
    toast({
      title: "Exporting Comprehensive Report",
      description: "Generating complete system report with all modules data...",
    });
    setTimeout(() => {
      toast({
        title: "Report Ready",
        description:
          "Comprehensive admin report has been downloaded successfully.",
      });
    }, 2000);
  };

  const handleQuickAction = () => {
    toast({
      title: "Quick Action Center",
      description: "Opening unified quick action panel...",
    });
  };

  // Enhanced dashboard stats combining all systems
  const comprehensiveStats = [
    {
      title: "Total System Users",
      value: "15,642",
      change: "+12.5%",
      icon: <Users className="h-6 w-6" />,
      color: "bg-blue-500",
      trend: "up",
    },
    {
      title: "Active Shipments",
      value: "4,237",
      change: "+8.2%",
      icon: <Package className="h-6 w-6" />,
      color: "bg-green-500",
      trend: "up",
    },
    {
      title: "Total Revenue",
      value: "$1,247,893",
      change: "+15.3%",
      icon: <DollarSign className="h-6 w-6" />,
      color: "bg-purple-500",
      trend: "up",
    },
    {
      title: "Support Tickets",
      value: "142",
      change: "-15.7%",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "bg-orange-500",
      trend: "down",
    },
    {
      title: "Pending Quotes",
      value: "89",
      change: "+5.4%",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-indigo-500",
      trend: "up",
    },
    {
      title: "System Uptime",
      value: "99.8%",
      change: "+0.1%",
      icon: <Activity className="h-6 w-6" />,
      color: "bg-emerald-500",
      trend: "up",
    },
  ];

  const renderControlDashboard = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Unified Admin Control Center
          </h1>
          <p className="text-gray-600">
            Complete management and oversight of GlobalTrack Logistics
            operations
          </p>
          <div className="flex items-center space-x-4 mt-2">
            <Badge className="bg-green-100 text-green-800">
              <Activity className="h-3 w-3 mr-1" />
              System Online
            </Badge>
            <Badge className="bg-blue-100 text-blue-800">
              <Shield className="h-3 w-3 mr-1" />
              {adminInfo.role}
            </Badge>
          </div>
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
            <Zap className="h-4 w-4 mr-2" />
            Quick Action
          </Button>
        </div>
      </div>

      {/* Comprehensive Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {comprehensiveStats.map((stat, index) => (
          <Card
            key={index}
            className="border-0 shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                    {stat.title}
                  </p>
                  <p className="text-xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-1">
                    <TrendingUp
                      className={`h-3 w-3 mr-1 ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}
                    />
                    <span
                      className={`text-xs font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <div className="text-white">{stat.icon}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Access Modules */}
      <div className="grid lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="border-0 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                {category.icon}
                <span>{category.label}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {sidebarItems
                .filter((item) => item.category === category.id)
                .map((item) => (
                  <Button
                    key={item.id}
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-3"
                    onClick={() => setCurrentView(item.id)}
                  >
                    <div className={`mr-3 ${item.color}`}>{item.icon}</div>
                    <div className="flex-1">
                      <div className="font-medium">{item.label}</div>
                    </div>
                    <Eye className="h-4 w-4 text-gray-400" />
                  </Button>
                ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Health Overview */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>System Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Server Load</span>
                <span>72%</span>
              </div>
              <Progress value={72} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Database Performance</span>
                <span>89%</span>
              </div>
              <Progress value={89} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>API Response Time</span>
                <span>95%</span>
              </div>
              <Progress value={95} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Network Connectivity</span>
                <span>98%</span>
              </div>
              <Progress value={98} className="h-3" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Recent System Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">
                      New User Registration
                    </p>
                    <p className="text-sm text-gray-600">
                      john.doe@example.com
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">2 min ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Package className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">
                      Shipment Delivered
                    </p>
                    <p className="text-sm text-gray-600">
                      GT240156 - New York, NY
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">5 min ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium text-gray-900">
                      Payment Processed
                    </p>
                    <p className="text-sm text-gray-600">
                      $2,450.00 - Invoice #INV-001
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">8 min ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Analytics & Reports
        </h2>
        <Button onClick={handleExportReport}>
          <Download className="h-4 w-4 mr-2" />
          Export All Reports
        </Button>
      </div>
      <div className="text-center py-12">
        <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Advanced Analytics Coming Soon
        </h3>
        <p className="text-gray-600">
          Comprehensive reporting and analytics dashboard is being developed.
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Top Navigation */}
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

              <div className="flex items-center space-x-3 ml-4 lg:ml-0">
                <div className="w-10 h-10 bg-gradient-to-r from-royal-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Ship
                  </span>
                  <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                    Nexa
                  </span>
                  <span className="text-lg text-gray-600 ml-1">
                    Control Center
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search across all modules: users, shipments, payments, tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-royal-500"
                />
                <Button
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7"
                >
                  <Filter className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Enhanced User Menu */}
            <div className="flex items-center space-x-4">
              <NotificationDropdown
                notifications={notifications}
                onNotificationRead={markAsRead}
                onMarkAllRead={markAllAsRead}
                onClearAll={clearAll}
                showManageLink={true}
                type="admin"
              />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                      <AvatarFallback>
                        {adminInfo.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium text-gray-900">
                        {adminInfo.name}
                      </p>
                      <p className="text-xs text-gray-500">{adminInfo.email}</p>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={() => setCurrentView("general")}>
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setCurrentView("security")}>
                    <Lock className="h-4 w-4 mr-2" />
                    Security
                  </DropdownMenuItem>
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
        {/* Enhanced Sidebar with Categories */}
        <div
          className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-30 w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
        >
          <div className="flex flex-col h-full pt-16 lg:pt-0">
            <ScrollArea className="flex-1 px-4 py-6">
              {categories.map((category) => (
                <div key={category.id} className="mb-6">
                  <div className="flex items-center space-x-2 px-2 py-2 mb-2">
                    <div className="text-gray-500">{category.icon}</div>
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      {category.label}
                    </h3>
                  </div>
                  <div className="space-y-1">
                    {sidebarItems
                      .filter((item) => item.category === category.id)
                      .map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setCurrentView(item.id);
                            setIsSidebarOpen(false);
                          }}
                          className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg transition-all duration-200 group ${
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
                          <span className="font-medium text-sm">
                            {item.label}
                          </span>
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="p-6">
            {currentView === "dashboard" && renderControlDashboard()}
            {currentView === "analytics" && renderAnalytics()}

            {/* User & Customer Management */}
            {currentView === "users" && <UserManagement />}
            {currentView === "customers" && <UserManagement />}
            {currentView === "kyc" && <KYCSection />}

            {/* Operations Management */}
            {currentView === "shipments" && <ShipmentsSection />}
            {currentView === "tracking" && <TrackingManagement />}
            {currentView === "logistics" && <TrackingSection />}

            {/* Financial Management */}
            {currentView === "payments" && <PaymentManagement />}
            {currentView === "billing" && <PaymentsSection />}
            {currentView === "quotes" && <QuoteManagement />}

            {/* Communication Management */}
            {currentView === "chat" && <ChatManagement />}
            {currentView === "contacts" && <ContactManagement />}
            {currentView === "notifications" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Notification Center
                </h2>
                <NotificationTest type="admin" />
              </div>
            )}

            {/* System Management */}
            {currentView === "general" && <GeneralSettings />}
            {currentView === "social" && <SocialMediaManagement />}
            {currentView === "security" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Security & Access Control
                </h2>
                <div className="text-center py-12">
                  <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Advanced Security Module
                  </h3>
                  <p className="text-gray-600">
                    Enhanced security features and access controls are being
                    developed.
                  </p>
                </div>
              </div>
            )}
            {currentView === "database" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Database Management
                </h2>
                <div className="text-center py-12">
                  <Database className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Database Administration Tools
                  </h3>
                  <p className="text-gray-600">
                    Database management and administration tools are being
                    developed.
                  </p>
                </div>
              </div>
            )}

            {/* Development: Notification Test Component */}
            {currentView === "dashboard" &&
              process.env.NODE_ENV === "development" && (
                <div className="mt-8 max-w-md">
                  <NotificationTest type="admin" />
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
