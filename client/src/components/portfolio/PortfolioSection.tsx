import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@shared/types";

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Quiz Application",
    category: "react-nodejs",
    image: "",
  },
  {
    id: "2",
    title: "Qurani Platform",
    category: "mern",
    image: "",
  },
  {
    id: "3",
    title: "Parcel Management",
    category: "backend",
    image: "",
  },
  {
    id: "4",
    title: "Personal Portfolio",
    category: "nextjs",
    image: "",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "react-nodejs", label: "React/Node.js" },
  { id: "mern", label: "MERN Stack" },
  { id: "backend", label: "Backend" },
  { id: "nextjs", label: "Next.js" },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Portfolio</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my recent projects and work. Each project represents 
          a unique challenge and solution.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveCategory(category.id)}
            className="rounded-full"
            data-testid={`filter-${category.id}`}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <Card 
            key={item.id}
            className="group relative aspect-square overflow-hidden cursor-pointer hover-elevate"
            data-testid={`portfolio-item-${item.id}`}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary/20">{item.title.charAt(0)}</span>
            </div>

            {/* Overlay on hover */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
              index === 0 
                ? "bg-primary/80" 
                : "bg-foreground/0 opacity-0 group-hover:opacity-100 group-hover:bg-foreground/80"
            }`}>
              {index === 0 ? (
                <>
                  <Plus className="w-12 h-12 text-primary-foreground mb-3" />
                  <span className="text-primary-foreground font-medium">{item.title}</span>
                </>
              ) : (
                <div className="text-center p-4">
                  <ExternalLink className="w-8 h-8 text-background mx-auto mb-3" />
                  <span className="text-background font-medium block">{item.title}</span>
                  <span className="text-background/70 text-sm capitalize">{item.category.replace("-", " / ")}</span>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
