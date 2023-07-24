// import AnimatedText from "../components/AnimatedText";
import { GithubIcon } from "../components/Icon";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Resources } from "../data/data.js";
import { motion } from "framer-motion";
import Transition from "../components/Transition";

type ProjectProps = {
  type: string
  title: string
  summary: string
  img: string
  link: string
  github: string
  stack: string
  stackClassName: string
  live: string
}


type TechStackProps = {
  stackStyles: string
  stackName: string
}
//Stack used
const TechStack = ({ stackName, stackStyles = "" }: TechStackProps) => {
  return (
    <div className="w-full rounded-2xl my-2">
      <ul className="w-full flex flex-wrap  items-center justify-start md:gap-3 gap-2">
        {stackName.split(/\s+/).map((name) => (
          <li
            key={name}
            className={` ${stackStyles} w-full px-1 border-2 border-solid border-dark rounded-md text-center font-medium `}
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
  stackClassName,
  live,
}: ProjectProps) => {
  return (
   
    <article className="w-full flex flex-col flex-wrap items-center justify-between rounded-3xl border border-solid border-dark bg-light text-dark shadow-2xl p-12 relative xs:p-4 ">

      <div
        className="absolute top-0 -right-3 -z-10 h-[102%] w-[102%] rounded-[2rem] bg-dark 
  md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg   "
      >
        <Image src={`${img}`} alt={title} width={400} height={400} priority className="w-50%  h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-2 ">
        <span className="text-primaryIndigo font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={live}
          target="_blank"
          className="hover:underline undeline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm ">{summary}</p>

        <TechStack stackStyles={stackClassName} stackName={stack} />

        <div className="my-2 flex items-center ">
          <Link href={github} className="w-10 md:w-6" target="_blank">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            className="ml-4 rounded-lg bg-dark text-light p-2 md:px-4 px-6 text-lg font-semibold
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
          {/* <AnimatedText
            text="The best way to predict the future is to invent it!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
          /> */}

          <div className="w-full grid grid-cols-12 gap-11 md:gap-6 ">
            <motion.div
            initial={{y:60}}
            animate={{y:0}}
            className="col-span-4 xl:col-span-6 md:col-span-12">
             
              <Project
                img={Resources[0].imgUrl}
                title="JCYTF Church"
                summary="The church website displays general information about the church and includes user authentication and authorization for the admin and officer dashboard. The website also offers CRUD functionality, which allows assigned admins to add events that will take place at the church. The primary aim of the website is to guide users about the church's information or want to be part of them."
                link="https://github.com/CodeChd/jcytf-v2"
                github="https://github.com/CodeChd"
                type="Featured Project"
                stack="NextJS Php Mysql Tailwind"
                stackClassName="text-start w-max"
                live="https://jcytfchurch.vercel.app/"
              />
            </motion.div>
            <motion.div
            initial={{y:60}}
            animate={{y:0}}
            className="col-span-4 xl:col-span-6 md:col-span-12 ">
              <Project
                img={Resources[1].imgUrl}
                title="What i Learned"
                summary=" Full Stack application that helps people store their ideas on a day-to-day basis without the risk of losing them. The app allows users to categorize their insights and displays facts about each category name. Users can vote or downvote if a fact is true or false "
                link="https://github.com/CodeChd/what-i-learn "
                github="https://github.com/CodeChd"
                type="Featured Project"
                stack="ReactJS Supabase"
                stackClassName="text-start w-max"
                live="https://whatilearned-cj.netlify.app/"
              />
            </motion.div>
            <motion.div
            initial={{y:60}}
            animate={{y:0}}
            className="col-span-4 xl:col-span-6 md:col-span-12">
              <Project
                img={Resources[2].imgUrl}
                title="Psy Games"
                summary="a discovery game app that enables users to search for popular or trending games. The app will provide a platform for users to explore and discover new games that match their interests. It will help users stay up-to-date with the latest trends in the gaming industry."
                link="https://github.com/CodeChd/dev-finder"
                type="Featured Project"
                github="https://github.com/CodeChd"
                stack="ReactJS Zustand React-Query"
                stackClassName="text-start w-max"
                live="https://dev-findr-cjfrancisco.netlify.app"
              />
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
