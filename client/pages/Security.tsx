import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Eye,
  Server,
  FileText,
  AlertTriangle,
  CheckCircle,
  Users,
  Globe,
  Zap,
  Database,
  Wifi,
  Key,
  UserCheck,
  Settings,
  Monitor,
  Clock,
  Award,
  Star,
  ArrowRight,
  Download,
  Mail,
  Phone,
  Bug,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Security() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Overview", icon: <Shield className="h-4 w-4" /> },
    { id: "infrastructure", title: "Infrastructure", icon: <Server className="h-4 w-4" /> },
    { id: "data", title: "Data Protection", icon: <Database className="h-4 w-4" /> },
    { id: "access", title: "Access Control", icon: <Key className="h-4 w-4" /> },
    { id: "monitoring", title: "Monitoring", icon: <Monitor className="h-4 w-4" /> },
    { id: "compliance", title: "Compliance", icon: <FileText className="h-4 w-4" /> },
    { id: "incident", title: "Incident Response", icon: <AlertTriangle className="h-4 w-4" /> },
    { id: "contact", title: "Report Security", icon: <Bug className="h-4 w-4" /> },
  ];

  const securityMeasures = [
    {
      icon: <Lock className="h-12 w-12" />,
      title: "End-to-End Encryption",
      description: "AES-256 encryption for all data in transit and at rest, ensuring maximum protection.",
      color: "from-blue-600 to-blue-800",
      percentage: 100,
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Multi-Factor Authentication",
      description: "Advanced MFA with biometric and hardware token support for enhanced security.",
      color: "from-green-600 to-green-800",
      percentage: 98,
    },
    {
      icon: <Monitor className="h-12 w-12" />,
      title: "24/7 Security Monitoring",
      description: "Continuous threat detection and real-time security incident response capabilities.",
      color: "from-purple-600 to-purple-800",
      percentage: 100,
    },
    {
      icon: <UserCheck className="h-12 w-12" />,
      title: "Identity Verification",
      description: "Comprehensive identity verification and access management protocols.",
      color: "from-orange-600 to-orange-800",
      percentage: 95,
    },
  ];

  const certifications = [
    { name: "ISO 27001", status: "Certified", color: "green" },
    { name: "SOC 2 Type II", status: "Compliant", color: "blue" },
    { name: "GDPR", status: "Compliant", color: "purple" },
    { name: "PCI DSS", status: "Level 1", color: "orange" },
  ];

  const securityFeatures = [
    {
      category: "Network Security",
      items: [
        "Advanced firewall protection",
        "DDoS mitigation and protection",
        "Intrusion detection systems",
        "Network segmentation",
      ],
      icon: <Wifi className="h-8 w-8" />,
      color: "blue",
    },
    {
      category: "Data Security",
      items: [
        "AES-256 encryption",
        "Secure key management",
        "Data loss prevention",
        "Regular security audits",
      ],
      icon: <Database className="h-8 w-8" />,
      color: "green",
    },
    {
      category: "Application Security",
      items: [
        "Secure code development",
        "Regular penetration testing",
        "Vulnerability assessments",
        "Security code reviews",
      ],
      icon: <Settings className="h-8 w-8" />,
      color: "purple",
    },
    {
      category: "Physical Security",
      items: [
        "24/7 facility monitoring",
        "Biometric access controls",
        "Environmental monitoring",
        "Secure data centers",
      ],
      icon: <Building className="h-8 w-8" />,
      color: "orange",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        
        {/* Animated cyber elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-indigo-500/15 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-2xl animate-pulse-soft" style={{animationDelay: '1s'}}></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md rounded-3xl p-8 border border-cyan-400/30">
                  <Shield className="h-20 w-20 text-cyan-400" />
                </div>
                {/* Security indicators */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Security
              </span>
              <br />
              <span className="text-white">Center</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
              🛡️ Enterprise-grade security protecting your data, operations, and business continuity 
              with cutting-edge technology and industry-leading practices.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {certifications.map((cert, index) => (
                <Badge key={index} className={`bg-${cert.color}-500/20 text-${cert.color}-200 border-${cert.color}-400/50 px-6 py-3 text-lg backdrop-blur-sm`}>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  {cert.name} {cert.status}
                </Badge>
              ))}
            </div>

            <div className="text-center">
              <p className="text-cyan-300 font-semibold text-lg">
                🏆 Trusted by 50,000+ companies worldwide • 🔒 Zero security breaches since 2015
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Advanced Security Measures
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multi-layered security architecture designed to protect against evolving cyber threats
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {securityMeasures.map((measure, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden relative">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${measure.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className="text-white">
                        {measure.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {measure.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {measure.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Security Level</span>
                        <span className="font-semibold text-gray-800">{measure.percentage}%</span>
                      </div>
                      <Progress value={measure.percentage} className="h-3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Security Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className={`border border-${feature.color}-200 hover:shadow-xl transition-shadow duration-300`}>
                  <CardHeader className={`bg-${feature.color}-50`}>
                    <CardTitle className={`text-${feature.color}-700 flex items-center`}>
                      <div className={`text-${feature.color}-600 mr-3`}>{feature.icon}</div>
                      {feature.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className={`h-4 w-4 mr-3 text-${feature.color}-500 flex-shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
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
                  <CardHeader className="bg-gradient-to-r from-slate-700 to-blue-700 text-white rounded-t-lg">
                    <CardTitle className="flex items-center">
                      <Shield className="h-6 w-6 mr-2" />
                      Security Topics
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <Shield className="h-8 w-8 mr-3 text-blue-600" />
                          Security Overview
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          Security is at the core of everything we do at ShipNexa.it. Our comprehensive security program 
                          protects your data, ensures business continuity, and maintains the highest standards of cyber security.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                          <Card className="border border-green-200 bg-green-50">
                            <CardContent className="p-6 text-center">
                              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                              <h3 className="text-xl font-bold text-green-800 mb-2">Zero Breaches</h3>
                              <p className="text-green-700">No security incidents since our founding in 2015</p>
                            </CardContent>
                          </Card>
                          <Card className="border border-blue-200 bg-blue-50">
                            <CardContent className="p-6 text-center">
                              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                              <h3 className="text-xl font-bold text-blue-800 mb-2">Certified</h3>
                              <p className="text-blue-700">Multiple industry certifications and compliance</p>
                            </CardContent>
                          </Card>
                          <Card className="border border-purple-200 bg-purple-50">
                            <CardContent className="p-6 text-center">
                              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                              <h3 className="text-xl font-bold text-purple-800 mb-2">24/7 Monitoring</h3>
                              <p className="text-purple-700">Continuous security monitoring and threat detection</p>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500">
                          <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Security Commitment</h3>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Proactive threat detection and prevention</li>
                            <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Regular security audits and penetration testing</li>
                            <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Transparent incident reporting and communication</li>
                            <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Continuous security training for all employees</li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {activeSection === "infrastructure" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <Server className="h-8 w-8 mr-3 text-blue-600" />
                          Infrastructure Security
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          Our infrastructure is built on enterprise-grade security principles with multiple layers of protection 
                          across physical, network, and application layers.
                        </p>
                        
                        <div className="space-y-6">
                          <Card className="border border-blue-200">
                            <CardHeader className="bg-blue-50">
                              <CardTitle className="text-blue-700 flex items-center">
                                <Server className="h-6 w-6 mr-2" />
                                Cloud Infrastructure
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-3">Hosting & Data Centers</h4>
                                  <ul className="space-y-2 text-gray-600">
                                    <li>• Tier IV certified data centers</li>
                                    <li>• 99.99% uptime SLA guarantee</li>
                                    <li>• Geographic redundancy</li>
                                    <li>• 24/7 physical security</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-3">Network Security</h4>
                                  <ul className="space-y-2 text-gray-600">
                                    <li>• Advanced firewall protection</li>
                                    <li>• DDoS mitigation services</li>
                                    <li>• Network segmentation</li>
                                    <li>• Intrusion detection systems</li>
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="border border-green-200">
                            <CardHeader className="bg-green-50">
                              <CardTitle className="text-green-700 flex items-center">
                                <Lock className="h-6 w-6 mr-2" />
                                Encryption & Data Protection
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-3">Data at Rest</h4>
                                  <ul className="space-y-2 text-gray-600">
                                    <li>• AES-256 encryption</li>
                                    <li>• Encrypted database storage</li>
                                    <li>• Secure key management</li>
                                    <li>• Regular encryption audits</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-3">Data in Transit</h4>
                                  <ul className="space-y-2 text-gray-600">
                                    <li>• TLS 1.3 encryption</li>
                                    <li>• Perfect forward secrecy</li>
                                    <li>• Certificate pinning</li>
                                    <li>• End-to-end encryption</li>
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    )}

                    {activeSection === "data" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <Database className="h-8 w-8 mr-3 text-blue-600" />
                          Data Protection
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          Your data is protected through comprehensive security measures including encryption, 
                          access controls, and regular security assessments.
                        </p>
                        
                        <div className="grid gap-6">
                          <Card className="border border-purple-200">
                            <CardContent className="p-6">
                              <h3 className="text-xl font-semibold text-purple-600 mb-4">Data Classification & Handling</h3>
                              <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                  <h4 className="font-semibold text-red-700 mb-2">Confidential</h4>
                                  <p className="text-sm text-red-600">Highest security level with restricted access</p>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                  <h4 className="font-semibold text-yellow-700 mb-2">Internal</h4>
                                  <p className="text-sm text-yellow-600">Protected internal business information</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                  <h4 className="font-semibold text-green-700 mb-2">Public</h4>
                                  <p className="text-sm text-green-600">Publicly available information</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="border border-blue-200">
                            <CardContent className="p-6">
                              <h3 className="text-xl font-semibold text-blue-600 mb-4">Data Backup & Recovery</h3>
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-3">Backup Strategy</h4>
                                  <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Automated daily backups</li>
                                    <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Multi-region replication</li>
                                    <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Point-in-time recovery</li>
                                    <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Encrypted backup storage</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-3">Recovery Capabilities</h4>
                                  <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" /> RTO: &lt; 1 hour</li>
                                    <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" /> RPO: &lt; 15 minutes</li>
                                    <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Disaster recovery testing</li>
                                    <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Business continuity plan</li>
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    )}

                    {activeSection === "access" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <Key className="h-8 w-8 mr-3 text-blue-600" />
                          Access Control
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          Comprehensive access management ensuring only authorized users can access systems and data 
                          based on the principle of least privilege.
                        </p>
                        
                        <div className="grid gap-6">
                          <Card className="border border-green-200">
                            <CardHeader className="bg-green-50">
                              <CardTitle className="text-green-700">Multi-Factor Authentication (MFA)</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                              <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center">
                                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Users className="h-8 w-8 text-white" />
                                  </div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Something You Know</h4>
                                  <p className="text-sm text-gray-600">Password or PIN</p>
                                </div>
                                <div className="text-center">
                                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Key className="h-8 w-8 text-white" />
                                  </div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Something You Have</h4>
                                  <p className="text-sm text-gray-600">Hardware token or phone</p>
                                </div>
                                <div className="text-center">
                                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Eye className="h-8 w-8 text-white" />
                                  </div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Something You Are</h4>
                                  <p className="text-sm text-gray-600">Biometric verification</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border border-blue-200">
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-blue-600 mb-4">Identity Management</h3>
                                <ul className="space-y-3 text-gray-600">
                                  <li className="flex items-center"><UserCheck className="h-5 w-5 mr-3 text-blue-500" /> Single Sign-On (SSO)</li>
                                  <li className="flex items-center"><UserCheck className="h-5 w-5 mr-3 text-blue-500" /> Directory integration</li>
                                  <li className="flex items-center"><UserCheck className="h-5 w-5 mr-3 text-blue-500" /> User provisioning</li>
                                  <li className="flex items-center"><UserCheck className="h-5 w-5 mr-3 text-blue-500" /> Access reviews</li>
                                </ul>
                              </CardContent>
                            </Card>
                            
                            <Card className="border border-orange-200">
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-orange-600 mb-4">Privilege Management</h3>
                                <ul className="space-y-3 text-gray-600">
                                  <li className="flex items-center"><Shield className="h-5 w-5 mr-3 text-orange-500" /> Role-based access control</li>
                                  <li className="flex items-center"><Shield className="h-5 w-5 mr-3 text-orange-500" /> Least privilege principle</li>
                                  <li className="flex items-center"><Shield className="h-5 w-5 mr-3 text-orange-500" /> Privileged access management</li>
                                  <li className="flex items-center"><Shield className="h-5 w-5 mr-3 text-orange-500" /> Session monitoring</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "monitoring" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <Monitor className="h-8 w-8 mr-3 text-blue-600" />
                          Security Monitoring
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          Advanced security monitoring with AI-powered threat detection, real-time alerting, 
                          and comprehensive logging for complete visibility.
                        </p>
                        
                        <div className="grid gap-6">
                          <Card className="border border-red-200 bg-gradient-to-r from-red-50 to-pink-50">
                            <CardContent className="p-6">
                              <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
                                <Zap className="h-6 w-6 mr-2" />
                                Real-Time Threat Detection
                              </h3>
                              <div className="grid md:grid-cols-4 gap-4">
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-red-600 mb-1">24/7</div>
                                  <div className="text-sm text-gray-600">Continuous Monitoring</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-red-600 mb-1">&lt;30s</div>
                                  <div className="text-sm text-gray-600">Threat Detection</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-red-600 mb-1">&lt;5m</div>
                                  <div className="text-sm text-gray-600">Incident Response</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-red-600 mb-1">99.9%</div>
                                  <div className="text-sm text-gray-600">Detection Rate</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border border-purple-200">
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-purple-600 mb-4">Security Operations Center (SOC)</h3>
                                <ul className="space-y-3 text-gray-600">
                                  <li className="flex items-center"><Eye className="h-5 w-5 mr-3 text-purple-500" /> 24/7 security analysts</li>
                                  <li className="flex items-center"><Eye className="h-5 w-5 mr-3 text-purple-500" /> SIEM and log analysis</li>
                                  <li className="flex items-center"><Eye className="h-5 w-5 mr-3 text-purple-500" /> Threat intelligence feeds</li>
                                  <li className="flex items-center"><Eye className="h-5 w-5 mr-3 text-purple-500" /> Automated response</li>
                                </ul>
                              </CardContent>
                            </Card>
                            
                            <Card className="border border-green-200">
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-green-600 mb-4">Compliance Monitoring</h3>
                                <ul className="space-y-3 text-gray-600">
                                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-green-500" /> Continuous compliance checks</li>
                                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-green-500" /> Audit trail management</li>
                                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-green-500" /> Policy enforcement</li>
                                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-3 text-green-500" /> Reporting and analytics</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "compliance" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <FileText className="h-8 w-8 mr-3 text-blue-600" />
                          Compliance & Certifications
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          We maintain the highest standards of compliance with industry regulations and 
                          security frameworks to ensure your data is protected according to global standards.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {[
                            {
                              title: "ISO 27001:2013",
                              description: "Information Security Management System",
                              status: "Certified",
                              color: "blue",
                              details: ["Risk management framework", "Continuous improvement", "Information security controls", "Management commitment"]
                            },
                            {
                              title: "SOC 2 Type II",
                              description: "Service Organization Control 2",
                              status: "Compliant",
                              color: "green", 
                              details: ["Security controls", "Availability measures", "Processing integrity", "Confidentiality protection"]
                            },
                            {
                              title: "GDPR",
                              description: "General Data Protection Regulation",
                              status: "Compliant",
                              color: "purple",
                              details: ["Data protection by design", "User consent management", "Right to be forgotten", "Data breach notification"]
                            },
                            {
                              title: "PCI DSS Level 1",
                              description: "Payment Card Industry Data Security Standard",
                              status: "Certified",
                              color: "orange",
                              details: ["Secure payment processing", "Cardholder data protection", "Regular security testing", "Access control measures"]
                            }
                          ].map((cert, index) => (
                            <Card key={index} className={`border border-${cert.color}-200 hover:shadow-lg transition-shadow duration-300`}>
                              <CardHeader className={`bg-${cert.color}-50`}>
                                <CardTitle className={`text-${cert.color}-700 flex items-center justify-between`}>
                                  <span>{cert.title}</span>
                                  <Badge className={`bg-${cert.color}-100 text-${cert.color}-700`}>{cert.status}</Badge>
                                </CardTitle>
                                <p className={`text-${cert.color}-600 text-sm`}>{cert.description}</p>
                              </CardHeader>
                              <CardContent className="p-6">
                                <ul className="space-y-2">
                                  {cert.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                                      <CheckCircle className={`h-4 w-4 mr-3 text-${cert.color}-500 flex-shrink-0`} />
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSection === "incident" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <AlertTriangle className="h-8 w-8 mr-3 text-blue-600" />
                          Incident Response
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          Our comprehensive incident response program ensures rapid detection, containment, 
                          and recovery from security incidents with minimal business impact.
                        </p>
                        
                        <Card className="border border-red-200 bg-red-50">
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
                              <Clock className="h-6 w-6 mr-2" />
                              Response Timeline
                            </h3>
                            <div className="grid md:grid-cols-4 gap-4">
                              <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span className="text-white font-bold">1</span>
                                </div>
                                <h4 className="font-semibold text-red-700 mb-1">Detection</h4>
                                <p className="text-sm text-red-600">&lt; 30 seconds</p>
                              </div>
                              <div className="text-center">
                                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span className="text-white font-bold">2</span>
                                </div>
                                <h4 className="font-semibold text-orange-700 mb-1">Assessment</h4>
                                <p className="text-sm text-orange-600">&lt; 5 minutes</p>
                              </div>
                              <div className="text-center">
                                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span className="text-white font-bold">3</span>
                                </div>
                                <h4 className="font-semibold text-yellow-700 mb-1">Containment</h4>
                                <p className="text-sm text-yellow-600">&lt; 15 minutes</p>
                              </div>
                              <div className="text-center">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span className="text-white font-bold">4</span>
                                </div>
                                <h4 className="font-semibold text-green-700 mb-1">Recovery</h4>
                                <p className="text-sm text-green-600">&lt; 1 hour</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <div className="grid gap-6">
                          <Card className="border border-blue-200">
                            <CardContent className="p-6">
                              <h3 className="text-xl font-semibold text-blue-600 mb-4">Incident Response Team</h3>
                              <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Security Analysts</h4>
                                  <p className="text-sm text-gray-600">24/7 monitoring and first response</p>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Engineering Team</h4>
                                  <p className="text-sm text-gray-600">Technical containment and recovery</p>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Management</h4>
                                  <p className="text-sm text-gray-600">Communication and coordination</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    )}

                    {activeSection === "contact" && (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                          <Bug className="h-8 w-8 mr-3 text-blue-600" />
                          Report Security Issues
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          Found a security vulnerability? We appreciate responsible disclosure and will work 
                          with you to address any security concerns promptly.
                        </p>
                        
                        <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 mb-6">
                          <div className="flex items-center mb-3">
                            <AlertTriangle className="h-6 w-6 mr-2 text-red-600" />
                            <h3 className="text-xl font-semibold text-red-800">Security Emergency</h3>
                          </div>
                          <p className="text-red-700 mb-4">
                            For immediate security emergencies, contact our 24/7 security hotline:
                          </p>
                          <Button className="bg-red-600 hover:bg-red-700">
                            <Phone className="h-4 w-4 mr-2" />
                            +1 (555) 123-SECURE
                          </Button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <Card className="border border-blue-200 hover:shadow-md transition-shadow duration-200">
                            <CardContent className="p-6">
                              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                <Mail className="h-6 w-6 mr-2 text-blue-600" />
                                Security Team
                              </h3>
                              <p className="text-gray-600 mb-4">For vulnerability reports and security inquiries</p>
                              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                                security@shipnexa.it
                              </Button>
                            </CardContent>
                          </Card>
                          
                          <Card className="border border-green-200 hover:shadow-md transition-shadow duration-200">
                            <CardContent className="p-6">
                              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                <Search className="h-6 w-6 mr-2 text-green-600" />
                                Bug Bounty Program
                              </h3>
                              <p className="text-gray-600 mb-4">Earn rewards for responsible disclosure</p>
                              <Button variant="outline" className="border-green-300 text-green-600 hover:bg-green-50 w-full">
                                Learn More
                              </Button>
                            </CardContent>
                          </Card>
                        </div>

                        <Card className="border border-purple-200">
                          <CardHeader className="bg-purple-50">
                            <CardTitle className="text-purple-700">Responsible Disclosure Guidelines</CardTitle>
                          </CardHeader>
                          <CardContent className="p-6">
                            <ul className="space-y-3 text-gray-600">
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                                <span>Report vulnerabilities through our official channels</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                                <span>Provide detailed reproduction steps and impact assessment</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                                <span>Allow us reasonable time to investigate and fix issues</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                                <span>Do not access or modify user data during testing</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
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
      <section className="py-16 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Trust in Our Security
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Your data security is our top priority. Experience enterprise-grade protection with ShipNexa.it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg"
              >
                Contact Security Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Security Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
