import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, ThemeProvider } from "@/components";
import { SessionProvider } from "@/components/atoms/Providers/SessionProvider/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Brandon Corn Portfolio",
//   description:
//     "The greatest portfolio in all the land. Feast your eyes as this mighty software engineer seeks to make the greatest contributions he knows how. Through high impact work on projects, to collaborating with his teammates to grow, this guy is on his way somewhere",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={"bg-white text-black dark:bg-black dark:text-white"}>
        <SessionProvider>
          <ThemeProvider>
            <div className="min-h-screen flex justify-center items-center">
              <div className="bg-white dark:bg-zinc-900 w-full sm:w-full md:w-11/12 lg:w-11/12 xl:w-4/5 max-w-screen-xl p-4 transition-width">
                <div className="min-h-screen">
                  <Header />
                  {children}
                </div>
              </div>
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
