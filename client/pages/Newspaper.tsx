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
      title: "GlobalTrack Logistics Revolutionizes International Shipping with AI-Powered Route Optimization",
      excerpt: "Our new artificial intelligence system reduces delivery times by 30% while cutting carbon emissions by 25%, setting new industry standards for sustainable logistics.",
      content: "GlobalTrack Logistics has unveiled its groundbreaking AI-powered route optimization system, marking a significant milestone in sustainable logistics technology...",
      category: "technology",
      author: "Sarah Chen, CTO",
      date: "December 10, 2024",
      readTime: "5 min read",
      views: "2.4K",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["AI", "Technology", "Sustainability", "Innovation"],
      featured: true,
    },
    {
      id: "2",
      title: "Breaking: GlobalTrack Wins 'Logistics Excellence Award 2024' for Outstanding Service Innovation",
      excerpt: "Recognized by the International Logistics Association for our customer-first approach and technological innovation in global supply chain management.",
      content: "The International Logistics Association has awarded GlobalTrack Logistics the prestigious 'Logistics Excellence Award 2024'...",
      category: "awards",
      author: "Marcus Rodriguez, CEO",
      date: "December 8, 2024",
      readTime: "3 min read",
      views: "3.1K",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Awards", "Recognition", "Excellence", "Innovation"],
      featured: true,
    },
    {
      id: "3",
      title: "Expanding Horizons: GlobalTrack Opens New Distribution Centers in Southeast Asia",
      excerpt: "Strategic expansion includes state-of-the-art facilities in Singapore, Bangkok, and Manila, strengthening our Asia-Pacific logistics network.",
      content: "GlobalTrack Logistics continues its global expansion with the opening of three new distribution centers across Southeast Asia...",
      category: "company",
      author: "David Thompson, VP Global Sales",
      date: "December 5, 2024",
      readTime: "4 min read",
      views: "1.8K",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Expansion", "Asia-Pacific", "Infrastructure", "Growth"],
      featured: true,
    },
  ];

  const regularArticles: NewsArticle[] = [
    {
      id: "4",
      title: "Sustainable Packaging Initiative Reduces Environmental Impact by 40%",
      excerpt: "Our new eco-friendly packaging solutions set new standards for environmental responsibility in the logistics industry.",
      content: "GlobalTrack's comprehensive sustainability program includes biodegradable packaging materials...",
      category: "sustainability",
      author: "Emma Williams, Head of Sustainability",
      date: "December 3, 2024",
      readTime: "6 min read",
      views: "1.5K",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Sustainability", "Environment", "Packaging", "Green"],
      featured: false,
    },
    {
      id: "5",
      title: "Industry Report: Global Supply Chain Trends for 2025",
      excerpt: "Our research team analyzes emerging trends and technologies shaping the future of international logistics and supply chain management.",
      content: "The GlobalTrack Research Institute releases its annual report on supply chain trends...",
      category: "industry",
      author: "Research Team",
      date: "November 28, 2024",
      readTime: "8 min read",
      views: "2.2K",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Research", "Trends", "2025", "Supply Chain"],
      featured: false,
    },
    {
      id: "6",
      title: "Customer Success Story: How Tech Startup Scaled Globally with GlobalTrack",
      excerpt: "From local delivery to international expansion, see how InnovateTech grew their business with our comprehensive logistics solutions.",
      content: "InnovateTech's journey from startup to global enterprise showcases the power of strategic logistics partnerships...",
      category: "company",
      author: "Customer Success Team",
      date: "November 25, 2024",
      readTime: "4 min read",
      views: "1.3K",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Customer Success", "Startup", "Growth", "Case Study"],
      featured: false,
    },
    {
      id: "7",
      title: "Next-Generation Tracking: Real-Time IoT Integration Across Global Network",
      excerpt: "Internet of Things sensors now provide unprecedented visibility into package conditions, location, and delivery predictions.",
      content: "GlobalTrack's IoT integration represents the next evolution in package tracking technology...",
      category: "technology",
      author: "Tech Innovation Team",
      date: "November 22, 2024",
      readTime: "5 min read",
      views: "1.9K",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["IoT", "Tracking", "Technology", "Innovation"],
      featured: false,
    },
    {
      id: "8",
      title: "Community Impact: GlobalTrack Foundation Supports Education in Developing Markets",
      excerpt: "Our foundation's education initiative has provided scholarships and logistics training to over 1,000 students across emerging markets.",
      content: "The GlobalTrack Foundation continues its commitment to education and community development...",
      category: "company",
      author: "GlobalTrack Foundation",
      date: "November 18, 2024",
      readTime: "3 min read",
      views: "1.1K",
      image: "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Community", "Education", "Foundation", "Impact"],
      featured: false,
    },
  ];

  const allArticles = [...featuredArticles, ...regularArticles];
  const filteredArticles = selectedCategory === "all"
    ? allArticles
    : allArticles.filter(article => article.category === selectedCategory);

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
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubscribeMessage("🎉 Thank you for subscribing! You'll receive our latest updates soon.");
      setEmail("");
    } catch (error) {
      setSubscribeMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  const companyStats = [
    { icon: <Globe className="h-8 w-8" />, value: "120+", label: "Countries Served", color: "text-blue-600" },
    { icon: <Users className="h-8 w-8" />, value: "50K+", label: "Happy Customers", color: "text-green-600" },
    { icon: <Package className="h-8 w-8" />, value: "2M+", label: "Packages Delivered", color: "text-purple-600" },
    { icon: <Award className="h-8 w-8" />, value: "25+", label: "Industry Awards", color: "text-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-royal-600 via-royal-700 to-orange-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-royal-600/90 via-royal-700/85 to-orange-600/90"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <NewspaperIcon className="h-16 w-16 text-orange-400" />
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-center mb-6 animate-fade-in">
              GlobalTrack <span className="text-orange-400">Times</span>
            </h1>
            <p className="text-xl lg:text-2xl text-center text-gray-200 mb-8 max-w-4xl mx-auto animate-fade-in-delay">
              Your trusted source for the latest news, innovations, and insights from the world of global logistics and supply chain excellence
            </p>

            {/* Company Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8 animate-slide-up">
              {companyStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className={`${stat.color} mb-4 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-orange-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                Updated Daily • December 2024 Edition
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Categories */}
      <section className="py-8 bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`
                    ${selectedCategory === category.id 
                      ? `${category.color} text-white hover:opacity-90` 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }
                    px-6 py-2 font-semibold transition-all duration-300 transform hover:scale-105
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-12">
              <Star className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-4xl font-bold text-gray-800">Featured Stories</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredArticles
                .filter(article => selectedCategory === "all" || article.category === selectedCategory)
                .map((article, index) => (
                  <Card key={article.id} className={`group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${index === 0 ? 'h-80' : 'h-48'}`}
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
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className={`font-bold text-gray-800 mb-3 group-hover:text-royal-600 transition-colors duration-300 ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
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
                        <Button variant="ghost" size="sm" className="text-royal-600 hover:text-royal-700">
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-12">
              <NewspaperIcon className="h-8 w-8 text-royal-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-800">Latest News & Updates</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {regularArticles
                .filter(article => selectedCategory === "all" || article.category === selectedCategory)
                .map((article) => (
                  <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
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
                              <Badge key={tag} variant="outline" className="text-xs">
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
                            <span className="text-sm text-gray-500">{article.date}</span>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm" className="p-1">
                                <BookmarkPlus className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="p-1">
                                <Share2 className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-royal-600 hover:text-royal-700">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">GlobalTrack at a Glance</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leading the future of logistics with innovation, sustainability, and unwavering commitment to excellence
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-royal-50 to-royal-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-royal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To revolutionize global logistics through innovative technology, sustainable practices, 
                    and uncompromising service excellence that connects businesses worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Global Reach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Operating across 120+ countries with strategic partnerships and local expertise, 
                    we ensure seamless logistics solutions regardless of destination.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Sustainability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Committed to reducing environmental impact through green logistics, 
                    carbon-neutral shipping options, and sustainable packaging innovations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-royal-600 via-royal-700 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <MessageCircle className="h-10 w-10 text-orange-400" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Stay Updated with GlobalTrack Times</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about industry insights, 
              company updates, and logistics innovations that matter to your business.
            </p>
            
            <form onSubmit={handleSubscribe} className="max-w-lg mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 pl-12 rounded-xl text-gray-800 placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-orange-400 outline-none shadow-lg"
                    disabled={isSubscribing}
                    required
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                <Button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:transform-none"
                >
                  {isSubscribing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>

              {subscribeMessage && (
                <div className={`mt-4 p-4 rounded-xl text-center ${
                  subscribeMessage.includes("🎉")
                    ? "bg-green-500/20 text-green-100 border border-green-400/30"
                    : "bg-red-500/20 text-red-100 border border-red-400/30"
                }`}>
                  {subscribeMessage}
                </div>
              )}
            </form>
            
            <p className="text-sm text-gray-300">
              Join 10,000+ logistics professionals who trust GlobalTrack Times for industry insights
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
