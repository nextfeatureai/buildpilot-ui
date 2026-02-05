 import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
 import { User, Bell, Shield, CreditCard, Palette, Globe, ChevronRight } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Switch } from "@/components/ui/switch";
 
 const settingsSections = [
   { icon: User, label: "Profile", description: "Manage your personal information" },
   { icon: Bell, label: "Notifications", description: "Configure email and push notifications" },
   { icon: Shield, label: "Security", description: "Password and two-factor authentication" },
   { icon: CreditCard, label: "Billing", description: "Manage subscription and payment methods" },
   { icon: Palette, label: "Appearance", description: "Customize themes and display preferences" },
   { icon: Globe, label: "Integrations", description: "Connect third-party services" },
 ];
 
 const Settings = () => {
   return (
     <div className="min-h-screen bg-background flex">
       <DashboardSidebar />
 
       <div className="flex-1 p-8">
         <div className="max-w-4xl mx-auto">
           <div className="mb-8">
             <h1 className="text-3xl font-bold mb-2">Settings</h1>
             <p className="text-muted-foreground">
               Manage your account and preferences
             </p>
           </div>
 
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {/* Settings Navigation */}
             <div className="lg:col-span-1">
               <nav className="glass rounded-xl p-2 space-y-1">
                 {settingsSections.map((section, index) => (
                   <button
                     key={index}
                     className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                       index === 0
                         ? "bg-primary/10 text-primary"
                         : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                     }`}
                   >
                     <div className="flex items-center gap-3">
                       <section.icon className="h-5 w-5" />
                       <span className="font-medium">{section.label}</span>
                     </div>
                     <ChevronRight className="h-4 w-4" />
                   </button>
                 ))}
               </nav>
             </div>
 
             {/* Settings Content */}
             <div className="lg:col-span-2 space-y-6">
               {/* Profile Section */}
               <div className="glass rounded-xl p-6">
                 <h2 className="font-semibold text-lg mb-6">Profile Information</h2>
                 
                 <div className="flex items-center gap-6 mb-6">
                   <div className="h-20 w-20 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-semibold">
                     JP
                   </div>
                   <div>
                     <Button variant="outline" size="sm">Change Avatar</Button>
                     <p className="text-xs text-muted-foreground mt-2">
                       JPG, PNG or GIF. Max 2MB.
                     </p>
                   </div>
                 </div>
 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <Label htmlFor="firstName">First Name</Label>
                     <Input id="firstName" defaultValue="John" />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="lastName">Last Name</Label>
                     <Input id="lastName" defaultValue="Product" />
                   </div>
                   <div className="space-y-2 md:col-span-2">
                     <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john@nextfeature.ai" />
                   </div>
                   <div className="space-y-2 md:col-span-2">
                     <Label htmlFor="company">Company</Label>
                    <Input id="company" defaultValue="NextFeature.ai" />
                   </div>
                 </div>
 
                 <div className="flex justify-end mt-6">
                   <Button variant="hero">Save Changes</Button>
                 </div>
               </div>
 
               {/* Notifications Section */}
               <div className="glass rounded-xl p-6">
                 <h2 className="font-semibold text-lg mb-6">Notification Preferences</h2>
                 
                 <div className="space-y-4">
                   {[
                     { label: "Email notifications", description: "Receive updates via email", enabled: true },
                     { label: "Push notifications", description: "Browser push notifications", enabled: false },
                     { label: "Weekly digest", description: "Summary of insights and activity", enabled: true },
                     { label: "Feature announcements", description: "New features and updates", enabled: true },
                   ].map((item, index) => (
                     <div key={index} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                       <div>
                         <p className="font-medium">{item.label}</p>
                         <p className="text-sm text-muted-foreground">{item.description}</p>
                       </div>
                       <Switch defaultChecked={item.enabled} />
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default Settings;