import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                SkillHub
              </span>
              <span className="ml-1 text-sm font-medium text-muted-foreground">
                IT Solution
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Premium MERN Stack courses taught by industry experts. Transform your career with our comprehensive programming courses.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/courses/mongodb" className="text-muted-foreground hover:text-primary transition-colors">
                  MongoDB
                </Link>
              </li>
              <li>
                <Link href="/courses/express" className="text-muted-foreground hover:text-primary transition-colors">
                  Express.js
                </Link>
              </li>
              <li>
                <Link href="/courses/react" className="text-muted-foreground hover:text-primary transition-colors">
                  React.js
                </Link>
              </li>
              <li>
                <Link href="/courses/node" className="text-muted-foreground hover:text-primary transition-colors">
                  Node.js
                </Link>
              </li>
              <li>
                <Link href="/courses/mern-stack" className="text-muted-foreground hover:text-primary transition-colors">
                  MERN Stack
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2 text-muted-foreground">
                SKILLHUB, 3rd Floor, Veer Shanti Building, Kranti Chowk, above Primia Hero Showroom, beside Sumit Hall, Kotla Colony, Samta Nagar, Chhatrapati Sambhajinagar, Maharashtra 431001
              </p>
              <p className="mb-2 text-muted-foreground">
                <strong>Phone:</strong> +91 9284123374
              </p>
              <p className="mb-2 text-muted-foreground">
                <strong>Email:</strong> contact@skillhubit.com
              </p>
            </address>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} SkillHub IT Solution. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}