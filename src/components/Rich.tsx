import { Fragment } from 'react';

// The honorific ﷺ, set in an Arabic face so it never falls back to a tofu box.
export function Saw({ className = '' }: { className?: string }) {
  return (
    <span className={`font-arabic not-italic ${className}`} aria-label="peace and blessings be upon him">
      ﷺ
    </span>
  );
}

// Renders copy strings with two inline tokens: {saw} and {i:italic text}.
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\{saw\}|\{i:[^}]+\})/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part === '{saw}') return <Saw key={i} />;
        if (part.startsWith('{i:')) return <em key={i}>{part.slice(3, -1)}</em>;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
