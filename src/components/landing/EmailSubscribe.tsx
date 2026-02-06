import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function EmailSubscribe() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    const subject = encodeURIComponent("New Subscriber: " + email);
    const body = encodeURIComponent(
      `A new user wants to subscribe to the Nextfeature.ai mailing list.\n\nEmail: ${email}\n\nPlease add them to your mailing list.`
    );

    window.location.href = `mailto:nextfeatureai@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client",
      description: "Please send the email to complete your subscription.",
    });

    setEmail("");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12 bg-card/50 border-border/50"
          />
        </div>
        <Button
          onClick={handleSubscribe}
          variant="hero"
          size="lg"
          className="h-12"
        >
          Subscribe
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-3 text-center">
        Get early access and product updates. No spam, ever.
      </p>
    </div>
  );
}
