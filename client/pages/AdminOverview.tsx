import { AdminAccessInfo } from "@/components/ui/admin-access-info";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  Users,
  Package,
  CreditCard,
  Settings,
  BarChart3,
  MessageSquare,
  Activity,
  Zap,
  CheckCircle,
} from "lucide-react";

export default function AdminOverview() {
  const features = [
    {
      category: "User & Customer Management",
      icon: <Users className="h-6 w-6" />,
      color: "bg-blue-500",
      items: [
        "Complete user management and registration oversight",
        "Customer relationship management and support",
        "KYC verification and document management",
        "User activity monitoring and analytics",
      ],
    },
    {
      category: "Operations & Logistics",
      icon: <Package className="h-6 w-6" />,
      color: "bg-green-500",
      items: [
        "Shipment creation, tracking, and management",
        "Logistics operations control and monitoring",
        "Route optimization and delivery management",
        "Real-time tracking system administration",
      ],
    },
    {
      category: "Financial Management",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-purple-500",
      items: [
        "Payment processing and gateway management",
        "Billing system and invoice generation",
        "Quote management and pricing control",
        "Financial reporting and revenue analytics",
      ],
    },
    {
      category: "Communication & Support",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "bg-orange-500",
      items: [
        "Live chat support system management",
        "Contact and inquiry management",
        "Notification center and alerts",
        "Customer communication tools",
      ],
    },
    {
      category: "System & Configuration",
      icon: <Settings className="h-6 w-6" />,
      color: "bg-gray-500",
      items: [
        "General system settings and configuration",
        "Social media integration management",
        "Security and access control (coming soon)",
        "Database administration tools (coming soon)",
      ],
    },
    {
      category: "Analytics & Reporting",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "bg-indigo-500",
      items: [
        "Comprehensive system analytics dashboard",
        "Performance monitoring and metrics",
        "Custom report generation and export",
        "Real-time system health monitoring",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Logo size="lg" className="justify-center mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Unified Admin Control Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Complete administrative control and management system for
            GlobalTrack Logistics. All administrative functions have been
            consolidated into one powerful interface.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Badge className="bg-green-100 text-green-800 px-4 py-2">
              <Activity className="h-4 w-4 mr-2" />
              System Integration Complete
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Unified Management
            </Badge>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link to="/">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Website</span>
            </Button>
          </Link>
          <Link to="/admin">
            <Button className="flex items-center space-x-2 bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600">
              <Shield className="h-4 w-4" />
              <span>Access Control Center</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/admin/setup">
            <Button variant="outline" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>View Login Credentials</span>
            </Button>
          </Link>
        </div>

        {/* Features Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Comprehensive Management Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${feature.color}`}>
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <span className="text-lg">{feature.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="mb-12">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-royal-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center space-x-2">
                <Zap className="h-6 w-6 text-orange-500" />
                <span>Unified Control Benefits</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Single Access Point
                  </h3>
                  <p className="text-sm text-gray-600">
                    One login, complete access to all administrative functions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Real-time Monitoring
                  </h3>
                  <p className="text-sm text-gray-600">
                    Live system health and performance monitoring
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Comprehensive Analytics
                  </h3>
                  <p className="text-sm text-gray-600">
                    Unified reporting across all business functions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Streamlined Workflow
                  </h3>
                  <p className="text-sm text-gray-600">
                    Efficient management with categorized navigation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Admin Access Information */}
        <AdminAccessInfo />

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p className="mb-2">
            <strong>GlobalTrack Logistics Unified Admin Control Center</strong>
          </p>
          <p>
            All administrative and management functions have been successfully
            consolidated into a single, powerful interface for maximum
            efficiency and control.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-4">
            <Badge
              variant="outline"
              className="border-green-200 text-green-700"
            >
              ✓ User Management Integrated
            </Badge>
            <Badge variant="outline" className="border-blue-200 text-blue-700">
              ✓ Operations Consolidated
            </Badge>
            <Badge
              variant="outline"
              className="border-purple-200 text-purple-700"
            >
              ✓ Analytics Unified
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
