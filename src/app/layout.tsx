import "./globals.css";
import NextAuthProvider from "@/components/atoms/Providers/SessionProvider/SessionProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import { serverSession } from "@/app/api/auth/[...nextauth]/options";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Bk Portfolio",
  description:
    "Embark on a journey through the digital realm of innovation and expertise with Brandon Corn's software engineer portfolio. Delve into a symphony of groundbreaking projects, ingenious solutions," +
    "and relentless pursuit of excellence. Explore the nexus of technology and creativity, where every line of code tells a story of innovation and empowerment. Elevate your digital experience with Brandon Corn's " +
    "portfolio, where passion meets proficiency in the world of software engineering.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await serverSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <NextAuthProvider session={session}>
        <ReduxProvider>
          <ThemeProvider>
            <body id="main-layout" className={` ${roboto.className}`}>
              {children}
            </body>
          </ThemeProvider>
        </ReduxProvider>
      </NextAuthProvider>
    </html>
  );
}
