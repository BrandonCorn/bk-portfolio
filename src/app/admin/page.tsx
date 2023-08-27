"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useProtectedSession } from "@/hooks/session";

export default function Admin() {
  const session = useProtectedSession();
  console.log(session);

  return <div>Soon to be admin page</div>;
}
