import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Play } from "lucide-react";

export function HeroSection() {
  const signInUrl = "#"; // TODO: Replace with actual sign-in domain

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">AI-Powered Product Intelligence</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Decide What to Build{" "}
            <span className="text-gradient">Next with AI</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Nextbuild.ai analyzes your customer feedback, usage data, and market signals to prioritize features that drive real impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href={signInUrl}>
                Start Free
                <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href={signInUrl}>
                <Upload className="mr-1 h-5 w-5" />
                Upload Your Data
              </a>
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-muted-foreground mb-4">Trusted by product teams at</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              {["Stripe", "Notion", "Linear", "Vercel", "Figma"].map((company) => (
                <span key={company} className="text-lg font-semibold text-muted-foreground">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="glass rounded-2xl p-2 shadow-elevated glow max-w-5xl mx-auto">
            <div className="rounded-xl bg-card overflow-hidden border border-border/50">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1.5 rounded-lg bg-muted/50 text-xs text-muted-foreground">
                  app.nextbuild.ai
                  </div>
                </div>
              </div>
              {/* Preview content */}
              <div className="aspect-[16/9] bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-4">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-muted-foreground">Interactive Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
