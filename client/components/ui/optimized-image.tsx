import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ImageIcon, Loader2 } from "lucide-react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  showLoader?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallbackSrc = "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  width,
  height,
  loading = "lazy",
  objectFit = "cover",
  showLoader = true,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    if (!hasError && currentSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
    onError?.();
  };

  const objectFitClasses = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Loading State */}
      {isLoading && showLoader && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      )}

      {/* Error State */}
      {hasError && currentSrc === fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Image */}
      <img
        ref={imageRef}
        src={currentSrc}
        alt={alt}
        className={cn(
          "w-full h-full transition-opacity duration-300",
          objectFitClasses[objectFit],
          isLoading ? "opacity-0" : "opacity-100",
        )}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          minHeight: height ? `${height}px` : undefined,
          minWidth: width ? `${width}px` : undefined,
        }}
      />

      {/* Overlay for additional effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}

// Preset image configurations for common use cases
export const ImagePresets = {
  hero: {
    loading: "eager" as const,
    objectFit: "cover" as const,
    showLoader: true,
  },
  card: {
    loading: "lazy" as const,
    objectFit: "cover" as const,
    showLoader: false,
  },
  avatar: {
    loading: "lazy" as const,
    objectFit: "cover" as const,
    showLoader: false,
  },
  gallery: {
    loading: "lazy" as const,
    objectFit: "cover" as const,
    showLoader: true,
  },
} as const;
