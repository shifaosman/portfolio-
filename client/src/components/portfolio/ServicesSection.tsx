import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Lock, Rocket } from "lucide-react";
import type { Service } from "@shared/types";

const services: Service[] = [
  {
    id: "1",
    icon: "code",
    title: "Web Development",
    description: "Modern, responsive websites using React, Next.js, and Tailwind CSS with optimal performance and SEO.",
  },
  {
    id: "2",
    icon: "palette",
    title: "UI Implementation",
    description: "Convert Figma designs into pixel-perfect, accessible code with smooth animations and interactions.",
  },
  {
    id: "3",
    icon: "lock",
    title: "Backend & APIs",
    description: "RESTful APIs, authentication systems, and database architecture with Node.js, Express, and MongoDB.",
  },
  {
    id: "4",
    icon: "rocket",
    title: "Project Setup & Deployment",
    description: "GitHub setup, environment configuration, CI/CD pipelines, and cloud deployment solutions.",
  },
];

const iconMap = {
  code: Code,
  palette: Palette,
  lock: Lock,
  rocket: Rocket,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">My Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I offer comprehensive web development services tailored to your needs,
          from frontend design implementation to full-stack application development.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <Card 
              key={service.id} 
              className="hover-elevate active-elevate-2 transition-all duration-300 group cursor-pointer"
              data-testid={`card-service-${service.id}`}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
