import SkillBadge from '@/components/SkillBadge';

const skillGroupsLeft = [
  { title: 'Frontend', skills: ['React', 'Next.js', 'React Native'] },
  { title: 'Languages', skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { title: 'Backend', skills: ['Node.js', 'REST APIs', 'MySQL'] },
  { title: 'CMS', skills: ['WordPress'] },
];

const skillGroupsRight = [
  { title: 'Design', skills: ['Figma'] },
  { title: 'Deployment', skills: ['Ubuntu', 'PM2', 'Cron Jobs'] },
  { title: 'Tools', skills: ['Git'] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-20 px-4 md:px-16 w-full max-w-[1200px] mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
        {/* 左列 */}
        <div className="space-y-4">
          {skillGroupsLeft.map((group) => (
            <div key={group.title} className="flex flex-wrap items-center">
              <h3 className="text-gray-700 font-medium mb-1 mr-2 whitespace-nowrap">{group.title}:</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 右列 */}
        <div className="space-y-4">
          {skillGroupsRight.map((group) => (
            <div key={group.title} className="flex flex-wrap items-center">
              <h3 className="text-gray-700 font-medium mb-1 mr-2 whitespace-nowrap">{group.title}:</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
