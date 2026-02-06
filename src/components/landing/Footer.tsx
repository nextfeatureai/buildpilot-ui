import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { EmailSubscribe } from "./EmailSubscribe";

export function Footer() {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        {/* Email Subscribe Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-2">Stay in the loop</h3>
          <p className="text-muted-foreground mb-6">
            Get the latest updates on AI-powered product intelligence.
          </p>
          <EmailSubscribe />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-border/30">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-semibold">Nextfeature.ai</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Nextfeature AI, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
