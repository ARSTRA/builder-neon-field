import { cn } from "@/lib/utils";
import { Loader2, Package, Truck, Plane } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  color?: "primary" | "secondary" | "white" | "gray";
}

export function LoadingSpinner({ 
  size = "md", 
  className,
  color = "primary" 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6", 
    lg: "h-8 w-8",
    xl: "h-12 w-12"
  };

  const colorClasses = {
    primary: "text-royal-600",
    secondary: "text-orange-500",
    white: "text-white",
    gray: "text-gray-500"
  };

  return (
    <Loader2 
      className={cn(
        "animate-spin",
        sizeClasses[size],
        colorClasses[color],
        className
      )} 
    />
  );
}

interface LoadingDotsProps {
  className?: string;
  color?: "primary" | "secondary" | "white" | "gray";
}

export function LoadingDots({ className, color = "primary" }: LoadingDotsProps) {
  const colorClasses = {
    primary: "bg-royal-600",
    secondary: "bg-orange-500", 
    white: "bg-white",
    gray: "bg-gray-500"
  };

  return (
    <div className={cn("flex space-x-1", className)}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            "w-2 h-2 rounded-full animate-pulse",
            colorClasses[color]
          )}
          style={{
            animationDelay: `${i * 0.15}s`,
            animationDuration: "1s"
          }}
        />
      ))}
    </div>
  );
}

interface ShippingLoadingProps {
  message?: string;
  className?: string;
}

export function ShippingLoading({ 
  message = "Processing your request...", 
  className 
}: ShippingLoadingProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8", className)}>
      <div className="relative mb-6">
        {/* Rotating logistics icons */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 animate-spin">
            <Truck className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-6 text-royal-600" />
            <Plane className="absolute right-0 top-1/2 transform -translate-y-1/2 h-6 w-6 text-orange-500" />
            <Package className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-6 w-6 text-royal-600" />
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-6 w-6">
              <div className="w-6 h-6 bg-orange-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Center loading spinner */}
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </div>
      
      <p className="text-gray-600 text-center font-medium">{message}</p>
      <LoadingDots className="mt-3" />
    </div>
  );
}

interface PageLoadingProps {
  title?: string;
  subtitle?: string;
}

export function PageLoading({ 
  title = "Loading...", 
  subtitle = "Please wait while we prepare your content" 
}: PageLoadingProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-royal-600 to-orange-500 rounded-full mb-6">
            <LoadingSpinner size="lg" color="white" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{subtitle}</p>
        <LoadingDots />
      </div>
    </div>
  );
}

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
  animation?: "pulse" | "wave";
}

export function Skeleton({ 
  className,
  variant = "rectangular", 
  width,
  height,
  animation = "pulse"
}: SkeletonProps) {
  const variantClasses = {
    text: "rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg"
  };

  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-pulse" // Could be enhanced with a wave animation
  };

  return (
    <div
      className={cn(
        "bg-gray-300",
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height
      }}
    />
  );
}

// Card skeleton for consistent loading states
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("p-6 border border-gray-200 rounded-lg bg-white", className)}>
      <Skeleton variant="rectangular" height={200} className="mb-4" />
      <Skeleton variant="text" height={20} className="mb-2" />
      <Skeleton variant="text" height={16} width="70%" className="mb-4" />
      <div className="flex space-x-2">
        <Skeleton variant="rectangular" width={80} height={32} />
        <Skeleton variant="rectangular" width={60} height={32} />
      </div>
    </div>
  );
}

// Loading overlay for forms and content
interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
  children: React.ReactNode;
}

export function LoadingOverlay({ 
  isLoading, 
  message = "Loading...", 
  children 
}: LoadingOverlayProps) {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50 rounded-lg">
          <div className="text-center">
            <LoadingSpinner size="lg" className="mb-3" />
            <p className="text-gray-600 font-medium">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
}
