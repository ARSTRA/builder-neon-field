import { useState } from "react";
import {
  Shield,
  Upload,
  CheckCircle,
  AlertCircle,
  Clock,
  FileText,
  Camera,
  IdCard,
  CreditCard,
  Building,
  Download,
  Eye,
  RefreshCw,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function KYCSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File | null}>({
    passport: null,
    addressProof: null,
    businessLicense: null,
    bankStatement: null
  });

  const kycStatus = {
    overall: "in_progress", // "pending", "in_progress", "approved", "rejected"
    personalInfo: "completed",
    documents: "in_progress",
    verification: "pending",
    completionPercentage: 65
  };

  const steps = [
    { id: 1, title: "Personal Information", status: "completed" },
    { id: 2, title: "Document Upload", status: "in_progress" },
    { id: 3, title: "Verification Review", status: "pending" },
    { id: 4, title: "Account Approval", status: "pending" }
  ];

  const requiredDocuments = [
    {
      id: "passport",
      title: "Government-issued ID",
      description: "Passport, Driver's License, or National ID Card",
      required: true,
      status: "uploaded",
      icon: <IdCard className="h-6 w-6" />
    },
    {
      id: "addressProof",
      title: "Proof of Address",
      description: "Utility bill, Bank statement, or Lease agreement (within 3 months)",
      required: true,
      status: "pending",
      icon: <FileText className="h-6 w-6" />
    },
    {
      id: "businessLicense",
      title: "Business License",
      description: "Certificate of incorporation or Business registration",
      required: false,
      status: "pending",
      icon: <Building className="h-6 w-6" />
    },
    {
      id: "bankStatement",
      title: "Bank Statement",
      description: "Recent bank statement (within 3 months)",
      required: false,
      status: "pending",
      icon: <CreditCard className="h-6 w-6" />
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
      case "approved":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "in_progress":
        return <Clock className="h-5 w-5 text-yellow-600" />;
      case "rejected":
        return <X className="h-5 w-5 text-red-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
      case "approved":
        return "bg-green-100 text-green-800";
      case "in_progress":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "uploaded":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleFileUpload = (documentType: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFiles(prev => ({
        ...prev,
        [documentType]: file
      }));
    }
  };

  const removeFile = (documentType: string) => {
    setUploadedFiles(prev => ({
      ...prev,
      [documentType]: null
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">KYC Verification</h1>
          <p className="text-gray-600">Complete your identity verification to unlock all features</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Badge className={getStatusColor(kycStatus.overall)}>
            {kycStatus.overall.replace("_", " ").toUpperCase()}
          </Badge>
        </div>
      </div>

      {/* Status Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Verification Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Overall Progress</span>
              <span className="text-sm font-medium text-gray-900">{kycStatus.completionPercentage}%</span>
            </div>
            <Progress value={kycStatus.completionPercentage} className="h-2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    step.status === "completed"
                      ? "border-green-200 bg-green-50"
                      : step.status === "in_progress"
                      ? "border-yellow-200 bg-yellow-50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Step {step.id}</span>
                    {getStatusIcon(step.status)}
                  </div>
                  <p className="text-sm text-gray-600">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="documents" className="space-y-6">
        <TabsList>
          <TabsTrigger value="documents">Document Upload</TabsTrigger>
          <TabsTrigger value="personal">Personal Information</TabsTrigger>
          <TabsTrigger value="business">Business Information</TabsTrigger>
          <TabsTrigger value="review">Review & Submit</TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="space-y-6">
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              All documents are encrypted and stored securely. We only use this information for verification purposes and comply with all data protection regulations.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {requiredDocuments.map((doc) => (
              <Card key={doc.id} className="border-2 border-dashed border-gray-200 hover:border-gray-300 transition-colors">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        {doc.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {doc.title}
                      {doc.required && <span className="text-red-500 ml-1">*</span>}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{doc.description}</p>

                    {uploadedFiles[doc.id] ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-center p-3 bg-green-50 border border-green-200 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-sm font-medium text-green-800">
                            {uploadedFiles[doc.id]?.name}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => removeFile(doc.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileUpload(doc.id, e)}
                          className="hidden"
                          id={`upload-${doc.id}`}
                        />
                        <label
                          htmlFor={`upload-${doc.id}`}
                          className="inline-flex items-center justify-center w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
                        >
                          <Upload className="h-5 w-5 mr-2 text-gray-400" />
                          <span className="text-sm font-medium text-gray-600">Upload File</span>
                        </label>
                        <p className="text-xs text-gray-500">
                          Supported formats: PDF, JPG, PNG (Max 10MB)
                        </p>
                        <Badge className={getStatusColor(doc.status)}>
                          {doc.status}
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-end">
            <Button className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600">
              Continue to Review
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information Verification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Legal Name</Label>
                  <Input id="fullName" defaultValue="John Doe" />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input id="dateOfBirth" type="date" />
                </div>
                <div>
                  <Label htmlFor="nationality">Nationality</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select nationality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="idNumber">Government ID Number</Label>
                  <Input id="idNumber" placeholder="Enter ID number" />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Residential Address</Label>
                <Textarea id="address" placeholder="Enter your full address" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="City" />
                </div>
                <div>
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" placeholder="State" />
                </div>
                <div>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input id="postalCode" placeholder="ZIP/Postal Code" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="businessName">Legal Business Name</Label>
                  <Input id="businessName" placeholder="Enter business name" />
                </div>
                <div>
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporation">Corporation</SelectItem>
                      <SelectItem value="llc">LLC</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="taxId">Tax ID / EIN</Label>
                  <Input id="taxId" placeholder="Enter tax identification number" />
                </div>
                <div>
                  <Label htmlFor="registrationNumber">Business Registration Number</Label>
                  <Input id="registrationNumber" placeholder="Enter registration number" />
                </div>
              </div>

              <div>
                <Label htmlFor="businessAddress">Business Address</Label>
                <Textarea id="businessAddress" placeholder="Enter business address" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="businessWebsite">Business Website</Label>
                  <Input id="businessWebsite" placeholder="https://example.com" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="review" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Review & Submit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Please review all information carefully before submitting. Once submitted, your application will be reviewed within 2-3 business days.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Verification Checklist</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span>Personal Information Complete</span>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span>Government ID Uploaded</span>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span>Proof of Address</span>
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span>Business Information</span>
                    <AlertCircle className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Your documents will be reviewed by our verification team</li>
                  <li>• You'll receive email updates on your verification status</li>
                  <li>• The process typically takes 2-3 business days</li>
                  <li>• Once approved, you'll have access to all premium features</li>
                </ul>
              </div>

              <div className="flex justify-end space-x-3">
                <Button variant="outline">
                  Save as Draft
                </Button>
                <Button className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600">
                  Submit for Review
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
