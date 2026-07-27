import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Compose NativeWind class names with conflict resolution.
 * Same role as Torra `cn` helpers in mobile apps.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
