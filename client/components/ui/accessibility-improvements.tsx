import { useEffect } from 'react';

export function AccessibilityImprovements() {
  useEffect(() => {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white px-4 py-2 z-50';
    skipLink.style.transform = 'translateY(-100%)';
    skipLink.style.transition = 'transform 0.3s';
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.transform = 'translateY(0)';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.transform = 'translateY(-100%)';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add keyboard navigation improvements
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('[role="dialog"]');
        openModals.forEach(modal => {
          const closeButton = modal.querySelector('[aria-label="Close"]') as HTMLElement;
          if (closeButton) {
            closeButton.click();
          }
        });
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (document.body.contains(skipLink)) {
        document.body.removeChild(skipLink);
      }
    };
  }, []);
  
  return null; // This component only adds functionality, no UI
}

// CSS improvements for better focus visibility
export const accessibilityCSS = `
  /* Enhanced focus styles */
  *:focus {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
  
  /* Better focus for interactive elements */
  button:focus,
  a:focus,
  input:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
  }
  
  /* Screen reader only class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  
  .focus\\:not-sr-only:focus {
    position: static;
    width: auto;
    height: auto;
    padding: inherit;
    margin: inherit;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }
  
  /* Improved contrast for better readability */
  .text-gray-500 {
    color: #6b7280; /* Ensure sufficient contrast */
  }
  
  .text-gray-400 {
    color: #9ca3af; /* Ensure sufficient contrast */
  }
  
  /* Better touch targets for mobile */
  @media (max-width: 768px) {
    button,
    a,
    input,
    textarea,
    select {
      min-height: 44px;
      min-width: 44px;
    }
  }
  
  /* Reduced motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
