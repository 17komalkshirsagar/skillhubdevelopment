"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Do I need prior programming experience to take the MERN Stack course?",
    answer: "While some basic programming knowledge is helpful, our courses are designed for beginners as well. We start with the fundamentals and gradually move to more advanced concepts, making it accessible for everyone."
  },
  {
    question: "How long does it take to complete the MERN Stack course?",
    answer: "The complete MERN Stack course is designed to be completed in 6 months with consistent effort. However, since you get lifetime access to the course materials, you can learn at your own pace."
  },
  {
    question: "Will I get a certificate after completing the course?",
    answer: "Yes, upon successful completion of the course and required projects, you will receive a certificate that you can add to your resume and LinkedIn profile."
  },
  {
    question: "Do you provide job assistance after course completion?",
    answer: "Yes, we provide job assistance which includes resume building, interview preparation, and connecting you with our hiring partners. Many of our students have successfully landed jobs through our network."
  },
  {
    question: "Are there any prerequisites for enrolling in the MERN Stack course?",
    answer: "For the MERN Stack course, basic knowledge of HTML, CSS, and JavaScript is recommended. However, we do offer beginner courses in these technologies if you need to build your foundation first."
  },
  {
    question: "What kind of projects will I build during the course?",
    answer: "Throughout the course, you'll build several projects including a blog platform, e-commerce website, social media application, and a final capstone project of your choice. All projects are designed to demonstrate real-world skills to employers."
  },
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our courses and learning process.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}