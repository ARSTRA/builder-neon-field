import { useEffect, useState } from 'react';

export function LayoutFixes() {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Handle viewport changes
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Initial viewport
    updateViewport();

    // Listen for resize events
    window.addEventListener('resize', updateViewport);
    window.addEventListener('orientationchange', updateViewport);

    // Fix iOS viewport height issue
    const fixIOSViewport = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    fixIOSViewport();
    window.addEventListener('resize', fixIOSViewport);

    // Prevent horizontal scrolling on mobile
    const preventHorizontalScroll = () => {
      const body = document.body;
      const html = document.documentElement;
      
      // Check for horizontal overflow
      if (body.scrollWidth > window.innerWidth || html.scrollWidth > window.innerWidth) {
        console.warn('Horizontal overflow detected - checking elements...');
        
        // Find elements causing overflow
        const allElements = document.querySelectorAll('*');
        allElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.right > window.innerWidth) {
            console.warn('Element causing overflow:', element);
          }
        });
      }
    };

    // Check for overflow after layout changes
    setTimeout(preventHorizontalScroll, 1000);

    return () => {
      window.removeEventListener('resize', updateViewport);
      window.removeEventListener('orientationchange', updateViewport);
      window.removeEventListener('resize', fixIOSViewport);
    };
  }, []);

  return (
    <>
      {/* CSS for layout fixes */}
      <style>{`
        /* Fix iOS viewport height */
        .min-h-screen {
          min-height: 100vh;
          min-height: calc(var(--vh, 1vh) * 100);
        }
        
        /* Prevent horizontal overflow */
        html, body {
          overflow-x: hidden;
          max-width: 100%;
        }
        
        /* Fix z-index stacking issues */
        .z-40 { z-index: 40; }
        .z-50 { z-index: 50; }
        .z-60 { z-index: 60; }
        
        /* Ensure proper text wrapping */
        .break-words {
          word-wrap: break-word;
          word-break: break-word;
          hyphens: auto;
        }
        
        /* Fix flex shrinking issues */
        .flex-shrink-0 {
          flex-shrink: 0;
        }
        
        /* Better image handling */
        img {
          max-width: 100%;
          height: auto;
        }
        
        /* Fix sticky positioning on iOS */
        .sticky {
          position: -webkit-sticky;
          position: sticky;
        }
        
        /* Smooth scrolling improvements */
        html {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
        
        /* Fix mobile input zoom */
        @media (max-width: 768px) {
          input[type="text"],
          input[type="email"],
          input[type="password"],
          input[type="number"],
          input[type="tel"],
          input[type="url"],
          input[type="search"],
          textarea,
          select {
            font-size: 16px;
          }
        }
        
        /* Chat widget positioning fixes */
        .chat-widget-container {
          position: fixed;
          bottom: 24px;
          right: 0;
          z-index: 50;
          transform: translateX(-8px);
        }
        
        @media (max-width: 768px) {
          .chat-widget-container {
            bottom: 16px;
            transform: translateX(-4px);
          }
        }
        
        @media (max-width: 480px) {
          .chat-widget-container {
            bottom: 12px;
            transform: translateX(-2px);
          }
        }
        
        /* Ensure proper contrast ratios */
        .text-gray-500 {
          color: #6b7280;
        }
        
        .text-gray-400 {
          color: #9ca3af;
        }
        
        /* Fix modal backdrop issues */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 9998;
        }
        
        .modal-content {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 9999;
          max-height: 90vh;
          max-width: 90vw;
          overflow-y: auto;
        }
        
        /* Performance optimizations */
        .will-change-transform {
          will-change: transform;
        }
        
        .will-change-opacity {
          will-change: opacity;
        }
        
        /* Fix scroll anchoring */
        html {
          scroll-anchoring: none;
        }
      `}</style>
      
      {/* Development viewport info */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded z-50 opacity-50">
          {viewport.width} × {viewport.height}
        </div>
      )}
    </>
  );
}
