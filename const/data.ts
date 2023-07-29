// <AnimatedText
// text="CJ Francisco"
// className="!w-[80%] overflow-hidden mx-auto !text-9xl absolute right-0 top-[36%] !normal-case !text-right xxl:!text-8xl xl:!text-7xl xl:top-[40%] lg:!text-right lg:!w-full lg:!text-6xl lg:top-[40%] md:!text-5xl md:top-[40%] sm:!text-center sm:top-[50%] "
// />
// <AnimatedText
// text="Full Stack Developer"
// className="!w-full !text-9xl max-w-full absolute left-0 top-[50%] !normal-case !text-left  xxl:!text-8xl xl:!text-7xl lg:!text-left lg:!w-full lg:!text-6xl md:top-[48%] md:!text-5xl sm:!text-center sm:top-[59%]"
// />
// <div className="flex items-center justify-between w-fulll ">
// <div className="w-1/2 flex mx-auto flex-col items-center justify-center">
//   {/* Note : Responsive Text Technique */}

//   <motion.p
//     initial={{ y: 20, opacity: 0 }}
//     whileInView={{ y: 0, opacity: 1 }}
//     transition={{ delay: 0.7, duration: 0.3 }}
//     className="my-4 text-[16.55px] font-[600] sm:hidden"
//   >
//     CJ is a self-taught full-stack developer with a passion for
//     creating engaging and useful websites. With a strong foundation
//     in web development, always exploring different technologies and
//     finding new ways to learn. and constantly seeking out new
//     challenges to improve his skills
//   </motion.p>

//   {/* resume & contact links */}
//   <motion.div
//     initial={{ y: 20, opacity: 0 }}
//     whileInView={{ y: 0, opacity: 1 }}
//     transition={{ delay: 1, duration: 0.3 }}
//     className="flex items-center self-center sm:mt-[3rem] "
//   >
//     <Link
//       href="/carl jandel francisco.pdf"
//       target="_blank"
//       className="flex items-center p-2.5 px-6 bg-dark text-light
//   rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
//   border border-solid border-transparent hover:border-dark"
//       download={true}
//     >
//       Resume
//       <LinkArrow className="w-6 ml-1 sm:w-6 sm: h-6" />
//     </Link>
//     <Link
//       href="mailto:drowzyking1126@gmail.com"
//       target="_blank"
//       className="ml-4 text-lg font-medium capitalize text-dark underline "
//     >
//       Contact
//     </Link>
//   </motion.div>
// </div>
// </div>