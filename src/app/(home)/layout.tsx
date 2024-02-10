import type { Metadata } from "next";
import { Header } from "@/components";
import Footer from "@/components/molecules/Footers/Footer/Footer";

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
    <section className="flex flex-col min-h-screen m-0 text-black dark:bg-black dark:text-white overflow-hidden">
      <div className="min-h-screen flex justify-center items-center">
        <div className=" dark:bg-zinc-900 w-full sm:w-full md:w-11/12 lg:w-11/12 xl:w-4/5 max-w-screen-xl p-4 transition-width">
          <Header />
          <div className="min-h-screen">{children}</div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
