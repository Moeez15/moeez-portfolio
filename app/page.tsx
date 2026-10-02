import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import BlogSection from '@/components/portfolio/BlogSection';
import EducationSection from '@/components/portfolio/EducationSection';

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}
