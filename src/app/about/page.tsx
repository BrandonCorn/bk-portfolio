// import Image from "next/image";
// import Link from "next/link";

// export default function About() {
//   return (
//     <div>
//       <Link href="/"> On the about page, go home </Link>
//     </div>
//   );
// }

"use client";
import { motion } from "framer-motion";
// import Layout from '../components/Layout';

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-start h-screen">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8"
        >
          <h1>About Me</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-md p-6 bg-transparent rounded-lg shadow-md mb-8"
        >
          <p className="text-xl mb-4">
            Hi there! I'm [Your Name], a passionate [Your Profession] based in
            [Your Location].
          </p>
          <p className="text-lg">
            I love building exciting projects using the latest technologies and
            bringing ideas to life. When I'm not coding, you can find me
            exploring new places, trying out new foods, or diving into a good
            book.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-md p-6 bg-transparent rounded-lg shadow-md mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">My Skills</h2>
          <ul>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="list-disc ml-6"
            >
              Web Development
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="list-disc ml-6"
            >
              Graphic Design
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="list-disc ml-6"
            >
              UI/UX Design
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="list-disc ml-6"
            >
              JavaScript (React, Node.js)
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="list-disc ml-6"
            >
              HTML/CSS
            </motion.li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-md p-6 bg-transparent rounded-lg shadow-md mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Cool Images</h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover rounded-lg shadow"
              src="/image-1.jpg"
              alt="Image 1"
            />
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full h-full object-cover rounded-lg shadow"
              src="/image-2.jpg"
              alt="Image 2"
            />
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full h-full object-cover rounded-lg shadow"
              src="/image-3.jpg"
              alt="Image 3"
            />
            {/* Add more images as needed */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
