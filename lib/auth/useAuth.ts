// AUTO-GENERATED. Disabled-auth build.
import { useAuthStore } from './store';

export function useAuth() {
  return useAuthStore((s) => ({ status: s.status, user: s.user, permissions: s.permissions }));
}

export function usePermission(_perm: string): boolean {
  return true;
}
