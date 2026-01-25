import { Download, Facebook, Instagram, Twitter, Linkedin, Youtube, Dribbble } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { Language, Skill } from "@shared/types";

const languages: Language[] = [
  { name: "Arabic", percentage: 100 },
  { name: "English", percentage: 90 },
];

const skills: Skill[] = [
  { name: "HTML5", percentage: 90 },
  { name: "CSS3 / Tailwind CSS", percentage: 90 },
  { name: "JavaScript (ES6+)", percentage: 85 },
  { name: "React.js", percentage: 85 },
  { name: "Next.js", percentage: 75 },
  { name: "Node.js", percentage: 80 },
  { name: "Express.js", percentage: 80 },
  { name: "MongoDB", percentage: 75 },
  { name: "PostgreSQL", percentage: 70 },
];

const extraSkills = [
  "Git & GitHub",
  "REST APIs",
  "MVC Architecture",
  "JWT Authentication",
  "Basic Testing & Debugging",
  "UI/UX Fundamentals (Figma to Code)",
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Dribbble, label: "Dribbble", href: "#" },
];

export function Sidebar() {
  return (
    <aside className="w-full lg:w-80 lg:sticky lg:top-6 lg:h-fit bg-card rounded-2xl shadow-lg p-6 space-y-6">
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <Avatar className="w-24 h-24 border-4 border-primary/20">
            <AvatarImage src="" alt="Shifa Osman Musa" />
            <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
              SM
            </AvatarFallback>
          </Avatar>
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card" aria-label="Online status" />
        </div>
        <h2 className="mt-4 text-lg font-semibold text-foreground" data-testid="text-profile-name">
          Shifa Osman Musa
        </h2>
        <p className="text-xs text-muted-foreground">Full-Stack Web Developer</p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-2 flex-wrap">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover-elevate active-elevate-2"
            aria-label={social.label}
            data-testid={`link-social-${social.label.toLowerCase()}`}
          >
            <social.icon className="w-4 h-4" />
          </a>
        ))}
      </div>

      {/* Download CV Button - Visible at top without scrolling */}
      <Button className="w-full rounded-full gap-2" data-testid="button-download-cv">
        <Download className="w-4 h-4" />
        Download CV
      </Button>

      {/* Quick Facts */}
      <div className="space-y-3 text-sm border-t border-border pt-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Age:</span>
          <span className="font-medium" data-testid="text-age">20</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Residence:</span>
          <span className="font-medium" data-testid="text-residence">Somalia</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Freelance:</span>
          <span className="font-medium text-green-600" data-testid="text-freelance">Available (Remote / Part-time)</span>
        </div>
      </div>

      {/* Languages */}
      <div className="space-y-3 border-t border-border pt-4">
        <h3 className="text-sm font-semibold text-foreground">Languages</h3>
        {languages.map((lang) => (
          <div key={lang.name} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">{lang.name}</span>
              <span className="font-medium">{lang.percentage}%</span>
            </div>
            <Progress value={lang.percentage} className="h-1.5" />
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="space-y-3 border-t border-border pt-4">
        <h3 className="text-sm font-semibold text-foreground">Skills</h3>
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">{skill.name}</span>
              <span className="font-medium">{skill.percentage}%</span>
            </div>
            <Progress value={skill.percentage} className="h-1.5" />
          </div>
        ))}
      </div>

      {/* Extra Skills */}
      <div className="space-y-2 border-t border-border pt-4">
        <h3 className="text-sm font-semibold text-foreground">Extra Skills</h3>
        <ul className="space-y-1.5">
          {extraSkills.map((skill) => (
            <li key={skill} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 bg-primary rounded-sm" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
