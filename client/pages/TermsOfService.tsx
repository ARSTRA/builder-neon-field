import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Scale,
  Handshake,
  AlertTriangle,
  Shield,
  Globe,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  User,
  Building,
  CreditCard,
  Truck,
  Package,
  ArrowRight,
  Download,
  Star,
  Users,
  Settings,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Overview", icon: <FileText className="h-4 w-4" /> },
    { id: "acceptance", title: "Acceptance", icon: <Handshake className="h-4 w-4" /> },
    { id: "services", title: "Our Services", icon: <Truck className="h-4 w-4" /> },
    { id: "responsibilities", title: "User Responsibilities", icon: <User className="h-4 w-4" /> },
    { id: "payment", title: "Payment Terms", icon: <CreditCard className="h-4 w-4" /> },
    { id: "liability", title: "Liability", icon: <Shield className="h-4 w-4" /> },
    { id: "termination", title: "Termination", icon: <AlertTriangle className="h-4 w-4" /> },
    { id: "contact", title: "Contact", icon: <Mail className="h-4 w-4" /> },
  ];

  const keyTerms = [
    {
      icon: <Scale className="h-12 w-12" />,
      title: "Fair & Transparent",
      description: "Clear, straightforward terms designed to protect both parties fairly.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Handshake className="h-12 w-12" />,
      title: "Mutual Respect",
      description: "Built on partnership principles with respect for all users and stakeholders.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Legal Protection",
      description: "Comprehensive legal framework ensuring security for your business operations.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Global Compliance",
      description: "Adhering to international laws and regulations across all jurisdictions.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8730374/pexels-photo-8730374.jpeg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-gray-900/85 to-orange-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-400/15 to-orange-500/15 rounded-full blur-3xl animate-bounce-slow"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <Scale className="h-20 w-20 text-orange-400" />
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 bg-clip-text text-transparent">
                Terms of
              </span>
              <br />
              <span className="text-white">Service</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
              📋 Clear, fair, and comprehensive terms governing our logistics services. 
              Designed to protect your interests while ensuring exceptional service delivery.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-3 text-lg">
                <CheckCircle className="h-5 w-5 mr-2" />
                Legally Binding
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-3 text-lg">
                <Globe className="h-5 w-5 mr-2" />
                International Law
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-3 text-lg">
                <Shield className="h-5 w-5 mr-2" />
                Mutual Protection
              </Badge>
            </div>

            <div className="text-center">
              <p className="text-orange-300 font-semibold text-lg">
                📅 Effective Date: December 15, 2024 • ⚖️ Version 3.0
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Terms Principles */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Our Service Principles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built on fairness, transparency, and mutual respect for sustainable partnerships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyTerms.map((term, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden">
                  <CardContent className="p-8 text-center relative">
                    <div className={`w-20 h-20 bg-gradient-to-br ${term.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className="text-white">
                        {term.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {term.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {term.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation & Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24 border-0 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg">
                    <CardTitle className="flex items-center">
                      <FileText className="h-6 w-6 mr-2" />
                      Sections
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left px-6 py-4 border-b border-gray-100 hover:bg-orange-50 transition-colors duration-200 flex items-center ${
                          activeSection === section.id ? 'bg-orange-50 text-orange-600 border-r-4 border-orange-600' : 'text-gray-700'
                        }`}
                      >
                        {section.icon}
                        <span className="ml-3 font-medium">{section.title}</span>
                      </button>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8 lg:p-12">
                    {activeSection === "overview" && (
                      <div className="space-y-8">
                        <div>
                          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                            <FileText className="h-8 w-8 mr-3 text-orange-600" />
                            Terms of Service Overview
                          </h2>
                          <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Welcome to ShipNexa.it! These Terms of Service ("Terms") govern your use of our logistics and shipping services. 
                            By using our services, you agree to be bound by these terms and conditions.
                          </p>
                          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">What You Can Expect</h3>
                            <ul className="space-y-2 text-gray-600">
                              <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Professional logistics services worldwide</li>
                              <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Transparent pricing and fair billing practices</li>
                              <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> 24/7 customer support and tracking</li>
                              <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Compliance with international shipping regulations</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "acceptance" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <Handshake className="h-8 w-8 mr-3 text-orange-600" />
                          Acceptance of Terms
                        </h2>
                        <div className="space-y-6">
                          <p className="text-lg text-gray-600 leading-relaxed">
                            By accessing and using ShipNexa.it services, you acknowledge that you have read, understood, 
                            and agree to be bound by these Terms of Service and our Privacy Policy.
                          </p>
                          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                              <Info className="h-6 w-6 mr-2 text-blue-600" />
                              Important Notice
                            </h3>
                            <p className="text-gray-700">
                              If you do not agree to these terms, please do not use our services. 
                              Continued use of our platform constitutes acceptance of any updates to these terms.
                            </p>
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border border-green-200">
                              <CardContent className="p-6">
                                <h4 className="text-lg font-semibold text-green-700 mb-3">✅ By Using Our Services, You Agree To:</h4>
                                <ul className="text-gray-600 space-y-2">
                                  <li>• Provide accurate information</li>
                                  <li>• Use services for legitimate purposes</li>
                                  <li>• Comply with all applicable laws</li>
                                  <li>• Respect intellectual property rights</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-red-200">
                              <CardContent className="p-6">
                                <h4 className="text-lg font-semibold text-red-700 mb-3">❌ You May Not:</h4>
                                <ul className="text-gray-600 space-y-2">
                                  <li>• Use services for illegal activities</li>
                                  <li>• Interfere with platform operations</li>
                                  <li>• Share account credentials</li>
                                  <li>• Violate any terms or policies</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "services" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <Truck className="h-8 w-8 mr-3 text-orange-600" />
                          Our Services
                        </h2>
                        <div className="space-y-6">
                          <p className="text-lg text-gray-600 leading-relaxed">
                            ShipNexa.it provides comprehensive logistics and shipping services designed to meet your business needs.
                          </p>
                          <div className="grid gap-6">
                            {[
                              { 
                                title: "International Shipping", 
                                desc: "Worldwide delivery services with real-time tracking and customs handling",
                                icon: <Globe className="h-6 w-6" />,
                                color: "blue" 
                              },
                              { 
                                title: "Package Tracking", 
                                desc: "Advanced tracking system providing real-time updates and delivery notifications",
                                icon: <Package className="h-6 w-6" />,
                                color: "green" 
                              },
                              { 
                                title: "Supply Chain Management", 
                                desc: "End-to-end logistics solutions including warehousing and distribution",
                                icon: <Building className="h-6 w-6" />,
                                color: "purple" 
                              },
                              { 
                                title: "Customer Support", 
                                desc: "24/7 multilingual support team to assist with all your shipping needs",
                                icon: <Users className="h-6 w-6" />,
                                color: "orange" 
                              },
                            ].map((service, index) => (
                              <Card key={index} className={`border border-${service.color}-200 hover:shadow-md transition-shadow duration-200`}>
                                <CardContent className="p-6">
                                  <div className="flex items-start space-x-4">
                                    <div className={`text-${service.color}-600 mt-1`}>{service.icon}</div>
                                    <div>
                                      <h3 className={`text-xl font-semibold text-${service.color}-600 mb-3`}>{service.title}</h3>
                                      <p className="text-gray-600">{service.desc}</p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "responsibilities" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <User className="h-8 w-8 mr-3 text-orange-600" />
                          User Responsibilities
                        </h2>
                        <div className="space-y-6">
                          <p className="text-lg text-gray-600 leading-relaxed">
                            As a user of our services, you have certain responsibilities to ensure smooth operations and compliance with applicable laws.
                          </p>
                          <div className="grid gap-6">
                            <Card className="border border-blue-200">
                              <CardHeader className="bg-blue-50">
                                <CardTitle className="text-blue-700 flex items-center">
                                  <Info className="h-6 w-6 mr-2" />
                                  Account Management
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="p-6">
                                <ul className="space-y-3 text-gray-600">
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                                    Maintain accurate and up-to-date account information
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                                    Keep login credentials secure and confidential
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                                    Notify us immediately of any unauthorized access
                                  </li>
                                </ul>
                              </CardContent>
                            </Card>

                            <Card className="border border-green-200">
                              <CardHeader className="bg-green-50">
                                <CardTitle className="text-green-700 flex items-center">
                                  <Package className="h-6 w-6 mr-2" />
                                  Shipping Compliance
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="p-6">
                                <ul className="space-y-3 text-gray-600">
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                                    Provide accurate package contents and values
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                                    Comply with international shipping regulations
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                                    Ensure proper packaging and labeling
                                  </li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "payment" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <CreditCard className="h-8 w-8 mr-3 text-orange-600" />
                          Payment Terms
                        </h2>
                        <div className="space-y-6">
                          <p className="text-lg text-gray-600 leading-relaxed">
                            Our payment terms are designed to be fair, transparent, and convenient for all users.
                          </p>
                          <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                            <h3 className="text-xl font-semibold text-green-800 mb-3">Payment Security</h3>
                            <p className="text-green-700">
                              All payments are processed through secure, encrypted channels with industry-standard protection.
                            </p>
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border border-purple-200">
                              <CardContent className="p-6">
                                <h4 className="text-lg font-semibold text-purple-600 mb-4">Accepted Payment Methods</h4>
                                <ul className="space-y-2 text-gray-600">
                                  <li>• Major credit and debit cards</li>
                                  <li>• PayPal and digital wallets</li>
                                  <li>• Bank transfers and wire payments</li>
                                  <li>• Corporate accounts and invoicing</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-orange-200">
                              <CardContent className="p-6">
                                <h4 className="text-lg font-semibold text-orange-600 mb-4">Billing Policies</h4>
                                <ul className="space-y-2 text-gray-600">
                                  <li>• Transparent pricing with no hidden fees</li>
                                  <li>• Payment due upon service completion</li>
                                  <li>• Detailed invoices for all transactions</li>
                                  <li>• Refund policy for service issues</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "liability" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <Shield className="h-8 w-8 mr-3 text-orange-600" />
                          Liability & Insurance
                        </h2>
                        <div className="space-y-6">
                          <p className="text-lg text-gray-600 leading-relaxed">
                            We maintain comprehensive insurance coverage and clear liability terms to protect both parties.
                          </p>
                          <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                            <div className="flex items-center mb-3">
                              <AlertTriangle className="h-6 w-6 mr-2 text-yellow-600" />
                              <h3 className="text-xl font-semibold text-yellow-800">Important Notice</h3>
                            </div>
                            <p className="text-yellow-700">
                              Our liability is limited to the declared value of shipped goods or actual damages, whichever is lower.
                            </p>
                          </div>
                          <div className="grid gap-4">
                            {[
                              "Comprehensive insurance coverage for all shipments",
                              "Protection against loss, damage, and delays",
                              "Clear claim procedures and timely processing",
                              "Limitation of liability as per industry standards",
                            ].map((item, index) => (
                              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                                <Shield className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "termination" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <AlertTriangle className="h-8 w-8 mr-3 text-orange-600" />
                          Account Termination
                        </h2>
                        <div className="space-y-6">
                          <p className="text-lg text-gray-600 leading-relaxed">
                            Both parties may terminate the service agreement under certain conditions. Here's what you need to know:
                          </p>
                          <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border border-blue-200">
                              <CardHeader className="bg-blue-50">
                                <CardTitle className="text-blue-700">User-Initiated Termination</CardTitle>
                              </CardHeader>
                              <CardContent className="p-6">
                                <ul className="space-y-3 text-gray-600">
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                                    Cancel services at any time with 30 days notice
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                                    Complete pending shipments before termination
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                                    Data export available upon request
                                  </li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-red-200">
                              <CardHeader className="bg-red-50">
                                <CardTitle className="text-red-700">Service-Initiated Termination</CardTitle>
                              </CardHeader>
                              <CardContent className="p-6">
                                <ul className="space-y-3 text-gray-600">
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-5 w-5 mr-3 mt-0.5 text-red-500 flex-shrink-0" />
                                    Violation of terms and conditions
                                  </li>
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-5 w-5 mr-3 mt-0.5 text-red-500 flex-shrink-0" />
                                    Fraudulent or illegal activities
                                  </li>
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-5 w-5 mr-3 mt-0.5 text-red-500 flex-shrink-0" />
                                    Non-payment of outstanding fees
                                  </li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "contact" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <Mail className="h-8 w-8 mr-3 text-orange-600" />
                          Legal Contact Information
                        </h2>
                        <div className="space-y-6">
                          <p className="text-lg text-gray-600 leading-relaxed">
                            For questions about these Terms of Service or legal matters, please contact our legal department.
                          </p>
                          <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border border-orange-200 hover:shadow-md transition-shadow duration-200">
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                  <Mail className="h-6 w-6 mr-2 text-orange-600" />
                                  Legal Department
                                </h3>
                                <p className="text-gray-600 mb-4">For terms and legal inquiries</p>
                                <Button className="bg-orange-600 hover:bg-orange-700 w-full">
                                  legal@shipnexa.it
                                </Button>
                              </CardContent>
                            </Card>
                            <Card className="border border-blue-200 hover:shadow-md transition-shadow duration-200">
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                  <Building className="h-6 w-6 mr-2 text-blue-600" />
                                  Business Address
                                </h3>
                                <p className="text-gray-600 mb-4">Official registered address</p>
                                <div className="text-sm text-gray-600">
                                  <p>ShipNexa.it Legal Department</p>
                                  <p>1250 Broadway, Suite 3000</p>
                                  <p>New York, NY 10001, USA</p>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              By proceeding, you agree to these terms and join thousands of satisfied customers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg"
              >
                Accept Terms & Continue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
