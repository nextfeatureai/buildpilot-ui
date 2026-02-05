import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Header() {
  const signInUrl = "#"; // TODO: Replace with actual sign-in domain

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
          <span className="text-lg font-semibold">NextBuild.ai</span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href={signInUrl}>Sign In</a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href={signInUrl}>Start Free</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
