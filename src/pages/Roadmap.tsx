 import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
 import { Calendar, Flag, Clock, CheckCircle2, Circle, ArrowRight } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const roadmapItems = [
   {
     quarter: "Q1 2024",
     status: "current",
     items: [
       { name: "SSO Integration", status: "in-progress", priority: "high", progress: 65 },
       { name: "Mobile App Beta", status: "in-progress", priority: "high", progress: 40 },
       { name: "API Rate Limiting", status: "completed", priority: "medium", progress: 100 },
     ],
   },
   {
     quarter: "Q2 2024",
     status: "upcoming",
     items: [
       { name: "Webhook Support", status: "planned", priority: "high", progress: 0 },
       { name: "Advanced Analytics", status: "planned", priority: "medium", progress: 0 },
       { name: "Team Collaboration", status: "planned", priority: "medium", progress: 0 },
     ],
   },
   {
     quarter: "Q3 2024",
     status: "future",
     items: [
       { name: "AI Assistant v2", status: "planned", priority: "high", progress: 0 },
       { name: "Custom Workflows", status: "planned", priority: "medium", progress: 0 },
     ],
   },
 ];
 
 const getStatusIcon = (status: string) => {
   switch (status) {
     case "completed":
       return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
     case "in-progress":
       return <Clock className="h-4 w-4 text-amber-500" />;
     default:
       return <Circle className="h-4 w-4 text-muted-foreground" />;
   }
 };
 
 const getPriorityColor = (priority: string) => {
   switch (priority) {
     case "high":
       return "bg-rose-500/10 text-rose-600 border-rose-500/30";
     case "medium":
       return "bg-amber-500/10 text-amber-600 border-amber-500/30";
     default:
       return "bg-muted text-muted-foreground";
   }
 };
 
 const Roadmap = () => {
   return (
     <div className="min-h-screen bg-background flex">
       <DashboardSidebar />
 
       <div className="flex-1 p-8">
         <div className="max-w-6xl mx-auto">
           <div className="flex items-center justify-between mb-8">
             <div>
               <h1 className="text-3xl font-bold mb-2">Product Roadmap</h1>
               <p className="text-muted-foreground">
                 AI-prioritized features based on customer feedback
               </p>
             </div>
             <Button variant="hero">
               <Flag className="h-4 w-4 mr-2" />
               Add Feature
             </Button>
           </div>
 
           {/* Timeline */}
           <div className="space-y-8">
             {roadmapItems.map((quarter, quarterIndex) => (
               <div key={quarterIndex} className="relative">
                 {/* Quarter Header */}
                 <div className="flex items-center gap-4 mb-4">
                   <div
                     className={`h-10 w-10 rounded-full flex items-center justify-center ${
                       quarter.status === "current"
                         ? "gradient-primary text-white"
                         : "bg-muted text-muted-foreground"
                     }`}
                   >
                     <Calendar className="h-5 w-5" />
                   </div>
                   <div>
                     <h2 className="font-semibold text-lg">{quarter.quarter}</h2>
                     <p className="text-sm text-muted-foreground capitalize">
                       {quarter.status === "current" ? "In Progress" : quarter.status}
                     </p>
                   </div>
                 </div>
 
                 {/* Items */}
                 <div className="ml-5 pl-9 border-l-2 border-border/50 space-y-3">
                   {quarter.items.map((item, itemIndex) => (
                     <div
                       key={itemIndex}
                       className="glass rounded-xl p-4 hover:shadow-elevated transition-all duration-300"
                     >
                       <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                           {getStatusIcon(item.status)}
                           <span className="font-medium">{item.name}</span>
                           <span
                             className={`text-xs px-2 py-0.5 rounded-full border ${getPriorityColor(
                               item.priority
                             )}`}
                           >
                             {item.priority}
                           </span>
                         </div>
                         <div className="flex items-center gap-4">
                           {item.progress > 0 && (
                             <div className="flex items-center gap-2">
                               <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                                 <div
                                   className="h-full gradient-primary rounded-full"
                                   style={{ width: `${item.progress}%` }}
                                 />
                               </div>
                               <span className="text-sm text-muted-foreground">
                                 {item.progress}%
                               </span>
                             </div>
                           )}
                           <Button variant="ghost" size="icon" className="h-8 w-8">
                             <ArrowRight className="h-4 w-4" />
                           </Button>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default Roadmap;