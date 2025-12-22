import { ReactNode } from 'react';

export interface BulletListProps {
  items: ReactNode[];
  className?: string;
  bulletColor?: string;
}

export default function BulletList({
  items,
  className = '',
  bulletColor = 'text-sage-600',
}: BulletListProps) {
  return (
    <ul className={`space-y-3 ${className}`} role="list">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span
            className={`flex-shrink-0 mt-0.5 text-xl ${bulletColor}`}
            aria-hidden="true"
          >
            •
          </span>
          <span className="flex-1 text-base sm:text-lg leading-relaxed text-warm-800">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
