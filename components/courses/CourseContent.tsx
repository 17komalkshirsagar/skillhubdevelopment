"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Clock, 
  BarChart, 
  Users, 
  PlayCircle, 
  FileText, 
  Award, 
  CheckCircle, 
  Lock 
} from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CourseType } from "@/lib/types";

interface CourseContentProps {
  course: CourseType;
}

export default function CourseContent({ course }: CourseContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
        <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <BarChart className="h-5 w-5 mr-2 text-muted-foreground" />
            <span>{course.level}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-2 text-muted-foreground" />
            <span>{course.students}+ students</span>
          </div>
        </div>
        
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white rounded-full p-4 cursor-pointer hover:bg-white/90 transition-colors">
              <PlayCircle className="h-12 w-12 text-primary" />
            </div>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="overview" className="mb-12">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="instructor">Instructor</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">About This Course</h3>
            <p className="text-muted-foreground">
              {course.longDescription || `This comprehensive ${course.title} course is designed to take you from the basics to advanced concepts. 
              You'll learn through hands-on projects and real-world examples, building a strong foundation in web development.
              By the end of this course, you'll have the skills to build complete web applications using the MERN stack.`}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.learningOutcomes?.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Requirements</h3>
            <ul className="space-y-2">
              {course.requirements?.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 mr-2"></span>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
        
        <TabsContent value="curriculum">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Course Content</h3>
            <p className="text-muted-foreground mb-4">
              {course.modules?.length || 10} modules • {course.lectures || 42} lectures • {course.duration} total
            </p>
          </div>
          
          <Accordion type="multiple" className="w-full">
            {(course.modules || Array(5).fill(0).map((_, i) => ({
              title: `Module ${i + 1}: ${["Introduction to MERN", "MongoDB Essentials", "Express.js & API Development", "React.js Fundamentals", "Node.js & Server-side Development"][i] || "Module"}`,
              lectures: Array(4).fill(0).map((_, j) => ({
                title: `Lecture ${j + 1}: ${["Getting Started", "Core Concepts", "Building Projects", "Advanced Techniques"][j] || "Lecture"}`,
                duration: "25:00",
                isLocked: i > 0
              }))
            }))).map((module, moduleIndex) => (
              <AccordionItem key={moduleIndex} value={`module-${moduleIndex}`}>
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex justify-between items-center w-full text-left">
                    <span className="font-medium">{module.title}</span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{module.lectures.length} lectures</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 py-2">
                    {module.lectures.map((lecture, lectureIndex) => (
                      <li key={lectureIndex} className="flex justify-between items-center p-2 rounded-md hover:bg-muted">
                        <div className="flex items-center">
                          {lecture.isLocked ? (
                            <Lock className="h-4 w-4 mr-2 text-muted-foreground" />
                          ) : (
                            <PlayCircle className="h-4 w-4 mr-2 text-primary" />
                          )}
                          <span className={lecture.isLocked ? "text-muted-foreground" : ""}>
                            {lecture.title}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">{lecture.duration}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
        
        <TabsContent value="instructor">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-32 h-32 rounded-full overflow-hidden shrink-0">
              <img
                src="https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Akash Dhone"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Akash Dhone</h3>
              <p className="text-muted-foreground mb-4">
                Senior Full-Stack Developer & Instructor
              </p>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>15+ Courses</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>1,200+ Students</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>8+ Years Teaching</span>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                Akash is a senior full-stack developer with over 8 years of experience working with the MERN stack. 
                He has helped hundreds of students transition from beginners to professional developers through his practical, 
                project-based teaching approach. His courses focus on building real-world applications and solving common 
                development challenges.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}