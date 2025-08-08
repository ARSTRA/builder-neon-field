import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ui/error-boundary";
import { Navigation } from "./components/ui/navigation";
import { SimpleChatWidget } from "./components/ui/simple-chat-widget";
import { ScrollToTop } from "./components/ui/scroll-to-top";
import { Footer } from "./components/ui/footer";
import Index from "./pages/Index";
import Track from "./pages/Track";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Newspaper from "./pages/Newspaper";
import LiveChat from "./pages/LiveChat";
import Login from "./pages/Login";
import SimpleLogin from "./pages/SimpleLogin";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminSetup from "./pages/AdminSetup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <ErrorBoundary>
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
                    <SimpleChatWidget />
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
                    <SimpleChatWidget />
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
                    <SimpleChatWidget />
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
                    <SimpleChatWidget />
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
                    <SimpleChatWidget />
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
                    <SimpleChatWidget />
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
                    <SimpleChatWidget />
                    <Footer />
                  </div>
                }
              />
              <Route
                path="/chat"
                element={
                  <div className="min-h-screen bg-white">
                    <Navigation />
                    <LiveChat />
                    <SimpleChatWidget />
                    <Footer />
                  </div>
                }
              />
              <Route
                path="/livechat"
                element={
                  <div className="min-h-screen bg-white">
                    <Navigation />
                    <LiveChat />
                    <SimpleChatWidget />
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
              <Route path="/admin/setup" element={<AdminSetup />} />
              <Route path="/admin/login" element={<SimpleLogin />} />
              <Route path="/admin" element={<Admin />} />

              {/* 404 page */}
              <Route
                path="*"
                element={
                  <div className="min-h-screen bg-white">
                    <Navigation />
                    <NotFound />
                    <SimpleChatWidget />
                  </div>
                }
              />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
