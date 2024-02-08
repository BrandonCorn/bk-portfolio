import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const solutions = [
  {
    name: "Home",
    description: "Home page",
    href: "/",
  },
  {
    name: "Skills",
    description:
      "Learn more about the skills and experience Brandon Corn has to offer",
    href: "/skills",
  },
  {
    name: "Blog",
    description: "Join the fun and read up on what's new in my life",
    href: "/blog",
  },
  {
    name: "Sign In",
    description: "Share your thoughts with an account of your own",
    href: "/auth/signin",
  },
];
const callsToAction = [
  { name: "Contact Me", href: "#" },
  { name: "View LinkedIn", href: "#" },
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
      >
        <FaBars className="dark:text-white h-10 w-10 border border-solid border-zinc-100 rounded-2xl p-1" />
      </button>

      {isOpen && (
        <div className="z-50 top-10 fixed mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md rounded-2xl bg-white text-sm leading-6 ring-1 ring-gray-900">
            <div className="p-2">
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-300 cursor-pointer"
                >
                  <div>
                    <Link
                      href={item.href}
                      className="font-semibold text-gray-900"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 rounded-xl">
              {callsToAction.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center rounded-xl gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
