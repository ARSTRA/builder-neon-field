import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ui/error-boundary";
import { Navigation } from "./components/ui/navigation";
import { ResponsiveChatLayout } from "./components/ui/responsive-chat-layout";
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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Security from "./pages/Security";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

import Admin from "./pages/Admin";
import UnifiedAdmin from "./pages/UnifiedAdmin";
import AdminLogin from "./pages/AdminLogin";
import AdminSetup from "./pages/AdminSetup";
import AdminOverview from "./pages/AdminOverview";
import ErrorReport from "./pages/ErrorReport";
import NotFound from "./pages/NotFound";
import { ChatWidgetTest } from "./components/ui/chat-widget-test";
import { ChatPositionTest } from "./components/ui/chat-position-test";
import { ChatRightSideTest } from "./components/ui/chat-right-side-test";

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
                    <ResponsiveChatLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937"
                      }}
                      showQuickActions={true}
                    />
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
                    <ResponsiveChatLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937"
                      }}
                      showQuickActions={true}
                    />
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
                    <ResponsiveChatLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937"
                      }}
                      showQuickActions={true}
                    />
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
                    <ResponsiveChatLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937"
                      }}
                      showQuickActions={true}
                    />
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
                    <ResponsiveChatLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937"
                      }}
                      showQuickActions={true}
                    />
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
                    <ResponsiveChatLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937"
                      }}
                      showQuickActions={true}
                    />
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
                    <ResponsiveChatLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937"
                      }}
                      showQuickActions={true}
                    />
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
                    <ResponsiveChatLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937"
                      }}
                      showQuickActions={true}
                    />
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
                    <ResponsiveChatLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937"
                      }}
                      showQuickActions={true}
                    />
                    <Footer />
                  </div>
                }
              />
              <Route
                path="/privacy"
                element={
                  <div className="min-h-screen bg-white">
                    <Navigation />
                    <PrivacyPolicy />
                    <ResponsiveChatLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937"
                      }}
                      showQuickActions={true}
                    />
                    <Footer />
                  </div>
                }
              />
              <Route
                path="/terms"
                element={
                  <div className="min-h-screen bg-white">
                    <Navigation />
                    <TermsOfService />
                    <ResponsiveChatLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937"
                      }}
                      showQuickActions={true}
                    />
                    <Footer />
                  </div>
                }
              />
              <Route
                path="/security"
                element={
                  <div className="min-h-screen bg-white">
                    <Navigation />
                    <Security />
                    <ResponsiveChatLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937"
                      }}
                      showQuickActions={true}
                    />
                    <Footer />
                  </div>
                }
              />

              {/* Authentication routes */}
              <Route path="/auth" element={<Auth />} />

              {/* Dashboard route */}
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Admin routes */}
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/AdminLogin" element={<AdminLogin />} />
              <Route path="/admin/setup" element={<AdminSetup />} />
              <Route path="/admin/overview" element={<AdminOverview />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/unified-admin" element={<UnifiedAdmin />} />
              <Route path="/error-report" element={<ErrorReport />} />

              {/* Test routes */}
              <Route path="/test/chat-widget" element={<ChatWidgetTest />} />
              <Route path="/test/chat-position" element={<ChatPositionTest />} />
              <Route path="/test/chat-right-side" element={<ChatRightSideTest />} />

              {/* 404 page */}
              <Route
                path="*"
                element={
                  <div className="min-h-screen bg-white">
                    <Navigation />
                    <NotFound />
                    <ResponsiveChatLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937"
                      }}
                      showQuickActions={true}
                    />
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
