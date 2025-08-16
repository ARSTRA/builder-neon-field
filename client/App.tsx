import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ui/error-boundary";
import { Navigation } from "./components/ui/navigation";
import { ChatOnlyLayout } from "./components/ui/chat-only-layout";
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
import AdminSetup from "./pages/AdminSetup";
import AdminOverview from "./pages/AdminOverview";
import ErrorReport from "./pages/ErrorReport";
import NotFound from "./pages/NotFound";
import { ChatWidgetTest } from "./components/ui/chat-widget-test";
import { ChatPositionTest } from "./components/ui/chat-position-test";
import { ChatRightSideTest } from "./components/ui/chat-right-side-test";
import { ChatExtremeRightTest } from "./components/ui/chat-extreme-right-test";
import { ChatOnlyTest } from "./components/ui/chat-only-test";
import { AdminIntegrationTest } from "./components/ui/admin-integration-test";
import { AccessibilityImprovements } from "./components/ui/accessibility-improvements";
import { LayoutFixes } from "./components/ui/layout-fixes";

const queryClient = new QueryClient();

export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AccessibilityImprovements />
          <LayoutFixes />
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
                    <ChatOnlyLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937",
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
                    <ChatOnlyLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937",
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
                    <ChatOnlyLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937",
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
                    <ChatOnlyLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937",
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
                    <ChatOnlyLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937",
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
                    <ChatOnlyLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937",
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
                    <ChatOnlyLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937",
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
                    <ChatOnlyLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937",
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
                    <ChatOnlyLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937",
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
                    <ChatOnlyLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937",
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
                    <ChatOnlyLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937",
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
                    <ChatOnlyLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937",
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

              {/* Admin routes - redirect to unified auth */}
              <Route path="/admin-login" element={<Auth />} />
              <Route path="/AdminLogin" element={<Auth />} />
              <Route path="/admin/setup" element={<AdminSetup />} />
              <Route path="/admin/overview" element={<AdminOverview />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/unified-admin" element={<UnifiedAdmin />} />
              <Route path="/error-report" element={<ErrorReport />} />

              {/* Test routes */}
              <Route path="/test/chat-widget" element={<ChatWidgetTest />} />
              <Route
                path="/test/chat-position"
                element={<ChatPositionTest />}
              />
              <Route
                path="/test/chat-right-side"
                element={<ChatRightSideTest />}
              />
              <Route
                path="/test/chat-extreme-right"
                element={<ChatExtremeRightTest />}
              />
              <Route path="/test/chat-only" element={<ChatOnlyTest />} />
              <Route
                path="/test/admin-integration"
                element={<AdminIntegrationTest />}
              />

              {/* 404 page */}
              <Route
                path="*"
                element={
                  <div className="min-h-screen bg-white">
                    <Navigation />
                    <NotFound />
                    <ChatOnlyLayout
                      theme={{
                        primaryColor: "#2563eb",
                        secondaryColor: "#f59e0b",
                        backgroundColor: "#ffffff",
                        textColor: "#1f2937",
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
