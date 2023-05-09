import Layout from "../components/Layout";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "../components/Icon";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Transition from "../components/Transition";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  //change state based on screen size
  const [particlesMedia, setParticlesMedia] = useState(false);
  let particleSize;

  if (particlesMedia) {
    particleSize = 27;
  } else if (!particlesMedia) {
    particleSize = 75;
  }

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setParticlesMedia(true);
    } else {
      setParticlesMedia(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(`(max-width:767px)`);
      media.addEventListener("resize", updateTarget);

      if (media.matches) {
        setParticlesMedia(true);
      }

      return () => media.removeEventListener("resize", updateTarget);
    }
  }, [updateTarget]);

  return (
    <>
      <Head>
        <title>CJ&apos;s | Portfolio </title>
        <meta name="description" content="Home Page" />
      </Head>
      <Transition />
      <main className="flex items-center text-dark w-full min-h-screen -z-1">
        <Layout className="mt-[12rem]">
          <AnimatedText
            text="CJ Francisco"
            className="!w-[80%] overflow-hidden mx-auto !text-9xl absolute right-0 top-[36%] !normal-case !text-right xxl:!text-8xl xl:!text-7xl xl:top-[40%] lg:!text-right lg:!w-full lg:!text-6xl lg:top-[40%] md:!text-5xl md:top-[40%] sm:!text-center sm:top-[50%] "
          />
          <AnimatedText
            text="Full Stack Developer"
            className="!w-full !text-9xl max-w-full absolute left-0 top-[50%] !normal-case !text-left  xxl:!text-8xl xl:!text-7xl lg:!text-left lg:!w-full lg:!text-6xl md:top-[48%] md:!text-5xl sm:!text-center sm:top-[59%]"
          />
          <div className="flex items-center justify-between w-fulll ">
            <div className="w-1/2 flex mx-auto flex-col items-center justify-center">
              {/* Note : Responsive Text Technique */}

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                className="my-4 text-[16.55px] font-[600] sm:hidden"
              >
                CJ is a self-taught full-stack developer with a passion for
                creating engaging and useful websites. With a strong foundation
                in web development, always exploring different technologies and
                finding new ways to learn. and constantly seeking out new
                challenges to improve his skills
              </motion.p>

              {/* resume & contact links */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                className="flex items-center self-center sm:mt-[3rem] "
              >
                <Link
                  href="/CARL JANDEL FRANCISCO - CV.pdf"
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
                  href="mailto:drowzyking1126@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline "
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </div>
        </Layout>

        <div className=" absolute">
          {router.asPath === "/" ? (
            <Particles
              className=""
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
                    value: particleSize,
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
