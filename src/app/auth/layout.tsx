// export const metadata: Metadata = {
//   title: "Brandon Corn Portfolio",
//   description:
//     "The greatest portfolio in all the land. Feast your eyes as this mighty software engineer seeks to make the greatest contributions he knows how. Through high impact work on projects, to collaborating with his teammates to grow, this guy is on his way somewhere",
// };

import "../globals.css";
import type { Metadata } from "next";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className=" min-h-screen w-full justify-center items-center">
          <div className="flex min-h-screen">
            <div className=" md:w-1/2 lg:w-3/5 md:flex-col justify-center items-center hidden md:flex bg-indigo-800">
              <div className="hidden md:flex">
                <div className="border border-gray-400 mb-48 shadow-2xl border-transparent overflow-auto text-wrap text-center">
                  <h1 className="text-3xl md:text-4xl text-purple-400">
                    Welcome to the Portfolio Admin
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center items-center bg-white mx-auto">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
