import { useState, useEffect } from "react";
import { 
  Home, 
  Settings, 
  MessageSquare, 
  Briefcase, 
  GraduationCap, 
  FolderOpen, 
  FileText, 
  Mail 
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "services", icon: Settings, label: "My Services" },
  { id: "testimonials", icon: MessageSquare, label: "Recommendations" },
  { id: "work-history", icon: Briefcase, label: "Work History" },
  { id: "education", icon: GraduationCap, label: "Education" },
  { id: "portfolio", icon: FolderOpen, label: "Portfolio" },
  { id: "blog", icon: FileText, label: "Blog" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-2 z-50" aria-label="Section navigation">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <Tooltip key={item.id} delayDuration={0}>
            <TooltipTrigger asChild>
              <Button
                variant={isActive ? "default" : "ghost"}
                size="icon"
                onClick={() => scrollToSection(item.id)}
                className={`w-12 h-12 rounded-xl shadow-md ${
                  isActive
                    ? "bg-gradient-to-br from-primary to-token-violet shadow-glow-accent"
                    : "bg-card"
                }`}
                aria-label={item.label}
                aria-current={isActive ? "true" : undefined}
                data-testid={`nav-${item.id}`}
              >
                <item.icon className="w-5 h-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-foreground text-background px-3 py-1.5">
              {item.label}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </nav>
  );
}
