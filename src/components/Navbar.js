import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  LightGmailIcon,
  FeMentor,
  GithubIcon,
  LinkedInIcon,
  FacebookIcon
} from "./Icon";
import { motion } from "framer-motion";
import { useState } from "react";

//Generized Component
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    //Dynamic Class
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark
      absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.pathname === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

// Mobile
const MobileLinkComponent = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    //Dynamic Class
    <button
      onClick={handleClick}
      className={`${className} my-2 relative group text-light`}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-light
      absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.pathname === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full relative px-32 py-10 font-medium flex items-center justify-between z-10
    lg:px-16 md:px-12 sm:px-8"
    >
      {/* Hamburger menu */}
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClickCapture={handleClick}
      >
        <span
          className={`bg-dark block h-0.5 w-6 transition-all duration-0.5 ease-out rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 w-6 transition-all duration-0.5 ease-out rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 w-6 transition-all duration-0.5 ease-out rounded-sm -translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* desktop */}
      <div className="w-full flex justify-between items-center lg:hidden ">
        <nav>
          {/* This class is written for consistent width */}
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap ">
          {/* same as line 37 */}
          <motion.a
            href="https://www.frontendmentor.io/profile/CodeChd"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <FeMentor/>
          </motion.a>
          <motion.a
            href="https://github.com/CodeChd"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/cj-francisco-918509275/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://web.facebook.com/cj.francisco.3152/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <FacebookIcon />
          </motion.a>
        </nav>
      </div>

      {isOpen ? (
        //mobile
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="min-w-[80vw] flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-between items-center z-20 bg-dark/90 rounded/lg backdrop-blur-md py-32 rounded-lg"
        >
          <nav className="flex items-center flex-col justify-center ">
            {/* This class is written for consistent width */}
            <MobileLinkComponent
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <MobileLinkComponent
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <MobileLinkComponent
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            {/* same as line 37 */}
            <motion.a
              href="https://www.frontendmentor.io/profile/CodeChd"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <LightGmailIcon />
            </motion.a>
            <motion.a
              href="https://github.com/CodeChd"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/cj-francisco-918509275/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-dark sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://web.facebook.com/cj.francisco.3152/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 bg-light ml-1"
            >
              <FacebookIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
