"use client";
import IntroTitle from "@/components/atoms/Titles/IntroTitle/IntroTitle";
import Image from "next/image";
import { LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import { getInitialPosts } from "@/redux/slices/postSlice/postSlice";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux";

const blogTitle = "Moments Unscripted: A Continual Blog";
const author = "Brandon Corn";
const role = "User Interface Engineer II";

const paragraphs = {
  p1: `Hi everyone! Welcome to "Moments Unscripted: A Continual Blog," a
  simple home where I can share my thoughts, reminisce, and savor
  life's memories. Sometimes it's drama, others maybe a dash of
  romance, most certainly some work, and hopefully a side of hilarity
  to give you a nice chuckle.`,
  p2: `You might be wondering, why start this now? To be blunt, it's not
  the easiest thing to do. Still, I'm beginning to find time moving by
  me at a pace I've never known, almost uncomfortable. It's the type
  of feeling that makes you want to be grateful and remember the
  moments, both grand and fleeting. They need their spotlight, an ode
  if you will. So, I'm here to capture the melodies of my days, the
  sonnets of my thoughts, and the epic and more often simple sagas of
  everything in between. Life and time never stop moving, they're
  unconditional. It's a poetic symphony, a waltz of emotions and
  experiences. There are moments that tug at heartstrings and others
  that make you ponder the intricacies of the universe. More than that
  there are overlooked and under appreciated moments of great value. I
  owe it to myself and everyone involved to remember them anyway I
  can.`,
  p3: `So this is my stomping ground, where we celebrate the drama, dissect
  (or overthink) the political theater, swoon in the corny interludes,
  and, of course, share a good laugh. This blog isn't a solo act, it's
  a shared experience. I'm a fan of some cheesiness, and want others
  to enjoy the fun. So, it's you, me, and the open road of
  conversation. Comment, share, or soak in the narratives. Let's make
  this a space where authenticity rules and connections thrive. Here's
  to "Moments Unscripted" – an ever-evolving canvas where life's
  nonsense, thoughts, politics, romance, and hilarity find their place
  in the spotlight. Will you enjoy the moments with me? Let's take on
  this journey together. 🎭✨`,
};

export default function Page() {
  const dispatch = useAppDispatch();
  const FIRST_PAGE = 1;
  const [fetchPosts, setFetchPosts] = useState(false);

  /**
   * Retrieve initial blog posts in background for user
   */
  useEffect(() => {
    if (!fetchPosts) {
      dispatch(getInitialPosts());
      setFetchPosts(true);
    }
  }, []);

  return (
    <LayoutGroup>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center mt-4"
      >
        <div className="flex-col items-center text-center justify-center w-1/3">
          <IntroTitle
            text={blogTitle}
            id={"blog-title"}
            className="text-4xl text-wrap"
          />
          <p className="text-sm md:text-base mt-3"> {author} </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
        <div id="blog-main-image-container" className="mt-8">
          <Image
            className={`rounded-xl`}
            priority
            src="/blog/city.jpg"
            alt="blog city image"
            width={900}
            height={650}
          />
        </div>
        <div className="flex flex-col w-full md:w-3/4 2xl:w-1/2  space-y-4 my-6 md:my-8 paragraph-spacing">
          <p className="text-md md:text-lg indent-4 md:indent-6 leading-relaxed md:leading-loose pl-4">
            {paragraphs.p1}
          </p>
          <p className="text-md md:text-lg indent-4 md:indent-6 leading-relaxed md:leading-loose pl-4">
            {paragraphs.p2}
          </p>
          <p className="text-md md:text-lg indent-4 md:indent-6 leading-relaxed md:leading-loose pl-4">
            {paragraphs.p3}
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="my-6">
            <Link
              aria-label="posts link"
              href={`/blog/${FIRST_PAGE}`}
              className="bg-brand-secondary/20 rounded-full py-3 px-6 text-lg md:text-xl border border-solid hover:bg-brand-secondary dark:hover:bg-gray-700 transition duration-300"
            >
              Posts in construction
            </Link>
          </div>
        </div>
      </motion.div>
    </LayoutGroup>
  );
}
