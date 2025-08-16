import { useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Users,
  Award,
  Target,
  Heart,
  Shield,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  TrendingUp,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GetQuoteModal } from "@/components/ui/get-quote-modal";
import { SocialMediaShare } from "@/components/ui/social-media-share";
import { OptimizedImage, ImagePresets } from "@/components/ui/optimized-image";

export default function About() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const teamMembers = [
    {
      name: "Marcus Rodriguez",
      position: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      bio: "25+ years in international logistics with expertise in supply chain optimization and global trade.",
      specialties: [
        "Supply Chain Strategy",
        "International Trade",
        "Business Development",
      ],
    },
    {
      name: "Sarah Chen",
      position: "Chief Operations Officer",
      image:
        "https://images.pexels.com/photos/8872492/pexels-photo-8872492.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      bio: "Expert in logistics technology and operational excellence with a focus on customer satisfaction.",
      specialties: [
        "Operations Management",
        "Technology Integration",
        "Quality Assurance",
      ],
    },
    {
      name: "David Thompson",
      position: "VP of Global Sales",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      bio: "International sales leader with deep understanding of global markets and client relationships.",
      specialties: ["Global Sales", "Client Relations", "Market Expansion"],
    },
    {
      name: "Emma Williams",
      position: "Head of Customer Success",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Dedicated to ensuring exceptional customer experiences and long-term partnership success.",
      specialties: [
        "Customer Success",
        "Account Management",
        "Service Excellence",
      ],
    },
  ];

  const values = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Reliability",
      description:
        "We deliver on our promises with unwavering consistency and dependability.",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Global Reach",
      description:
        "Connecting businesses worldwide with seamless international logistics solutions.",
      gradient: "from-green-600 to-green-800",
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Efficiency",
      description:
        "Optimizing every process to deliver faster, smarter, and more cost-effective solutions.",
      gradient: "from-orange-600 to-orange-800",
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Customer First",
      description:
        "Your success is our mission, driving everything we do with passion and dedication.",
      gradient: "from-purple-600 to-purple-800",
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started with a vision to revolutionize global logistics",
      icon: <Star className="h-6 w-6" />,
    },
    {
      year: "2017",
      title: "International Expansion",
      description: "Extended services to 50+ countries worldwide",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      year: "2019",
      title: "Technology Innovation",
      description: "Launched AI-powered tracking and logistics platform",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      year: "2021",
      title: "50,000 Shipments",
      description: "Reached milestone of 50,000+ successful deliveries",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leading global logistics provider",
      icon: <Award className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-shipblue-600 via-shipblue-700 to-shipblue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-shipblue-600/85 via-shipblue-700/80 to-shipblue-800/85"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
              About <span className="text-orange-400">ShipNexa.it</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 animate-fade-in-delay max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of global logistics with innovation,
              reliability, and unwavering commitment to excellence since 2015.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10 animate-slide-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  9+
                </div>
                <div className="text-gray-200">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  120+
                </div>
                <div className="text-gray-200">Countries Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  50K+
                </div>
                <div className="text-gray-200">Happy Customers</div>
              </div>
            </div>

            <Button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image Side */}
              <div className="relative">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
                  alt="ShipNexa.it team and operations"
                  className="w-full h-96 rounded-2xl shadow-2xl"
                  {...ImagePresets.hero}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-shipblue-600/20 to-orange-500/20 rounded-2xl"></div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-shipblue-600">
                      99.8%
                    </div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Our Story: Building the Future of Logistics
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded in 2015 with a simple yet powerful vision: to
                  revolutionize global logistics through innovation, technology,
                  and unwavering commitment to customer success. What started as
                  a small team of logistics experts has grown into a global
                  network spanning 120+ countries.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Today, ShipNexa.it Logistics stands as a testament to what's
                  possible when passion meets purpose. We've successfully
                  delivered over 50,000 shipments, built lasting partnerships
                  with businesses worldwide, and consistently maintained a 99.8%
                  on-time delivery rate.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-shipblue-100 rounded-lg">
                      <Target className="h-6 w-6 text-shipblue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Our Mission
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Connecting businesses globally through reliable,
                        efficient, and innovative logistics solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Globe className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Our Vision
                      </h4>
                      <p className="text-gray-600 text-sm">
                        To be the world's most trusted and innovative logistics
                        partner by 2030.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our
                commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-shipblue-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                Key milestones that shaped ShipNexa.it Logistics into who we are
                today
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-shipblue-600 to-orange-500 hidden lg:block"></div>

              <div className="space-y-8 lg:space-y-16">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    {/* Content */}
                    <div className="lg:w-1/2">
                      <Card className="border-0 shadow-xl bg-white">
                        <CardContent className="p-8">
                          <div className="flex items-center mb-4">
                            <div className="p-2 bg-shipblue-100 rounded-lg mr-4">
                              {milestone.icon}
                            </div>
                            <Badge className="bg-gradient-to-r from-shipblue-600 to-orange-500 text-white">
                              {milestone.year}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-3">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden lg:block w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Spacer */}
                    <div className="lg:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry experts committed to delivering exceptional logistics
                solutions worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 group-hover:scale-110 transition-transform duration-500"
                      {...ImagePresets.card}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-shipblue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-sm font-semibold">Connect</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-shipblue-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-orange-600 font-semibold mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="space-y-1">
                      {member.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="mr-2 text-xs hover:bg-shipblue-100 transition-colors duration-300"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="relative py-24 bg-gradient-to-br from-shipblue-700 via-shipblue-800 to-ocean-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/9716364/pexels-photo-9716364.jpeg')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-shipblue-900/80 via-shipblue-800/70 to-ocean-900/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 drop-shadow-lg">
              Global Presence, Local Expertise
            </h2>
            <p className="text-xl lg:text-2xl text-gray-100 mb-16 leading-relaxed drop-shadow-md max-w-4xl mx-auto">
              ShipNexa.it combines Italian excellence with worldwide reach. Our
              network spans six continents, delivering local expertise and
              global capabilities to every shipment across the world.
            </p>

            <div className="grid md:grid-cols-3 gap-10 mb-16">
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-10 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl group">
                <MapPin className="h-16 w-16 text-orange-400 mx-auto mb-6 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold mb-3 drop-shadow-sm">
                  120+ Countries
                </h3>
                <p className="text-gray-100 text-lg drop-shadow-sm">
                  Worldwide coverage
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-10 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl group">
                <Users className="h-16 w-16 text-orange-400 mx-auto mb-6 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold mb-3 drop-shadow-sm">
                  500+ Employees
                </h3>
                <p className="text-gray-100 text-lg drop-shadow-sm">
                  Global workforce
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-10 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl group">
                <Award className="h-16 w-16 text-orange-400 mx-auto mb-6 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold mb-3 drop-shadow-sm">
                  25+ Awards
                </h3>
                <p className="text-gray-100 text-lg drop-shadow-sm">
                  Industry recognition
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="group bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 text-white px-10 py-5 text-lg font-bold shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <span className="relative z-10">Join Our Network</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </Button>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="group border-3 border-white/90 text-white hover:bg-white hover:text-shipblue-600 px-10 py-5 text-lg font-bold transition-all duration-300 transform hover:scale-105 rounded-2xl backdrop-blur-sm bg-white/5 hover:shadow-2xl hover:shadow-white/25 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  <MapPin className="mr-3 h-6 w-6 group-hover:animate-pulse relative z-10" />
                  <span className="relative z-10">Visit Our Offices</span>
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                    GLOBAL
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the ShipNexa.it difference. Let's discuss how we can
              optimize your logistics needs.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="p-6 hover:shadow-lg transition-shadow border-0">
                <Phone className="h-8 w-8 text-royal-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow border-0">
                <Mail className="h-8 w-8 text-royal-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600">info@globaltrack.com</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow border-0">
                <Calendar className="h-8 w-8 text-royal-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">
                  Schedule Meeting
                </h3>
                <p className="text-gray-600">Book consultation</p>
              </Card>
            </div>

            <Button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Social Media Sharing */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Share our story with others
                </p>
                <SocialMediaShare
                  title="About ShipNexa.it Logistics - Professional Shipping Solutions"
                  description="Learn about ShipNexa.it Logistics, a leading provider of worldwide shipping and logistics solutions with over 15 years of experience."
                  hashtags={["logistics", "shipping", "globaltrack", "aboutus"]}
                  showText={true}
                  style="icons"
                  size="md"
                />
              </div>
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
