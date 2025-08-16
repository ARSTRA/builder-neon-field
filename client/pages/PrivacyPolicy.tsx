import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Eye,
  Lock,
  FileText,
  Users,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Globe,
  Database,
  Settings,
  AlertTriangle,
  Heart,
  UserCheck,
  Download,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Overview", icon: <Eye className="h-4 w-4" /> },
    { id: "collection", title: "Data Collection", icon: <Database className="h-4 w-4" /> },
    { id: "usage", title: "Data Usage", icon: <Settings className="h-4 w-4" /> },
    { id: "sharing", title: "Data Sharing", icon: <Share2 className="h-4 w-4" /> },
    { id: "security", title: "Security", icon: <Shield className="h-4 w-4" /> },
    { id: "rights", title: "Your Rights", icon: <UserCheck className="h-4 w-4" /> },
    { id: "contact", title: "Contact Us", icon: <Mail className="h-4 w-4" /> },
  ];

  const privacyPrinciples = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Data Protection",
      description: "We implement industry-leading security measures to protect your personal information.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Eye className="h-12 w-12" />,
      title: "Transparency",
      description: "Clear communication about what data we collect and how we use it.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <UserCheck className="h-12 w-12" />,
      title: "User Control",
      description: "You have complete control over your data with easy management tools.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Trust & Respect",
      description: "Building lasting relationships through respect for your privacy preferences.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/30965500/pexels-photo-30965500.jpeg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-indigo-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400/15 to-blue-500/15 rounded-full blur-3xl animate-bounce-slow"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <Shield className="h-20 w-20 text-cyan-400" />
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Privacy
              </span>
              <br />
              <span className="text-white">Policy</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
              🔒 Your privacy is our priority. Learn how we protect, manage, and respect your personal data 
              with complete transparency and industry-leading security measures.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-3 text-lg">
                <CheckCircle className="h-5 w-5 mr-2" />
                GDPR Compliant
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-3 text-lg">
                <Shield className="h-5 w-5 mr-2" />
                ISO 27001 Certified
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-3 text-lg">
                <Globe className="h-5 w-5 mr-2" />
                Global Standards
              </Badge>
            </div>

            <div className="text-center">
              <p className="text-cyan-300 font-semibold text-lg">
                📅 Last Updated: December 15, 2024 • 🌐 Effective Worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built on trust, transparency, and respect for your digital rights
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyPrinciples.map((principle, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden">
                  <CardContent className="p-8 text-center relative">
                    <div className={`w-20 h-20 bg-gradient-to-br ${principle.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className="text-white">
                        {principle.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {principle.description}
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
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
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
                        className={`w-full text-left px-6 py-4 border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200 flex items-center ${
                          activeSection === section.id ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : 'text-gray-700'
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
                            <Eye className="h-8 w-8 mr-3 text-blue-600" />
                            Privacy Policy Overview
                          </h2>
                          <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            At ShipNexa.it, we are committed to protecting your privacy and ensuring the security of your personal information. 
                            This Privacy Policy explains how we collect, use, process, and safeguard your data when you use our logistics services.
                          </p>
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Highlights</h3>
                            <ul className="space-y-2 text-gray-600">
                              <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> We only collect data necessary for our services</li>
                              <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Your data is encrypted and securely stored</li>
                              <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> We never sell your personal information</li>
                              <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> You have full control over your data</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "collection" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <Database className="h-8 w-8 mr-3 text-blue-600" />
                          Data Collection
                        </h2>
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Information We Collect</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <Card className="border border-blue-200 hover:shadow-md transition-shadow duration-200">
                                <CardContent className="p-6">
                                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                                    Personal Information
                                  </h4>
                                  <ul className="text-gray-600 space-y-1">
                                    <li>• Full name and contact details</li>
                                    <li>• Email address and phone number</li>
                                    <li>• Billing and shipping addresses</li>
                                    <li>• Company information (if applicable)</li>
                                  </ul>
                                </CardContent>
                              </Card>
                              <Card className="border border-purple-200 hover:shadow-md transition-shadow duration-200">
                                <CardContent className="p-6">
                                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                    <Settings className="h-5 w-5 mr-2 text-purple-600" />
                                    Usage Data
                                  </h4>
                                  <ul className="text-gray-600 space-y-1">
                                    <li>• Service usage patterns</li>
                                    <li>• Device and browser information</li>
                                    <li>• IP address and location data</li>
                                    <li>• Cookies and tracking data</li>
                                  </ul>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "usage" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <Settings className="h-8 w-8 mr-3 text-blue-600" />
                          How We Use Your Data
                        </h2>
                        <div className="space-y-6">
                          <p className="text-lg text-gray-600 leading-relaxed">
                            We use your personal information to provide, maintain, and improve our logistics services. 
                            Here's how we utilize your data:
                          </p>
                          <div className="grid gap-6">
                            {[
                              { title: "Service Delivery", desc: "Processing shipments, tracking packages, and managing logistics operations", color: "blue" },
                              { title: "Customer Support", desc: "Providing assistance, resolving issues, and improving user experience", color: "green" },
                              { title: "Account Management", desc: "Maintaining your account, processing payments, and sending notifications", color: "purple" },
                              { title: "Service Improvement", desc: "Analyzing usage patterns to enhance our services and develop new features", color: "orange" },
                            ].map((item, index) => (
                              <Card key={index} className={`border border-${item.color}-200 hover:shadow-md transition-shadow duration-200`}>
                                <CardContent className="p-6">
                                  <h3 className={`text-xl font-semibold text-${item.color}-600 mb-3`}>{item.title}</h3>
                                  <p className="text-gray-600">{item.desc}</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "sharing" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <Share2 className="h-8 w-8 mr-3 text-blue-600" />
                          Data Sharing & Disclosure
                        </h2>
                        <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 mb-6">
                          <div className="flex items-center mb-3">
                            <AlertTriangle className="h-6 w-6 mr-2 text-red-600" />
                            <h3 className="text-xl font-semibold text-red-800">Important Notice</h3>
                          </div>
                          <p className="text-red-700 font-medium">
                            We DO NOT sell, rent, or trade your personal information to third parties for marketing purposes.
                          </p>
                        </div>
                        <div className="space-y-6">
                          <h3 className="text-2xl font-semibold text-gray-800">Limited Sharing Scenarios</h3>
                          <div className="grid gap-4">
                            {[
                              "Trusted service partners for logistics operations",
                              "Legal compliance and regulatory requirements",
                              "Protection of rights, property, or safety",
                              "Business transfers (with your consent)",
                            ].map((item, index) => (
                              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                                <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "security" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <Shield className="h-8 w-8 mr-3 text-blue-600" />
                          Security Measures
                        </h2>
                        <div className="space-y-6">
                          <p className="text-lg text-gray-600 leading-relaxed">
                            We implement comprehensive security measures to protect your personal information from unauthorized access, 
                            alteration, disclosure, or destruction.
                          </p>
                          <div className="grid md:grid-cols-2 gap-6">
                            {[
                              { title: "Encryption", desc: "End-to-end encryption for data transmission and storage", icon: <Lock className="h-6 w-6" /> },
                              { title: "Access Controls", desc: "Strict access controls and authentication protocols", icon: <UserCheck className="h-6 w-6" /> },
                              { title: "Regular Audits", desc: "Continuous security audits and vulnerability assessments", icon: <Eye className="h-6 w-6" /> },
                              { title: "Secure Infrastructure", desc: "Industry-standard secure hosting and infrastructure", icon: <Globe className="h-6 w-6" /> },
                            ].map((measure, index) => (
                              <Card key={index} className="border border-green-200 hover:shadow-md transition-shadow duration-200">
                                <CardContent className="p-6">
                                  <div className="flex items-center mb-3">
                                    <div className="text-green-600 mr-3">{measure.icon}</div>
                                    <h3 className="text-lg font-semibold text-gray-800">{measure.title}</h3>
                                  </div>
                                  <p className="text-gray-600">{measure.desc}</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "rights" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <UserCheck className="h-8 w-8 mr-3 text-blue-600" />
                          Your Privacy Rights
                        </h2>
                        <div className="space-y-6">
                          <p className="text-lg text-gray-600 leading-relaxed">
                            You have complete control over your personal data. Here are your rights:
                          </p>
                          <div className="grid gap-4">
                            {[
                              { right: "Access", desc: "Request a copy of your personal data we hold" },
                              { right: "Rectification", desc: "Correct inaccurate or incomplete information" },
                              { right: "Erasure", desc: "Request deletion of your personal data" },
                              { right: "Portability", desc: "Transfer your data to another service provider" },
                              { right: "Objection", desc: "Object to processing of your personal data" },
                              { right: "Restriction", desc: "Limit how we process your information" },
                            ].map((item, index) => (
                              <Card key={index} className="border border-purple-200 hover:shadow-md transition-shadow duration-200">
                                <CardContent className="p-6">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h3 className="text-lg font-semibold text-purple-600 mb-2">Right to {item.right}</h3>
                                      <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                    <Button variant="outline" size="sm" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                                      Exercise
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "contact" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <Mail className="h-8 w-8 mr-3 text-blue-600" />
                          Contact Our Privacy Team
                        </h2>
                        <div className="space-y-6">
                          <p className="text-lg text-gray-600 leading-relaxed">
                            Have questions about this Privacy Policy or want to exercise your rights? Our dedicated privacy team is here to help.
                          </p>
                          <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border border-blue-200 hover:shadow-md transition-shadow duration-200">
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                  <Mail className="h-6 w-6 mr-2 text-blue-600" />
                                  Email Us
                                </h3>
                                <p className="text-gray-600 mb-4">For privacy-related inquiries and data requests</p>
                                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                                  privacy@shipnexa.it
                                </Button>
                              </CardContent>
                            </Card>
                            <Card className="border border-purple-200 hover:shadow-md transition-shadow duration-200">
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                  <Phone className="h-6 w-6 mr-2 text-purple-600" />
                                  Call Us
                                </h3>
                                <p className="text-gray-600 mb-4">Speak directly with our privacy specialists</p>
                                <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 w-full">
                                  +1 (555) 123-PRIVACY
                                </Button>
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
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              We're committed to transparency and protecting your rights. Contact us anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg"
              >
                Contact Privacy Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
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
