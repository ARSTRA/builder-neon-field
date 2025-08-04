import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Building, Phone, MapPin, ArrowRight, Package, CheckCircle, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function Register() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    
    // Business Information
    companyName: "",
    businessType: "",
    country: "",
    city: "",
    address: "",
    
    // Preferences
    acceptTerms: false,
    acceptMarketing: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};
    
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone) newErrors.phone = "Phone number is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (step === 2) {
      if (!formData.companyName) newErrors.companyName = "Company name is required";
      if (!formData.businessType) newErrors.businessType = "Business type is required";
      if (!formData.country) newErrors.country = "Country is required";
      if (!formData.city) newErrors.city = "City is required";
    }
    
    if (step === 3) {
      if (!formData.acceptTerms) newErrors.acceptTerms = "You must accept the terms and conditions";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Store user session
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", formData.email);
    
    navigate("/dashboard");
    setIsLoading(false);
  };

  const steps = [
    { number: 1, title: "Personal Info", description: "Basic information" },
    { number: 2, title: "Business Details", description: "Company information" },
    { number: 3, title: "Verification", description: "Terms and preferences" }
  ];

  const benefits = [
    {
      icon: <Package className="h-6 w-6 text-royal-600" />,
      title: "Smart Tracking",
      description: "AI-powered shipment tracking and notifications"
    },
    {
      icon: <Shield className="h-6 w-6 text-royal-600" />,
      title: "Secure Payments",
      description: "Bank-grade security for all transactions"
    },
    {
      icon: <Globe className="h-6 w-6 text-royal-600" />,
      title: "Global Network",
      description: "Ship to 120+ countries worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <Package className="h-8 w-8 text-royal-600" />
            <div>
              <span className="text-2xl font-bold text-royal-600">GlobalTrack</span>
              <span className="text-xl text-orange-500 ml-1">Logistics</span>
            </div>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Create Your Account</h1>
          <p className="text-gray-600">Join thousands of businesses using GlobalTrack for their logistics needs</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Progress Steps */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0 bg-white sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Registration Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {steps.map((step) => (
                  <div key={step.number} className={`flex items-center space-x-3 p-3 rounded-lg ${
                    currentStep >= step.number ? 'bg-royal-50 border border-royal-200' : 'bg-gray-50'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      currentStep > step.number 
                        ? 'bg-green-500 text-white' 
                        : currentStep === step.number 
                          ? 'bg-royal-600 text-white' 
                          : 'bg-gray-300 text-gray-600'
                    }`}>
                      {currentStep > step.number ? <CheckCircle className="h-5 w-5" /> : step.number}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{step.title}</div>
                      <div className="text-sm text-gray-600">{step.description}</div>
                    </div>
                  </div>
                ))}

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold text-gray-800 mb-4">Why Choose GlobalTrack?</h3>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="p-1 bg-royal-100 rounded">
                          {benefit.icon}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 text-sm">{benefit.title}</div>
                          <div className="text-xs text-gray-600">{benefit.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  {currentStep === 1 && "Personal Information"}
                  {currentStep === 2 && "Business Details"}
                  {currentStep === 3 && "Final Steps"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name *</Label>
                          <div className="relative">
                            <Input
                              id="firstName"
                              required
                              value={formData.firstName}
                              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                              placeholder="Enter your first name"
                              className="pl-10 h-12 border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20"
                            />
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                          {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name *</Label>
                          <div className="relative">
                            <Input
                              id="lastName"
                              required
                              value={formData.lastName}
                              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                              placeholder="Enter your last name"
                              className="pl-10 h-12 border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20"
                            />
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                          {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                        <div className="relative">
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            placeholder="Enter your email address"
                            className="pl-10 h-12 border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20"
                          />
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number *</Label>
                        <div className="relative">
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            placeholder="+1 (555) 123-4567"
                            className="pl-10 h-12 border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20"
                          />
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                        {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="password" className="text-gray-700 font-medium">Password *</Label>
                          <div className="relative">
                            <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              required
                              value={formData.password}
                              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                              placeholder="Create a strong password"
                              className="pl-10 pr-10 h-12 border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20"
                            />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">Confirm Password *</Label>
                          <div className="relative">
                            <Input
                              id="confirmPassword"
                              type={showConfirmPassword ? "text" : "password"}
                              required
                              value={formData.confirmPassword}
                              onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                              placeholder="Confirm your password"
                              className="pl-10 pr-10 h-12 border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20"
                            />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                          {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Business Information */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="text-gray-700 font-medium">Company Name *</Label>
                        <div className="relative">
                          <Input
                            id="companyName"
                            required
                            value={formData.companyName}
                            onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                            placeholder="Enter your company name"
                            className="pl-10 h-12 border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20"
                          />
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                        {errors.companyName && <p className="text-red-600 text-sm">{errors.companyName}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="businessType" className="text-gray-700 font-medium">Business Type *</Label>
                        <Select value={formData.businessType} onValueChange={(value) => setFormData(prev => ({ ...prev, businessType: value }))}>
                          <SelectTrigger className="h-12 border-gray-300 focus:border-royal-500">
                            <SelectValue placeholder="Select your business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="retail">Retail/E-commerce</SelectItem>
                            <SelectItem value="wholesale">Wholesale/Distribution</SelectItem>
                            <SelectItem value="import-export">Import/Export</SelectItem>
                            <SelectItem value="logistics">Logistics Provider</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.businessType && <p className="text-red-600 text-sm">{errors.businessType}</p>}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="country" className="text-gray-700 font-medium">Country *</Label>
                          <Select value={formData.country} onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}>
                            <SelectTrigger className="h-12 border-gray-300 focus:border-royal-500">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="ca">Canada</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="de">Germany</SelectItem>
                              <SelectItem value="fr">France</SelectItem>
                              <SelectItem value="au">Australia</SelectItem>
                              <SelectItem value="sg">Singapore</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.country && <p className="text-red-600 text-sm">{errors.country}</p>}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="city" className="text-gray-700 font-medium">City *</Label>
                          <div className="relative">
                            <Input
                              id="city"
                              required
                              value={formData.city}
                              onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                              placeholder="Enter your city"
                              className="pl-10 h-12 border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20"
                            />
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                          {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-gray-700 font-medium">Business Address</Label>
                        <div className="relative">
                          <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                            placeholder="Enter your business address"
                            className="pl-10 h-12 border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20"
                          />
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Terms and Verification */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Summary</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Phone:</strong> {formData.phone}</p>
                          </div>
                          <div>
                            <p><strong>Company:</strong> {formData.companyName}</p>
                            <p><strong>Business Type:</strong> {formData.businessType}</p>
                            <p><strong>Location:</strong> {formData.city}, {formData.country}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="acceptTerms"
                            checked={formData.acceptTerms}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, acceptTerms: !!checked }))}
                            className="mt-1"
                          />
                          <Label htmlFor="acceptTerms" className="text-sm text-gray-700 leading-relaxed">
                            I agree to the{" "}
                            <Link to="/terms" className="text-royal-600 hover:text-royal-700 font-medium">
                              Terms of Service
                            </Link>
                            {" "}and{" "}
                            <Link to="/privacy" className="text-royal-600 hover:text-royal-700 font-medium">
                              Privacy Policy
                            </Link>
                            . I understand that my account will be reviewed for verification. *
                          </Label>
                        </div>
                        {errors.acceptTerms && <p className="text-red-600 text-sm ml-6">{errors.acceptTerms}</p>}

                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="acceptMarketing"
                            checked={formData.acceptMarketing}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, acceptMarketing: !!checked }))}
                            className="mt-1"
                          />
                          <Label htmlFor="acceptMarketing" className="text-sm text-gray-700 leading-relaxed">
                            I would like to receive updates about new features, shipping tips, and special offers from GlobalTrack Logistics.
                          </Label>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div className="text-sm">
                            <p className="font-medium text-blue-800">Account Verification</p>
                            <p className="text-blue-700">
                              Your account will be verified within 24 hours. You'll receive an email confirmation once approved.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevStep}
                        className="px-8 py-3"
                      >
                        Previous
                      </Button>
                    )}
                    
                    {currentStep < 3 ? (
                      <Button
                        type="button"
                        onClick={handleNextStep}
                        className="ml-auto bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600 px-8 py-3"
                      >
                        Next Step
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="ml-auto bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600 px-8 py-3"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Creating Account...
                          </>
                        ) : (
                          <>
                            Create Account
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </form>

                <div className="text-center mt-6 pt-6 border-t">
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-royal-600 hover:text-royal-700 font-medium">
                      Sign in here
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
