import { useState } from "react";
import {
  CreditCard,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock,
  MoreHorizontal,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function PaymentManagement() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isAddCurrencyOpen, setIsAddCurrencyOpen] = useState(false);
  const [isPaymentMethodOpen, setIsPaymentMethodOpen] = useState(false);

  // Sample data - in real app, this would come from API
  const paymentStats = [
    {
      title: "Total Revenue",
      value: "$2,847,293",
      change: "+15.3%",
      trend: "up",
      icon: <DollarSign className="h-6 w-6" />,
      color: "bg-green-500",
    },
    {
      title: "Pending Payments",
      value: "$45,230",
      change: "+8.2%",
      trend: "up",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-yellow-500",
    },
    {
      title: "Failed Transactions",
      value: "23",
      change: "-12.5%",
      trend: "down",
      icon: <AlertTriangle className="h-6 w-6" />,
      color: "bg-red-500",
    },
    {
      title: "Successful Payments",
      value: "1,847",
      change: "+22.1%",
      trend: "up",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "bg-blue-500",
    },
  ];

  const currencies = [
    {
      id: "1",
      code: "USD",
      name: "US Dollar",
      symbol: "$",
      rate: 1.0,
      status: "active",
      isDefault: true,
      lastUpdated: "2024-12-15 14:30",
    },
    {
      id: "2",
      code: "EUR",
      name: "Euro",
      symbol: "€",
      rate: 0.85,
      status: "active",
      isDefault: false,
      lastUpdated: "2024-12-15 14:30",
    },
    {
      id: "3",
      code: "GBP",
      name: "British Pound",
      symbol: "£",
      rate: 0.73,
      status: "active",
      isDefault: false,
      lastUpdated: "2024-12-15 14:30",
    },
    {
      id: "4",
      code: "JPY",
      name: "Japanese Yen",
      symbol: "¥",
      rate: 110.25,
      status: "active",
      isDefault: false,
      lastUpdated: "2024-12-15 14:30",
    },
  ];

  const transactions = [
    {
      id: "TXN-001",
      customer: "John Smith",
      amount: "$1,250.00",
      currency: "USD",
      method: "Credit Card",
      status: "completed",
      date: "2024-12-15",
      shipmentId: "GT240001",
      fees: "$37.50",
    },
    {
      id: "TXN-002",
      customer: "Sarah Johnson",
      amount: "€890.50",
      currency: "EUR",
      method: "Bank Transfer",
      status: "pending",
      date: "2024-12-15",
      shipmentId: "GT240002",
      fees: "€26.72",
    },
    {
      id: "TXN-003",
      customer: "Mike Chen",
      amount: "$750.00",
      currency: "USD",
      method: "PayPal",
      status: "failed",
      date: "2024-12-14",
      shipmentId: "GT240003",
      fees: "$22.50",
    },
  ];

  const paymentMethods = [
    {
      id: "1",
      name: "Credit/Debit Cards",
      provider: "Stripe",
      status: "active",
      fees: "2.9% + $0.30",
      currencies: ["USD", "EUR", "GBP"],
      monthlyVolume: "$1,250,000",
    },
    {
      id: "2",
      name: "Bank Transfer",
      provider: "ACH",
      status: "active",
      fees: "0.8%",
      currencies: ["USD"],
      monthlyVolume: "$890,000",
    },
    {
      id: "3",
      name: "PayPal",
      provider: "PayPal",
      status: "active",
      fees: "3.49% + $0.49",
      currencies: ["USD", "EUR", "GBP"],
      monthlyVolume: "$450,000",
    },
  ];

  const handleAddCurrency = () => {
    toast({
      title: "Currency Added",
      description: "New currency has been added successfully.",
    });
    setIsAddCurrencyOpen(false);
  };

  const handleUpdateRates = () => {
    toast({
      title: "Exchange Rates Updated",
      description: "All currency exchange rates have been updated.",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payment & Currency Management</h1>
          <p className="text-gray-600">
            Manage payment methods, currencies, and transaction monitoring
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Button variant="outline" onClick={handleUpdateRates}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Update Rates
          </Button>
          <Button
            onClick={() => setIsAddCurrencyOpen(true)}
            className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Currency
          </Button>
        </div>
      </div>

      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {paymentStats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 mr-1 text-red-500" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        stat.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">from last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <div className="text-white">{stat.icon}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="transactions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="currencies">Currencies</TabsTrigger>
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
        </TabsList>

        {/* Transactions Tab */}
        <TabsContent value="transactions" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Recent Transactions</CardTitle>
                <div className="flex space-x-2 mt-4 sm:mt-0">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search transactions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Transaction ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Customer</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Method</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm font-medium text-royal-600">
                          {transaction.id}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-900">{transaction.customer}</td>
                        <td className="py-3 px-4 text-sm font-semibold text-gray-900">
                          {transaction.amount}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{transaction.method}</td>
                        <td className="py-3 px-4">{getStatusBadge(transaction.status)}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{transaction.date}</td>
                        <td className="py-3 px-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Refund
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Currencies Tab */}
        <TabsContent value="currencies" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Supported Currencies</CardTitle>
                <Button onClick={handleUpdateRates} variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Update Exchange Rates
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {currencies.map((currency) => (
                  <div
                    key={currency.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-royal-100 to-orange-100 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-royal-600">{currency.symbol}</span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{currency.code}</h3>
                          {currency.isDefault && (
                            <Badge className="bg-blue-100 text-blue-800">Default</Badge>
                          )}
                          {getStatusBadge(currency.status)}
                        </div>
                        <p className="text-sm text-gray-600">{currency.name}</p>
                        <p className="text-xs text-gray-500">
                          Rate: {currency.rate} | Updated: {currency.lastUpdated}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Methods Tab */}
        <TabsContent value="methods" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Payment Methods</CardTitle>
                <Button
                  onClick={() => setIsPaymentMethodOpen(true)}
                  className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Method
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="p-6 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{method.name}</h3>
                        <p className="text-sm text-gray-600">Provider: {method.provider}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(method.status)}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Remove
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Processing Fees:</span>
                        <p className="font-medium">{method.fees}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Monthly Volume:</span>
                        <p className="font-medium">{method.monthlyVolume}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Supported Currencies:</span>
                        <div className="flex space-x-1 mt-1">
                          {method.currencies.map((currency) => (
                            <Badge key={currency} variant="outline" className="text-xs">
                              {currency}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Add Payment Method Modal */}
      <Dialog open={isPaymentMethodOpen} onOpenChange={setIsPaymentMethodOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Payment Method</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="method-name">Method Name</Label>
              <Input id="method-name" placeholder="e.g., Credit Cards" />
            </div>
            <div>
              <Label htmlFor="provider">Provider</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stripe">Stripe</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="square">Square</SelectItem>
                  <SelectItem value="ach">ACH Bank Transfer</SelectItem>
                  <SelectItem value="wire">Wire Transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="processing-fees">Processing Fees</Label>
              <Input id="processing-fees" placeholder="e.g., 2.9% + $0.30" />
            </div>
            <div>
              <Label htmlFor="supported-currencies">Supported Currencies</Label>
              <Input id="supported-currencies" placeholder="e.g., USD, EUR, GBP" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="method-active" defaultChecked />
              <Label htmlFor="method-active">Enable this payment method</Label>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsPaymentMethodOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
              toast({
                title: "Payment Method Added",
                description: "New payment method has been added successfully.",
              });
              setIsPaymentMethodOpen(false);
            }}>
              Add Method
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Currency Modal */}
      <Dialog open={isAddCurrencyOpen} onOpenChange={setIsAddCurrencyOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Currency</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="currency-code" className="text-right">
                Code
              </Label>
              <Input id="currency-code" placeholder="USD" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="currency-name" className="text-right">
                Name
              </Label>
              <Input id="currency-name" placeholder="US Dollar" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="currency-symbol" className="text-right">
                Symbol
              </Label>
              <Input id="currency-symbol" placeholder="$" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="exchange-rate" className="text-right">
                Rate
              </Label>
              <Input id="exchange-rate" placeholder="1.0" type="number" className="col-span-3" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="is-default" />
              <Label htmlFor="is-default">Set as default currency</Label>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsAddCurrencyOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddCurrency}>Add Currency</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
