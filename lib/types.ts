export interface CourseType {
  id: string | number;
  title: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  duration: string;
  level: string;
  students: number;
  isBestseller?: boolean;
  isNew?: boolean;
  lectures?: number;
  resources?: number;
  learningOutcomes?: string[];
  requirements?: string[];
  modules?: {
    title: string;
    lectures: {
      title: string;
      duration: string;
      isLocked: boolean;
    }[];
  }[];
  instructor?: {
    name: string;
    image: string;
    title: string;
    bio: string;
    courses: number;
    students: number;
    experience: string;
  };
}

export interface TestimonialType {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  course: string;
}