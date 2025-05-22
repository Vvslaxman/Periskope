// src/components/ui/UserAvatar.tsx
import Image from 'next/image';

interface UserAvatarProps {
  src?: string | null; // Allow null
  alt: string;
  fallback: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export default function UserAvatar({ src, alt, fallback, size = 'md', className = '', onClick }: UserAvatarProps) {
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg', // Adjusted for sidebar
    xl: 'w-16 h-16 text-xl',
  };

  return (
    <div
      onClick={onClick}
      title={alt}
      className={`relative rounded-full flex items-center justify-center bg-slate-600 text-slate-200 overflow-hidden shrink-0
                  ${sizeClasses[size]} ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {src ? (
        <Image src={src} alt={alt} layout="fill" objectFit="cover" priority={false} />
      ) : (
        <span className="font-semibold select-none">{fallback.substring(0, 1)}</span>
      )}
    </div>
  );
}
