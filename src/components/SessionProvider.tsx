"use client";

export { SessionProvider } from "next-auth/react";

// import { Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";
// import type { AppProps } from "next/app";

// interface SessionProviderProps {
//   children?: React.ReactNode | null
//   session?: Session | null
// }

// // const SessionProviderWrapper = ({
// //   Component,
// //   session,
// // }: {
// //   Component: React.ReactNode;
// //   session?: Session;
// // }) => {
// //   return <SessionProvider session={session}>{children}</SessionProvider>;
// // };

// // export default SessionProviderWrapper;

// export default function SessionWrapper({
//   //@ts-ignore
//   Component,
//   //@ts-ignore
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// }
