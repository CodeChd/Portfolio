import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="grid  w-full items-center gap-[2rem] md:gap-8 min-h-screen">
      <div
        className="flex flex-col items-start justify-start
    xl:col-span-2 lg:order-2 lg:col-span-4"
      >
        <motion.p
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-3xl font-[500]"
        >
          Hello, I&apos;m CJ, A Full stack web developer and UI/UX designer with a
          passion for creating beautiful, functional, and user-centered digital
          experiences. With 1 year of experience. I am always looking for new
          and innovative ways to bring my clients visions to life.
        </motion.p>

        <motion.p
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-3xl my-4 font-[500]"
        >
          I believe that design is about more than just making things look
          pretty – it&apos;s about solving problems and creating intuitive, enjoyable
          experiences for users.
        </motion.p>

        <motion.p
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-3xl font-[500]"
        >
          Whether I&apos;m working on a website, mobile app, or other digital
          product, I bring my commitment to design excellence and user-centered
          thinking to every project I work on. I look forward to the opportunity
          to bring my skills and passion to your next project.
        </motion.p>
        <div className="flex flex-col items-start justify-start ">
          <motion.h2
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.9, type: "spring" }}
            className="mt-4 text-3xl font-[500]"
          >
            Outside of tech, my hobbies are:
          </motion.h2>
          <motion.ul
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="text-2xl mt-2 font-[500] "
          >
            <li>listening to podcasts</li>
            <li>Reading</li>
            <li>Travel</li>
            <li>Coffee</li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
