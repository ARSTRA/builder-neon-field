import { useEffect } from 'react';

export interface ChatProvider {
  id: string;
  name: string;
  enabled: boolean;
  config: Record<string, any>;
}

export interface ChatIntegrationConfig {
  provider: 'internal' | 'chatway' | 'smartsupp' | 'tido' | 'tidio' | 'intercom' | 'zendesk' | 'freshchat' | 'livechat' | 'drift' | 'crisp';
  apiKey?: string;
  widgetId?: string;
  siteId?: string;
  appId?: string;
  enabled: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: {
    primaryColor?: string;
    textColor?: string;
    backgroundColor?: string;
  };
  welcomeMessage?: string;
  offlineMessage?: string;
  customization?: {
    showAvatar?: boolean;
    showTypingIndicator?: boolean;
    soundEnabled?: boolean;
    showTimestamp?: boolean;
  };
}

// Default configuration
export const defaultChatConfig: ChatIntegrationConfig = {
  provider: 'internal',
  enabled: true,
  position: 'bottom-right',
  theme: {
    primaryColor: '#2563eb',
    textColor: '#ffffff',
    backgroundColor: '#f8fafc',
  },
  welcomeMessage: 'Hello! How can we help you today?',
  offlineMessage: 'We are currently offline. Please leave a message and we will get back to you.',
  customization: {
    showAvatar: true,
    showTypingIndicator: true,
    soundEnabled: true,
    showTimestamp: true,
  }
};

// Chat provider integrations
export const ChatIntegrations = {
  // Chatway integration
  chatway: (config: ChatIntegrationConfig) => {
    if (!config.widgetId) return;
    
    useEffect(() => {
      if (typeof window !== 'undefined') {
        // Load Chatway script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://embed.chatway.app/chatway.js';
        script.onload = () => {
          if (window.ChatwayAPI) {
            window.ChatwayAPI.init({
              widgetId: config.widgetId,
              position: config.position,
              theme: config.theme,
            });
          }
        };
        document.head.appendChild(script);

        return () => {
          document.head.removeChild(script);
        };
      }
    }, [config]);
  },

  // Smartsupp integration
  smartsupp: (config: ChatIntegrationConfig) => {
    if (!config.apiKey) return;
    
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window._smartsupp = window._smartsupp || {};
        window._smartsupp.key = config.apiKey;
        window._smartsupp.theme = config.theme;
        
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.smartsuppchat.com/loader.js?';
        document.head.appendChild(script);

        return () => {
          document.head.removeChild(script);
        };
      }
    }, [config]);
  },

  // Tidio integration (fixed spelling)
  tidio: (config: ChatIntegrationConfig) => {
    if (!config.apiKey) return;
    
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.tidioChatApi = window.tidioChatApi || {};
        
        const script = document.createElement('script');
        script.async = true;
        script.src = `//code.tidio.co/${config.apiKey}.js`;
        document.head.appendChild(script);

        return () => {
          document.head.removeChild(script);
        };
      }
    }, [config]);
  },

  // Intercom integration
  intercom: (config: ChatIntegrationConfig) => {
    if (!config.appId) return;
    
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.Intercom('boot', {
          app_id: config.appId,
          custom_launcher_selector: '.intercom-launcher',
        });
        
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://widget.intercom.io/widget/${config.appId}`;
        document.head.appendChild(script);

        return () => {
          document.head.removeChild(script);
        };
      }
    }, [config]);
  },

  // Zendesk Chat integration
  zendesk: (config: ChatIntegrationConfig) => {
    if (!config.apiKey) return;
    
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.zESettings = {
          widget: {
            key: config.apiKey,
            position: config.position,
            color: {
              theme: config.theme?.primaryColor,
            },
          }
        };
        
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://static.zdassets.com/ekr/snippet.js?key=' + config.apiKey;
        script.id = 'ze-snippet';
        document.head.appendChild(script);

        return () => {
          const existingScript = document.getElementById('ze-snippet');
          if (existingScript) {
            document.head.removeChild(existingScript);
          }
        };
      }
    }, [config]);
  },

  // Freshchat integration
  freshchat: (config: ChatIntegrationConfig) => {
    if (!config.apiKey || !config.siteId) return;
    
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.fcWidget.init({
          token: config.apiKey,
          host: `https://wchat.freshchat.com`,
          siteId: config.siteId,
        });
        
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://wchat.freshchat.com/js/widget.js';
        document.head.appendChild(script);

        return () => {
          document.head.removeChild(script);
        };
      }
    }, [config]);
  },

  // LiveChat integration
  livechat: (config: ChatIntegrationConfig) => {
    if (!config.apiKey) return;
    
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.__lc = window.__lc || {};
        window.__lc.license = config.apiKey;
        
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://cdn.livechatinc.com/tracking.js';
        document.head.appendChild(script);

        return () => {
          document.head.removeChild(script);
        };
      }
    }, [config]);
  },

  // Drift integration
  drift: (config: ChatIntegrationConfig) => {
    if (!config.appId) return;
    
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.drift = window.drift || {};
        window.drift.SNIPPET_VERSION = '0.3.1';
        
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://js.driftt.com/include/' + config.appId + '/drift.min.js';
        document.head.appendChild(script);

        return () => {
          document.head.removeChild(script);
        };
      }
    }, [config]);
  },

  // Crisp integration
  crisp: (config: ChatIntegrationConfig) => {
    if (!config.siteId) return;
    
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = config.siteId;
        
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://client.crisp.chat/l.js';
        document.head.appendChild(script);

        return () => {
          document.head.removeChild(script);
        };
      }
    }, [config]);
  },
};

// Provider configurations for easy setup
export const chatProviderConfigs = {
  chatway: {
    name: 'Chatway',
    fields: ['widgetId'],
    description: 'Live chat widget for customer support',
    setupUrl: 'https://chatway.app',
  },
  smartsupp: {
    name: 'Smartsupp',
    fields: ['apiKey'],
    description: 'Free live chat and visitor recording',
    setupUrl: 'https://www.smartsupp.com',
  },
  tidio: {
    name: 'Tidio',
    fields: ['apiKey'],
    description: 'Live chat and chatbots',
    setupUrl: 'https://www.tidio.com',
  },
  intercom: {
    name: 'Intercom',
    fields: ['appId'],
    description: 'Customer messaging platform',
    setupUrl: 'https://www.intercom.com',
  },
  zendesk: {
    name: 'Zendesk Chat',
    fields: ['apiKey'],
    description: 'Customer service and support',
    setupUrl: 'https://www.zendesk.com',
  },
  freshchat: {
    name: 'Freshchat',
    fields: ['apiKey', 'siteId'],
    description: 'Modern messaging software',
    setupUrl: 'https://www.freshworks.com/live-chat-software',
  },
  livechat: {
    name: 'LiveChat',
    fields: ['apiKey'],
    description: 'Customer service live chat software',
    setupUrl: 'https://www.livechat.com',
  },
  drift: {
    name: 'Drift',
    fields: ['appId'],
    description: 'Conversational marketing platform',
    setupUrl: 'https://www.drift.com',
  },
  crisp: {
    name: 'Crisp',
    fields: ['siteId'],
    description: 'Customer messaging platform',
    setupUrl: 'https://crisp.chat',
  },
};

// Type declarations for window objects
declare global {
  interface Window {
    ChatwayAPI: any;
    _smartsupp: any;
    tidioChatApi: any;
    Intercom: any;
    zESettings: any;
    fcWidget: any;
    __lc: any;
    drift: any;
    $crisp: any;
    CRISP_WEBSITE_ID: string;
  }
}
