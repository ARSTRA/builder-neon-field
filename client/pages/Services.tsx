import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  Ship,
  Truck,
  Package,
  Clock,
  Shield,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar,
  DollarSign,
  MapPin,
  Weight,
} from "lucide-react";
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
      description:
        "Our air freight services provide the fastest shipping solution for time-sensitive cargo. With partnerships across major airlines and dedicated cargo aircraft, we ensure your shipments reach their destination quickly and securely.",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
      features: [
        "24-48 hour international delivery",
        "Temperature-controlled cargo holds",
        "Real-time GPS tracking",
        "Customs clearance assistance",
        "Door-to-airport service",
        "Fragile cargo handling",
      ],
      benefits: [
        "Fastest delivery times",
        "Global network coverage",
        "Priority handling",
        "Insurance included",
      ],
      pricing: "Starting from $3.50/kg",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      id: "ocean-freight",
      icon: <Ship className="h-16 w-16" />,
      title: "Ocean Freight Solutions",
      subtitle: "Cost-Effective Sea Shipping",
      description:
        "Our ocean freight services offer the most economical solution for large volume shipments. With access to major shipping lines and container services, we handle everything from small LCL to full container loads.",
      image:
        "https://images.pexels.com/photos/4604443/pexels-photo-4604443.jpeg?auto=compress&cs=tinysrgb&w=2070&h=1380&dpr=2",
      features: [
        "Full Container Load (FCL)",
        "Less than Container Load (LCL)",
        "Roll-on/Roll-off (RoRo)",
        "Break bulk cargo",
        "Port-to-port delivery",
        "Consolidation services",
      ],
      benefits: [
        "Most cost-effective option",
        "Large capacity handling",
        "Eco-friendly shipping",
        "Flexible scheduling",
      ],
      pricing: "Starting from $180/CBM",
      gradient: "from-teal-600 to-blue-500",
    },
    {
      id: "ground-transport",
      icon: <Truck className="h-16 w-16" />,
      title: "Ground Transportation",
      subtitle: "Domestic & Cross-Border Trucking",
      description:
        "Our ground transportation network covers domestic and international trucking with full truckload (FTL) and less-than-truckload (LTL) options. Perfect for regional distribution and last-mile delivery.",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2062&q=80",
      features: [
        "Full Truckload (FTL)",
        "Less than Truckload (LTL)",
        "Cross-border trucking",
        "Last-mile delivery",
        "Temperature-controlled trucks",
        "Heavy haul equipment",
      ],
      benefits: [
        "Door-to-door service",
        "Flexible scheduling",
        "Regional expertise",
        "Real-time tracking",
      ],
      pricing: "Starting from $1.85/mile",
      gradient: "from-orange-600 to-red-500",
    },
    {
      id: "express-delivery",
      icon: <Package className="h-16 w-16" />,
      title: "Express Delivery",
      subtitle: "Urgent & Priority Shipping",
      description:
        "For time-critical shipments, our express delivery service guarantees fast transit times with priority handling. Same-day, next-day, and 2-day delivery options available with full tracking and insurance.",
      image:
        "https://images.pexels.com/photos/6169135/pexels-photo-6169135.jpeg?auto=compress&cs=tinysrgb&w=2070&h=1380&dpr=2",
      features: [
        "Same-day delivery",
        "Next-day express",
        "2-day priority",
        "White glove service",
        "Signature confirmation",
        "Proof of delivery",
      ],
      benefits: [
        "Guaranteed delivery times",
        "Priority handling",
        "Full insurance coverage",
        "24/7 customer support",
      ],
      pricing: "Starting from $12.99",
      gradient: "from-purple-600 to-pink-500",
    },
  ];

  const specialtyServices = [
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Hazardous Materials",
      description:
        "Certified handling of dangerous goods with proper documentation and safety protocols.",
      image:
        "https://images.pexels.com/photos/2786527/pexels-photo-2786527.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    },
    {
      icon: <Weight className="h-8 w-8 text-blue-600" />,
      title: "Heavy Cargo",
      description:
        "Specialized equipment and expertise for oversized and heavy lift cargo shipments.",
      image:
        "https://images.pexels.com/photos/29224601/pexels-photo-29224601.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "Project Cargo",
      description:
        "End-to-end project logistics for complex, multi-modal transportation requirements.",
      image:
        "https://images.pexels.com/photos/4742023/pexels-photo-4742023.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    },
  ];

  const additionalServices = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Customs Clearance",
      description: "Expert customs brokerage and trade compliance services",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cargo Insurance",
      description: "Comprehensive coverage for your valuable shipments",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Warehousing",
      description: "Secure storage and distribution center services",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Supply Chain",
      description: "End-to-end logistics and supply chain management",
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Packaging Services",
      description: "Professional packing and crating for safe transport",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "White Glove",
      description: "Premium handling for high-value and delicate items",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-royal-600 via-royal-700 to-royal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-royal-600/85 via-royal-700/80 to-royal-800/85"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center items-center space-x-8 mb-8 animate-fade-in">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <Plane className="h-8 w-8 text-orange-400" />
              </div>
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <Ship className="h-8 w-8 text-orange-400" />
              </div>
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <Truck className="h-8 w-8 text-orange-400" />
              </div>
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <Package className="h-8 w-8 text-orange-400" />
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Our <span className="text-orange-400">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 animate-fade-in-delay max-w-4xl mx-auto leading-relaxed">
              Comprehensive shipping solutions tailored to meet your unique
              logistics needs. From air freight to ground transport, we've got
              you covered worldwide with professional expertise and cutting-edge
              technology.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-fade-in-delay">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">
                  120+
                </div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">
                  50K+
                </div>
                <div className="text-sm text-gray-300">Shipments</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">
                  99.8%
                </div>
                <div className="text-sm text-gray-300">On-Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">
                  24/7
                </div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 text-lg font-bold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-[1.02] rounded-xl"
              >
                Get Custom Quote
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="group border-3 border-white/80 text-white hover:bg-white hover:text-royal-600 px-10 py-5 text-lg font-bold transition-all duration-300 transform hover:scale-[1.02] rounded-xl backdrop-blur-sm bg-white/5 hover:shadow-2xl hover:shadow-white/20"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Talk to Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Consultation Section */}
      <section className="relative py-24 bg-gradient-to-br from-shipblue-600 via-shipblue-700 to-ocean-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7979597/pexels-photo-7979597.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-shipblue-800/85 to-ocean-900/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 drop-shadow-lg">
              Need Expert Logistics Guidance?
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-gray-100 leading-relaxed drop-shadow-md">
              Our certified logistics professionals bring decades of experience
              in international shipping, customs regulations, and supply chain
              optimization. Get personalized recommendations tailored to your
              specific shipping requirements.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <Shield className="h-14 w-14 text-orange-400 mx-auto mb-6 drop-shadow-lg" />
                <h3 className="text-xl font-semibold mb-2">
                  Certified Experts
                </h3>
                <p className="text-gray-200">
                  Licensed logistics professionals with international
                  certifications
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Clock className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-200">
                  Round-the-clock assistance for urgent shipping needs
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Globe className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                <p className="text-gray-200">
                  Direct partnerships with carriers in 120+ countries
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Speak with a Logistics Expert Now
              </h3>
              <p className="text-gray-200 mb-6">
                Get instant answers to your shipping questions and personalized
                solution recommendations
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open("tel:+15551234567", "_self")}
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 text-lg font-bold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-[1.02] rounded-2xl relative overflow-hidden"
                >
                  <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  Call Expert: +1 (555) 123-4567
                </Button>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="group relative border-3 border-white/80 text-white hover:bg-white hover:text-royal-600 px-10 py-5 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:shadow-2xl hover:shadow-white/25"
                  >
                    <MessageCircle className="mr-3 h-6 w-6 group-hover:bounce transition-transform duration-300" />
                    Contact Support
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-300 mt-4">
                ⚡ Average response time: Under 30 seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Complete Logistics Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose from our comprehensive range of shipping services, each
              designed to meet specific transportation needs with professional
              expertise and cutting-edge technology.
            </p>
          </div>

          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center lg:items-stretch`}
              >
                <div className="lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={service.image}
                      alt={`${service.title} - Professional shipping and logistics services`}
                      className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20`}
                    ></div>
                    <div className="absolute top-6 left-6">
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl text-white shadow-lg">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 flex">
                  <Card className="border-0 shadow-xl bg-white w-full flex flex-col">
                    <CardContent className="p-8 flex-1">
                      <div className="mb-6">
                        <Badge
                          className={`bg-gradient-to-r ${service.gradient} text-white mb-4`}
                        >
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
                                <div className="text-2xl font-bold text-gray-800">
                                  {service.pricing}
                                </div>
                                <div className="text-sm text-gray-600">
                                  Contact us for volume discounts
                                </div>
                              </div>
                              <DollarSign className="h-8 w-8 text-green-600" />
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>

                      <div className="flex gap-4 mt-8">
                        <Button
                          onClick={() => setIsQuoteModalOpen(true)}
                          className={`group flex-1 bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl py-4 font-semibold`}
                        >
                          Get Quote
                          <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                        <Link to="/contact">
                          <Button
                            variant="outline"
                            className="group border-2 border-royal-600 text-royal-600 hover:bg-royal-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] rounded-xl py-4 font-semibold px-6"
                          >
                            <MessageCircle className="h-5 w-5 mr-2" />
                            Contact Expert
                          </Button>
                        </Link>
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
              Specialized solutions for unique shipping requirements and
              challenging cargo
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {specialtyServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden"
              >
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
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => setIsQuoteModalOpen(true)}
                      variant="outline"
                      className="group flex-1 border-2 border-royal-600 text-royal-600 hover:bg-royal-600 hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] rounded-lg"
                    >
                      Get Quote
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Link to="/contact">
                      <Button
                        variant="outline"
                        className="group border-2 border-royal-600 text-royal-600 hover:bg-royal-600 hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] rounded-lg px-4"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
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
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-white"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-royal-100 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
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
            Our logistics experts are standing by to help you choose the perfect
            shipping solution for your needs. Get a custom quote in minutes or
            speak with a specialist today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <Button
              onClick={() => setIsQuoteModalOpen(true)}
              className="group bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 text-white px-10 py-5 text-lg flex-1 font-bold shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 rounded-2xl"
            >
              <Calendar className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Get Free Quote
            </Button>
            <Link to="/contact" className="flex-1">
              <Button
                variant="outline"
                className="group w-full border-3 border-white/80 text-white hover:bg-white hover:text-royal-600 px-10 py-5 text-lg font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 rounded-2xl backdrop-blur-sm bg-white/5"
              >
                <MessageCircle className="mr-3 h-6 w-6 group-hover:bounce transition-transform duration-300" />
                Contact Support
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                24/7
              </div>
              <div className="text-white/80">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                120+
              </div>
              <div className="text-white/80">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                99.8%
              </div>
              <div className="text-white/80">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      <GetQuoteModal
        open={isQuoteModalOpen}
        onOpenChange={setIsQuoteModalOpen}
      />
    </div>
  );
}
