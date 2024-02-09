"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { headerNavigation, getAuthLinks } from "../navigationItems";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function MobileNavigation() {
  const { status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [authLinks, setAuthLinks] = useState(getAuthLinks(status));

  useEffect(() => {
    const updatedLinks = getAuthLinks(status);
    setAuthLinks(updatedLinks);
  }, [status]);

  return (
    <div className="relative md:hidden rounded-md z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
        >
          <FaBars className="dark:text-white h-10 w-10 border border-solid border-zinc-100 rounded-md p-1" />
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-30 bg-black bg-opacity-50"
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="z-50 top-20 fixed mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 ml-5">
              <div className="w-screen max-w-md rounded-2xl bg-white text-sm leading-6 ring-1 ring-gray-900">
                <div className="p-2">
                  {headerNavigation.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-300 cursor-pointer"
                      onClick={() => (window.location.href = item.href)}
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
                  {authLinks.map((item) => (
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
          </>
        )}
      </div>
    </div>
  );
}
