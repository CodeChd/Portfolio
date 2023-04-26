import Layout from "@/components/Layout";
import Head from "next/head";
// import Image from "next/image";
// import ProfilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
// import HireMe from "@/components/HireMe";


export default function Home() {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="Portfolio" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen ">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-fulll ">
            {/* <div className="w-1/2">
              <Image src={ProfilePic} alt="CJ" className="w-full h-auto" />
            </div> */}
            <div className="w-full flex mx-auto flex-col items-center justify-center">
              {/* Note : Responsive Text Technique */}
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design. "
                className="!text-6xl text-left"
              />

              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>

              {/* resume & contact links */}
              <div className="flex items-center self-start ">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center p-2.5 px-6 bg-dark text-light
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
              border border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />

                </Link>
                <Link href="mailto:abcd@gmail.com" target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark underline ">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          
        </Layout>
      </main>
    </>
  );
}
