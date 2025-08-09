import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import {
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  X,
  Info,
  Zap,
  Eye,
  AlertCircle,
  Bug,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ErrorInfo {
  type: "error" | "warning" | "info";
  category: string;
  message: string;
  location?: string;
  severity: "low" | "medium" | "high" | "critical";
  timestamp: Date;
  fixed?: boolean;
}

export function ErrorDetector() {
  const [errors, setErrors] = useState<ErrorInfo[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [lastScan, setLastScan] = useState<Date | null>(null);
  const { toast } = useToast();

  const scanForErrors = async () => {
    setIsScanning(true);
    const detectedErrors: ErrorInfo[] = [];

    try {
      // Check for console errors
      const consoleErrors = checkConsoleErrors();
      detectedErrors.push(...consoleErrors);

      // Check for broken images
      const imageErrors = await checkBrokenImages();
      detectedErrors.push(...imageErrors);

      // Check for missing dependencies
      const dependencyErrors = checkMissingDependencies();
      detectedErrors.push(...dependencyErrors);

      // Check for accessibility issues
      const a11yErrors = checkAccessibilityIssues();
      detectedErrors.push(...a11yErrors);

      // Check for performance issues
      const performanceWarnings = checkPerformanceIssues();
      detectedErrors.push(...performanceWarnings);

      // Check for React-specific issues
      const reactErrors = checkReactIssues();
      detectedErrors.push(...reactErrors);

      setErrors(detectedErrors);
      setLastScan(new Date());

      toast({
        title: "Error Scan Complete",
        description: `Found ${detectedErrors.length} issues`,
        variant: detectedErrors.some((e) => e.severity === "critical")
          ? "destructive"
          : "default",
      });
    } catch (error) {
      console.error("Error during scan:", error);
    } finally {
      setIsScanning(false);
    }
  };

  const checkConsoleErrors = (): ErrorInfo[] => {
    const errors: ErrorInfo[] = [];

    // Check if there are console errors
    if (typeof window !== "undefined") {
      const originalError = console.error;
      const originalWarn = console.warn;
      let errorCount = 0;
      let warnCount = 0;

      console.error = (...args) => {
        errorCount++;
        originalError.apply(console, args);
      };

      console.warn = (...args) => {
        warnCount++;
        originalWarn.apply(console, args);
      };

      if (errorCount > 0) {
        errors.push({
          type: "error",
          category: "Console",
          message: `${errorCount} console errors detected`,
          severity: "high",
          timestamp: new Date(),
        });
      }

      if (warnCount > 0) {
        errors.push({
          type: "warning",
          category: "Console",
          message: `${warnCount} console warnings detected`,
          severity: "medium",
          timestamp: new Date(),
        });
      }
    }

    return errors;
  };

  const checkBrokenImages = async (): Promise<ErrorInfo[]> => {
    const errors: ErrorInfo[] = [];
    const images = document.querySelectorAll("img");

    for (const img of images) {
      if (img.naturalWidth === 0 && img.complete) {
        errors.push({
          type: "error",
          category: "Images",
          message: `Broken image: ${img.src}`,
          location: img.src,
          severity: "medium",
          timestamp: new Date(),
        });
      }
    }

    return errors;
  };

  const checkMissingDependencies = (): ErrorInfo[] => {
    const errors: ErrorInfo[] = [];

    // Check for missing React components that might cause errors
    const components = ["Button", "Card", "Input", "Badge"];
    components.forEach((component) => {
      try {
        // This is a basic check - in practice you'd want more sophisticated detection
        const elements = document.querySelectorAll(
          `[class*="${component.toLowerCase()}"]`,
        );
        if (elements.length === 0) {
          errors.push({
            type: "info",
            category: "Components",
            message: `${component} component not found on current page`,
            severity: "low",
            timestamp: new Date(),
          });
        }
      } catch (error) {
        // Handle any checking errors
      }
    });

    return errors;
  };

  const checkAccessibilityIssues = (): ErrorInfo[] => {
    const errors: ErrorInfo[] = [];

    // Check for missing alt text on images
    const imagesWithoutAlt = document.querySelectorAll("img:not([alt])");
    if (imagesWithoutAlt.length > 0) {
      errors.push({
        type: "warning",
        category: "Accessibility",
        message: `${imagesWithoutAlt.length} images missing alt text`,
        severity: "medium",
        timestamp: new Date(),
      });
    }

    // Check for buttons without aria-labels or text
    const unlabeledButtons = document.querySelectorAll(
      "button:not([aria-label]):empty",
    );
    if (unlabeledButtons.length > 0) {
      errors.push({
        type: "warning",
        category: "Accessibility",
        message: `${unlabeledButtons.length} buttons without labels`,
        severity: "medium",
        timestamp: new Date(),
      });
    }

    return errors;
  };

  const checkPerformanceIssues = (): ErrorInfo[] => {
    const errors: ErrorInfo[] = [];

    // Check bundle size (if available)
    if (typeof window !== "undefined" && window.performance) {
      const loadTime =
        window.performance.timing.loadEventEnd -
        window.performance.timing.navigationStart;
      if (loadTime > 3000) {
        errors.push({
          type: "warning",
          category: "Performance",
          message: `Slow page load time: ${loadTime}ms`,
          severity: "medium",
          timestamp: new Date(),
        });
      }
    }

    // Check for large DOM
    const elements = document.querySelectorAll("*");
    if (elements.length > 1500) {
      errors.push({
        type: "warning",
        category: "Performance",
        message: `Large DOM: ${elements.length} elements`,
        severity: "medium",
        timestamp: new Date(),
      });
    }

    return errors;
  };

  const checkReactIssues = (): ErrorInfo[] => {
    const errors: ErrorInfo[] = [];

    // Check for React development warnings
    if (
      typeof window !== "undefined" &&
      (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__
    ) {
      errors.push({
        type: "info",
        category: "React",
        message: "React DevTools detected - development mode",
        severity: "low",
        timestamp: new Date(),
      });
    }

    // Check for potential memory leaks (basic check)
    const eventListeners = document.querySelectorAll(
      "[onclick], [onchange], [onsubmit]",
    );
    if (eventListeners.length > 50) {
      errors.push({
        type: "warning",
        category: "React",
        message: `High number of inline event handlers: ${eventListeners.length}`,
        severity: "medium",
        timestamp: new Date(),
      });
    }

    return errors;
  };

  const markAsFixed = (index: number) => {
    setErrors((prev) =>
      prev.map((error, i) => (i === index ? { ...error, fixed: true } : error)),
    );
  };

  const clearAllErrors = () => {
    setErrors([]);
    toast({
      title: "Errors Cleared",
      description: "All detected errors have been cleared from the list",
    });
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "info":
        return <Info className="h-4 w-4 text-blue-500" />;
      default:
        return <Bug className="h-4 w-4 text-gray-500" />;
    }
  };

  useEffect(() => {
    // Run initial scan
    scanForErrors();
  }, []);

  const criticalErrors = errors.filter(
    (e) => e.severity === "critical" && !e.fixed,
  );
  const highErrors = errors.filter((e) => e.severity === "high" && !e.fixed);
  const mediumErrors = errors.filter(
    (e) => e.severity === "medium" && !e.fixed,
  );
  const lowErrors = errors.filter((e) => e.severity === "low" && !e.fixed);
  const fixedErrors = errors.filter((e) => e.fixed);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bug className="h-5 w-5" />
            <span>Website Error Detector</span>
          </CardTitle>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Comprehensive scan for errors, warnings, and issues
            </p>
            <div className="flex space-x-2">
              <Button
                onClick={scanForErrors}
                disabled={isScanning}
                variant="outline"
                size="sm"
              >
                {isScanning ? (
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Eye className="h-4 w-4 mr-2" />
                )}
                {isScanning ? "Scanning..." : "Scan Now"}
              </Button>
              {errors.length > 0 && (
                <Button onClick={clearAllErrors} variant="outline" size="sm">
                  <X className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">
                {criticalErrors.length}
              </div>
              <div className="text-sm text-gray-600">Critical</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {highErrors.length}
              </div>
              <div className="text-sm text-gray-600">High</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {mediumErrors.length}
              </div>
              <div className="text-sm text-gray-600">Medium</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {fixedErrors.length}
              </div>
              <div className="text-sm text-gray-600">Fixed</div>
            </div>
          </div>

          {lastScan && (
            <p className="text-sm text-gray-500 mb-4">
              Last scan: {lastScan.toLocaleTimeString()}
            </p>
          )}

          {/* Error List */}
          {errors.length === 0 ? (
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>No Issues Found</AlertTitle>
              <AlertDescription>
                Great! No errors or warnings were detected during the scan.
              </AlertDescription>
            </Alert>
          ) : (
            <div className="space-y-3">
              {errors.map((error, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${error.fixed ? "opacity-50" : ""}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      {getTypeIcon(error.type)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-900">
                            {error.category}
                          </h4>
                          <Badge className={getSeverityColor(error.severity)}>
                            {error.severity}
                          </Badge>
                          {error.fixed && (
                            <Badge className="bg-green-100 text-green-800">
                              Fixed
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{error.message}</p>
                        {error.location && (
                          <p className="text-xs text-gray-500 mt-1">
                            Location: {error.location}
                          </p>
                        )}
                        <p className="text-xs text-gray-400 mt-1">
                          {error.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                    {!error.fixed && (
                      <Button
                        onClick={() => markAsFixed(index)}
                        variant="outline"
                        size="sm"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Mark Fixed
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
