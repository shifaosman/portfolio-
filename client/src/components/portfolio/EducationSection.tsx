import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { EducationItem } from "@shared/types";

const education: EducationItem[] = [
  {
    id: "1",
    institution: "Bachelor's Degree - Software Engineering",
    subtitle: "Student",
    dateRange: "Expected Graduation: Jan / Feb 2026",
    certificate: "Software Engineering",
    description: "Relevant Coursework: Data Structures & Algorithms, Database Management, Web Development, Software Architecture, Object-Oriented Programming, System Analysis & Design.",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-16">
      <Card className="overflow-hidden">
        <CardContent className="p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Education</h2>
          
          <div className="space-y-0">
            {education.map((item) => (
              <div 
                key={item.id}
                className="grid md:grid-cols-[2fr,1fr] gap-6 py-8"
                data-testid={`education-item-${item.id}`}
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-foreground">{item.institution}</h3>
                    <span className="text-sm text-muted-foreground">— {item.subtitle}</span>
                  </div>
                  <Badge variant="secondary" className="rounded-full">
                    {item.dateRange}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-primary">{item.certificate}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
