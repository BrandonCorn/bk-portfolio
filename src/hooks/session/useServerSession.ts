import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";


/**
 * Helper function to retrieve the server session
 * @param args 
 * @returns 
 */
export function useServerSession(...args: [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']] | [NextApiRequest, NextApiResponse] | []){
  return getServerSession(...args, authOptions);
}
