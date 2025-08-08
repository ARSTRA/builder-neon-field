import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Globe,
  Calendar,
  User,
  Building,
  Package,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    urgency: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        urgency: "",
      });
    }, 3000);
  };

  const offices = [
    {
      city: "New York",
      country: "United States",
      address: "1250 Broadway, Suite 3000, New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "newyork@globaltrack.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM EST",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      timezone: "EST",
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "25 Bank Street, Canary Wharf, London E14 5JP",
      phone: "+44 20 7946 0958",
      email: "london@globaltrack.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM GMT",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      timezone: "GMT",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "1 Marina Bay Drive, Singapore 018989",
      phone: "+65 6123 4567",
      email: "singapore@globaltrack.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM SGT",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      timezone: "SGT",
    },
  ];

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Us Directly",
      description: "Speak with our logistics experts for immediate assistance",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      gradient: "from-blue-600 to-blue-800",
      availability: "24/7 Support",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Live Chat Support",
      description: "Get instant answers to your shipping questions",
      contact: "Start Chat",
      action: "Chat Now",
      gradient: "from-green-600 to-green-800",
      availability: "Online Now",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Support",
      description: "Send detailed inquiries for comprehensive responses",
      contact: "info@globaltrack.com",
      action: "Send Email",
      gradient: "from-purple-600 to-purple-800",
      availability: "24h Response",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Schedule Meeting",
      description: "Book a consultation with our logistics specialists",
      contact: "Book Appointment",
      action: "Schedule Now",
      gradient: "from-orange-600 to-orange-800",
      availability: "Same Day",
    },
  ];

  const supportFeatures = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Secure Communication",
      description: "All communications are encrypted and secure",
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Quick Response",
      description: "Average response time under 30 minutes",
    },
    {
      icon: <Star className="h-6 w-6 text-orange-600" />,
      title: "Expert Support",
      description: "Certified logistics professionals available",
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-600" />,
      title: "Global Coverage",
      description: "Support available in multiple languages",
    },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Card className="max-w-lg mx-auto shadow-2xl border-0">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for contacting GlobalTrack Logistics. Our team will
              review your message and respond within 24 hours.
            </p>
            <p className="text-sm text-gray-500">
              For urgent matters, please call us directly at +1 (555) 123-4567
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-royal-600 via-royal-700 to-royal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-royal-600/85 via-royal-700/80 to-royal-800/85"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Get In <span className="text-orange-400">Touch</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 animate-fade-in-delay max-w-3xl mx-auto leading-relaxed">
              Ready to streamline your logistics? Our expert team is here to
              help you find the perfect shipping solution for your business
              needs.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 animate-slide-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Phone className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <div className="text-sm text-gray-200">24/7 Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <MessageCircle className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <div className="text-sm text-gray-200">Live Chat</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Mail className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <div className="text-sm text-gray-200">Email Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Calendar className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <div className="text-sm text-gray-200">Book Meeting</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open("tel:+15551234567", "_self")}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +1 (555) 123-4567
              </Button>
              <Button
                onClick={() => window.open("mailto:info@globaltrack.com", "_self")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-royal-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Multiple Ways to Connect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the communication method that works best for you. Our
                team is ready to assist with all your logistics needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                    >
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-royal-600 transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {method.description}
                    </p>
                    <div className="mb-4">
                      <div className="font-semibold text-gray-800">
                        {method.contact}
                      </div>
                      <Badge className="mt-2 bg-green-100 text-green-800">
                        {method.availability}
                      </Badge>
                    </div>
                    <Button
                      onClick={() => {
                        if (method.title === "Call Us Directly") {
                          window.open("tel:+15551234567", "_self");
                        } else if (method.title === "Live Chat Support") {
                          window.location.href = "/chat";
                        } else if (method.title === "Email Support") {
                          window.open("mailto:info@globaltrack.com", "_self");
                        } else if (method.title === "Schedule Meeting") {
                          // For now, scroll to contact form - could integrate with calendar booking later
                          document
                            .querySelector("form")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`w-full bg-gradient-to-r ${method.gradient} hover:opacity-90 text-white font-semibold transition-all duration-300 hover:shadow-lg`}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Support Features */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Our Support?
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {supportFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Have a specific question or need a custom solution? Fill out
                    the form below and our logistics experts will get back to
                    you within 24 hours.
                  </p>
                </div>

                <Card className="shadow-2xl border-0">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-gray-700 font-medium"
                          >
                            Full Name *
                          </Label>
                          <div className="relative">
                            <Input
                              id="name"
                              required
                              value={formData.name}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  name: e.target.value,
                                }))
                              }
                              placeholder="Enter your full name"
                              className="border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 pl-10 h-12"
                            />
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-gray-700 font-medium"
                          >
                            Email Address *
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
                              placeholder="your@email.com"
                              className="border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 pl-10 h-12"
                            />
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="phone"
                            className="text-gray-700 font-medium"
                          >
                            Phone Number
                          </Label>
                          <div className="relative">
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  phone: e.target.value,
                                }))
                              }
                              placeholder="+1 (555) 123-4567"
                              className="border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 pl-10 h-12"
                            />
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="company"
                            className="text-gray-700 font-medium"
                          >
                            Company Name
                          </Label>
                          <div className="relative">
                            <Input
                              id="company"
                              value={formData.company}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  company: e.target.value,
                                }))
                              }
                              placeholder="Your company name"
                              className="border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 pl-10 h-12"
                            />
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="subject"
                            className="text-gray-700 font-medium"
                          >
                            Subject *
                          </Label>
                          <div className="relative">
                            <Input
                              id="subject"
                              required
                              value={formData.subject}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  subject: e.target.value,
                                }))
                              }
                              placeholder="Brief subject line"
                              className="border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 pl-10 h-12"
                            />
                            <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="urgency"
                            className="text-gray-700 font-medium"
                          >
                            Priority Level
                          </Label>
                          <Select
                            value={formData.urgency}
                            onValueChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                urgency: value,
                              }))
                            }
                          >
                            <SelectTrigger className="border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 h-12">
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">
                                Low - General Inquiry
                              </SelectItem>
                              <SelectItem value="medium">
                                Medium - Quote Request
                              </SelectItem>
                              <SelectItem value="high">
                                High - Urgent Support
                              </SelectItem>
                              <SelectItem value="critical">
                                Critical - Emergency
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-gray-700 font-medium"
                        >
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              message: e.target.value,
                            }))
                          }
                          placeholder="Please describe your logistics needs, shipping requirements, or any questions you have..."
                          rows={5}
                          className="border-gray-300 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>

                      <p className="text-sm text-gray-500 text-center">
                        By submitting this form, you agree to our privacy policy
                        and terms of service.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Office Locations */}
              <div>
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Our Global Offices
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    With offices strategically located around the world, we're
                    always close to your business. Visit us or connect with your
                    local team.
                  </p>
                </div>

                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="grid md:grid-cols-3">
                        <div className="relative h-48 md:h-auto">
                          <img
                            src={office.image}
                            alt={`${office.city} office`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-royal-600/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-xl font-bold">{office.city}</h3>
                            <p className="text-sm">{office.country}</p>
                          </div>
                        </div>

                        <CardContent className="md:col-span-2 p-6">
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <MapPin className="h-5 w-5 text-royal-600 mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-gray-800">
                                  Address
                                </p>
                                <p className="text-gray-600 text-sm">
                                  {office.address}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-3">
                              <Phone className="h-5 w-5 text-royal-600 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-gray-800">
                                  Phone
                                </p>
                                <button
                                  onClick={() =>
                                    window.open(
                                      `tel:${office.phone.replace(/\s/g, "")}`,
                                      "_self",
                                    )
                                  }
                                  className="text-royal-600 text-sm hover:text-royal-800 transition-colors duration-200 font-medium hover:underline"
                                >
                                  {office.phone}
                                </button>
                              </div>
                            </div>

                            <div className="flex items-center space-x-3">
                              <Mail className="h-5 w-5 text-royal-600 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-gray-800">
                                  Email
                                </p>
                                <button
                                  onClick={() =>
                                    window.open(
                                      `mailto:${office.email}`,
                                      "_self",
                                    )
                                  }
                                  className="text-royal-600 text-sm hover:text-royal-800 transition-colors duration-200 font-medium hover:underline"
                                >
                                  {office.email}
                                </button>
                              </div>
                            </div>

                            <div className="flex items-center space-x-3">
                              <Clock className="h-5 w-5 text-royal-600 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-gray-800">
                                  Hours
                                </p>
                                <p className="text-gray-600 text-sm">
                                  {office.hours}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 text-left border-0 bg-white shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  How quickly do you respond to inquiries?
                </h3>
                <p className="text-gray-600 text-sm">
                  We respond to all inquiries within 24 hours. For urgent
                  matters, call our 24/7 support line for immediate assistance.
                </p>
              </Card>

              <Card className="p-6 text-left border-0 bg-white shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Do you provide quotes over the phone?
                </h3>
                <p className="text-gray-600 text-sm">
                  Yes! Our logistics experts can provide preliminary quotes over
                  the phone and detailed quotes via email within hours.
                </p>
              </Card>

              <Card className="p-6 text-left border-0 bg-white shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Can I schedule a site visit?
                </h3>
                <p className="text-gray-600 text-sm">
                  Absolutely. We offer on-site consultations for complex
                  logistics projects. Contact us to schedule your visit.
                </p>
              </Card>

              <Card className="p-6 text-left border-0 bg-white shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  What languages do you support?
                </h3>
                <p className="text-gray-600 text-sm">
                  Our global team speaks 15+ languages including English,
                  Spanish, Chinese, Arabic, French, German, and more.
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-r from-royal-600 to-orange-600 text-white border-0">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of businesses who trust GlobalTrack with their
                logistics needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  onClick={() => {
                    // Scroll to contact form
                    document
                      .querySelector("form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group bg-white text-royal-600 hover:bg-gray-100 px-10 py-4 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-royal-100/50 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  <Package className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Get Quote Now</span>
                </Button>
                <Link to="/track">
                  <Button
                    variant="outline"
                    className="group border-3 border-white/90 text-white hover:bg-white hover:text-royal-600 px-10 py-4 font-bold transition-all duration-300 transform hover:scale-105 rounded-2xl backdrop-blur-sm bg-white/10 hover:shadow-2xl hover:shadow-white/25 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <span className="relative z-10">Track Shipment</span>
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                      LIVE
                    </div>
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
