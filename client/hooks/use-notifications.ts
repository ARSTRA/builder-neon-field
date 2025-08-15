import { useState, useCallback } from "react";
import { Notification } from "@/components/ui/notification-dropdown";

// Sample notification data
const sampleUserNotifications: Notification[] = [
  {
    id: "1",
    title: "Shipment Delivered",
    message: "Your package GT240001 has been successfully delivered to your address.",
    timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    type: "shipment",
    isRead: false,
    action: {
      label: "View Details",
      url: "/dashboard?view=tracking",
    },
  },
  {
    id: "2",
    title: "Payment Processed",
    message: "Payment of $245.99 has been successfully processed for invoice #INV-2024-001.",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    type: "payment",
    isRead: false,
    action: {
      label: "View Payment",
      url: "/dashboard?view=payments",
    },
  },
  {
    id: "3",
    title: "Shipment Update",
    message: "Your package GT240002 is now in transit and expected to arrive tomorrow.",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    type: "shipment",
    isRead: true,
    action: {
      label: "Track Package",
      url: "/track",
    },
  },
  {
    id: "4",
    title: "Profile Updated",
    message: "Your profile information has been successfully updated.",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    type: "success",
    isRead: true,
  },
  {
    id: "5",
    title: "KYC Verification Required",
    message: "Please complete your KYC verification to continue using our services.",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    type: "warning",
    isRead: true,
    action: {
      label: "Complete KYC",
      url: "/dashboard?view=kyc",
    },
  },
];

const sampleAdminNotifications: Notification[] = [
  {
    id: "admin1",
    title: "New User Registration",
    message: "5 new users have registered in the last hour.",
    timestamp: new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
    type: "user",
    isRead: false,
    action: {
      label: "View Users",
      url: "/admin?view=users",
    },
  },
  {
    id: "admin2",
    title: "High Priority Support Ticket",
    message: "Urgent support ticket #TK-2024-892 requires immediate attention.",
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    type: "error",
    isRead: false,
    action: {
      label: "View Ticket",
      url: "/admin?view=chat",
    },
  },
  {
    id: "admin3",
    title: "System Performance Alert",
    message: "Server response time is above normal threshold (2.5s avg).",
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
    type: "warning",
    isRead: false,
    action: {
      label: "View Metrics",
      url: "/admin?view=general",
    },
  },
  {
    id: "admin4",
    title: "Daily Backup Completed",
    message: "System backup completed successfully at 2:00 AM.",
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    type: "success",
    isRead: true,
    action: {
      label: "View Logs",
      url: "/admin?view=general",
    },
  },
  {
    id: "admin5",
    title: "Payment Gateway Update",
    message: "Stripe integration has been updated to the latest version.",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    type: "system",
    isRead: true,
  },
];

export function useNotifications(type: "user" | "admin" = "user") {
  const [notifications, setNotifications] = useState<Notification[]>(
    type === "admin" ? sampleAdminNotifications : sampleUserNotifications
  );

  const markAsRead = useCallback((id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  const addNotification = useCallback((notification: Omit<Notification, "id">) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
    };
    setNotifications(prev => [newNotification, ...prev]);

    // Play notification sound if enabled
    try {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBUCHo+fnsWYgBE');
      audio.volume = 0.3;
      audio.play().catch(() => {
        // Silently fail if audio can't play
      });
    } catch (error) {
      // Ignore audio errors
    }
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    clearAll,
    addNotification,
    removeNotification,
  };
}
