export default function SkillBadge({ name }: { name: string }) {
  return (
    <span className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-sm">
      {name}
    </span>
  );
}
