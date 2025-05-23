import { COURSES } from "@/lib/constants";
import CourseContent from "@/components/courses/CourseContent";
import CourseSidebar from "@/components/courses/CourseSidebar";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return COURSES.map(course => ({
    courseId: course.id,
  }));
}

export async function generateMetadata({ params }: { params: { courseId: string } }): Promise<Metadata> {
  const course = COURSES.find(course => course.id === params.courseId);

  if (!course) {
    return {
      title: "Course Not Found | SkillHub IT Solution",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.title} | SkillHub IT Solution`,
    description: course.description,
  };
}

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = COURSES.find(course => course.id === params.courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CourseContent course={{ ...course, id: String(course.id) }} />
        </div>
        <div className="lg:col-span-1">
          <CourseSidebar course={{ ...course, id: String(course.id) }} />
        </div>
      </div>
    </div>
  );
}
