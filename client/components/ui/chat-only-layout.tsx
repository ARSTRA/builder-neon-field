import { useState, useEffect } from "react";
import { ChatOnlyWidget } from "./chat-only-widget";
import { cn } from "@/lib/utils";

interface ChatOnlyLayoutProps {
  className?: string;
  mobileBreakpoint?: number;
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
  };
  showQuickActions?: boolean;
}

export function ChatOnlyLayout({
  className,
  mobileBreakpoint = 768,
  theme,
  showQuickActions = true,
}: ChatOnlyLayoutProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width < mobileBreakpoint);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [mobileBreakpoint]);

  const getMobileTheme = () => {
    if (!isMobile) return theme;

    // Optimize theme for mobile
    return {
      ...theme,
      primaryColor: theme?.primaryColor || "#2563eb",
      secondaryColor: theme?.secondaryColor || "#f59e0b",
      backgroundColor: theme?.backgroundColor || "#ffffff",
      textColor: theme?.textColor || "#1f2937",
    };
  };

  if (isMobile) {
    return (
      <div className={cn("mobile-chat-only-container", className)}>
        <style>{`
          .mobile-chat-only-container .chat-only-widget {
            width: ${screenWidth < 480 ? "320px" : "350px"} !important;
            max-height: ${screenWidth < 600 ? "70vh" : "80vh"} !important;
          }
          
          .mobile-chat-only-container .chat-only-widget[data-fullscreen="true"] {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            border-radius: 0 !important;
            z-index: 9999 !important;
            transform: none !important;
          }
          
          .mobile-chat-only-container .chat-messages {
            max-height: ${screenWidth < 600 ? "40vh" : "50vh"} !important;
          }
          
          .mobile-chat-only-container .chat-input-area {
            padding: 12px !important;
          }
          
          .mobile-chat-only-container .chat-header {
            padding: 12px 16px !important;
          }
          
          .mobile-chat-only-container .chat-floating-button {
            height: ${screenWidth < 480 ? "56px" : "64px"} !important;
            width: ${screenWidth < 480 ? "56px" : "64px"} !important;
          }
          
          /* Ensure proper touch targets for mobile */
          .mobile-chat-only-container button {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Optimize text sizes for mobile readability */
          .mobile-chat-only-container .chat-message-text {
            font-size: ${screenWidth < 480 ? "14px" : "15px"} !important;
            line-height: 1.5 !important;
          }
          
          .mobile-chat-only-container .chat-timestamp {
            font-size: 12px !important;
          }
          
          /* Mobile-optimized input - prevent zoom on iOS */
          .mobile-chat-only-container textarea {
            font-size: 16px !important;
            padding: 12px !important;
          }
          
          /* Right end positioning for mobile */
          .mobile-chat-only-container .chat-button-right-end,
          .mobile-chat-only-container .chat-widget-right-end {
            right: 0px !important;
            transform: translateX(-4px) !important;
          }
          
          @media (max-width: 480px) {
            .mobile-chat-only-container .chat-button-right-end,
            .mobile-chat-only-container .chat-widget-right-end {
              transform: translateX(-2px) !important;
            }
          }
          
          /* Mobile-specific animations */
          @media (max-width: 480px) {
            .mobile-chat-only-container .chat-only-widget {
              animation: slideUpMobile 0.3s ease-out;
            }
            
            @keyframes slideUpMobile {
              from {
                transform: translateY(100%) translateX(-2px);
                opacity: 0;
              }
              to {
                transform: translateY(0) translateX(-2px);
                opacity: 1;
              }
            }
          }
          
          /* Safe area for devices with notches */
          @supports (padding: max(0px)) {
            .mobile-chat-only-container .chat-only-widget[data-fullscreen="true"] {
              padding-top: max(20px, env(safe-area-inset-top)) !important;
              padding-bottom: max(20px, env(safe-area-inset-bottom)) !important;
              padding-left: max(16px, env(safe-area-inset-left)) !important;
              padding-right: max(16px, env(safe-area-inset-right)) !important;
            }
          }
        `}</style>

        <ChatOnlyWidget
          className="chat-only-widget"
          theme={getMobileTheme()}
          showQuickActions={showQuickActions}
        />
      </div>
    );
  }

  // Desktop version
  return (
    <div className={cn("desktop-chat-only-container", className)}>
      <style>{`
        .desktop-chat-only-container .chat-only-widget {
          width: 384px !important;
          max-height: 600px !important;
        }
        
        .desktop-chat-only-container .chat-only-widget[data-fullscreen="true"] {
          position: fixed !important;
          top: 24px !important;
          left: 24px !important;
          right: 24px !important;
          bottom: 24px !important;
          width: auto !important;
          height: auto !important;
          border-radius: 12px !important;
          z-index: 9999 !important;
          transform: none !important;
        }
        
        .desktop-chat-only-container .chat-messages {
          max-height: 400px !important;
        }
        
        .desktop-chat-only-container .chat-floating-button {
          height: 64px !important;
          width: 64px !important;
        }
        
        /* Right end positioning for desktop */
        .desktop-chat-only-container .chat-button-right-end,
        .desktop-chat-only-container .chat-widget-right-end {
          right: 0px !important;
          transform: translateX(-8px) !important;
        }
        
        /* Desktop hover effects */
        .desktop-chat-only-container .chat-only-widget {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .desktop-chat-only-container .chat-only-widget:hover {
          transform: translateY(-2px) translateX(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Desktop-specific animations */
        .desktop-chat-only-container .chat-only-widget {
          animation: slideInDesktop 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes slideInDesktop {
          from {
            transform: translateY(20px) scale(0.95) translateX(-8px);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1) translateX(-8px);
            opacity: 1;
          }
        }
      `}</style>

      <ChatOnlyWidget
        className="chat-only-widget"
        theme={theme}
        showQuickActions={showQuickActions}
      />
    </div>
  );
}
