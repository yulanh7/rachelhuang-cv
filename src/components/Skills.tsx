import SkillBadge from '@/components/SkillBadge'

export default function Skills() {
  return (
    <section id="skills" className="mb-20 px-4 md:px-16 w-full max-w-[1200px] mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {[
          "HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React", "Redux",
          "Node.js", "Ubuntu Deployment", "PM2", "Cron Jobs", "Material UI",
          "Ant Design", "React Bootstrap", "RESTful APIs", "Jest",
          "WordPress", "Figma", "MySQL", "MongoDB", "PHP"
        ].map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
    </section>


  );
}
