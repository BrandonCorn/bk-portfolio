"use client";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center m-auto bg-transparent w-screen h-24 mt-2">
      <div className="flex flex-row justify-center items-center  pt-8 w-screen">
        <div className="flex flex-wrap items-center justify-start w-1/2 sm:1/2 xl:w-1/3 space-x-8 mb-8 px-2">
          <IconContext.Provider value={{ size: "2em" }}>
            <Link href="https://github.com/BrandonCorn">
              <motion.div
                whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                className="flex flex-col items-center justify-end space-y-2 cursor-pointer"
              >
                <FaGithub />
              </motion.div>
            </Link>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#0077B5", size: "2em" }}>
            <Link href="https://www.linkedin.com/in/brandon-corn-3b3249152">
              <motion.div
                whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
              >
                <FaLinkedin />
              </motion.div>
            </Link>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              size: "2em",
              style: {
                background:
                  "linear-gradient(to bottom , #405DE6, #5B51D8,#833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
                borderRadius: "0.4em",
              },
            }}
          >
            <Link href="https://instagram.com/thatscornwithac">
              <motion.div
                whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
              >
                <FaInstagram />
              </motion.div>
            </Link>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              size: "2em",
              style: { backgroundColor: "#5865F2" },
              className: "rounded-md",
            }}
          >
            <Link href="https://discord.com/users/thatscornwithac">
              <motion.div
                whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
              >
                <FaDiscord />
              </motion.div>
            </Link>
          </IconContext.Provider>
        </div>
        <div>
          <p className="mb-8 dark:text-gray-600 text-black text-center md:text-clip">
            &copy; Brandon Corn All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
