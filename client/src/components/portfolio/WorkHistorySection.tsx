import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Job } from "@shared/types";

const jobs: Job[] = [
  {
    id: "1",
    title: "Remote Software Developer",
    subtitle: "Part-Time",
    dateRange: "2025 - Present",
    certificate: "AI & Software Projects",
    description: "Working on AI and software-related projects with international teams. Building modern web applications using React, Node.js, and cloud technologies.",
  },
  {
    id: "2",
    title: "Parcel Management System",
    subtitle: "Backend Developer",
    dateRange: "2024 - 2025",
    certificate: "Backend & Database",
    description: "Designed database structure, implemented RESTful APIs, and built authentication systems using Node.js, Express, and MongoDB for a logistics management platform.",
  },
  {
    id: "3",
    title: "Academic & Personal Projects",
    subtitle: "Full-Stack Developer",
    dateRange: "2022 - 2024",
    certificate: "Various Projects",
    description: "Online Banking System (C#), Quiz Web Application (React/Node.js), E-commerce platforms, and multiple portfolio projects demonstrating full-stack capabilities.",
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
