import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/ui/navigation";
import { ChatWidget } from "./components/ui/chat-widget";
import Index from "./pages/Index";
import Track from "./pages/Track";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LiveChat from "./pages/LiveChat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public pages with navigation */}
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-white">
                <Navigation />
                <Index />
                <ChatWidget />
              </div>
            }
          />
          <Route
            path="/track"
            element={
              <div className="min-h-screen bg-white">
                <Navigation />
                <Track />
                <ChatWidget />
              </div>
            }
          />
          <Route
            path="/services"
            element={
              <div className="min-h-screen bg-white">
                <Navigation />
                <Services />
                <ChatWidget />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="min-h-screen bg-white">
                <Navigation />
                <About />
                <ChatWidget />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="min-h-screen bg-white">
                <Navigation />
                <Contact />
                <ChatWidget />
              </div>
            }
          />
          <Route
            path="/chat"
            element={
              <div className="min-h-screen bg-white">
                <Navigation />
                <LiveChat />
              </div>
            }
          />

          {/* Auth pages without navigation */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard without main navigation */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* 404 page */}
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-white">
                <Navigation />
                <NotFound />
                <ChatWidget />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
