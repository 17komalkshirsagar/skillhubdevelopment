import Hero from '@/components/home/Hero';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import InstructorSpotlight from '@/components/home/InstructorSpotlight';
import FAQ from '@/components/home/FAQ';
import CTABanner from '@/components/home/CTABanner';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <InstructorSpotlight />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </div>
  );
}