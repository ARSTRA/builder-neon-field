import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Package,
  Plane,
  Ship,
  Truck,
  Clock,
  Shield,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import ShipNexaLogo from "@/components/ui/shipnexa-logo";
import { GetQuoteModal } from "@/components/ui/get-quote-modal";
import { FloatingSocialBar } from "@/components/ui/floating-social-bar";
import { useToast } from "@/hooks/use-toast";

export default function Index() {
  const [trackingId, setTrackingId] = useState("");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      // Navigate to track page with the tracking ID
      navigate(`/track?id=${encodeURIComponent(trackingId)}`);
    } else {
      toast({
        title: "Please enter a tracking number",
        description: "Enter your tracking number to track your package.",
        variant: "destructive",
      });
    }
  };

  const handleGetQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCallExpert = () => {
    // In a real app, this could open a phone dialer or show contact info
    toast({
      title: "Call Expert",
      description: "Call us at 1-800-GLOBAL-1 for immediate assistance!",
    });
  };

  const handleLiveChat = () => {
    navigate("/chat");
  };

  const shippingServices = [
    {
      icon: <Plane className="h-12 w-12 text-shipblue-600" />,
      title: "Air Freight",
      description:
        "Fast and reliable air cargo services worldwide with real-time tracking.",
      features: [
        "24-48 hour delivery",
        "Temperature controlled",
        "Real-time tracking",
      ],
    },
    {
      icon: <Ship className="h-12 w-12 text-shipblue-600" />,
      title: "Ocean Freight",
      description:
        "Cost-effective sea shipping for bulk cargo and container shipments.",
      features: [
        "Bulk cargo handling",
        "Container services",
        "Port-to-port delivery",
      ],
    },
    {
      icon: <Truck className="h-12 w-12 text-shipblue-600" />,
      title: "Ground Transport",
      description:
        "Domestic and cross-border trucking with door-to-door delivery.",
      features: [
        "Door-to-door service",
        "Express delivery",
        "Heavy cargo handling",
      ],
    },
    {
      icon: <Package className="h-12 w-12 text-shipblue-600" />,
      title: "Express Delivery",
      description:
        "Urgent shipments with guaranteed delivery times and priority handling.",
      features: [
        "Same-day delivery",
        "Priority handling",
        "Insurance included",
      ],
    },
  ];

  const features = [
    {
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      title: "Global Network",
      description:
        "Worldwide shipping coverage with local expertise in every region.",
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Secure & Insured",
      description:
        "Full insurance coverage and secure handling for all shipments.",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Real-Time Tracking",
      description:
        "Live GPS tracking and updates throughout the shipping journey.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO",
      company: "Tech Solutions Inc.",
      rating: 5,
      comment:
        "ShipNexa.it has been our trusted shipping partner for over 3 years. Their tracking system is incredibly accurate and customer service is outstanding. The team goes above and beyond to ensure our shipments arrive on time.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      shipments: "500+",
      savings: "25%",
    },
    {
      name: "Michael Chen",
      title: "Operations Director",
      company: "Import Export Ltd.",
      rating: 5,
      comment:
        "The real-time tracking feature has revolutionized how we manage our supply chain. We always know exactly where our cargo is, and their customer portal makes everything transparent and easy to manage.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      shipments: "1200+",
      savings: "30%",
    },
    {
      name: "Emma Rodriguez",
      title: "Supply Chain Manager",
      company: "Global Retail Chain",
      rating: 5,
      comment:
        "Professional service, competitive rates, and reliable delivery times. ShipNexa.it consistently exceeds our expectations and has become an integral part of our logistics strategy.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      shipments: "2500+",
      savings: "35%",
    },
    {
      name: "David Kim",
      title: "Logistics Coordinator",
      company: "Manufacturing Corp",
      rating: 5,
      comment:
        "Outstanding service and support. The team at ShipNexa.it understands our unique needs and always delivers solutions that work. Their expertise in international shipping is unmatched.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      shipments: "800+",
      savings: "28%",
    },
    {
      name: "Lisa Thompson",
      title: "Head of Procurement",
      company: "E-commerce Solutions",
      rating: 5,
      comment:
        "ShipNexa.it's technology platform and customer service are exceptional. They've helped us streamline our shipping process and reduce costs significantly while improving delivery times.",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      shipments: "1800+",
      savings: "40%",
    },
    {
      name: "Robert Martinez",
      title: "VP of Operations",
      company: "Industrial Equipment Co.",
      rating: 5,
      comment:
        "Reliable, professional, and cost-effective. ShipNexa.it has been instrumental in helping us expand our international presence. Their expertise in heavy cargo shipping is particularly impressive.",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      shipments: "600+",
      savings: "22%",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6595787/pexels-photo-6595787.jpeg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Featured Logo */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <ShipNexaLogo
                size="xl"
                variant="full"
                className="drop-shadow-lg"
              />
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-delay text-white drop-shadow-lg">
              Next-Generation Logistics
              <span className="block text-orange-400 mt-2 drop-shadow-lg">
                For Italy & Beyond
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-100 drop-shadow-md animate-slide-up">
              Experience cutting-edge logistics technology with ShipNexa.it.
              Fast, secure, and innovative shipping solutions across Italy and
              worldwide.
            </p>

            {/* Tracking Form */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 mb-8 animate-slide-up shadow-2xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-white drop-shadow-md">
                Track Your Package
              </h3>
              <form
                onSubmit={handleTrackSubmit}
                className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
              >
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Enter your tracking number (e.g., SN123456789)"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="bg-white/90 border-0 text-gray-800 placeholder:text-gray-500 text-lg py-6 pl-12"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                </div>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 px-8 text-lg font-semibold"
                >
                  Track Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 drop-shadow-lg">
                  50K+
                </div>
                <div className="text-sm text-gray-200 drop-shadow-md">
                  Packages Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 drop-shadow-lg">
                  120+
                </div>
                <div className="text-sm text-gray-200 drop-shadow-md">
                  Countries Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 drop-shadow-lg">
                  99.8%
                </div>
                <div className="text-sm text-gray-200 drop-shadow-md">
                  On-Time Delivery
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 drop-shadow-lg">
                  24/7
                </div>
                <div className="text-sm text-gray-200 drop-shadow-md">
                  Customer Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-start lg:items-center">
            <div className="lg:col-span-1 text-center lg:text-left">
              <ShipNexaLogo
                size="xl"
                variant="full"
                className="justify-center lg:justify-start mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Next-Generation Italian Logistics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ShipNexa.it combines cutting-edge technology with local Italian
                expertise to deliver world-class logistics solutions. Our
                integrated approach connects Italy to the world through
                innovative air, sea, and ground transportation networks.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {/* Air Freight */}
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 bg-gray-100">
                    <div className="relative h-40 w-full">
                      <img
                        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&auto=format&q=80"
                        alt="Air Freight"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?w=600&h=400&fit=crop&auto=compress,format&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-shipblue-600/80 to-shipblue-800/60 group-hover:from-shipblue-700/70 group-hover:to-shipblue-900/50 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Plane className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-white text-xs font-medium">
                            24-48h
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <h4 className="font-bold text-gray-800 mb-1">
                        Air Freight
                      </h4>
                      <p className="text-sm text-gray-600">
                        Fast Global Delivery
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ocean Freight */}
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 bg-gray-100">
                    <div className="relative h-40 w-full">
                      <img
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&auto=format&q=80"
                        alt="Ocean Freight"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?w=600&h=400&fit=crop&auto=compress,format&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 to-orange-700/60 group-hover:from-orange-600/70 group-hover:to-orange-800/50 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Ship className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-white text-xs font-medium">
                            Cost-Effective
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <h4 className="font-bold text-gray-800 mb-1">
                        Ocean Freight
                      </h4>
                      <p className="text-sm text-gray-600">
                        Bulk Cargo Solutions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ground Transport */}
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 bg-gray-100">
                    <div className="relative h-40 w-full">
                      <img
                        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop&auto=format&q=80"
                        alt="Ground Transport"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?w=600&h=400&fit=crop&auto=compress,format&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-shipblue-600/80 to-shipblue-800/60 group-hover:from-shipblue-700/70 group-hover:to-shipblue-900/50 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Truck className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-white text-xs font-medium">
                            Door-to-Door
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <h4 className="font-bold text-gray-800 mb-1">
                        Ground Transport
                      </h4>
                      <p className="text-sm text-gray-600">
                        Reliable & Flexible
                      </p>
                    </div>
                  </div>
                </div>

                {/* Express Delivery */}
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 bg-gray-100">
                    <div className="relative h-40 w-full">
                      <img
                        src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop&auto=format&q=80"
                        alt="Express Delivery"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?w=600&h=400&fit=crop&auto=compress,format&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 to-orange-700/60 group-hover:from-orange-600/70 group-hover:to-orange-800/50 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Package className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-white text-xs font-medium">
                            Same-Day
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <h4 className="font-bold text-gray-800 mb-1">
                        Express Delivery
                      </h4>
                      <p className="text-sm text-gray-600">Priority Handling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Shipping Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of shipping solutions tailored
              to meet your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center text-sm text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services">
                    <Button
                      variant="outline"
                      className="w-full border-shipblue-600 text-shipblue-600 hover:bg-shipblue-600 hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Choose ShipNexa.it?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine cutting-edge technology with years of logistics
                expertise to deliver unparalleled shipping solutions.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/services">
                  <Button className="bg-gradient-to-r from-shipblue-600 to-orange-500 hover:from-shipblue-700 hover:to-orange-600 text-white px-8 py-3">
                    View All Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Shipping containers at port"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?w=800&h=600&fit=crop&auto=compress,format&q=80";
                }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-shipblue-600">
                  Live Tracking
                </div>
                <div className="text-gray-600">Real-time GPS monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full mb-6">
              <Star className="h-6 w-6 text-orange-500" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              What Our <span className="text-orange-500">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by thousands of businesses worldwide, from startups to
              Fortune 500 companies. Here's what our satisfied customers have to
              say about their experience with ShipNexa.it.
            </p>

            {/* Customer Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-shipblue-600 mb-2">
                  5,000+
                </div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  4.9/5
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-shipblue-600 mb-2">
                  98%
                </div>
                <div className="text-sm text-gray-600">Would Recommend</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Support Rating</div>
              </div>
            </div>
          </div>

          {/* Featured Testimonial */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-shipblue-600 to-shipblue-800 text-white border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-12 relative">
                <div className="absolute top-8 right-8 opacity-20">
                  <Star className="h-32 w-32" />
                </div>
                <div className="relative z-10">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-6 w-6 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-8 italic">
                        "{testimonials[1].comment}"
                      </blockquote>
                      <div className="flex items-center space-x-6">
                        <img
                          src={testimonials[1].image}
                          alt={testimonials[1].name}
                          className="w-20 h-20 rounded-full border-4 border-white/20 shadow-lg"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=400&h=400&fit=crop&auto=compress,format&q=80";
                          }}
                        />
                        <div>
                          <div className="text-xl font-bold">
                            {testimonials[1].name}
                          </div>
                          <div className="text-orange-300 font-medium">
                            {testimonials[1].title}
                          </div>
                          <div className="text-white/80">
                            {testimonials[1].company}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                        <h4 className="text-lg font-semibold mb-4 text-orange-300">
                          Success Metrics
                        </h4>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span>Shipments Handled</span>
                            <span className="font-bold text-orange-300">
                              {testimonials[1].shipments}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Cost Savings</span>
                            <span className="font-bold text-orange-300">
                              {testimonials[1].savings}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>On-Time Delivery</span>
                            <span className="font-bold text-orange-300">
                              99.8%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Grid of Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden transform hover:-translate-y-2 ${
                  index === 1 ? "hidden" : "" // Hide the featured testimonial from grid
                }`}
              >
                <CardContent className="p-0">
                  {/* Image Header */}
                  <div className="relative h-32 bg-gradient-to-br from-shipblue-100 to-orange-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-shipblue-600/20 to-orange-500/20"></div>
                    <div className="absolute -bottom-8 left-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=400&h=400&fit=crop&auto=compress,format&q=80";
                        }}
                      />
                    </div>
                    <div className="absolute top-4 right-4 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-12">
                    <div className="mb-4">
                      <div className="font-bold text-lg text-gray-800">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-orange-600 font-medium">
                        {testimonial.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.company}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                      "{testimonial.comment}"
                    </p>

                    {/* Success metrics */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-lg font-bold text-shipblue-600">
                          {testimonial.shipments}
                        </div>
                        <div className="text-xs text-gray-500">Shipments</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-500">
                          {testimonial.savings}
                        </div>
                        <div className="text-xs text-gray-500">Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">
                          99.8%
                        </div>
                        <div className="text-xs text-gray-500">On-Time</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Join Thousands of Satisfied Customers
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to experience the ShipNexa.it difference? Get started with
                a free quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleGetQuote}
                  className="bg-gradient-to-r from-shipblue-600 to-orange-500 hover:from-shipblue-700 hover:to-orange-600 text-white px-8 py-3"
                >
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={handleCallExpert}
                  variant="outline"
                  className="border-shipblue-600 text-shipblue-600 hover:bg-shipblue-600 hover:text-white px-8 py-3"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Speak with Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-shipblue-600 via-shipblue-700 to-shipblue-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse-soft"></div>
        <div
          className="absolute top-1/2 left-1/4 w-12 h-12 bg-orange-400/30 rounded-full animate-bounce-slow"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced Header */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-orange-500/20 rounded-full mb-6 animate-fade-in">
                <Package className="h-8 w-8 text-orange-400" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-delay">
                Ready to Ship with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                  ShipNexa.it?
                </span>
              </h2>
              <p className="text-xl lg:text-2xl mb-4 text-gray-200 animate-slide-up">
                Get a free quote today and experience the difference of
                professional logistics services.
              </p>
              <p className="text-lg text-orange-300 mb-12 animate-slide-up">
                Join 5,000+ businesses that trust us with their shipping needs
              </p>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12 animate-slide-up">
              {/* Primary CTA - Get Quote */}
              <Button
                onClick={handleGetQuote}
                className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <Package className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Get Free Quote</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

              {/* Secondary CTA - Contact */}
              <Link to="/contact" className="group">
                <Button
                  variant="outline"
                  className="relative border-2 border-white/30 text-white hover:bg-white hover:text-shipblue-600 px-10 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm bg-white/5 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 group-hover:animate-pulse" />
                    <span>Contact Expert</span>
                    <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-shipblue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  50K+
                </div>
                <div className="text-sm text-gray-300">Packages Delivered</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  120+
                </div>
                <div className="text-sm text-gray-300">Countries Served</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  99.8%
                </div>
                <div className="text-sm text-gray-300">On-Time Delivery</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-sm text-gray-300">Expert Support</div>
              </div>
            </div>

            {/* Additional Contact Options */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-300 mb-4">Need immediate assistance?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={handleCallExpert}
                  variant="ghost"
                  className="text-orange-400 hover:text-orange-300 hover:bg-white/10 transition-all duration-300"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call: +1 (555) 123-4567
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Quote Modal */}
      <GetQuoteModal
        open={isQuoteModalOpen}
        onOpenChange={setIsQuoteModalOpen}
      />

      {/* Floating Social Media Bar - Hidden on mobile to prevent overlap */}
      <div className="hidden sm:block">
        <FloatingSocialBar show={true} position="bottom-left" />
      </div>
    </div>
  );
}
