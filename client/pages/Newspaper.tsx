import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Globe,
  TrendingUp,
  Award,
  Newspaper as NewspaperIcon,
  Share2,
  BookmarkPlus,
  MessageCircle,
  Eye,
  Tag,
  MapPin,
  Zap,
  Building,
  Users,
  Target,
  Heart,
  Star,
  CheckCircle,
  Truck,
  Package,
  Plane,
  Ship,
  Send,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  views: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export default function Newspaper() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState("");

  const categories = [
    { id: "all", name: "All News", color: "bg-gray-500" },
    { id: "company", name: "Company News", color: "bg-royal-500" },
    { id: "industry", name: "Industry Updates", color: "bg-blue-500" },
    { id: "technology", name: "Technology", color: "bg-purple-500" },
    { id: "sustainability", name: "Sustainability", color: "bg-green-500" },
    { id: "awards", name: "Awards & Recognition", color: "bg-orange-500" },
  ];

  const featuredArticles: NewsArticle[] = [
    {
      id: "1",
      title:
        "GlobalTrack Logistics Revolutionizes International Shipping with AI-Powered Route Optimization",
      excerpt:
        "Our new artificial intelligence system reduces delivery times by 30% while cutting carbon emissions by 25%, setting new industry standards for sustainable logistics.",
      content:
        "GlobalTrack Logistics has unveiled its groundbreaking AI-powered route optimization system, marking a significant milestone in sustainable logistics technology...",
      category: "technology",
      author: "Sarah Chen, CTO",
      date: "December 10, 2024",
      readTime: "5 min read",
      views: "2.4K",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["AI", "Technology", "Sustainability", "Innovation"],
      featured: true,
    },
    {
      id: "2",
      title:
        "Breaking: GlobalTrack Wins 'Logistics Excellence Award 2024' for Outstanding Service Innovation",
      excerpt:
        "Recognized by the International Logistics Association for our customer-first approach and technological innovation in global supply chain management.",
      content:
        "The International Logistics Association has awarded GlobalTrack Logistics the prestigious 'Logistics Excellence Award 2024'...",
      category: "awards",
      author: "Marcus Rodriguez, CEO",
      date: "December 8, 2024",
      readTime: "3 min read",
      views: "3.1K",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Awards", "Recognition", "Excellence", "Innovation"],
      featured: true,
    },
    {
      id: "3",
      title:
        "Expanding Horizons: GlobalTrack Opens New Distribution Centers in Southeast Asia",
      excerpt:
        "Strategic expansion includes state-of-the-art facilities in Singapore, Bangkok, and Manila, strengthening our Asia-Pacific logistics network.",
      content:
        "GlobalTrack Logistics continues its global expansion with the opening of three new distribution centers across Southeast Asia...",
      category: "company",
      author: "David Thompson, VP Global Sales",
      date: "December 5, 2024",
      readTime: "4 min read",
      views: "1.8K",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Expansion", "Asia-Pacific", "Infrastructure", "Growth"],
      featured: true,
    },
  ];

  const regularArticles: NewsArticle[] = [
    {
      id: "4",
      title:
        "Sustainable Packaging Initiative Reduces Environmental Impact by 40%",
      excerpt:
        "Our new eco-friendly packaging solutions set new standards for environmental responsibility in the logistics industry.",
      content:
        "GlobalTrack's comprehensive sustainability program includes biodegradable packaging materials...",
      category: "sustainability",
      author: "Emma Williams, Head of Sustainability",
      date: "December 3, 2024",
      readTime: "6 min read",
      views: "1.5K",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Sustainability", "Environment", "Packaging", "Green"],
      featured: false,
    },
    {
      id: "5",
      title: "Industry Report: Global Supply Chain Trends for 2025",
      excerpt:
        "Our research team analyzes emerging trends and technologies shaping the future of international logistics and supply chain management.",
      content:
        "The GlobalTrack Research Institute releases its annual report on supply chain trends...",
      category: "industry",
      author: "Research Team",
      date: "November 28, 2024",
      readTime: "8 min read",
      views: "2.2K",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Research", "Trends", "2025", "Supply Chain"],
      featured: false,
    },
    {
      id: "6",
      title:
        "Customer Success Story: How Tech Startup Scaled Globally with GlobalTrack",
      excerpt:
        "From local delivery to international expansion, see how InnovateTech grew their business with our comprehensive logistics solutions.",
      content:
        "InnovateTech's journey from startup to global enterprise showcases the power of strategic logistics partnerships...",
      category: "company",
      author: "Customer Success Team",
      date: "November 25, 2024",
      readTime: "4 min read",
      views: "1.3K",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Customer Success", "Startup", "Growth", "Case Study"],
      featured: false,
    },
    {
      id: "7",
      title:
        "Next-Generation Tracking: Real-Time IoT Integration Across Global Network",
      excerpt:
        "Internet of Things sensors now provide unprecedented visibility into package conditions, location, and delivery predictions.",
      content:
        "GlobalTrack's IoT integration represents the next evolution in package tracking technology...",
      category: "technology",
      author: "Tech Innovation Team",
      date: "November 22, 2024",
      readTime: "5 min read",
      views: "1.9K",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["IoT", "Tracking", "Technology", "Innovation"],
      featured: false,
    },
    {
      id: "8",
      title:
        "Community Impact: GlobalTrack Foundation Supports Education in Developing Markets",
      excerpt:
        "Our foundation's education initiative has provided scholarships and logistics training to over 1,000 students across emerging markets.",
      content:
        "The GlobalTrack Foundation continues its commitment to education and community development...",
      category: "company",
      author: "GlobalTrack Foundation",
      date: "November 18, 2024",
      readTime: "3 min read",
      views: "1.1K",
      image:
        "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Community", "Education", "Foundation", "Impact"],
      featured: false,
    },
  ];

  const allArticles = [...featuredArticles, ...regularArticles];
  const filteredArticles =
    selectedCategory === "all"
      ? allArticles
      : allArticles.filter((article) => article.category === selectedCategory);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setSubscribeMessage("Please enter a valid email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscribeMessage("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);
    setSubscribeMessage("");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubscribeMessage(
        "🎉 Thank you for subscribing! You'll receive our latest updates soon.",
      );
      setEmail("");
    } catch (error) {
      setSubscribeMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  const companyStats = [
    {
      icon: <Globe className="h-8 w-8" />,
      value: "120+",
      label: "Countries Served",
      color: "text-blue-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "50K+",
      label: "Happy Customers",
      color: "text-green-600",
    },
    {
      icon: <Package className="h-8 w-8" />,
      value: "2M+",
      label: "Packages Delivered",
      color: "text-purple-600",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "25+",
      label: "Industry Awards",
      color: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section - Enhanced with Journalism Theme */}
      <section className="relative bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        {/* Professional journalism background */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/17604729/pexels-photo-17604729.jpeg')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-royal-600/95 via-slate-800/90 to-orange-600/95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>

        {/* Newspaper texture overlay */}
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm20 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"}></div>

        <div className="relative container mx-auto px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Header Icon */}
            <div className="flex items-center justify-center mb-12">
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-500/20 to-royal-600/20 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-2xl">
                  <NewspaperIcon className="h-20 w-20 text-orange-400" />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-royal-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Main Title with enhanced typography */}
            <div className="text-center mb-10">
              <h1 className="text-6xl lg:text-8xl font-bold mb-4 animate-fade-in">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  GlobalTrack
                </span>
                <br className="lg:hidden" />
                <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent ml-4 lg:ml-0">
                  Times
                </span>
              </h1>

              {/* Newspaper tagline */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-24"></div>
                <span className="mx-6 text-orange-400 font-semibold tracking-widest text-sm uppercase">
                  Digital Edition
                </span>
                <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-24"></div>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="text-center mb-12">
              <p className="text-2xl lg:text-3xl text-gray-100 mb-6 max-w-5xl mx-auto leading-relaxed animate-fade-in-delay font-light">
                Your premier digital publication for
                <span className="text-orange-400 font-semibold"> breaking news</span>,
                <span className="text-royal-300 font-semibold"> industry insights</span>, and
                <span className="text-cyan-400 font-semibold"> innovative solutions</span>
                <br className="hidden lg:block" />
                shaping the future of global logistics and supply chain excellence
              </p>

              {/* News categories preview */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["Breaking News", "Industry Analysis", "Tech Innovation", "Global Trade"].map((category, index) => (
                  <Badge
                    key={category}
                    className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm hover:bg-white/20 transition-all duration-300"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Enhanced Company Stats with newspaper theme */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 animate-slide-up">
              {companyStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-orange-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Publication info */}
            <div className="text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-full shadow-lg">
                <Calendar className="h-5 w-5 mr-3 text-orange-400" />
                <span className="font-semibold">Updated Daily</span>
                <span className="mx-3 text-white/60">•</span>
                <span className="text-orange-400 font-bold">December 2024 Edition</span>
                <span className="mx-3 text-white/60">•</span>
                <span className="text-cyan-400 font-medium">🌐 Worldwide Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Categories */}
      <section className="py-4 lg:py-6 bg-white shadow-md sticky top-16 lg:top-20 z-40 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  className={`
                    ${
                      selectedCategory === category.id
                        ? `${category.color} text-white hover:opacity-90 shadow-md`
                        : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                    }
                    px-3 lg:px-6 py-2 text-xs lg:text-sm font-semibold transition-all duration-300 transform hover:scale-105 rounded-full
                  `}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-8 lg:mb-12">
              <Star className="h-6 w-6 lg:h-8 lg:w-8 text-orange-500 mr-3" />
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
                Featured Stories
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredArticles
                .filter(
                  (article) =>
                    selectedCategory === "all" ||
                    article.category === selectedCategory,
                )
                .map((article, index) => (
                  <Card
                    key={article.id}
                    className={`group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
                  >
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${index === 0 ? "h-80" : "h-48"}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-orange-500 text-white">
                          <Zap className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center space-x-2 text-white/80 text-sm mb-2">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                          <span>•</span>
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <h3
                        className={`font-bold text-gray-800 mb-3 group-hover:text-royal-600 transition-colors duration-300 ${index === 0 ? "text-2xl" : "text-xl"}`}
                      >
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {article.date}
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {article.views} views
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-royal-600 hover:text-royal-700"
                        >
                          Read More <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regular Articles */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-8 lg:mb-12">
              <NewspaperIcon className="h-6 w-6 lg:h-8 lg:w-8 text-royal-600 mr-3" />
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
                Latest News & Updates
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {regularArticles
                .filter(
                  (article) =>
                    selectedCategory === "all" ||
                    article.category === selectedCategory,
                )
                .map((article) => (
                  <Card
                    key={article.id}
                    className="group hover:shadow-xl transition-all duration-300 border-0 bg-white"
                  >
                    <div className="grid md:grid-cols-5 h-full">
                      <div className="md:col-span-2 relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>

                      <CardContent className="md:col-span-3 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {article.tags.slice(0, 1).map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-royal-600 transition-colors duration-300 line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                            {article.excerpt}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                            <div className="flex items-center space-x-3">
                              <span className="flex items-center">
                                <User className="h-3 w-3 mr-1" />
                                {article.author}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {article.readTime}
                              </span>
                            </div>
                            <span className="flex items-center">
                              <Eye className="h-3 w-3 mr-1" />
                              {article.views}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              {article.date}
                            </span>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm" className="p-1">
                                <BookmarkPlus className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="p-1">
                                <Share2 className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-royal-600 hover:text-royal-700"
                              >
                                Read <ArrowRight className="h-3 w-3 ml-1" />
                              </Button>
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
      </section>

      {/* Company Highlights */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
                GlobalTrack at a Glance
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Leading the future of logistics with innovation, sustainability,
                and unwavering commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-royal-50 to-royal-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-royal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To revolutionize global logistics through innovative
                    technology, sustainable practices, and uncompromising
                    service excellence that connects businesses worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Global Reach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Operating across 120+ countries with strategic partnerships
                    and local expertise, we ensure seamless logistics solutions
                    regardless of destination.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Sustainability
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Committed to reducing environmental impact through green
                    logistics, carbon-neutral shipping options, and sustainable
                    packaging innovations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription - Enhanced Colorful Design */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-orange-500/20 to-yellow-500/20 animate-pulse-soft"></div>
        </div>

        {/* Geometric Decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-pink-500/30 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-bounce-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-2xl animate-pulse-soft" style={{animationDelay: '0.5s'}}></div>

        <div className="relative container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <MessageCircle className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
                Stay Updated with{' '}
                <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  GlobalTrack Times
                </span>
              </h2>

              <p className="text-lg lg:text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                🚀 Join our vibrant community and be the first to discover breakthrough innovations,
                exclusive industry insights, and game-changing logistics solutions that will transform your business!
              </p>
            </div>

            {/* Enhanced Newsletter Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
              <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 justify-center mb-8">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your professional email address"
                      className="w-full px-8 py-5 pl-14 rounded-2xl text-gray-800 placeholder:text-gray-500 border-2 border-white/30 focus:border-orange-400 focus:ring-4 focus:ring-orange-400/20 outline-none shadow-xl bg-white/95 backdrop-blur-sm font-medium transition-all duration-300"
                      disabled={isSubscribing}
                      required
                    />
                    <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubscribing}
                    className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 disabled:from-gray-400 disabled:to-gray-500 px-10 py-5 rounded-2xl font-bold text-white shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 disabled:transform-none border-0 text-lg"
                  >
                    {isSubscribing ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        🎯 Subscribe Now
                        <Send className="ml-3 h-6 w-6" />
                      </>
                    )}
                  </Button>
                </div>

                {subscribeMessage && (
                  <div
                    className={`p-6 rounded-2xl text-center font-medium text-lg backdrop-blur-sm ${
                      subscribeMessage.includes("🎉")
                        ? "bg-green-500/20 text-green-100 border-2 border-green-400/40 shadow-green-500/20 shadow-xl"
                        : "bg-red-500/20 text-red-100 border-2 border-red-400/40 shadow-red-500/20 shadow-xl"
                    }`}
                  >
                    {subscribeMessage}
                  </div>
                )}
              </form>

              {/* Enhanced Features */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">📈 Industry Trends</h3>
                  <p className="text-gray-200 text-sm">Weekly insights on market movements and logistics innovations</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">⚡ Breaking News</h3>
                  <p className="text-gray-200 text-sm">Real-time updates on major industry developments</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">🌟 Exclusive Content</h3>
                  <p className="text-gray-200 text-sm">Subscriber-only access to premium reports and case studies</p>
                </div>
              </div>

              {/* Social Proof */}
              <div className="text-center mt-8 pt-8 border-t border-white/20">
                <p className="text-white/90 font-medium text-lg mb-2">
                  🎉 Join 15,000+ logistics professionals worldwide
                </p>
                <div className="flex justify-center space-x-6 text-sm text-gray-200">
                  <span className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                    No spam, ever
                  </span>
                  <span className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                    Unsubscribe anytime
                  </span>
                  <span className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                    Free forever
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
