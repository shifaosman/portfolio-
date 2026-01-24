import { Sidebar } from "@/components/portfolio/Sidebar";
import { SideNav } from "@/components/portfolio/SideNav";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { PricingSection } from "@/components/portfolio/PricingSection";
import { TestimonialsSection } from "@/components/portfolio/TestimonialsSection";
import { WorkHistorySection } from "@/components/portfolio/WorkHistorySection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { BlogSection } from "@/components/portfolio/BlogSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6 max-w-[1800px] mx-auto">
        {/* Left Sidebar */}
        <div className="lg:w-80 flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:pr-20 space-y-4">
          <div className="bg-card rounded-2xl shadow-lg p-6 lg:p-10">
            <HeroSection />
            <ServicesSection />
            <PricingSection />
            <TestimonialsSection />
            <WorkHistorySection />
            <EducationSection />
            <PortfolioSection />
            <BlogSection />
            <ContactSection />
            
            {/* Footer */}
            <footer className="pt-16 pb-8 text-center border-t border-border mt-16">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Shifa Osman Musa. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </footer>
          </div>
        </main>

        {/* Right Side Navigation */}
        <SideNav />
      </div>
    </div>
  );
}
