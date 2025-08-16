import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Package,
  TrendingUp,
  Clock,
  DollarSign,
  User,
  CreditCard,
  Settings,
  LogOut,
  Bell,
  Search,
  Plus,
  MapPin,
  Truck,
  Ship,
  Plane,
  CheckCircle,
  AlertCircle,
  Eye,
  Download,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShipmentsSection } from "@/components/ui/dashboard-sections/shipments";
import { TrackingSection } from "@/components/ui/dashboard-sections/tracking";
import { PaymentsSection } from "@/components/ui/dashboard-sections/payments";
import { ProfileSection } from "@/components/ui/dashboard-sections/profile";
import { KYCSection } from "@/components/ui/dashboard-sections/kyc";
import { SettingsSection } from "@/components/ui/dashboard-sections/settings";
import { NotificationDropdown } from "@/components/ui/notification-dropdown";
import { NotificationTest } from "@/components/ui/notification-test";
import { useNotifications } from "@/hooks/use-notifications";

export default function Dashboard() {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userEmail] = useState(localStorage.getItem("userEmail") || "");
  const { notifications, markAsRead, markAllAsRead, clearAll } =
    useNotifications("user");

  useEffect(() => {
    // Check if user is logged in
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/login");
    }

    // Handle URL parameters for view
    const urlParams = new URLSearchParams(window.location.search);
    const viewParam = urlParams.get("view");
    if (
      viewParam &&
      [
        "overview",
        "tracking",
        "payments",
        "profile",
        "kyc",
        "settings",
      ].includes(viewParam)
    ) {
      setCurrentView(viewParam as any);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  // Mock data
  const recentShipments = [
    {
      id: "GT240001",
      destination: "New York, NY",
      origin: "Los Angeles, CA",
      status: "in_transit",
      type: "ground",
      date: "2024-12-10",
      value: "$1,250.00",
      progress: 75,
    },
    {
      id: "GT240002",
      destination: "London, UK",
      origin: "Chicago, IL",
      status: "delivered",
      type: "air",
      date: "2024-12-08",
      value: "$3,890.00",
      progress: 100,
    },
    {
      id: "GT240003",
      destination: "Singapore",
      origin: "Seattle, WA",
      status: "customs",
      type: "ocean",
      date: "2024-12-05",
      value: "$5,200.00",
      progress: 60,
    },
  ];

  const dashboardStats = [
    {
      title: "Active Shipments",
      value: "12",
      change: "+2 from last month",
      icon: <Package className="h-6 w-6" />,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Total Delivered",
      value: "248",
      change: "+18% this month",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Monthly Spend",
      value: "$12,450",
      change: "+5% from last month",
      icon: <DollarSign className="h-6 w-6" />,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      title: "On-Time Rate",
      value: "98.5%",
      change: "+0.5% improvement",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const sidebarItems = [
    {
      id: "overview",
      label: "Overview",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      id: "shipments",
      label: "Shipments",
      icon: <Package className="h-5 w-5" />,
    },
    {
      id: "tracking",
      label: "Track Packages",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      id: "payments",
      label: "Payment Methods",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      id: "profile",
      label: "Profile Settings",
      icon: <User className="h-5 w-5" />,
    },
    {
      id: "kyc",
      label: "KYC Verification",
      icon: <CheckCircle className="h-5 w-5" />,
    },
    {
      id: "settings",
      label: "Account Settings",
      icon: <Settings className="h-5 w-5" />,
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

              <Link to="/" className="flex items-center space-x-2 ml-4 lg:ml-0">
                <Package className="h-8 w-8 text-shipblue-600" />
                <div>
                  <span className="text-xl font-bold text-shipblue-600">
                    ShipNexa
                  </span>
                  <span className="text-lg text-orange-500 ml-1">
                    .it
                  </span>
                </div>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search shipments, tracking numbers..."
                  className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-shipblue-500"
                />
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <NotificationDropdown
                notifications={notifications}
                onNotificationRead={markAsRead}
                onMarkAllRead={markAllAsRead}
                onClearAll={clearAll}
                showManageLink={true}
                type="user"
              />

              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                  <AvatarFallback>
                    {userEmail ? userEmail.charAt(0).toUpperCase() : "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">{userEmail}</p>
                </div>
              </div>
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
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                    currentView === item.id
                      ? "bg-shipblue-100 text-shipblue-700 border border-shipblue-200"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="px-4 py-6 border-t border-gray-200">
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <LogOut className="h-5 w-5 mr-3" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="p-6">
            {/* Overview Content */}
            {currentView === "overview" && (
              <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      Dashboard Overview
                    </h1>
                    <p className="text-gray-600">
                      Welcome back, John! Here's what's happening with your
                      shipments.
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <Button
                      onClick={() => setCurrentView("shipments")}
                      className="bg-gradient-to-r from-shipblue-600 to-orange-500 hover:from-shipblue-700 hover:to-orange-600"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      New Shipment
                    </Button>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {dashboardStats.map((stat, index) => (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-600">
                              {stat.title}
                            </p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">
                              {stat.value}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {stat.change}
                            </p>
                          </div>
                          <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                            <div className={stat.color}>{stat.icon}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Recent Shipments */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Recent Shipments</CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentView("shipments")}
                    >
                      View All
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentShipments.map((shipment) => (
                        <div
                          key={shipment.id}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="p-2 bg-gray-100 rounded-lg">
                              {getTypeIcon(shipment.type)}
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <p className="font-semibold text-gray-900">
                                  {shipment.id}
                                </p>
                                <Badge
                                  className={getStatusColor(shipment.status)}
                                >
                                  {shipment.status.replace("_", " ")}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600">
                                {shipment.origin} → {shipment.destination}
                              </p>
                              <p className="text-xs text-gray-500">
                                {shipment.date}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <p className="font-semibold text-gray-900">
                                {shipment.value}
                              </p>
                              <div className="flex items-center space-x-2">
                                <div className="w-20 h-2 bg-gray-200 rounded-full">
                                  <div
                                    className="h-2 bg-shipblue-600 rounded-full transition-all duration-300"
                                    style={{ width: `${shipment.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-500">
                                  {shipment.progress}%
                                </span>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setCurrentView("tracking")}
                                title="Track Shipment"
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
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card
                    className="border-0 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => setCurrentView("shipments")}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Package className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Create Shipment
                      </h3>
                      <p className="text-sm text-gray-600">
                        Start a new shipment request
                      </p>
                    </CardContent>
                  </Card>

                  <Card
                    className="border-0 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => setCurrentView("tracking")}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <MapPin className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Track Package
                      </h3>
                      <p className="text-sm text-gray-600">
                        Track your shipments in real-time
                      </p>
                    </CardContent>
                  </Card>

                  <Card
                    className="border-0 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => setCurrentView("payments")}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="h-6 w-6 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Billing & Payments
                      </h3>
                      <p className="text-sm text-gray-600">
                        Manage your payment methods
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Section Components */}
            {currentView === "shipments" && <ShipmentsSection />}
            {currentView === "tracking" && <TrackingSection />}
            {currentView === "payments" && <PaymentsSection />}
            {currentView === "profile" && <ProfileSection />}
            {currentView === "kyc" && <KYCSection />}
            {currentView === "settings" && <SettingsSection />}

            {/* Development: Notification Test Component */}
            {currentView === "overview" &&
              process.env.NODE_ENV === "development" && (
                <div className="mt-8">
                  <NotificationTest type="user" />
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
