import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icon";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Jcytf from "../../public/images/JCYTF-PROJECT.png";
import Wht from "../../public/images/WHAT I LEARNED - PROJECT.png";
import DevFindr from "../../public/images/DEVFINDR - PROJECT.png";
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
                img={Jcytf}
                title="Community church website"
                summary="The church website displays general information about the church and includes user authentication and authorization for the admin dashboard. The website also offers CRUD functionality, which allows assigned admins to add events that will take place at the church. The primary aim of the website is to guide users about the church's information or want to be part of them."
                link="/"
                github="https://github.com/CodeChd"
                type="Featured Project"
                stack="NextJS Strapi Framer-motion"
                stackClasName="text-start w-max"
              />
            </motion.div>
            <motion.div
            initial={{y:60}}
            animate={{y:0}}
            className="col-span-4 xl:col-span-6 md:col-span-12 ">
              <Project
                img={Wht}
                title="What i Learned"
                summary=" This application helps people store their ideas on a day-to-day basis without the risk of losing them. The app allows users to categorize their insights and displays facts about each category name. Users can vote or downvote if a fact is true or false "
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
                img={DevFindr}
                title="Dev Finder"
                summary="Dev Finder is an app that enables users to discover and display information about other GitHub users, presented through engaging visuals."
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
