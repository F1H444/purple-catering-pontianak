interface SectionDividerProps {
  variant?: 'ivory' | 'white' | 'ink';
}

export default function SectionDivider({ variant = 'ivory' }: SectionDividerProps) {
  const bgColor =
    variant === 'ink'
      ? 'bg-ink'
      : variant === 'white'
      ? 'bg-white'
      : 'bg-ivory';

  return (
    <div className={`relative h-16 ${bgColor} overflow-hidden`}>
      <div className="woven-texture absolute inset-0" />
    </div>
  );
}
