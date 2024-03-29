import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brandon Corn Portfolio",
  description:
    "The greatest portfolio in all the land. Feast your eyes as this mighty software engineer seeks to make the greatest contributions he knows how. Through high impact work on projects, to collaborating with his teammates to grow, this guy is on his way somewhere",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="min-h-screen">{children}</div>
    </section>
  );
}
