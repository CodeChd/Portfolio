import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icon";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import prjImage from "../../public/images/cell group.jpg";
import { motion } from "framer-motion";
import Transition from "@/components/Transition";
// full grid span component
// const FtProject = ({ type, title, summary, img, link, github }) => {
//   return (
//     <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light text-dark shadow-2zl p-12">
//       <Link href={link} target="_blank"
//       className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
//         <Image src={img} alt={title} className="w-full h-auto" />
//       </Link>

//       <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
//         <span className="text-primaryIndigo font-medium text-xl">{type}</span>
//         <Link href={link} target="_blank" className="hover:underline undeline-offset-2">
//           <h2 className="my-2 w-full text-left text-4xl font-bold ">{title}</h2>
//         </Link>
//         <p className="my-2 font-medium text-dark ">{summary}</p>
//       <div className="my-2 flex items-center ">
//         <Link href={github} className="w-10" target="_blank">
//           <GithubIcon />
//         </Link>

//         <Link href={link} className="ml-4 rounded-lg bg-dark text-light p-2  px-6 text-lg font-semibold" target="_blank">
//           Visit Source Code
//         </Link>
//       </div>
//       </div>

//     </article>
//   );
// };

//Stack used
const TechStack = ({ names, className = "" }) => {
  return (
    <div className="w-full rounded-2xl my-2">
      <ul className="w-full flex  items-center justify-start gap-2">
        {names.split(/\s+/).map((name) => (
          <li
            key={name}
            className={` ${className} w-full px-1 border-2 border-solid border-dark rounded-md text-center font-medium `}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Project = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  stack,
  stackClasName,
}) => {
  return (
   
    <article className="w-full flex flex-col flex-wrap items-center justify-between rounded-3xl border border-solid border-dark bg-light text-dark shadow-2xl p-12 relative xs:p-4 ">

      {/* border shadow */}
      <div
        className="absolute top-0 -right-3 -z-10 h-[102%] w-[102%] rounded-[2rem] bg-dark 
  md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg   "
      >
        <Image src={img} alt={title} priority className="w-50%  h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-2 ">
        <span className="text-primaryIndigo font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline undeline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm ">{summary}</p>

        <TechStack className={stackClasName} names={stack} />

        <div className="my-2 flex items-center ">
          <Link href={github} className="w-10 md:w-6" target="_blank">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            className="ml-4 rounded-lg bg-dark text-light p-2  px-6 text-lg font-semibold
            md:text-base "
            target="_blank"
          >
            Visit Source Code
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="My Projects" />
      </Head>
      <Transition/>
      <main className="w-full mb-16 flex flex-col items-center justify-between ">
        <Layout className="pt-16">
          <AnimatedText
            text="The best way to predict the future is to invent it!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
          />

          <div className="w-full grid grid-cols-12 gap-11 md:gap-6 ">
            <motion.div
            initial={{y:60}}
            animate={{y:0}}
            className="col-span-4 xl:col-span-6 md:col-span-12">
             
              <Project
                img={prjImage}
                title="Community church website"
                summary="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
                link="/"
                github="https://github.com/CodeChd"
                type="Featured Project"
                stack="ReactJS NextJS Strapi"
                stackClasName="text-start w-max"
              />
            </motion.div>
            <motion.div
            initial={{y:60}}
            animate={{y:0}}
            className="col-span-4 xl:col-span-6 md:col-span-12 ">
              <Project
                img={prjImage}
                title="What i Learn"
                summary="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
                link="/"
                github="https://github.com/CodeChd"
                type="Featured Project"
                stack="ReactJS Supabase"
                stackClasName="text-start w-max"
              />
            </motion.div>
            <motion.div
            initial={{y:60}}
            animate={{y:0}}
            className="col-span-4 xl:col-span-6 md:col-span-12">
              <Project
                img={prjImage}
                title="Dev Finder"
                summary="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
                link="/"
                type="Featured Project"
                github="https://github.com/CodeChd"
                stack="ReactJS"
                stackClasName="text-start w-max"
              />
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
