// src/components/layout/NavIconButton.tsx
import Link from 'next/link';

interface NavIconButtonProps {
  icon: React.ReactNode;
  label: string;
  href?: string; // Make href optional for non-link buttons
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function NavIconButton({
  icon,
  label,
  href,
  isActive = false,
  onClick,
  className = '',
  disabled = false,
}: NavIconButtonProps) {
  const commonClasses = `
    p-2.5 rounded-lg w-full flex justify-center items-center transition-colors duration-150 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-green-500
    disabled:opacity-50 disabled:cursor-not-allowed
    ${isActive ? 'bg-slate-700 text-white shadow-inner' : 'text-slate-400 hover:bg-slate-700 hover:text-slate-100'}
    ${className}
  `;

  if (href && !disabled) {
    return (
      <Link href={href} legacyBehavior>
        <a aria-label={label} title={label} className={commonClasses}>
          {icon}
        </a>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      disabled={disabled}
      className={commonClasses}
    >
      {icon}
    </button>
  );
}
