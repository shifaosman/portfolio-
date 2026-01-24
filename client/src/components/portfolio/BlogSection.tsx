import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@shared/types";

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Create Stunning UI Designs",
    excerpt: "Learn the essential principles of creating beautiful and user-friendly interfaces that captivate users.",
    image: "",
    slug: "stunning-ui-designs",
  },
  {
    id: "2",
    title: "Modern Web Development Trends 2024",
    excerpt: "Explore the latest technologies and frameworks shaping the future of web development.",
    image: "",
    slug: "web-dev-trends-2024",
  },
  {
    id: "3",
    title: "Best Practices for Responsive Design",
    excerpt: "Master the art of creating websites that look great on any device with these proven techniques.",
    image: "",
    slug: "responsive-design-practices",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Blog</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development, design, 
          and the tech industry.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card 
            key={post.id}
            className="group overflow-hidden cursor-pointer hover-elevate transition-all duration-300"
            data-testid={`blog-post-${post.id}`}
          >
            {/* Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-5xl font-bold text-primary/20">
                {post.title.charAt(0)}
              </span>
            </div>

            <CardContent className="p-6 space-y-3">
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <a 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
