import { ReactNode, HTMLAttributes } from 'react';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

export default function Container({
  children,
  size = 'lg',
  className = '',
  ...props
}: ContainerProps) {
  const baseStyles = 'mx-auto px-5 sm:px-6 md:px-8 lg:px-12';

  return (
    <div
      className={`${baseStyles} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
