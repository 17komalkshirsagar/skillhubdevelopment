"use client";

import { motion } from "framer-motion";
import { Code, FileText, GraduationCap, Users } from "lucide-react";

export default function InstructorSpotlight() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-full" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-full" />
              <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Teacher explaining coding"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Your Instructor</h2>
            <h3 className="text-2xl font-semibold mb-3">Akash Dhone</h3>
            <p className="text-muted-foreground mb-6">
              Akash is a senior full-stack developer with over 8 years of experience working with the MERN stack. He has helped hundreds of students transition from beginners to professional developers through his practical, project-based teaching approach.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">1,200+</p>
                  <p className="text-sm text-muted-foreground">Students</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center mr-3">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">15+</p>
                  <p className="text-sm text-muted-foreground">Courses</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center mr-3">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">30+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center mr-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">8+</p>
                  <p className="text-sm text-muted-foreground">Years Teaching</p>
                </div>
              </div>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "My goal is to make complex web development concepts accessible to everyone. I believe in learning by doing, which is why my courses focus on building real-world projects from scratch."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}