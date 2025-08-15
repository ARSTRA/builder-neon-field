import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Package, Mail, Phone, MapPin, Calendar, Weight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/loading-states";

interface GetQuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GetQuoteModal({ open, onOpenChange }: GetQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    origin: "",
    destination: "",
    weight: "",
    dimensions: "",
    shipDate: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        origin: "",
        destination: "",
        weight: "",
        dimensions: "",
        shipDate: "",
        description: "",
      });
      onOpenChange(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
              <Package className="h-6 w-6 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
              Quote Request Sent!
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Thank you for your interest! Our team will review your request and
              send you a detailed quote within 24 hours.
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Get Free Shipping Quote
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll provide you with a competitive
            quote for your shipping needs.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Mail className="h-5 w-5 mr-2 text-royal-600" />
                Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                    placeholder="Your company name"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Details */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Package className="h-5 w-5 mr-2 text-royal-600" />
                Shipping Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, serviceType: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select shipping service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="air">Air Freight</SelectItem>
                      <SelectItem value="ocean">Ocean Freight</SelectItem>
                      <SelectItem value="ground">Ground Transport</SelectItem>
                      <SelectItem value="express">Express Delivery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shipDate">Preferred Ship Date</Label>
                  <Input
                    id="shipDate"
                    type="date"
                    value={formData.shipDate}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        shipDate: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="origin">Origin *</Label>
                  <Input
                    id="origin"
                    required
                    value={formData.origin}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        origin: e.target.value,
                      }))
                    }
                    placeholder="City, State/Country"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination *</Label>
                  <Input
                    id="destination"
                    required
                    value={formData.destination}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        destination: e.target.value,
                      }))
                    }
                    placeholder="City, State/Country"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Total Weight</Label>
                  <Input
                    id="weight"
                    value={formData.weight}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        weight: e.target.value,
                      }))
                    }
                    placeholder="e.g., 50 kg, 110 lbs"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dimensions">Dimensions</Label>
                  <Input
                    id="dimensions"
                    value={formData.dimensions}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        dimensions: e.target.value,
                      }))
                    }
                    placeholder="L x W x H (cm or inches)"
                  />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Label htmlFor="description">Additional Details</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Describe your cargo, special requirements, or any other details..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
            >
              {isSubmitting ? (
                <>
                  <LoadingSpinner size="sm" color="white" className="mr-2" />
                  Sending Request...
                </>
              ) : (
                "Get Quote"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
