import { Nav } from '@/components/ui/Nav';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Blog } from '@/components/sections/Blog';
import { Research } from '@/components/sections/Research';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-background">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
