"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Calendar, 
  Users, 
  Clock, 
  Award, 
  FileText, 
  Heart, 
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CourseType } from "@/lib/types";

interface CourseSidebarProps {
  course: CourseType;
}

export default function CourseSidebar({ course }: CourseSidebarProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="sticky top-24"
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="p-6">
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold">₹{course.price.toLocaleString()}</span>
                  {course.originalPrice && (
                    <span className="ml-2 text-muted-foreground line-through">
                      ₹{course.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {course.discount && (
                  <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs font-medium py-1 px-2 rounded">
                    {course.discount}% off
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Limited time offer
              </p>
            </div>
            
            <div className="space-y-4">
              <Link href={`/checkout?course=${course.id}`}>
                <Button className="w-full">Enroll Now</Button>
              </Link>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={toggleWishlist}
                >
                  <Heart 
                    className={`h-4 w-4 mr-2 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} 
                  />
                  Wishlist
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
          
          <div className="px-6 py-4 bg-muted/50">
            <h3 className="font-medium mb-3">This course includes:</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-3 text-muted-foreground" />
                <span>{course.duration} of on-demand video</span>
              </li>
              <li className="flex items-center">
                <FileText className="h-4 w-4 mr-3 text-muted-foreground" />
                <span>{course.resources || 15} downloadable resources</span>
              </li>
              <li className="flex items-center">
                <Calendar className="h-4 w-4 mr-3 text-muted-foreground" />
                <span>Lifetime access</span>
              </li>
              <li className="flex items-center">
                <Users className="h-4 w-4 mr-3 text-muted-foreground" />
                <span>Community support</span>
              </li>
              <li className="flex items-center">
                <Award className="h-4 w-4 mr-3 text-muted-foreground" />
                <span>Certificate of completion</span>
              </li>
            </ul>
          </div>
        </CardContent>
        
        <CardFooter className="block p-6 pt-4">
          <div className="mb-2 text-center">
            <p className="text-sm text-muted-foreground">
              Not sure? Contact us for more information
            </p>
          </div>
          <Link href="/contact">
            <Button variant="outline" className="w-full">
              Contact Us
            </Button>
          </Link>
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              30-Day Money-Back Guarantee
            </p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}