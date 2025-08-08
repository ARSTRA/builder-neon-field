import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/ui/navigation";
import { EnhancedChatWidget } from "./components/ui/enhanced-chat-widget";
import { ScrollToTop } from "./components/ui/scroll-to-top";
import { Footer } from "./components/ui/footer";
import Index from "./pages/Index";
import Track from "./pages/Track";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Newspaper from "./pages/Newspaper";
import Login from "./pages/Login";
import SimpleLogin from "./pages/SimpleLogin";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Public pages with navigation */}
            <Route
              path="/"
              element={
                <div className="min-h-screen bg-white">
                  <Navigation />
                  <Index />
                  <EnhancedChatWidget />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/track"
              element={
                <div className="min-h-screen bg-white">
                  <Navigation />
                  <Track />
                  <EnhancedChatWidget />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/services"
              element={
                <div className="min-h-screen bg-white">
                  <Navigation />
                  <Services />
                  <EnhancedChatWidget />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div className="min-h-screen bg-white">
                  <Navigation />
                  <About />
                  <EnhancedChatWidget />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="min-h-screen bg-white">
                  <Navigation />
                  <Contact />
                  <EnhancedChatWidget />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/gallery"
              element={
                <div className="min-h-screen bg-white">
                  <Navigation />
                  <Gallery />
                  <EnhancedChatWidget />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/newspaper"
              element={
                <div className="min-h-screen bg-white">
                  <Navigation />
                  <Newspaper />
                  <EnhancedChatWidget />
                  <Footer />
                </div>
              }
            />

            {/* Auth pages without navigation */}
            <Route path="/login" element={<SimpleLogin />} />
            <Route path="/login/legacy" element={<Login />} />
            <Route path="/admin/login/legacy" element={<AdminLogin />} />
            <Route path="/register" element={<Register />} />

            {/* Dashboard without main navigation */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Admin auth and panel without main navigation */}
            <Route path="/admin/login" element={<SimpleLogin />} />
            <Route path="/admin" element={<Admin />} />

            {/* 404 page */}
            <Route
              path="*"
              element={
                <div className="min-h-screen bg-white">
                  <Navigation />
                  <NotFound />
                  <EnhancedChatWidget />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
