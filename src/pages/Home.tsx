import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Benefits from '../components/home/Benefits';
import FeaturedCourses from '../components/home/FeaturedCourses';
import Instructors from '../components/home/Instructors';
import Reviews from '../components/home/Reviews';
import Newsletter from '../components/home/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Benefits />
      <FeaturedCourses />
      <Instructors />
      <Reviews />
      <Newsletter />
    </>
  );
}
