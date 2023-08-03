import Layout from "../components/Layout";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Transition from "../components/Transition";
import { motion } from "framer-motion";
import { Resources } from "../data/data";
import Image from "next/image";
import { LinkArrow } from "../components/Icon";

export default function Home() {
  const router = useRouter();
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  //change state based on screen size
  const [particlesMedia, setParticlesMedia] = useState<Boolean>(false);
  let particleSizess;

  if (particlesMedia) {
    particleSizess = 20;
  } else if (!particlesMedia) {
    particleSizess = 75;
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
        <title>CJ Francisco</title>
        <meta name="description" content="Home Page" />
      </Head>
      <Transition />
      <main className="flex items-center text-dark w-full min-h-screen -z-1">
        <Layout className="">
          <main className="grid grid-cols-5 xxl:grid-cols-4 xlx:grid-cols-1 md:text-center gap-14  relative">
            <div className="flex self-center flex-col col-span-3 xxl:col-span-2 gap-4  xlx:order-2">
              <h1 className="text-4xl md:text-3xl  font-le font-semibold text-gray-600">
                👋 Hi my name is CJ
              </h1>
              <p className="text-xl text-violet-950  md:text-lg tracking-wide">
                CJ is a self-taught full-stack developer with a passion for
                creating engaging and useful websites. With a strong foundation
                in web development, always exploring different technologies and
                finding new ways to learn. and constantly seeking out new
                challenges to improve his skills
              </p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                className="flex items-center  md:justify-center md:mb-14"
              >
                <Link
                  href="/Carl Francisco.pdf"
                  target="_blank"
                  className="flex items-center p-2.5 px-6 bg-dark text-light
  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
  border border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume
                  <LinkArrow className="w-6 ml-1 sm:w-6 sm: h-6" />
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


            <div className="w-[40rem] lg:w-full col-span-2 xlx:order-1 xlx:ml-[20%] lg:ml-0">
              <Image
                src={Resources[3].imgUrl}
                width={400}
                height={400}
                alt="Programming"
                className="w-full h-full "
              />
            </div>
          </main>
        </Layout>

        <div className=" absolute">
          {router.asPath === "/" ? (
            <Particles
              className=""
              id="tsparticles"
              init={particlesInit}
              options={{
                fullScreen: {
                  enable: true,
                  zIndex: 1,
                },
                particles: {
                  number: {
                    value: particleSizess,
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
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false,
                    },
                  },
                  size: {
                    value: 2,
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
                    direction: "clockwise",
                    animation: {
                      enable: false,
                      speed: 5,
                      sync: false,
                    },
                  },
                  line_linked: {
                    enable: false,
                    distance: 150,
                    color: "#0f172a",
                    opacity: 0,
                    width: 0,
                  },
                  move: {
                    enable: true,
                    speed: 30,
                    direction: "bottom",
                    random: false,
                    straight: true,
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
                      mode: "repulse",
                    },
                    onclick: {
                      enable: false,
                      mode: "bubble",
                    },
                    resize: true,
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1,
                      },
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 9,
                      speed: 3,
                    },
                    repulse: {
                      distance: 90,
                    },
                    push: {
                      particles_nb: 1,
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

//
