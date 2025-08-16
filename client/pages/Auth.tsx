import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  Phone,
  Building,
  Truck,
  Globe,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShipNexaLogo from "@/components/ui/shipnexa-logo";
import { useToast } from "@/hooks/use-toast";
import { validateAdminCredentials } from "@shared/admin-config";

export default function Auth() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Check if this is an admin account using centralized configuration
    const validAdmin = validateAdminCredentials(loginData.email, loginData.password);

    if (validAdmin) {
      // Admin login
      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("adminEmail", validAdmin.email);
      localStorage.setItem("adminRole", validAdmin.role);
      localStorage.setItem("adminLoginTime", new Date().toISOString());

      toast({
        title: "Admin Access Granted",
        description: `Welcome ${validAdmin.role} to ShipNexa Admin Portal`,
      });
      navigate("/unified-admin");
      setIsLoading(false);
      return;
    }

    // Simulate regular user API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (loginData.email && loginData.password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", loginData.email);
      toast({
        title: "Welcome back!",
        description: "You have been successfully logged in.",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Login failed",
        description: "Please enter valid credentials.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (signupData.email && signupData.password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", signupData.email);
      toast({
        title: "Account created!",
        description:
          "Welcome to ShipNexa.it. Your account has been created successfully.",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Signup failed",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  const benefits = [
    {
      icon: <Package className="h-6 w-6 text-shipblue-600" />,
      title: "Real-Time Tracking",
      description: "Monitor your shipments 24/7 with live GPS updates",
    },
    {
      icon: <Shield className="h-6 w-6 text-shipblue-600" />,
      title: "Secure Platform",
      description: "Enterprise-grade security protecting your data",
    },
    {
      icon: <Globe className="h-6 w-6 text-shipblue-600" />,
      title: "Global Network",
      description: "Access to 120+ countries worldwide",
    },
    {
      icon: <Truck className="h-6 w-6 text-shipblue-600" />,
      title: "Multi-Modal Shipping",
      description: "Air, sea, and ground transportation options",
    },
  ];

  const stats = [
    { label: "Countries Served", value: "120+" },
    { label: "Happy Customers", value: "50K+" },
    { label: "On-Time Delivery", value: "99.8%" },
    { label: "Support", value: "24/7" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-shipblue-50 via-white to-ocean-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-shipblue-900/5 via-transparent to-ocean-900/5"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-shipblue-400/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-ocean-400/10 rounded-full blur-lg"></div>

      <div className="relative min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Branding & Benefits */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <Link
                to="/"
                className="inline-flex justify-center lg:justify-start"
              >
                <ShipNexaLogo size="xl" variant="full" />
              </Link>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Welcome to the Future of
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-shipblue-600 to-ocean-600">
                    Italian Logistics
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Join thousands of businesses already using ShipNexa.it for
                  their shipping needs. Experience next-generation logistics
                  with Italian excellence.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg"
                >
                  <div className="text-2xl font-bold text-shipblue-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white/30 backdrop-blur-sm rounded-xl border border-white/20"
                >
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className="w-full max-w-md mx-auto">
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-md">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Get Started Today
                </CardTitle>
                <p className="text-gray-600">Access your logistics dashboard</p>
              </CardHeader>

              <CardContent className="p-6">
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="login" className="font-semibold">
                      Login
                    </TabsTrigger>
                    <TabsTrigger value="signup" className="font-semibold">
                      Sign Up
                    </TabsTrigger>
                  </TabsList>

                  {/* Login Tab */}
                  <TabsContent value="login" className="space-y-6">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="login-email"
                            type="email"
                            placeholder="Enter your email"
                            value={loginData.email}
                            onChange={(e) =>
                              setLoginData({
                                ...loginData,
                                email: e.target.value,
                              })
                            }
                            className="pl-10 py-6 text-base"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="login-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={loginData.password}
                            onChange={(e) =>
                              setLoginData({
                                ...loginData,
                                password: e.target.value,
                              })
                            }
                            className="pl-10 pr-10 py-6 text-base"
                            required
                          />
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

                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-gray-600">Remember me</span>
                        </label>
                        <Link
                          to="/forgot-password"
                          className="text-shipblue-600 hover:text-shipblue-700"
                        >
                          Forgot password?
                        </Link>
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-6 text-base font-semibold bg-gradient-to-r from-shipblue-600 to-ocean-600 hover:from-shipblue-700 hover:to-ocean-700 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {isLoading ? "Signing in..." : "Sign In"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </TabsContent>

                  {/* Signup Tab */}
                  <TabsContent value="signup" className="space-y-6">
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input
                              id="first-name"
                              placeholder="First name"
                              value={signupData.firstName}
                              onChange={(e) =>
                                setSignupData({
                                  ...signupData,
                                  firstName: e.target.value,
                                })
                              }
                              className="pl-10 py-6"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input
                            id="last-name"
                            placeholder="Last name"
                            value={signupData.lastName}
                            onChange={(e) =>
                              setSignupData({
                                ...signupData,
                                lastName: e.target.value,
                              })
                            }
                            className="py-6"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="signup-email"
                            type="email"
                            placeholder="Enter your email"
                            value={signupData.email}
                            onChange={(e) =>
                              setSignupData({
                                ...signupData,
                                email: e.target.value,
                              })
                            }
                            className="pl-10 py-6"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+39 xxx xxx xxxx"
                            value={signupData.phone}
                            onChange={(e) =>
                              setSignupData({
                                ...signupData,
                                phone: e.target.value,
                              })
                            }
                            className="pl-10 py-6"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="company"
                            placeholder="Company name"
                            value={signupData.company}
                            onChange={(e) =>
                              setSignupData({
                                ...signupData,
                                company: e.target.value,
                              })
                            }
                            className="pl-10 py-6"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="signup-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            value={signupData.password}
                            onChange={(e) =>
                              setSignupData({
                                ...signupData,
                                password: e.target.value,
                              })
                            }
                            className="pl-10 pr-10 py-6"
                            required
                          />
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

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">
                          Confirm Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="confirm-password"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={signupData.confirmPassword}
                            onChange={(e) =>
                              setSignupData({
                                ...signupData,
                                confirmPassword: e.target.value,
                              })
                            }
                            className="pl-10 pr-10 py-6"
                            required
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 text-sm">
                        <input
                          type="checkbox"
                          required
                          className="mt-1 rounded"
                        />
                        <span className="text-gray-600">
                          I agree to the{" "}
                          <Link
                            to="/terms"
                            className="text-shipblue-600 hover:text-shipblue-700"
                          >
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link
                            to="/privacy"
                            className="text-shipblue-600 hover:text-shipblue-700"
                          >
                            Privacy Policy
                          </Link>
                        </span>
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-6 text-base font-semibold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {isLoading ? "Creating account..." : "Create Account"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>

                <div className="text-center mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Need help?{" "}
                    <Link
                      to="/contact"
                      className="text-shipblue-600 hover:text-shipblue-700 font-semibold"
                    >
                      Contact Support
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
