import CourseList from "@/components/courses/CourseList";
import CourseFilters from "@/components/courses/CourseFilters";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Courses | SkillHub IT Solution",
  description: "Browse our comprehensive MERN stack courses and start your web development journey today.",
};

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
        <p className="text-lg text-muted-foreground">
          Browse our comprehensive MERN stack courses and start your web development journey today.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <CourseFilters />
        <div className="lg:col-span-3">
          <CourseList />
        </div>
      </div>
    </div>
  );
}