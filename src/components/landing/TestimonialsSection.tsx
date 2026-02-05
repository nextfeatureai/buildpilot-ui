import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "NextFeature.AI cut our roadmap planning time in half. The AI suggestions are incredibly accurate.",
    author: "Sarah Chen",
    role: "VP of Product, TechCorp",
    avatar: "SC",
  },
  {
    quote: "Finally, a tool that understands the complexity of prioritization. Game changer for our team.",
    author: "Marcus Johnson",
    role: "Head of Engineering, StartupXYZ",
    avatar: "MJ",
  },
  {
    quote: "The customer feedback analysis alone is worth it. We discovered insights we were missing for months.",
    author: "Elena Rodriguez",
    role: "Product Manager, ScaleUp Inc",
    avatar: "ER",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium gradient-primary text-white mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by product teams
          </h2>
          <p className="text-xl text-muted-foreground">
          See what leaders at top companies say about NextFeature.AI.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass rounded-2xl p-6 hover:shadow-elevated transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-white font-medium text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
