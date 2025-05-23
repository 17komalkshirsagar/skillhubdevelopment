"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Clock, BarChart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { COURSES } from "@/lib/constants";

export default function FeaturedCourses() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our most popular MERN stack courses designed to take you from beginner to professional developer.
            </p>
          </div>
          <Link href="/courses" className="mt-4 md:mt-0">
            <Button variant="ghost" className="group">
              View All Courses
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {COURSES.slice(0, 6).map((course: any, index: any) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                    style={{
                      transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  {course.isBestseller && (
                    <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">
                      Bestseller
                    </Badge>
                  )}
                  {course.isNew && (
                    <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600">
                      New
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <BarChart className="h-4 w-4 mr-1" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{course.students}+ students</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="font-medium">
                    <span className="text-lg">
                      ₹{typeof course.price === "number" ? course.price.toLocaleString() : "N/A"}
                    </span>
                    {course.originalPrice && (
                      <span className="ml-2 text-muted-foreground line-through text-sm">
                        ₹{course.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <Link href={`/courses/${course.id}`}>
                    <Button size="sm">View Course</Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}