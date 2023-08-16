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
        <div className=" min-h-screen justify-center items-center">
          <div className="w-1/2 bg-zinc-800"></div>
          {children}
          <div className="w-1/2 bg-white"></div>
        </div>
      </body>
    </html>
  );
}
