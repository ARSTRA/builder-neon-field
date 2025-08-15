import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plane,
  Ship,
  Truck,
  Package,
  Building2,
  Globe,
  Filter,
  X,
} from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
  location: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&auto=format&q=80",
    title: "Boeing 747 Cargo Aircraft",
    description:
      "Our fleet of modern cargo aircraft ensuring fast global delivery",
    category: "Air Freight",
    location: "Dubai International Airport",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/6379245/pexels-photo-6379245.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    title: "Modern Container Ship Operations",
    description:
      "State-of-the-art cargo vessels handling large-scale ocean freight operations with thousands of containers across global trade routes",
    category: "Ocean Freight",
    location: "Port of Rotterdam, Netherlands",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop&auto=format&q=80",
    title: "Ground Transport Fleet",
    description: "Modern trucking fleet for reliable door-to-door delivery",
    category: "Ground Transport",
    location: "Distribution Center, USA",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop&auto=format&q=80",
    title: "Express Package Sorting",
    description: "High-tech sorting facility for express delivery services",
    category: "Express Delivery",
    location: "Global Hub, Singapore",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&auto=format&q=80",
    title: "Modern Warehouse Operations",
    description: "State-of-the-art warehousing and storage facilities",
    category: "Warehousing",
    location: "London Distribution Center",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&auto=format&q=80",
    title: "Cargo Loading Operations",
    description: "Professional cargo handling and loading procedures",
    category: "Air Freight",
    location: "Frankfurt Cargo Hub",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/6572431/pexels-photo-6572431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    title: "Advanced Port Terminal Operations",
    description: "High-tech container terminal with automated cranes and advanced logistics systems operating 24/7 for global trade",
    category: "Ocean Freight",
    location: "Port of Baltimore, USA",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format&q=80",
    title: "Cross-Border Trucking",
    description: "Seamless cross-border transportation services",
    category: "Ground Transport",
    location: "US-Canada Border",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1593526613712-7b4b9a707330?w=800&h=600&fit=crop&auto=format&q=80",
    title: "Last-Mile Delivery",
    description: "Efficient last-mile delivery solutions for urban areas",
    category: "Express Delivery",
    location: "New York City",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop&auto=format&q=80",
    title: "Cold Storage Facility",
    description: "Temperature-controlled storage for sensitive cargo",
    category: "Warehousing",
    location: "Miami Cold Chain Hub",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop&auto=format&q=80",
    title: "Global Operations Center",
    description: "24/7 monitoring and coordination of worldwide operations",
    category: "Operations",
    location: "GlobalTrack HQ",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop&auto=format&q=80",
    title: "Customer Service Center",
    description: "Dedicated customer support and tracking services",
    category: "Operations",
    location: "Customer Care Center",
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/28438355/pexels-photo-28438355.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    title: "Container Securing Operations",
    description: "Professional cargo securing and handling procedures ensuring safe ocean transport with experienced maritime logistics teams",
    category: "Ocean Freight",
    location: "Port of Hamburg, Germany",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Ocean Freight Vessel Fleet",
    description: "Modern container ship fleet providing reliable ocean freight services connecting global markets with eco-friendly solutions",
    category: "Ocean Freight",
    location: "International Waters",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Mega Container Terminal",
    description: "World-class container terminal facility with advanced automation, real-time tracking, and sustainable port operations",
    category: "Ocean Freight",
    location: "Port of Singapore",
  },
];

const categories = [
  { name: "All", icon: Globe, color: "bg-gray-100 text-gray-800" },
  { name: "Air Freight", icon: Plane, color: "bg-blue-100 text-blue-800" },
  { name: "Ocean Freight", icon: Ship, color: "bg-cyan-100 text-cyan-800" },
  {
    name: "Ground Transport",
    icon: Truck,
    color: "bg-green-100 text-green-800",
  },
  {
    name: "Express Delivery",
    icon: Package,
    color: "bg-orange-100 text-orange-800",
  },
  {
    name: "Warehousing",
    icon: Building2,
    color: "bg-purple-100 text-purple-800",
  },
  { name: "Operations", icon: Filter, color: "bg-royal-100 text-royal-800" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Professional Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Global logistics operations"
            className="w-full h-full object-cover"
          />
          {/* Multi-layer Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-royal-900/85 via-royal-800/75 to-royal-700/80"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-orange-500/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-white/10 rounded-full animate-pulse-soft"></div>
        <div
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-orange-400/15 rounded-full animate-bounce-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-12 h-12 bg-white/15 rounded-full animate-pulse-soft"
          style={{ animationDelay: "0.8s" }}
        ></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center p-4 bg-orange-500/20 backdrop-blur-sm rounded-full mb-8 animate-fade-in">
              <div className="flex items-center space-x-2">
                <Globe className="h-8 w-8 text-orange-400" />
                <Plane className="h-6 w-6 text-white" />
                <Ship className="h-6 w-6 text-white" />
                <Truck className="h-6 w-6 text-white" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-delay">
              <span className="text-white">Operations</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mt-2">
                Gallery
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl lg:text-3xl text-gray-200 mb-6 font-light animate-slide-up">
              World-Class Logistics in Action
            </p>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 animate-slide-up">
              Explore our state-of-the-art facilities, cutting-edge
              transportation network, and professional operations across the
              globe. See how GlobalTrack delivers excellence through innovation,
              technology, and expertise.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12 animate-fade-in">
              <div className="text-center group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-300">Global Facilities</div>
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-300">Operations</div>
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    120+
                  </div>
                  <div className="text-sm text-gray-300">Countries</div>
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    1M+
                  </div>
                  <div className="text-sm text-gray-300">Shipments</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
              <div className="text-center">
                <p className="text-gray-300 mb-4">Browse by category below</p>
                <div className="flex items-center justify-center space-x-2 text-orange-400">
                  <span className="text-sm">Scroll to explore</span>
                  <div className="animate-bounce">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Geometric shapes */}
          <div className="absolute top-1/4 left-10 w-1 h-20 bg-orange-500/30 transform rotate-45 animate-pulse-soft"></div>
          <div
            className="absolute bottom-1/4 right-10 w-1 h-16 bg-white/20 transform -rotate-45 animate-pulse-soft"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-ping"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.name}
                  variant={
                    selectedCategory === category.name ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 ${
                    selectedCategory === category.name
                      ? "bg-royal-600 hover:bg-royal-700 text-white"
                      : "border-royal-200 text-royal-600 hover:bg-royal-50"
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{category.name}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredImages.map((image) => (
              <Card
                key={image.id}
                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute top-3 left-3">
                      <Badge
                        className={
                          categories.find((cat) => cat.name === image.category)
                            ?.color
                        }
                      >
                        {image.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-royal-600 transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {image.description}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Globe className="h-3 w-3 mr-1" />
                      {image.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No images found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden">
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="grid md:grid-cols-2">
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-96 md:h-full object-cover"
                />
              </div>
              <div className="p-8">
                <Badge
                  className={
                    categories.find(
                      (cat) => cat.name === selectedImage.category,
                    )?.color + " mb-4"
                  }
                >
                  {selectedImage.category}
                </Badge>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedImage.description}
                </p>
                <div className="flex items-center text-gray-500">
                  <Globe className="h-4 w-4 mr-2" />
                  <span className="font-medium">{selectedImage.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
