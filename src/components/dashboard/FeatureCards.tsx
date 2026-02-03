import { TrendingUp, DollarSign, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCard {
  id: string;
  title: string;
  score: number;
  impact: "high" | "medium" | "low";
  effort: "high" | "medium" | "low";
  revenue: string;
  requests: number;
}

const suggestedFeatures: FeatureCard[] = [
  {
    id: "1",
    title: "Dashboard Redesign",
    score: 92,
    impact: "high",
    effort: "medium",
    revenue: "+$45K MRR",
    requests: 342,
  },
  {
    id: "2",
    title: "API v2 Launch",
    score: 87,
    impact: "high",
    effort: "high",
    revenue: "+$32K MRR",
    requests: 156,
  },
  {
    id: "3",
    title: "Mobile App Polish",
    score: 78,
    impact: "medium",
    effort: "low",
    revenue: "+$18K MRR",
    requests: 289,
  },
  {
    id: "4",
    title: "SSO Integration",
    score: 71,
    impact: "medium",
    effort: "medium",
    revenue: "+$28K MRR",
    requests: 94,
  },
];

const getScoreColor = (score: number) => {
  if (score >= 80) return "score-high";
  if (score >= 60) return "score-medium";
  return "score-low";
};

const getLevelColor = (level: string) => {
  if (level === "high") return "text-emerald-400";
  if (level === "medium") return "text-amber-400";
  return "text-rose-400";
};

export function FeatureCards() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border/50">
        <h2 className="font-semibold">Suggested Features</h2>
        <p className="text-sm text-muted-foreground">AI-prioritized based on your data</p>
      </div>

      {/* Cards */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {suggestedFeatures.map((feature, index) => (
          <div
            key={feature.id}
            className="glass rounded-xl p-4 hover:shadow-elevated transition-all duration-300 cursor-pointer group animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-medium group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <div
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-semibold border",
                  getScoreColor(feature.score)
                )}
              >
                {feature.score}
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Impact:</span>
                <span className={cn("text-xs font-medium capitalize", getLevelColor(feature.impact))}>
                  {feature.impact}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Effort:</span>
                <span className={cn("text-xs font-medium capitalize", getLevelColor(feature.effort === "low" ? "high" : feature.effort === "high" ? "low" : "medium"))}>
                  {feature.effort}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs font-medium text-emerald-400">{feature.revenue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{feature.requests} requests</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
