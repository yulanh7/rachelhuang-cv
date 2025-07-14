import Layout from '@/components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <section id="hero" className="mb-20">
        <h1 className="text-3xl font-bold">👋 Hi, I’m Rachel Huang</h1>
        <p className="mt-2 text-gray-600">
          Welcome to my resume site. I’m a frontend developer passionate about building interactive web experiences.
        </p>
      </section>

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
