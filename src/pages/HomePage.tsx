import { lazy, Suspense } from 'react';
import Header from '../components/Header';
import Hero from '../sections/Hero';

const About    = lazy(() => import('../sections/About'));
const Projects = lazy(() => import('../sections/Projects'));
const Services = lazy(() => import('../sections/Services'));
const Process  = lazy(() => import('../sections/Process'));
const Skills   = lazy(() => import('../sections/Skills'));
const Contact  = lazy(() => import('../sections/Contact'));
const Footer   = lazy(() => import('../components/Footer'));

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Projects />
          <Services />
          <Process />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default HomePage;
