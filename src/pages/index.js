import Layout from "@/components/Layout";
import Head from "next/head";
// import Image from "next/image";
// import ProfilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Transition from "@/components/Transition";


export default function Home() {
  const router = useRouter();
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
      </Head>
      <Transition/>
      <main className="flex items-center text-dark w-full min-h-screen -z-1">
        <Layout className="mt-[12rem]">
            <AnimatedText
              text="CJ Francisco"
              className="!w-[80%] overflow-hidden mx-auto !text-9xl absolute right-0 top-[36%] !normal-case !text-right xxl:!text-8xl xl:!text-7xl xl:top-[40%] lg:!text-right lg:!w-full lg:!text-6xl lg:top-[40%] md:!text-5xl md:top-[43%] sm:!text-center sm:top-[38%]  sm:!text-4xl xs:top-[53%] "
            />
            <AnimatedText
              text="Full Stack Developer"
              className="!w-full !text-9xl max-w-full absolute left-0 top-[50%] !normal-case !text-left  xxl:!text-8xl xl:!text-7xl lg:!text-left lg:!w-full lg:!text-6xl md:!text-5xl sm:!text-center sm:!text-4xl sm:top-[43%] xs:top-[58%]"
            />
          <div className="flex items-center justify-between w-fulll ">
            {/* <div className="w-1/2">
              <Image src={ProfilePic} alt="CJ" className="w-full h-auto" />
            </div> */}
            <div className="w-1/2 flex mx-auto flex-col items-center justify-center">
              {/* Note : Responsive Text Technique */}


              <p className="my-4 text-[16.55px] font-[600] xs:hidden">
              I&apos;m a self-taught full-stack developer with a passion for creating engaging and useful websites. With a strong foundation in web development, I am always exploring different technologies and finding new ways to learn. and I am constantly seeking out new challenges to improve my skills

              </p>

              {/* resume & contact links */}
              <div className="flex items-center self-start lg:self-center xs:mt-4">
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
                <Link
                  href="mailto:abcd@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <div className=" absolute -z-1">
          {router.asPath === "/" ? (
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                fullScreen: {
                  enable: true,
                  zIndex: 1,
                },
                particles: {
                  number: {
                    value: 75,
                    density: {
                      enable: false,
                      value_area: 900,
                    },
                  },
                  color: {
                    value: "#000",
                  },
                  shape: {
                    type: "circle",
                    options: {
                      sides: 3,
                    },
                  },
                  opacity: {
                    value: 0.6,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false,
                    },
                  },
                  size: {
                    value: 5,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 40,
                      size_min: 0.1,
                      sync: false,
                    },
                  },
                  rotate: {
                    value: 0,
                    random: true,
                    direction: "anti-clockwise",
                    animation: {
                      enable: true,
                      speed: 3,
                      sync: false,
                    },
                  },
                  line_linked: {
                    enable: false,
                    distance: 110,
                    color: "#0f172a",
                    opacity: 0.4,
                    width: 2,
                  },
                  move: {
                    enable: true,
                    speed: 1.3,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200,
                    },
                  },
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: ["repulse"],
                    },
                    onclick: {
                      enable: false,
                      mode: "bubble",
                    },
                    resize: true,
                  },
                  modes: {
                    grab: {
                      distance: 800,
                      line_linked: {
                        opacity: 1,
                      },
                    },
                    bubble: {
                      distance: 20,
                      size: 45,
                      duration: 2,
                      opacity: 8,
                      speed: 3,
                    },
                    repulse: {
                      distance: 90,
                    },
                    push: {
                      particles_nb: 0,
                    },
                    remove: {
                      particles_nb: 0,
                    },
                  },
                },
                retina_detect: true,
              }}
            />
          ) : null}
        </div>
      </main>
    </>
  );
}
