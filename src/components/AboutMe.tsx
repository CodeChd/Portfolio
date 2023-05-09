import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="grid  w-full items-center gap-[2rem] md:gap-8 min-h-screen">
      <div className="flex flex-col items-start justify-start font-al xxl:mt-[5rem] xs:mt-[5rem] ">
        <motion.p
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{once: true}}
          className="text-4xl  leading-[3.5rem] lg:text-3xl md:text-2xl sm:text-[20px]"
        >
          Hey there! My name is CJ and I&apos;m a Full Stack Developer with a Bachelor of Science degree in Information Technology.I love building things in the web and always
          learning new technologies and keeping up with the latest industry
          trends to stay ahead of the game.
        </motion.p>

        <motion.p
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          viewport={{once: true}}
          className="text-4xl my-4 font-[500] leading-[3.5rem] lg:text-3xl md:text-2xl sm:text-[20px]"
        >
          My abundant energy drives me to explore various interests and pursue diverse areas of study, including artistic endeavors. I&apos;m a fast learner and have the ability to multitask between different projects and roles with ease.
        </motion.p>
        <motion.p
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          viewport={{once: true}}
          className="text-4xl my-4 font-[500] leading-[3.5rem] lg:text-3xl md:text-2xl sm:text-[20px]"
        >
          I&apos;m fueled by my love for bringing ideas to life and building things from scratch. I&apos;ve developed a portfolio of work that showcases my unique skills and creativity. Apart from coding, I love listening to podcasts, reading, traveling, and indulging in a lot of coffee.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutMe;
