import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bk Portfolio",
  description:
    "The greatest portfolio in all the land. Feast your eyes as this mighty software engineer seeks to make the greatest contributions he knows how. Through high impact work on projects, to collaborating with his teammates" +
    "to grow, this guy is on his way somewhere",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-w-screen min-h-screen">
      <div className=" lg:w-3/5 hidden lg:flex lg:flex-col justify-center items-center bg-indigo-800">
        <div className="hidden md:flex">
          <div className="animated-header border border-gray-400 mb-48 shadow-2xl border-transparent overflow-auto text-wrap text-center">
            <h1 className="text-3xl md:text-4xl text-purple-400">
              Welcome to the Portfolio Admin
            </h1>
          </div>
        </div>
      </div>
      <div className="h-screen w-full lg:w-2/5 flex flex-col justify-center items-center bg-white">
        {children}
      </div>
    </div>
  );
}
