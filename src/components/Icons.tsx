import type { Dimension } from '../types';

interface IconProps {
  color?: string;
  className?: string;
}

export function WillowLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Shield outline */}
      <path d="M10 8 L54 8 L54 28 C54 40 44 50 32 56 C20 50 10 40 10 28 Z" strokeWidth="1.6" />
      {/* Inner shield border */}
      <path d="M14 12 L50 12 L50 27 C50 38 42 46 32 51 C22 46 14 38 14 27 Z" strokeWidth="0.8" opacity="0.45" />
      {/* Willow crown arcs */}
      <path d="M32 16 C24 16 19 20 17 25" strokeWidth="1" />
      <path d="M32 16 C40 16 45 20 47 25" strokeWidth="1" />
      {/* Drooping branches — left */}
      <path d="M17 25 C15 29 15 33 16 37" strokeWidth="0.9" />
      <path d="M20 23 C18 27 18 31 19 35" strokeWidth="0.9" />
      <path d="M23 21 C21 25 21 29 22 33" strokeWidth="0.9" />
      <path d="M26 19 C24 23 24 27 25 31" strokeWidth="0.9" />
      {/* Drooping branches — right */}
      <path d="M47 25 C49 29 49 33 48 37" strokeWidth="0.9" />
      <path d="M44 23 C46 27 46 31 45 35" strokeWidth="0.9" />
      <path d="M41 21 C43 25 43 29 42 33" strokeWidth="0.9" />
      <path d="M38 19 C40 23 40 27 39 31" strokeWidth="0.9" />
      {/* Center drooping branches */}
      <path d="M32 17 C30 21 30 25 31 29" strokeWidth="0.9" />
      <path d="M32 17 C34 21 34 25 33 29" strokeWidth="0.9" />
      {/* Trunk */}
      <path d="M32 20 L32 44" strokeWidth="1.1" />
      {/* Ground line */}
      <path d="M25 44 L39 44" strokeWidth="0.8" opacity="0.4" />
      {/* Banner ribbon */}
      <path d="M19 49 L23 47 L32 49 L41 47 L45 49 L42 53 L32 51 L22 53 Z" strokeWidth="0.8" />
    </svg>
  );
}

export function DepartmentIcon({ iconKey, color, className = '' }: { iconKey: string; color?: string; className?: string }) {
  const stroke = color || 'currentColor';
  const common = {
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: stroke,
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true,
  };

  switch (iconKey) {
    case 'arrow':
      return (
        <svg {...common}>
          <path d="M10 24 L36 24" />
          <path d="M28 16 L36 24 L28 32" />
          <path d="M14 14 L14 34" opacity="0.4" />
        </svg>
      );
    case 'sun':
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="8" />
          <path d="M24 8 L24 12" />
          <path d="M24 36 L24 40" />
          <path d="M8 24 L12 24" />
          <path d="M36 24 L40 24" />
          <path d="M12.5 12.5 L15 15" />
          <path d="M33 33 L35.5 35.5" />
          <path d="M35.5 12.5 L33 15" />
          <path d="M15 33 L12.5 35.5" />
        </svg>
      );
    case 'lens-star':
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="10" />
          <path d="M27.5 27.5 L36 36" />
          <path d="M20 14 L21 18 L25 18 L21.5 20.5 L23 24.5 L20 22 L17 24.5 L18.5 20.5 L15 18 L19 18 Z" strokeWidth="1" />
        </svg>
      );
    case 'circles':
      return (
        <svg {...common}>
          <circle cx="18" cy="24" r="9" />
          <circle cx="30" cy="24" r="9" />
        </svg>
      );
    case 'tool-star':
      return (
        <svg {...common}>
          <path d="M14 34 L22 26" />
          <path d="M22 26 C20 22, 22 18, 26 16 C30 14, 34 16, 34 16 C34 16, 30 18, 30 20 C30 22, 32 22, 34 20 C34 20, 36 24, 34 28 C32 30, 28 30, 26 28" />
          <path d="M36 12 L37 15 L40 16 L37 17 L36 20 L35 17 L32 16 L35 15 Z" strokeWidth="1" />
        </svg>
      );
    case 'labyrinth':
      return (
        <svg {...common}>
          <path d="M10 10 L38 10 L38 38 L10 38 L10 14 L34 14 L34 34 L14 34 L14 18 L30 18 L30 30 L18 30 L18 22 L26 22 L26 26" />
        </svg>
      );
    default:
      return null;
  }
}

export function getDepartmentIconKey(dim: Dimension): string {
  return {
    T: 'arrow',
    S: 'sun',
    N: 'lens-star',
    B: 'circles',
    I: 'tool-star',
    G: 'labyrinth',
  }[dim];
}
