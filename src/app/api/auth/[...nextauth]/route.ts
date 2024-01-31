import { authOptions } from "@/lib/nextAuth";


const handler = authOptions;

export { handler as GET, handler as POST };

//add logic for callbacks https://next-auth.js.org/configuration/options#callbacks
