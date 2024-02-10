"use client";

import Image from "next/image";
import clsx from "clsx";
import { ModeToggle } from "@/components";
import { usePathname } from "next/navigation";
import MobileNavigation from "../../../molecules/Navigation/MobileNavigation/MobileNavigation";
import DesktopNavigation from "../../../molecules/Navigation/DesktopNavigation/DesktopNavigation";
import { useRouter } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const router = useRouter();

  return (
    <header className="grid grid-cols-3 p-6 bg-black-500 text-white w-full">
      <div
        className="flex items-center justify-start cursor-pointer w-fit"
        onClick={() => router.push("/")}
      >
        <Image
          priority
          src={"/personal-logo.jpeg"}
          alt="Personal Logo"
          width={50}
          height={50}
          className={clsx(
            "object-fill rounded-full",
            path !== "/" ? "visible" : "hidden"
          )}
        />
      </div>
      <div className="flex items-center justify-center">
        <DesktopNavigation />
        <MobileNavigation />
      </div>
      <div className="flex items-center justify-end">
        <ModeToggle />
      </div>
    </header>
  );
}
