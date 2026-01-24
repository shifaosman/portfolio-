import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { PricingPlan } from "@shared/types";

const plans: PricingPlan[] = [
  {
    id: "1",
    name: "Starter",
    price: 10,
    period: "Hour",
    description: "Perfect for small tasks and quick fixes",
    features: [
      { text: "Frontend tasks", included: true },
      { text: "Bug fixing", included: true },
      { text: "Small features", included: true },
      { text: "Full-stack development", included: false },
      { text: "API integration", included: false },
      { text: "Database work", included: false },
    ],
  },
  {
    id: "2",
    name: "Professional",
    price: 20,
    period: "Hour",
    description: "Best for complete web development projects",
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Full-stack development", included: true },
      { text: "API integration", included: true },
      { text: "Database architecture", included: true },
      { text: "Code reviews", included: true },
      { text: "Technical consulting", included: true },
    ],
    isPopular: true,
  },
  {
    id: "3",
    name: "Advanced",
    price: 30,
    period: "Hour",
    description: "For complex enterprise solutions",
    features: [
      { text: "Everything in Professional", included: true },
      { text: "Full MERN applications", included: true },
      { text: "System design assistance", included: true },
      { text: "Ongoing support", included: true },
      { text: "Performance optimization", included: true },
      { text: "Priority communication", included: true },
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Price Plans</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Flexible pricing options designed to match your project requirements and budget.
          Choose the plan that works best for you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan) => (
          <Card 
            key={plan.id} 
            className={`relative overflow-visible transition-all duration-300 ${
              plan.isPopular 
                ? "ring-2 ring-primary shadow-xl scale-105" 
                : "hover-elevate"
            }`}
            data-testid={`card-pricing-${plan.id}`}
          >
            {plan.isPopular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-4">
                Most Popular
              </Badge>
            )}
            <CardHeader className="text-center pb-2 pt-8">
              <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-4">
                <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-muted-foreground" />
                      </div>
                    )}
                    <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full rounded-full" 
                variant={plan.isPopular ? "default" : "outline"}
                data-testid={`button-order-${plan.id}`}
              >
                Order Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
