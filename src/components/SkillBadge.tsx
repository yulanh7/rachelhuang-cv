export default function SkillBadge({ name }: { name: string }) {
  return (
    <span
      className="inline-block text-sm px-3 py-1 rounded-md bg-wave-gradient shadow-sm"
    >
      {name}
    </span>
  );
}
