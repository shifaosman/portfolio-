export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  hasOrder?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  title: string;
  text: string;
  rating: number;
}

export interface Job {
  id: string;
  title: string;
  subtitle: string;
  dateRange: string;
  certificate: string;
  description: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  subtitle: string;
  dateRange: string;
  certificate: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

export interface ContactCard {
  id: string;
  icon: string;
  title: string;
  details: string[];
}

export interface Language {
  name: string;
  percentage: number;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}
