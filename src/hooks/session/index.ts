import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

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
    required:true,
    onUnauthenticated(){
      redirect('/api/auth/signin')
    }
  });
  return session;
}

