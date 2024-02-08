import "../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components";
import { Header } from "@/components";

export const metadata: Metadata = {
  title: "Brandon Corn Portfolio",
  description:
    "The greatest portfolio in all the land. Feast your eyes as this mighty software engineer seeks to make the greatest contributions he knows how. Through high impact work on projects, to collaborating with his teammates to grow, this guy is on his way somewhere",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-white text-black dark:bg-black dark:text-white overflow-x-hidden">
      <ThemeProvider>
        <div className="min-h-screen flex justify-center items-center">
          <div className="bg-zinc-100 dark:bg-zinc-900 w-full sm:w-full md:w-11/12 lg:w-11/12 xl:w-4/5  max-w-screen-2xl p-4 transition-width">
            <div className="min-h-screen">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </ThemeProvider>
    </section>
  );
}
