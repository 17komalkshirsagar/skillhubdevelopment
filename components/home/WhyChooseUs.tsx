"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  Clock, 
  Code2, 
  GraduationCap, 
  Headphones, 
  LucideIcon, 
  Server, 
  Users 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type FeatureProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const Feature = ({ icon: Icon, title, description }: FeatureProps) => (
  <Card className="border-none shadow-none bg-transparent">
    <CardHeader className="pb-2">
      <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-muted-foreground text-base">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

export default function WhyChooseUs() {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Instructors",
      description:
        "Learn from Akash Dhone and other industry experts with years of professional experience in MERN stack development.",
    },
    {
      icon: Code2,
      title: "Project-Based Learning",
      description:
        "Build real-world projects that you can add to your portfolio, enhancing your job prospects and practical skills.",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description:
        "Study at your own pace with lifetime access to course materials, allowing you to balance learning with other commitments.",
    },
    {
      icon: Users,
      title: "Supportive Community",
      description:
        "Join our community of learners where you can collaborate, share ideas, and get help when you need it.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description:
        "Get personalized support from our instructors and teaching assistants to overcome challenges in your learning journey.",
    },
    {
      icon: Award,
      title: "Certification",
      description:
        "Earn a certificate upon completion that validates your skills and knowledge to potential employers.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Choose SkillHub?
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            We're dedicated to providing the best learning experience for aspiring MERN stack developers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Feature 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}