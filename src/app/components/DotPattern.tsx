export default function DotPattern() {
  return (
    <div className="grid grid-cols-5 gap-2">
      {Array(25)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#4834C9] opacity-70"
          ></div>
        ))}
    </div>
  );
}
