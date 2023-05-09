import { motion } from "framer-motion";
import Link from "next/link";

// custom motion
const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center
         rounded-full text-2xl font-bold"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 1 }}
      >
        CJ
      </MotionLink>
    </div>
  );
};

export default Logo;
