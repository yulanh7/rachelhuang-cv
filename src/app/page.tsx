import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <section id="experience" className="mb-20">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <p>Coming soon...</p>
      </section>

      <section id="skills" className="mb-20">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <p>Coming soon...</p>
      </section>

      <section id="education" className="mb-20">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p>Coming soon...</p>
      </section>
    </Layout>
  );
}
