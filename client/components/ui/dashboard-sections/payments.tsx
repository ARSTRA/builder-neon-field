import { useState } from "react";
import {
  CreditCard,
  Plus,
  Edit,
  Trash2,
  Shield,
  CheckCircle,
  Star,
  Calendar,
  DollarSign,
  Download,
  Eye,
  MoreHorizontal,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function PaymentsSection() {
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const paymentMethods = [
    {
      id: "card-1",
      type: "visa",
      last4: "4242",
      expiryMonth: "12",
      expiryYear: "2027",
      cardholderName: "John Doe",
      isDefault: true,
      nickname: "Personal Visa",
    },
    {
      id: "card-2",
      type: "mastercard",
      last4: "8888",
      expiryMonth: "08",
      expiryYear: "2026",
      cardholderName: "John Doe",
      isDefault: false,
      nickname: "Business Card",
    },
    {
      id: "card-3",
      type: "amex",
      last4: "1005",
      expiryMonth: "03",
      expiryYear: "2025",
      cardholderName: "John Doe",
      isDefault: false,
      nickname: "Travel Card",
    },
  ];

  const invoices = [
    {
      id: "INV-2024-001",
      date: "2024-12-10",
      amount: "$1,250.00",
      status: "paid",
      shipmentId: "GT240001",
      paymentMethod: "•••• 4242",
    },
    {
      id: "INV-2024-002",
      date: "2024-12-08",
      amount: "$3,890.00",
      status: "paid",
      shipmentId: "GT240002",
      paymentMethod: "•••• 8888",
    },
    {
      id: "INV-2024-003",
      date: "2024-12-05",
      amount: "$5,200.00",
      status: "pending",
      shipmentId: "GT240003",
      paymentMethod: "-",
    },
    {
      id: "INV-2024-004",
      date: "2024-12-01",
      amount: "$890.00",
      status: "overdue",
      shipmentId: "GT240004",
      paymentMethod: "-",
    },
  ];

  const getCardIcon = (type: string) => {
    const baseClasses = "h-8 w-12 rounded";
    switch (type) {
      case "visa":
        return (
          <div
            className={`${baseClasses} bg-blue-600 flex items-center justify-center text-white text-xs font-bold`}
          >
            VISA
          </div>
        );
      case "mastercard":
        return (
          <div
            className={`${baseClasses} bg-red-600 flex items-center justify-center text-white text-xs font-bold`}
          >
            MC
          </div>
        );
      case "amex":
        return (
          <div
            className={`${baseClasses} bg-green-600 flex items-center justify-center text-white text-xs font-bold`}
          >
            AMEX
          </div>
        );
      default:
        return <CreditCard className="h-8 w-8 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "overdue":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "pending":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case "overdue":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payment Methods</h1>
          <p className="text-gray-600">
            Manage your payment methods and billing
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Dialog
            open={isAddCardModalOpen}
            onOpenChange={setIsAddCardModalOpen}
          >
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600">
                <Plus className="h-4 w-4 mr-2" />
                Add Payment Method
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add Payment Method</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="cardholderName">Cardholder Name</Label>
                  <Input id="cardholderName" placeholder="John Doe" />
                </div>

                <div>
                  <Label htmlFor="nickname">Card Nickname (Optional)</Label>
                  <Input id="nickname" placeholder="e.g., Personal Card" />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="default" />
                  <Label htmlFor="default">Set as default payment method</Label>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsAddCardModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-royal-600 to-orange-500"
                  >
                    Add Card
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="cards" className="space-y-6">
        <TabsList>
          <TabsTrigger value="cards">Payment Methods</TabsTrigger>
          <TabsTrigger value="invoices">Invoices & Billing</TabsTrigger>
          <TabsTrigger value="settings">Billing Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="cards" className="space-y-6">
          {/* Security Notice */}
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Your payment information is encrypted and secure. We use
              industry-standard security measures to protect your data.
            </AlertDescription>
          </Alert>

          {/* Payment Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentMethods.map((card) => (
              <Card
                key={card.id}
                className={`relative border-2 transition-all duration-200 hover:shadow-lg ${
                  card.isDefault
                    ? "border-royal-200 bg-royal-50"
                    : "border-gray-200"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    {getCardIcon(card.type)}
                    <div className="flex space-x-1">
                      {card.isDefault && (
                        <Badge className="bg-royal-100 text-royal-800">
                          <Star className="h-3 w-3 mr-1" />
                          Default
                        </Badge>
                      )}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Card
                          </DropdownMenuItem>
                          {!card.isDefault && (
                            <DropdownMenuItem>
                              <Star className="h-4 w-4 mr-2" />
                              Set as Default
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove Card
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg font-mono">
                      •••• •••• •••• {card.last4}
                    </div>
                    <div className="text-sm text-gray-600">
                      {card.cardholderName}
                    </div>
                    <div className="text-sm text-gray-500">
                      Expires {card.expiryMonth}/{card.expiryYear}
                    </div>
                    {card.nickname && (
                      <div className="text-sm font-medium text-gray-700">
                        {card.nickname}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-6">
          {/* Billing Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Spent This Month
                    </p>
                    <p className="text-2xl font-bold text-gray-900">$12,450</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Outstanding Balance
                    </p>
                    <p className="text-2xl font-bold text-gray-900">$6,090</p>
                  </div>
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Paid Invoices
                    </p>
                    <p className="text-2xl font-bold text-gray-900">248</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Invoices */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Invoices</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {invoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        {getStatusIcon(invoice.status)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-gray-900">
                            {invoice.id}
                          </h3>
                          <Badge className={getStatusColor(invoice.status)}>
                            {invoice.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600">
                          {invoice.date} • Shipment: {invoice.shipmentId}
                        </div>
                        <div className="text-sm text-gray-500">
                          Payment: {invoice.paymentMethod}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          {invoice.amount}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" title="View Invoice">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Download">
                          <Download className="h-4 w-4" />
                        </Button>
                        {invoice.status === "pending" && (
                          <Button
                            size="sm"
                            className="bg-royal-600 hover:bg-royal-700"
                          >
                            Pay Now
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="billingEmail">Billing Email</Label>
                  <Input
                    id="billingEmail"
                    defaultValue="john.doe@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD - US Dollar</SelectItem>
                      <SelectItem value="eur">EUR - Euro</SelectItem>
                      <SelectItem value="gbp">GBP - British Pound</SelectItem>
                      <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Automatic Payments</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto-pay invoices</p>
                    <p className="text-sm text-gray-600">
                      Automatically pay invoices using your default payment
                      method
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email notifications</p>
                    <p className="text-sm text-gray-600">
                      Receive email notifications for invoices and payments
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Payment reminders</p>
                    <p className="text-sm text-gray-600">
                      Get reminders before payment due dates
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Billing Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div>
                    <Label htmlFor="taxId">Tax ID / VAT Number</Label>
                    <Input id="taxId" placeholder="Tax identification number" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="123 Main Street" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="City" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="State" />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="12345" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="us">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600">
                  Save Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
