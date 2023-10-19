"use client";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center m-auto bg-inherit w-screen h-40">
      <div className="flex justify-between items-center w-3/4 lg:w-1/2 xl:w-1/4">
        <IconContext.Provider value={{ size: "3em" }}>
          <Link href="https://github.com/BrandonCorn">
            <motion.div
              whileHover={{ scale: 1.2, transition: { duration: 1 } }}
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
            >
              <FaGithub />
              <p> GitHub</p>
            </motion.div>
          </Link>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "#0077B5", size: "3em" }}>
          <Link href="https://www.linkedin.com/in/brandon-corn-3b3249152">
            <motion.div
              whileHover={{ scale: 1.2, transition: { duration: 1 } }}
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
            >
              <FaLinkedin />
              <p> LinkedIn</p>
            </motion.div>
          </Link>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            color: "",
            size: "3em",
            style: {
              background:
                "linear-gradient(to bottom , #405DE6, #5B51D8,#833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
              borderRadius: "1em",
            },
          }}
        >
          <Link href="https://instagram.com/thatscornwithac">
            <motion.div
              whileHover={{ scale: 1.2, transition: { duration: 1 } }}
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
            >
              <FaInstagram />
              <p> Instagram</p>
            </motion.div>
          </Link>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            color: "",
            size: "3em",
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
              <p> Discord</p>
            </motion.div>
          </Link>
        </IconContext.Provider>
      </div>
    </footer>
  );
};

export default Footer;
