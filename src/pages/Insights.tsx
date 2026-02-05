 import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
 import { TrendingUp, TrendingDown, Users, MessageSquare, BarChart3, PieChart } from "lucide-react";
 
 const insights = [
   {
     title: "Feature Request Trends",
     description: "Authentication features are the most requested this quarter",
     change: "+23%",
     trend: "up",
     icon: TrendingUp,
   },
   {
     title: "Customer Satisfaction",
     description: "NPS score improved after the last release",
     change: "+12",
     trend: "up",
     icon: Users,
   },
   {
     title: "Churn Risk",
     description: "3 enterprise accounts showing reduced engagement",
     change: "-5%",
     trend: "down",
     icon: TrendingDown,
   },
   {
     title: "Feedback Volume",
     description: "Increased support tickets about mobile experience",
     change: "+45%",
     trend: "up",
     icon: MessageSquare,
   },
 ];
 
 const topFeatures = [
   { name: "SSO Integration", score: 92, requests: 156 },
   { name: "Mobile App", score: 88, requests: 134 },
   { name: "API Webhooks", score: 85, requests: 98 },
   { name: "Dark Mode", score: 78, requests: 87 },
   { name: "Export to PDF", score: 72, requests: 65 },
 ];
 
 const Insights = () => {
   return (
     <div className="min-h-screen bg-background flex">
       <DashboardSidebar />
 
       <div className="flex-1 p-8">
         <div className="max-w-6xl mx-auto">
           <div className="mb-8">
             <h1 className="text-3xl font-bold mb-2">Insights</h1>
             <p className="text-muted-foreground">
               AI-powered analysis of your product data
             </p>
           </div>
 
           {/* Insight Cards */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
             {insights.map((insight, index) => (
               <div key={index} className="glass rounded-xl p-5">
                 <div className="flex items-start justify-between mb-3">
                   <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                     <insight.icon className="h-5 w-5 text-primary" />
                   </div>
                   <span
                     className={`text-sm font-medium ${
                       insight.trend === "up" ? "text-emerald-600" : "text-rose-600"
                     }`}
                   >
                     {insight.change}
                   </span>
                 </div>
                 <h3 className="font-semibold mb-1">{insight.title}</h3>
                 <p className="text-sm text-muted-foreground">{insight.description}</p>
               </div>
             ))}
           </div>
 
           {/* Charts Section */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             {/* Top Requested Features */}
             <div className="glass rounded-xl p-6">
               <div className="flex items-center gap-2 mb-6">
                 <BarChart3 className="h-5 w-5 text-primary" />
                 <h2 className="font-semibold">Top Requested Features</h2>
               </div>
               <div className="space-y-4">
                 {topFeatures.map((feature, index) => (
                   <div key={index}>
                     <div className="flex items-center justify-between mb-2">
                       <span className="text-sm font-medium">{feature.name}</span>
                       <span className="text-sm text-muted-foreground">
                         {feature.requests} requests
                       </span>
                     </div>
                     <div className="h-2 bg-muted rounded-full overflow-hidden">
                       <div
                         className="h-full gradient-primary rounded-full transition-all duration-500"
                         style={{ width: `${feature.score}%` }}
                       />
                     </div>
                   </div>
                 ))}
               </div>
             </div>
 
             {/* Feedback Sources */}
             <div className="glass rounded-xl p-6">
               <div className="flex items-center gap-2 mb-6">
                 <PieChart className="h-5 w-5 text-primary" />
                 <h2 className="font-semibold">Feedback Sources</h2>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 {[
                   { source: "Support Tickets", percentage: 35, color: "bg-primary" },
                   { source: "NPS Surveys", percentage: 28, color: "bg-emerald-500" },
                   { source: "User Interviews", percentage: 22, color: "bg-amber-500" },
                   { source: "Social Media", percentage: 15, color: "bg-rose-500" },
                 ].map((item, index) => (
                   <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                     <div className={`h-3 w-3 rounded-full ${item.color}`} />
                     <div>
                       <p className="text-sm font-medium">{item.source}</p>
                       <p className="text-xs text-muted-foreground">{item.percentage}%</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default Insights;