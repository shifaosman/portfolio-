import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/types";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "James Smith",
    role: "CEO at TechCorp",
    avatar: "JS",
    title: "Great Quality!",
    text: "Working with Shifa was an absolute pleasure. The attention to detail and commitment to delivering high-quality code exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Designer at Creative Co",
    avatar: "SJ",
    title: "Amazing Work!",
    text: "Shifa transformed our Figma designs into a beautiful, responsive website with incredible precision. The code was clean, well-organized, and easy to maintain.",
    rating: 5,
  },
  {
    id: "3",
    name: "Michael Brown",
    role: "Founder at StartupX",
    avatar: "MB",
    title: "Professional Service!",
    text: "From the initial consultation to the final delivery, Shifa demonstrated professionalism and expertise. Our full-stack application was delivered on time and works flawlessly.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Recommendations</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          What clients say about working with me. Building lasting relationships 
          through quality work and dedication.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card 
            key={testimonial.id} 
            className="hover-elevate transition-all duration-300"
            data-testid={`card-testimonial-${testimonial.id}`}
          >
            <CardContent className="p-6 space-y-4">
              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Title & Quote */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">{testimonial.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        <span className="w-2.5 h-2.5 rounded-full bg-primary" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/30" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/30" />
      </div>
    </section>
  );
}
