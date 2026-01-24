import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="py-16 lg:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6 order-2 md:order-1">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold">
            Full-Stack Web Developer
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-foreground">I'm Shifa Osman Musa</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              MERN Stack
            </span>{" "}
            <span className="text-foreground">Developer</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-lg">
            Passionate about building modern, responsive web applications with clean code and 
            exceptional user experiences. Specializing in React, Node.js, and the complete 
            JavaScript ecosystem to bring innovative ideas to life.
          </p>
          <Button 
            size="lg" 
            className="rounded-full gap-2 px-8"
            data-testid="button-hire-me"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Hire Me
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Right Column - Photo Placeholder with Decorative Elements */}
        <div className="relative order-1 md:order-2 flex justify-center">
          <div className="relative">
            {/* Main Photo Container */}
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
              <span className="text-6xl md:text-7xl font-bold text-primary/30">
                Photo
              </span>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-primary/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border-4 border-primary/30 rounded-lg rotate-12" />
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-primary/10 rounded-full" />
            
            {/* Floating dots */}
            <div className="absolute top-8 -left-4 w-3 h-3 bg-primary rounded-full" />
            <div className="absolute bottom-12 -right-2 w-2 h-2 bg-orange-400 rounded-full" />
            <div className="absolute -top-2 left-1/3 w-2 h-2 bg-primary/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
