import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Shield,
  Settings,
  BarChart3,
  Users,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { validateAdminCredentials } from "@shared/admin-config";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    // Basic validation
    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please enter both email and password.");
      setIsLoading(false);
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Trim whitespace from input values
    const email = formData.email.trim().toLowerCase();
    const password = formData.password.trim();

    // Validate admin credentials using centralized configuration
    const validAdmin = validateAdminCredentials(email, password);

    if (validAdmin) {
      // Set admin session
      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("adminEmail", validAdmin.email);
      localStorage.setItem("adminRole", validAdmin.role);
      localStorage.setItem("adminLoginTime", new Date().toISOString());

      setSuccess(`Welcome ${validAdmin.role}! Redirecting to admin portal...`);

      toast({
        title: "Admin Login Successful",
        description: `Welcome ${validAdmin.role} to GlobalTrack Admin Portal`,
      });

      // Small delay to show success message
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    } else {
      setError(
        "Invalid admin credentials. Please check your email and password and try again.",
      );
      toast({
        title: "Login Failed",
        description:
          "Invalid admin credentials. Please verify your email and password.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  const adminFeatures = [
    {
      icon: <Users className="h-6 w-6 text-royal-600" />,
      title: "User Management",
      description: "Manage customer accounts and permissions",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-royal-600" />,
      title: "Analytics Dashboard",
      description: "Monitor system performance and metrics",
    },
    {
      icon: <Shield className="h-6 w-6 text-royal-600" />,
      title: "Security Controls",
      description: "Advanced security and access management",
    },
    {
      icon: <Settings className="h-6 w-6 text-royal-600" />,
      title: "System Settings",
      description: "Configure platform settings and preferences",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Admin Login Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-royal-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-royal-600">
                  GlobalTrack
                </span>
                <span className="text-xl text-orange-500 ml-1">Admin</span>
              </div>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Admin Portal
            </h1>
            <p className="text-gray-600">
              Secure access to administrative controls and system management
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-center text-xl text-gray-800 flex items-center justify-center">
                <Shield className="h-5 w-5 mr-2 text-royal-600" />
                Administrator Sign In
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Security Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-amber-800">
                      Restricted Access
                    </p>
                    <p className="text-xs text-amber-700 mt-1">
                      This portal is for authorized administrators only. All
                      access is logged and monitored.
                    </p>
                  </div>
                </div>
              </div>

              {/* Demo Credentials */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-800 mb-3">
                      Demo Access Credentials
                    </p>
                    <div className="grid grid-cols-1 gap-3 text-xs">
                      <div className="bg-white rounded p-3 border border-blue-100">
                        <div className="font-semibold text-blue-900 mb-1">Super Admin</div>
                        <div className="text-blue-700">
                          <div>Email: admin@globaltrack.com</div>
                          <div>Password: GT2024@Admin!</div>
                        </div>
                      </div>
                      <div className="bg-white rounded p-3 border border-blue-100">
                        <div className="font-semibold text-blue-900 mb-1">Operations Manager</div>
                        <div className="text-blue-700">
                          <div>Email: manager@globaltrack.com</div>
                          <div>Password: GT2024@Manager!</div>
                        </div>
                      </div>
                      <div className="bg-white rounded p-3 border border-blue-100">
                        <div className="font-semibold text-blue-900 mb-1">Support Admin</div>
                        <div className="text-blue-700">
                          <div>Email: support@globaltrack.com</div>
                          <div>Password: GT2024@Support!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Admin Email Address
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder="admin@globaltrack.com"
                      className="pl-10 h-12 border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20"
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-gray-700 font-medium"
                  >
                    Admin Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      placeholder="Enter admin password"
                      className="pl-10 pr-10 h-12 border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20"
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 animate-pulse">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <p className="text-red-700 text-sm font-medium">
                        {error}
                      </p>
                    </div>
                  </div>
                )}

                {success && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-pulse">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <p className="text-green-700 text-sm font-medium">
                        {success}
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600 h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Authenticating...
                      </>
                    ) : (
                      <>
                        <Shield className="mr-2 h-5 w-5" />
                        Sign In to Admin Portal
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  Need assistance?{" "}
                  <Link
                    to="/contact"
                    className="text-royal-600 hover:text-royal-700 font-medium"
                  >
                    Contact IT Support
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-gray-500 mt-6">
            Protected by enterprise security protocols.{" "}
            <Link to="/privacy" className="text-royal-600 hover:text-royal-700">
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Right Side - Admin Features */}
        <div className="hidden lg:block">
          <div className="bg-gradient-to-br from-royal-600 to-royal-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">
                Administrative Control Center
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Comprehensive management tools for system administration, user
                management, analytics, and platform configuration. Secure access
                with advanced monitoring and logging.
              </p>

              <div className="space-y-6">
                {adminFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-200">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      System Status
                    </h4>
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-green-500 text-white">
                        All Systems Operational
                      </Badge>
                      <span className="text-sm text-gray-200">
                        Uptime: 99.9%
                      </span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Settings
                      className="h-6 w-6 text-white animate-spin"
                      style={{ animationDuration: "3s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
