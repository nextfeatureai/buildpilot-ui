 import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
 import { UploadWidget } from "@/components/dashboard/UploadWidget";
 import { FileText, FileSpreadsheet, FileType, Trash2, Download, Eye } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const uploadedFiles = [
   { id: 1, name: "customer_feedback_q4.csv", type: "csv", size: "2.4 MB", date: "2024-01-15", status: "Processed" },
   { id: 2, name: "nps_survey_results.pdf", type: "pdf", size: "856 KB", date: "2024-01-14", status: "Processed" },
   { id: 3, name: "product_analytics.csv", type: "csv", size: "5.1 MB", date: "2024-01-12", status: "Processing" },
   { id: 4, name: "user_interviews_notes.pdf", type: "pdf", size: "1.2 MB", date: "2024-01-10", status: "Processed" },
   { id: 5, name: "competitor_analysis.pdf", type: "pdf", size: "3.8 MB", date: "2024-01-08", status: "Processed" },
 ];
 
 const getFileIcon = (type: string) => {
   switch (type) {
     case "csv":
       return FileSpreadsheet;
     case "pdf":
       return FileType;
     default:
       return FileText;
   }
 };
 
 const Uploads = () => {
   return (
     <div className="min-h-screen bg-background flex">
       <DashboardSidebar />
 
       <div className="flex-1 p-8">
         <div className="max-w-6xl mx-auto">
           <div className="mb-8">
             <h1 className="text-3xl font-bold mb-2">Uploads</h1>
             <p className="text-muted-foreground">
               Manage your uploaded files and data sources
             </p>
           </div>
 
           {/* Upload Widget */}
           <div className="mb-8 max-w-xl">
             <UploadWidget />
           </div>
 
           {/* Files Table */}
           <div className="glass rounded-xl overflow-hidden">
             <div className="p-4 border-b border-border/50">
               <h2 className="font-semibold">All Files</h2>
             </div>
             <div className="divide-y divide-border/50">
               {uploadedFiles.map((file) => {
                 const Icon = getFileIcon(file.type);
                 return (
                   <div
                     key={file.id}
                     className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
                   >
                     <div className="flex items-center gap-4">
                       <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                         <Icon className="h-5 w-5 text-primary" />
                       </div>
                       <div>
                         <p className="font-medium">{file.name}</p>
                         <p className="text-sm text-muted-foreground">
                           {file.size} • {file.date}
                         </p>
                       </div>
                     </div>
                     <div className="flex items-center gap-4">
                       <span
                         className={`text-xs px-2 py-1 rounded-full ${
                           file.status === "Processed"
                             ? "bg-emerald-500/10 text-emerald-600"
                             : "bg-amber-500/10 text-amber-600"
                         }`}
                       >
                         {file.status}
                       </span>
                       <div className="flex items-center gap-1">
                         <Button variant="ghost" size="icon" className="h-8 w-8">
                           <Eye className="h-4 w-4" />
                         </Button>
                         <Button variant="ghost" size="icon" className="h-8 w-8">
                           <Download className="h-4 w-4" />
                         </Button>
                         <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                           <Trash2 className="h-4 w-4" />
                         </Button>
                       </div>
                     </div>
                   </div>
                 );
               })}
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default Uploads;