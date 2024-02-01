import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";

export async function getSessionServer() {
  const session = await getServerSession(authOptions);
  if (session) {
    return session;
  } else {
    return false;
  }
}
