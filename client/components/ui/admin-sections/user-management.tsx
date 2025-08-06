import { useState } from "react";
import {
  Users,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal,
  UserCheck,
  UserX,
  Mail,
  Phone,
  Calendar,
  Package,
  DollarSign,
  Download,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserManagement() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    status: "",
    notes: "",
    sendWelcome: false,
  });

  const users = [
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      status: "active",
      role: "customer",
      joinDate: "2024-01-15",
      lastLogin: "2024-12-12",
      shipments: 23,
      totalSpent: "$12,450",
      kycStatus: "verified",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 234-5678",
      status: "active",
      role: "premium",
      joinDate: "2024-02-20",
      lastLogin: "2024-12-11",
      shipments: 45,
      totalSpent: "$28,670",
      kycStatus: "verified",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c3f2?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "3",
      name: "Mike Chen",
      email: "mike.chen@example.com",
      phone: "+1 (555) 345-6789",
      status: "pending",
      role: "customer",
      joinDate: "2024-12-10",
      lastLogin: "2024-12-10",
      shipments: 0,
      totalSpent: "$0",
      kycStatus: "pending",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "4",
      name: "Emily Rodriguez",
      email: "emily.rodriguez@example.com",
      phone: "+1 (555) 456-7890",
      status: "suspended",
      role: "customer",
      joinDate: "2024-03-10",
      lastLogin: "2024-11-15",
      shipments: 12,
      totalSpent: "$3,240",
      kycStatus: "rejected",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "5",
      name: "David Wilson",
      email: "david.wilson@example.com",
      phone: "+1 (555) 567-8901",
      status: "active",
      role: "enterprise",
      joinDate: "2023-12-05",
      lastLogin: "2024-12-12",
      shipments: 156,
      totalSpent: "$89,320",
      kycStatus: "verified",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "enterprise":
        return "bg-purple-100 text-purple-800";
      case "premium":
        return "bg-blue-100 text-blue-800";
      case "customer":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getKycStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || user.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleActivateUser = (userId: string) => {
    const user = users.find((u) => u.id === userId);
    toast({
      title: "User Activated",
      description: `${user?.name} has been successfully activated.`,
    });
  };

  const handleSuspendUser = (userId: string) => {
    const user = users.find((u) => u.id === userId);
    toast({
      title: "User Suspended",
      description: `${user?.name} has been suspended and will no longer have access.`,
      variant: "destructive",
    });
  };

  const handleDeleteUser = (userId: string) => {
    const user = users.find((u) => u.id === userId);
    toast({
      title: "User Deleted",
      description: `${user?.name} has been permanently deleted from the system.`,
      variant: "destructive",
    });
  };

  const handleExportUsers = () => {
    toast({
      title: "Exporting Users",
      description: "User data is being exported to CSV format...",
    });
    setTimeout(() => {
      toast({
        title: "Export Complete",
        description: "User data has been successfully exported.",
      });
    }, 2000);
  };

  const handleImportUsers = () => {
    toast({
      title: "Import Users",
      description: "Please select a CSV file to import user data.",
    });
  };

  const handleSendEmail = (userId: string) => {
    const user = users.find((u) => u.id === userId);
    toast({
      title: "Email Sent",
      description: `Email notification sent to ${user?.name}.`,
    });
  };

  const handleEditUser = (user: any) => {
    setEditingUser(user);
    const [firstName, lastName] = user.name.split(" ");
    setFormData({
      firstName: firstName || "",
      lastName: lastName || "",
      email: user.email,
      phone: user.phone,
      role: user.role,
      status: user.status,
      notes: "",
      sendWelcome: false,
    });
    setIsEditUserModalOpen(true);
  };

  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingUser) {
      toast({
        title: "User Updated",
        description: `${formData.firstName} ${formData.lastName} has been successfully updated.`,
      });
    } else {
      toast({
        title: "User Created",
        description: `${formData.firstName} ${formData.lastName} has been successfully created.`,
      });
    }
    setIsEditUserModalOpen(false);
    setIsAddUserModalOpen(false);
    setEditingUser(null);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "",
      status: "",
      notes: "",
      sendWelcome: false,
    });
  };

  const handleViewUser = (user: any) => {
    setSelectedUser(user);
  };

  const handleResetPassword = (userId: string) => {
    const user = users.find((u) => u.id === userId);
    toast({
      title: "Password Reset",
      description: `Password reset email sent to ${user?.name}.`,
    });
  };

  const handleDownloadUserData = (userId: string) => {
    const user = users.find((u) => u.id === userId);
    toast({
      title: "Download Started",
      description: `Downloading user data for ${user?.name}...`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600">
            Manage user accounts, permissions, and settings
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Button variant="outline" onClick={handleExportUsers}>
            <Download className="h-4 w-4 mr-2" />
            Export Users
          </Button>
          <Button variant="outline" onClick={handleImportUsers}>
            <Upload className="h-4 w-4 mr-2" />
            Import Users
          </Button>
          <Dialog
            open={isAddUserModalOpen}
            onOpenChange={setIsAddUserModalOpen}
          >
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600">
                <Plus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter email" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter phone number" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="role">User Role</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="customer">Customer</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="enterprise">Enterprise</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="status">Account Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="suspended">Suspended</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Admin Notes</Label>
                  <Textarea id="notes" placeholder="Enter any admin notes..." />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="sendWelcome" />
                  <Label htmlFor="sendWelcome">Send welcome email</Label>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsAddUserModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-royal-600 to-orange-500"
                  >
                    Create User
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">12,847</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Active Users
                </p>
                <p className="text-2xl font-bold text-gray-900">11,234</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <UserCheck className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Pending Verification
                </p>
                <p className="text-2xl font-bold text-gray-900">423</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <UserX className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  New This Month
                </p>
                <p className="text-2xl font-bold text-gray-900">1,190</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    KYC
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Activity
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <p className="text-sm text-gray-500">{user.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <Badge className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <Badge className={getRoleColor(user.role)}>
                        {user.role}
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <Badge className={getKycStatusColor(user.kycStatus)}>
                        {user.kycStatus}
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm">
                        <p className="text-gray-900">
                          {user.shipments} shipments
                        </p>
                        <p className="text-gray-600">Last: {user.lastLogin}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-medium text-gray-900">
                        {user.totalSpent}
                      </p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewUser(user)}
                          title="View Details"
                          className="hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          title="Edit User"
                          onClick={() => handleEditUser(user)}
                          className="hover:bg-green-50 hover:text-green-600"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {user.status === "active" ? (
                              <DropdownMenuItem
                                onClick={() => handleSuspendUser(user.id)}
                              >
                                <UserX className="h-4 w-4 mr-2" />
                                Suspend User
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem
                                onClick={() => handleActivateUser(user.id)}
                              >
                                <UserCheck className="h-4 w-4 mr-2" />
                                Activate User
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem
                              onClick={() => handleSendEmail(user.id)}
                            >
                              <Mail className="h-4 w-4 mr-2" />
                              Send Email
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleDeleteUser(user.id)}
                              className="text-red-600"
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* User Details Modal */}
      {selectedUser && (
        <Dialog
          open={!!selectedUser}
          onOpenChange={() => setSelectedUser(null)}
        >
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>User Details - {selectedUser.name}</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="profile" className="space-y-4">
              <TabsList>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Personal Information</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Name:</span>{" "}
                        {selectedUser.name}
                      </div>
                      <div>
                        <span className="text-gray-600">Email:</span>{" "}
                        {selectedUser.email}
                      </div>
                      <div>
                        <span className="text-gray-600">Phone:</span>{" "}
                        {selectedUser.phone}
                      </div>
                      <div>
                        <span className="text-gray-600">Join Date:</span>{" "}
                        {selectedUser.joinDate}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Account Status</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Status:</span>{" "}
                        <Badge className={getStatusColor(selectedUser.status)}>
                          {selectedUser.status}
                        </Badge>
                      </div>
                      <div>
                        <span className="text-gray-600">Role:</span>{" "}
                        <Badge className={getRoleColor(selectedUser.role)}>
                          {selectedUser.role}
                        </Badge>
                      </div>
                      <div>
                        <span className="text-gray-600">KYC:</span>{" "}
                        <Badge
                          className={getKycStatusColor(selectedUser.kycStatus)}
                        >
                          {selectedUser.kycStatus}
                        </Badge>
                      </div>
                      <div>
                        <span className="text-gray-600">Last Login:</span>{" "}
                        {selectedUser.lastLogin}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="activity">
                <div className="text-center py-8">
                  <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Activity history would be displayed here
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="payments">
                <div className="text-center py-8">
                  <DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Payment history would be displayed here
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="settings">
                <div className="text-center py-8">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    User settings would be displayed here
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
