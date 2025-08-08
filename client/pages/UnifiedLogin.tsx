import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Package,
  Shield,
  CheckCircle,
  User,
  Users,
  BarChart3,
  Settings,
  AlertTriangle,
  CreditCard,
  Truck,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { validateAdminCredentials } from "@shared/admin-config";

type AccountType = "user" | "admin";

export default function UnifiedLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [accountType, setAccountType] = useState<AccountType>("user");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Pre-select admin account type if accessing admin route
  useEffect(() => {
    if (location.pathname.includes('/admin')) {
      setAccountType('admin');
    }
  }, [location.pathname]);

  // Admin credentials from AdminLogin.tsx
  const adminCredentials = [
    {
      email: "admin@globaltrack.com",
      password: "admin123",
      role: "Super Admin",
    },
    { email: "admin@gt.com", password: "admin123", role: "Admin" },
    {
      email: "superadmin@globaltrack.com",
      password: "superadmin123",
      role: "Super Admin",
    },
    {
      email: "manager@globaltrack.com",
      password: "manager123",
      role: "Manager",
    },
    {
      email: "support@globaltrack.com",
      password: "support123",
      role: "Support Admin",
    },
  ];

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

    const email = formData.email.trim().toLowerCase();
    const password = formData.password.trim();

    if (accountType === "admin") {
      // Admin login logic
      const validAdmin = adminCredentials.find(
        (admin) =>
          admin.email.toLowerCase() === email && admin.password === password,
      );

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

        setTimeout(() => {
          navigate("/admin");
        }, 1000);
      } else {
        setError(
          "Invalid admin credentials. Please check your email and password and try again.",
        );
        toast({
          title: "Login Failed",
          description: "Invalid admin credentials. Please verify your email and password.",
          variant: "destructive",
        });
      }
    } else {
      // User login logic
      if (formData.email && formData.password) {
        // Store user session (in real app, handle JWT tokens)
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", formData.email);
        
        setSuccess("Login successful! Redirecting to dashboard...");
        
        toast({
          title: "Login Successful",
          description: "Welcome to GlobalTrack Logistics!",
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setError("Please enter valid credentials");
      }
    }

    setIsLoading(false);
  };

  const userBenefits = [
    {
      icon: <Package className="h-6 w-6 text-royal-600" />,
      title: "Track Shipments",
      description: "Real-time tracking for all your packages",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-royal-600" />,
      title: "Manage Payments",
      description: "Secure payment processing and billing",
    },
    {
      icon: <Truck className="h-6 w-6 text-royal-600" />,
      title: "Logistics Services",
      description: "Access to premium logistics features",
    },
    {
      icon: <Globe className="h-6 w-6 text-royal-600" />,
      title: "Global Network",
      description: "Worldwide shipping and delivery options",
    },
  ];

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
        {/* Left Side - Login Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                accountType === "admin" 
                  ? "bg-gradient-to-r from-royal-600 to-orange-500" 
                  : "bg-royal-600"
              }`}>
                {accountType === "admin" ? (
                  <Shield className="h-6 w-6 text-white" />
                ) : (
                  <Package className="h-6 w-6 text-white" />
                )}
              </div>
              <div>
                <span className="text-2xl font-bold text-royal-600">
                  GlobalTrack
                </span>
                <span className="text-xl text-orange-500 ml-1">
                  {accountType === "admin" ? "Admin" : "Logistics"}
                </span>
              </div>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {accountType === "admin" ? "Admin Portal" : "Welcome Back"}
            </h1>
            <p className="text-gray-600">
              {accountType === "admin" 
                ? "Secure access to administrative controls and system management"
                : "Sign in to your account to manage your shipments"
              }
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader className="pb-4">
              {/* Account Type Selector */}
              <div className="mb-4">
                <Tabs value={accountType} onValueChange={(value) => setAccountType(value as AccountType)}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="user" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Customer</span>
                    </TabsTrigger>
                    <TabsTrigger value="admin" className="flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>Administrator</span>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <CardTitle className="text-center text-xl text-gray-800 flex items-center justify-center">
                {accountType === "admin" ? (
                  <>
                    <Shield className="h-5 w-5 mr-2 text-royal-600" />
                    Administrator Sign In
                  </>
                ) : (
                  <>
                    <User className="h-5 w-5 mr-2 text-royal-600" />
                    Customer Sign In
                  </>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Security Notice for Admin */}
              {accountType === "admin" && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-amber-800">
                        Restricted Access
                      </p>
                      <p className="text-xs text-amber-700 mt-1">
                        This portal is for authorized administrators only. All access is logged and monitored.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    {accountType === "admin" ? "Admin Email Address" : "Email Address"}
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
                      placeholder={
                        accountType === "admin" 
                          ? "admin@globaltrack.com" 
                          : "Enter your email"
                      }
                      className="pl-10 h-12 border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20"
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-medium">
                    {accountType === "admin" ? "Admin Password" : "Password"}
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
                      placeholder={
                        accountType === "admin" 
                          ? "Enter admin password" 
                          : "Enter your password"
                      }
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
                      <p className="text-red-700 text-sm font-medium">{error}</p>
                    </div>
                  </div>
                )}

                {success && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-pulse">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <p className="text-green-700 text-sm font-medium">{success}</p>
                    </div>
                  </div>
                )}

                {accountType === "user" && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-royal-600 focus:ring-royal-500"
                      />
                      <span className="text-gray-600">Remember me</span>
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-royal-600 hover:text-royal-700 font-medium"
                    >
                      Forgot password?
                    </Link>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600 h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {accountType === "admin" ? "Authenticating..." : "Signing In..."}
                    </>
                  ) : (
                    <>
                      {accountType === "admin" ? (
                        <Shield className="mr-2 h-5 w-5" />
                      ) : (
                        <User className="mr-2 h-5 w-5" />
                      )}
                      {accountType === "admin" ? "Sign In to Admin Portal" : "Sign In"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>


              {accountType === "user" && (
                <>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="h-12 border-gray-300 hover:bg-gray-50"
                    >
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Google
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 border-gray-300 hover:bg-gray-50"
                    >
                      <svg className="h-5 w-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </Button>
                  </div>
                </>
              )}

              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  {accountType === "admin" ? (
                    <>
                      Need assistance?{" "}
                      <Link
                        to="/contact"
                        className="text-royal-600 hover:text-royal-700 font-medium"
                      >
                        Contact IT Support
                      </Link>
                    </>
                  ) : (
                    <>
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="text-royal-600 hover:text-royal-700 font-medium"
                      >
                        Sign up here
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-gray-500 mt-6">
            {accountType === "admin" ? (
              <>
                Protected by enterprise security protocols.{" "}
                <Link to="/privacy" className="text-royal-600 hover:text-royal-700">
                  Privacy Policy
                </Link>
              </>
            ) : (
              <>
                By signing in, you agree to our{" "}
                <Link to="/terms" className="text-royal-600 hover:text-royal-700">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-royal-600 hover:text-royal-700">
                  Privacy Policy
                </Link>
              </>
            )}
          </p>
        </div>

        {/* Right Side - Features/Benefits */}
        <div className="hidden lg:block">
          <div className="bg-gradient-to-br from-royal-600 to-royal-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className={`absolute inset-0 bg-cover bg-center opacity-20 ${
              accountType === "admin"
                ? "bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')]"
                : "bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')]"
            }`}></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">
                {accountType === "admin" 
                  ? "Administrative Control Center"
                  : "Manage Your Shipments Like a Pro"
                }
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {accountType === "admin"
                  ? "Comprehensive management tools for system administration, user management, analytics, and platform configuration. Secure access with advanced monitoring and logging."
                  : "Access your personalized dashboard to track packages, manage payments, and get real-time updates on all your logistics needs."
                }
              </p>

              <div className="space-y-6">
                {(accountType === "admin" ? adminFeatures : userBenefits).map((feature, index) => (
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
                {accountType === "admin" ? (
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">System Status</h4>
                      <div className="flex items-center space-x-4">
                        <Badge className="bg-green-500 text-white">
                          All Systems Operational
                        </Badge>
                        <span className="text-sm text-gray-200">Uptime: 99.9%</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Settings className="h-6 w-6 text-white animate-spin" style={{ animationDuration: "3s" }} />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                        alt="User"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108755-2616b332c3f2?w=40&h=40&fit=crop&crop=face"
                        alt="User"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                        alt="User"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Join 50,000+ happy customers</p>
                      <p className="text-sm text-gray-200">Trusted by businesses worldwide</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
