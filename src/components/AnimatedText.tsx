import { motion } from "framer-motion";

// variants props
const quote = {
  // uses this as custom values by accessing key names
  initial: {
    opacity: 1,
  },
  animate: {
    transition: {
      delay: 0.8,
      staggerChildren: 0.08,
    },
  },
};

const oneWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

type TextProps = {
  text: string
  className: string
}

const AnimatedText = ({text, className = ""}: TextProps,) => {
  return (
    <div
      className="w-full flex items-center justify-center mx-auto py-2 sm:py-0 text-center
    overflow-hidden"
    >
      {/* used staggerchildren to delay child elements */}
      <motion.h1
        className={`${className} text-8xl inline-block w-full text-dark font-bold capitalize `}
        variants={quote}
        // use key names as values
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((words, index) => (
          <motion.span
            key={words + "-" + index}
            className="inline-block"
            variants={oneWord}
          >
            {words}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
