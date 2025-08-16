import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChatPositioningProps {
  children: ReactNode;
  className?: string;
  forceRight?: boolean;
}

export function ChatPositioning({ 
  children, 
  className, 
  forceRight = true 
}: ChatPositioningProps) {
  const positionStyles = forceRight 
    ? { 
        position: 'fixed' as const,
        right: '24px',
        bottom: '24px',
        zIndex: 50
      }
    : {};

  return (
    <>
      <style>{`
        .chat-positioning-container {
          position: fixed !important;
          right: 24px !important;
          bottom: 24px !important;
          z-index: 50 !important;
        }
        
        @media (max-width: 768px) {
          .chat-positioning-container {
            right: 16px !important;
            bottom: 16px !important;
          }
        }
        
        @media (max-width: 480px) {
          .chat-positioning-container {
            right: 12px !important;
            bottom: 12px !important;
          }
        }
        
        /* Ensure chat widget never gets pushed off screen */
        .chat-positioning-container * {
          max-width: calc(100vw - 48px) !important;
        }
        
        @media (max-width: 768px) {
          .chat-positioning-container * {
            max-width: calc(100vw - 32px) !important;
          }
        }
        
        @media (max-width: 480px) {
          .chat-positioning-container * {
            max-width: calc(100vw - 24px) !important;
          }
        }
      `}</style>
      
      <div 
        className={cn("chat-positioning-container", className)}
        style={positionStyles}
      >
        {children}
      </div>
    </>
  );
}
