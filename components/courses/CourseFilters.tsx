"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function CourseFilters() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const FilterSection = ({ title, options }: { title: string, options: string[] }) => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="py-3 text-base font-medium">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3 pt-1">
            {options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox id={option} />
                <label
                  htmlFor={option}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );

  const filters = [
    {
      title: "Technology",
      options: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "GraphQL"],
    },
    {
      title: "Level",
      options: ["Beginner", "Intermediate", "Advanced", "All Levels"],
    },
    {
      title: "Duration",
      options: ["Less than 1 month", "1-3 months", "3-6 months", "6+ months"],
    },
    {
      title: "Price",
      options: ["Free", "Less than ₹5,000", "₹5,000 - ₹10,000", "₹10,000+"],
    },
  ];

  const FiltersContent = () => (
    <>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" className="text-muted-foreground text-xs">
          Clear all
        </Button>
      </div>
      <Separator className="mb-4" />
      {filters.map((filter, index) => (
        <div key={index}>
          <FilterSection title={filter.title} options={filter.options} />
          {index < filters.length - 1 && <Separator />}
        </div>
      ))}
    </>
  );

  return (
    <>
      {/* Mobile Filters */}
      <div className="lg:hidden flex items-center justify-between mb-6">
        <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:max-w-md">
            <FiltersContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="hidden lg:block sticky top-24"
      >
        <FiltersContent />
      </motion.div>
    </>
  );
}