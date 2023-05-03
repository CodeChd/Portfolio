import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/dp-me.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Transition from "@/components/Transition";
import AboutMe from "@/components/AboutMe";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About me" />
      </Head>
      <Transition />
      <main className="flex w-full flex-col items-center justify-center min-h-screen">
        <Layout className="pt-16">
          <div className="flex flex-col">
            <h2 className="self-center font-medium text-2xl">What&apos;s up</h2>
            <AnimatedText
              text="Get to know about me"
              className="!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl !normal-case"
            />
          </div>
          <div className="flex justify-center items-center mt-5">
            <div
              className=" relative w-max h-max rounded-2xl border-2 border-solid
            border-dark bg-light p-8 xl:col-span-2 lg:order-1  md:col-span-4  "
            >
              <div className="absolute top-0 -right-3 -z-10 h-[102%] w-[102%] rounded-[2rem] bg-dark" />

              <Image
                src={profilePic}
                alt="Carl Jandel Francisco"
                className="w-[30rem] h-[37rem] rounded-2xl lg:w-[28rem] lg:h-[31rem] sm:w-[22rem] sm:h-[28rem] xs:w-[13rem] xs:h-[18rem] "
                priority
                sizes="(max-width: 768px) 70vw,
                  (max-width: 1200px) 30vw, 50vw"
              />
            
            </div>
          </div>

          <AboutMe />
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;
