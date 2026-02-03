import { Sparkles, TrendingUp, MessageSquare, AlertTriangle, Zap, Target } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Prioritization",
    description: "Automatically score and rank features based on impact, effort, and strategic alignment.",
  },
  {
    icon: TrendingUp,
    title: "Roadmap Insights",
    description: "Visualize your product roadmap with AI-generated timelines and dependency mapping.",
  },
  {
    icon: MessageSquare,
    title: "Feedback Analysis",
    description: "Process thousands of customer feedback points to surface recurring themes and requests.",
  },
  {
    icon: AlertTriangle,
    title: "Churn Prediction",
    description: "Identify features that reduce churn and improve retention using predictive analytics.",
  },
  {
    icon: Zap,
    title: "Instant Summaries",
    description: "Get AI-generated executive summaries of your product data in seconds.",
  },
  {
    icon: Target,
    title: "Goal Alignment",
    description: "Ensure every feature aligns with your OKRs and company objectives.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium gradient-primary text-white mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to build smarter
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful AI tools that transform how product teams make decisions.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
