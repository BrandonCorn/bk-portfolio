import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/components";
const inter = Inter({ subsets: ["latin"] });
import SessionWrapper from "@/components/SessionProvider";

export const metadata: Metadata = {
  title: "Brandon Corn Portfolio",
  description: "Brandon Corn Experience software",
};

export default function RootLayout({
  // function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={"bg-white text-black dark:bg-black dark:text-white"}>
        <Provider>
          <div className="min-h-screen flex justify-center items-center">
            <div className="bg-white dark:bg-zinc-900 w-full sm:w-full md:w-11/12 lg:w-11/12 xl:w-4/5 max-w-screen-xl p-4 transition-width">
              <div className="min-h-screen">{children}</div>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
