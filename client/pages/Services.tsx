import { useState } from "react";
import { Link } from "react-router-dom";
import { Plane, Ship, Truck, Package, Clock, Shield, Globe, Star, CheckCircle, ArrowRight, Phone, MessageCircle, Calendar, DollarSign, MapPin, Weight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GetQuoteModal } from "@/components/ui/get-quote-modal";

export default function Services() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const mainServices = [
    {
      id: "air-freight",
      icon: <Plane className="h-16 w-16" />,
      title: "Air Freight Services",
      subtitle: "Fast & Reliable Global Air Cargo",
      description: "Our air freight services provide the fastest shipping solution for time-sensitive cargo. With partnerships across major airlines and dedicated cargo aircraft, we ensure your shipments reach their destination quickly and securely.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
      features: [
        "24-48 hour international delivery",
        "Temperature-controlled cargo holds",
        "Real-time GPS tracking",
        "Customs clearance assistance",
        "Door-to-airport service",
        "Fragile cargo handling"
      ],
      benefits: [
        "Fastest delivery times",
        "Global network coverage",
        "Priority handling",
        "Insurance included"
      ],
      pricing: "Starting from $3.50/kg",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      id: "ocean-freight",
      icon: <Ship className="h-16 w-16" />,
      title: "Ocean Freight Solutions",
      subtitle: "Cost-Effective Sea Shipping",
      description: "Our ocean freight services offer the most economical solution for large volume shipments. With access to major shipping lines and container services, we handle everything from small LCL to full container loads.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Full Container Load (FCL)",
        "Less than Container Load (LCL)",
        "Roll-on/Roll-off (RoRo)",
        "Break bulk cargo",
        "Port-to-port delivery",
        "Consolidation services"
      ],
      benefits: [
        "Most cost-effective option",
        "Large capacity handling",
        "Eco-friendly shipping",
        "Flexible scheduling"
      ],
      pricing: "Starting from $180/CBM",
      gradient: "from-teal-600 to-blue-500"
    },
    {
      id: "ground-transport",
      icon: <Truck className="h-16 w-16" />,
      title: "Ground Transportation",
      subtitle: "Domestic & Cross-Border Trucking",
      description: "Our ground transportation network covers domestic and international trucking with full truckload (FTL) and less-than-truckload (LTL) options. Perfect for regional distribution and last-mile delivery.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2062&q=80",
      features: [
        "Full Truckload (FTL)",
        "Less than Truckload (LTL)",
        "Cross-border trucking",
        "Last-mile delivery",
        "Temperature-controlled trucks",
        "Heavy haul equipment"
      ],
      benefits: [
        "Door-to-door service",
        "Flexible scheduling",
        "Regional expertise",
        "Real-time tracking"
      ],
      pricing: "Starting from $1.85/mile",
      gradient: "from-orange-600 to-red-500"
    },
    {
      id: "express-delivery",
      icon: <Package className="h-16 w-16" />,
      title: "Express Delivery",
      subtitle: "Urgent & Priority Shipping",
      description: "For time-critical shipments, our express delivery service guarantees fast transit times with priority handling. Same-day, next-day, and 2-day delivery options available with full tracking and insurance.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Same-day delivery",
        "Next-day express",
        "2-day priority",
        "White glove service",
        "Signature confirmation",
        "Proof of delivery"
      ],
      benefits: [
        "Guaranteed delivery times",
        "Priority handling",
        "Full insurance coverage",
        "24/7 customer support"
      ],
      pricing: "Starting from $12.99",
      gradient: "from-purple-600 to-pink-500"
    }
  ];

  const specialtyServices = [
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Hazardous Materials",
      description: "Certified handling of dangerous goods with proper documentation and safety protocols.",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Weight className="h-8 w-8 text-blue-600" />,
      title: "Heavy Cargo",
      description: "Specialized equipment and expertise for oversized and heavy lift cargo shipments.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "Project Cargo",
      description: "End-to-end project logistics for complex, multi-modal transportation requirements.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const additionalServices = [
    { icon: <CheckCircle className="h-6 w-6" />, title: "Customs Clearance", description: "Expert customs brokerage and trade compliance services" },
    { icon: <Shield className="h-6 w-6" />, title: "Cargo Insurance", description: "Comprehensive coverage for your valuable shipments" },
    { icon: <MapPin className="h-6 w-6" />, title: "Warehousing", description: "Secure storage and distribution center services" },
    { icon: <Clock className="h-6 w-6" />, title: "Supply Chain", description: "End-to-end logistics and supply chain management" },
    { icon: <Package className="h-6 w-6" />, title: "Packaging Services", description: "Professional packing and crating for safe transport" },
    { icon: <Star className="h-6 w-6" />, title: "White Glove", description: "Premium handling for high-value and delicate items" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-royal-600 via-royal-700 to-royal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Our <span className="text-orange-400">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 animate-fade-in-delay max-w-3xl mx-auto">
              Comprehensive shipping solutions tailored to meet your unique logistics needs. 
              From air freight to ground transport, we've got you covered worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-royal-600 px-8 py-4 text-lg">
                  Speak with Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Complete Logistics Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of shipping services, each designed to meet specific transportation needs with professional expertise and cutting-edge technology.
            </p>
          </div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                {/* Image Side */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20 rounded-2xl`}></div>
                    <div className="absolute top-6 left-6">
                      <div className={`p-4 bg-white/20 backdrop-blur-sm rounded-xl text-white`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2">
                  <Card className="border-0 shadow-xl bg-white">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <Badge className={`bg-gradient-to-r ${service.gradient} text-white mb-4`}>
                          {service.subtitle}
                        </Badge>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <Tabs defaultValue="features" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="features">Features</TabsTrigger>
                          <TabsTrigger value="benefits">Benefits</TabsTrigger>
                          <TabsTrigger value="pricing">Pricing</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="features" className="mt-6">
                          <div className="grid md:grid-cols-2 gap-3">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="benefits" className="mt-6">
                          <div className="grid md:grid-cols-2 gap-3">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center">
                                <Star className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="pricing" className="mt-6">
                          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-2xl font-bold text-gray-800">{service.pricing}</div>
                                <div className="text-sm text-gray-600">Contact us for volume discounts</div>
                              </div>
                              <DollarSign className="h-8 w-8 text-green-600" />
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>

                      <div className="flex gap-3 mt-8">
                        <Button 
                          onClick={() => setIsQuoteModalOpen(true)}
                          className={`flex-1 bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white`}
                        >
                          Get Quote
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Expert
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Specialty Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for unique shipping requirements and challenging cargo
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {specialtyServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full border-royal-600 text-royal-600 hover:bg-royal-600 hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support services to complement your shipping needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-royal-100 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-600 via-royal-700 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Ship with GlobalTrack?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our logistics experts are standing by to help you choose the perfect shipping solution for your needs. 
            Get a custom quote in minutes or speak with a specialist today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg flex-1"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Get Free Quote
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-royal-600 px-8 py-4 text-lg flex-1">
              <MessageCircle className="mr-2 h-5 w-5" />
              Live Chat
            </Button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-white/80">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">120+</div>
              <div className="text-white/80">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">99.8%</div>
              <div className="text-white/80">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      <GetQuoteModal open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen} />
    </div>
  );
}
