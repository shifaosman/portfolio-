import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Job } from "@shared/types";

const jobs: Job[] = [
  {
    id: "1",
    title: "Software Developer",
    subtitle: "Tabarak Solutions",
    dateRange: "~1.5 years (6 mo internship + 1 yr employee)",
    certificate: "Internship → full-time",
    description:
      "Professional experience spanning a six-month internship and one year as an employee. Contributed to software delivery, backend and frontend work, and collaboration within the team.",
  },
  {
    id: "2",
    title: "Academic & Personal Projects",
    subtitle: "Full-Stack Developer",
    dateRange: "2022 - 2024",
    certificate: "Various Projects",
    description:
      "Online Banking System (C#), Quiz Web Application (React/Node.js), content-sharing platform, and other portfolio work demonstrating full-stack capabilities.",
  },
];

export function WorkHistorySection() {
  return (
    <section id="work-history" className="py-16">
      <Card className="overflow-hidden">
        <CardContent className="p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Work History</h2>
          
          <div className="space-y-0">
            {jobs.map((job, index) => (
              <div 
                key={job.id}
                className={`grid md:grid-cols-[2fr,1fr] gap-6 py-8 ${
                  index !== jobs.length - 1 ? "border-b border-border" : ""
                }`}
                data-testid={`work-item-${job.id}`}
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                    <span className="text-sm text-muted-foreground">— {job.subtitle}</span>
                  </div>
                  <Badge variant="secondary" className="rounded-full">
                    {job.dateRange}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-primary">{job.certificate}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {job.description}
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
