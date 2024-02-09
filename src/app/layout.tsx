import "./globals.css";
import NextAuthProvider from "@/components/atoms/Providers/SessionProvider/SessionProvider";
import Footer from "@/components/molecules/Footers/Footer/Footer";
import ReduxProvider from "@/redux/ReduxProvider";
import { serverSession } from "@/app/api/auth/[...nextauth]/options";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components";
import { Header } from "@/components";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Bk Portfolio",
  description:
    "Embark on a journey through the digital realm of innovation and expertise with Brandon Corn's software engineer portfolio. Delve into a symphony of groundbreaking projects, ingenious solutions," +
    "and relentless pursuit of excellence. Explore the nexus of technology and creativity, where every line of code tells a story of innovation and empowerment. Elevate your digital experience with Brandon Corn's " +
    "portfolio, where passion meets proficiency in the world of software engineering.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await serverSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <NextAuthProvider session={session}>
        <ReduxProvider>
          <body
            id="main-layout"
            className={`flex flex-col min-h-screen m-0 bg-white text-black dark:bg-black dark:text-white ${roboto.className}`}
          >
            <ThemeProvider>
              <div className="min-h-screen flex justify-center items-center">
                <div className="bg-white dark:bg-zinc-900 w-full sm:w-full md:w-11/12 lg:w-11/12 xl:w-4/5 max-w-screen-xl p-4 transition-width">
                  <Header />

                  {children}
                </div>
              </div>
              <Footer />
            </ThemeProvider>
          </body>
        </ReduxProvider>
      </NextAuthProvider>
    </html>
  );
}
