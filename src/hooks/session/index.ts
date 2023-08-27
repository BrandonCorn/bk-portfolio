import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';

export enum AuthStatus {
  authenticated = 'authenticated',
  loading = 'loading',
  unauthenticated = 'unauthenticated'
}

type SessionAuthenticated = {
  data: Session;
  status: 'authenticated'
  update?: unknown | null;
}

type SessionUnauthenticated = {
  data: null;
  status: 'loading' | 'unauthenticated'
  update?: unknown | null;
}



type CustomSession = SessionAuthenticated | SessionUnauthenticated;

export function useCustomSession(){
  const session: CustomSession = useSession();
  return session;
}

export function useProtectedSession(){
  const session: CustomSession = useSession({
    required: true
  });
  return session;
}

