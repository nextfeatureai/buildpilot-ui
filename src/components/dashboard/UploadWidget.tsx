import { Upload, FileText, FileSpreadsheet, FileType } from "lucide-react";
import { Button } from "@/components/ui/button";

const acceptedFormats = [
  { icon: FileSpreadsheet, label: "CSV", ext: ".csv" },
  { icon: FileType, label: "PDF", ext: ".pdf" },
  { icon: FileText, label: "Notion", ext: "Export" },
];

export function UploadWidget() {
  return (
    <div className="glass rounded-xl p-6">
      <h3 className="font-semibold mb-4">Upload Data</h3>
      
      {/* Drop zone */}
      <div className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
        <div className="h-12 w-12 mx-auto rounded-xl bg-muted/50 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
          <Upload className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <p className="text-sm font-medium mb-1">Drop files here or click to upload</p>
        <p className="text-xs text-muted-foreground mb-4">
          Customer feedback, analytics exports, or product docs
        </p>
        
        {/* Accepted formats */}
        <div className="flex items-center justify-center gap-3">
          {acceptedFormats.map((format) => (
            <div
              key={format.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 text-xs text-muted-foreground"
            >
              <format.icon className="h-3.5 w-3.5" />
              <span>{format.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent uploads */}
      <div className="mt-6">
        <h4 className="text-sm font-medium mb-3">Recent Uploads</h4>
        <div className="space-y-2">
          {[
            { name: "customer_feedback_q4.csv", time: "2 hours ago", size: "2.4 MB" },
            { name: "nps_survey_results.pdf", time: "Yesterday", size: "856 KB" },
          ].map((file) => (
            <div
              key={file.name}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.size} • {file.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
