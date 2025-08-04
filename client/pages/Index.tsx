import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Package, Plane, Ship, Truck, Clock, Shield, Globe, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";

export default function Index() {
  const [trackingId, setTrackingId] = useState("");

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      // Navigate to track page with the tracking ID
      window.location.href = `/track?id=${encodeURIComponent(trackingId)}`;
    }
  };

  const shippingServices = [
    {
      icon: <Plane className="h-12 w-12 text-royal-600" />,
      title: "Air Freight",
      description: "Fast and reliable air cargo services worldwide with real-time tracking.",
      features: ["24-48 hour delivery", "Temperature controlled", "Real-time tracking"]
    },
    {
      icon: <Ship className="h-12 w-12 text-royal-600" />,
      title: "Ocean Freight",
      description: "Cost-effective sea shipping for bulk cargo and container shipments.",
      features: ["Bulk cargo handling", "Container services", "Port-to-port delivery"]
    },
    {
      icon: <Truck className="h-12 w-12 text-royal-600" />,
      title: "Ground Transport",
      description: "Domestic and cross-border trucking with door-to-door delivery.",
      features: ["Door-to-door service", "Express delivery", "Heavy cargo handling"]
    },
    {
      icon: <Package className="h-12 w-12 text-royal-600" />,
      title: "Express Delivery",
      description: "Urgent shipments with guaranteed delivery times and priority handling.",
      features: ["Same-day delivery", "Priority handling", "Insurance included"]
    }
  ];

  const features = [
    {
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      title: "Global Network",
      description: "Worldwide shipping coverage with local expertise in every region."
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Secure & Insured",
      description: "Full insurance coverage and secure handling for all shipments."
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Real-Time Tracking",
      description: "Live GPS tracking and updates throughout the shipping journey."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Solutions Inc.",
      rating: 5,
      comment: "GlobalTrack has been our trusted shipping partner for over 3 years. Their tracking system is incredibly accurate and customer service is outstanding.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c3f2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      company: "Import Export Ltd.",
      rating: 5,
      comment: "The real-time tracking feature has revolutionized how we manage our supply chain. We always know exactly where our cargo is.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Rodriguez",
      company: "Global Retail Chain",
      rating: 5,
      comment: "Professional service, competitive rates, and reliable delivery times. GlobalTrack consistently exceeds our expectations.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-royal-600 via-royal-700 to-royal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Featured Logo */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <Logo size="lg" className="text-white" />
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-delay">
              Global Shipping Solutions
              <span className="block text-orange-400 mt-2">You Can Trust</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 animate-slide-up">
              Track your packages in real-time with our advanced GPS technology.
              Fast, secure, and reliable shipping worldwide.
            </p>

            {/* Tracking Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 animate-slide-up">
              <h3 className="text-2xl font-semibold mb-4">Track Your Package</h3>
              <form onSubmit={handleTrackSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Enter your tracking number (e.g., GT123456789)"
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
                <div className="text-3xl font-bold text-orange-400">50K+</div>
                <div className="text-sm text-gray-300">Packages Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">120+</div>
                <div className="text-sm text-gray-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">99.8%</div>
                <div className="text-sm text-gray-300">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-sm text-gray-300">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 text-center lg:text-left">
              <Logo size="xl" className="justify-center lg:justify-start mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Connecting the World Through Logistics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With our innovative tracking technology and global network, we bridge distances and connect businesses worldwide.
                Our integrated approach combines air, sea, and ground transportation for seamless logistics solutions.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-royal-50 to-royal-100 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300">
                    <Plane className="h-10 w-10 text-royal-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Air Freight</h4>
                  <p className="text-sm text-gray-600">Fast Global Delivery</p>
                </div>

                <div className="text-center group">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300">
                    <Ship className="h-10 w-10 text-orange-500 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Ocean Freight</h4>
                  <p className="text-sm text-gray-600">Bulk Cargo Solutions</p>
                </div>

                <div className="text-center group">
                  <div className="bg-gradient-to-br from-royal-50 to-royal-100 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300">
                    <Truck className="h-10 w-10 text-royal-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Ground Transport</h4>
                  <p className="text-sm text-gray-600">Door-to-Door Service</p>
                </div>

                <div className="text-center group">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300">
                    <Package className="h-10 w-10 text-orange-500 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Express Delivery</h4>
                  <p className="text-sm text-gray-600">Priority Handling</p>
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
              Choose from our comprehensive range of shipping solutions tailored to meet your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services">
                    <Button variant="outline" className="w-full border-royal-600 text-royal-600 hover:bg-royal-600 hover:text-white">
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
                Why Choose GlobalTrack Logistics?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine cutting-edge technology with years of logistics expertise to deliver unparalleled shipping solutions.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/services">
                  <Button className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600 text-white px-8 py-3">
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
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-royal-600">Live Tracking</div>
                <div className="text-gray-600">Real-time GPS monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-600 to-royal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Ship with GlobalTrack?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free quote today and experience the difference of professional logistics services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Get Free Quote
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-royal-600 px-8 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
