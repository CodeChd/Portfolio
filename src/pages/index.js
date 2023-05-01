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
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-fulll ">
            {/* <div className="w-1/2">
              <Image src={ProfilePic} alt="CJ" className="w-full h-auto" />
            </div> */}
            <div className="w-1/2 flex mx-auto flex-col items-center justify-center">
              {/* Note : Responsive Text Technique */}

              <AnimatedText
                text="Hello, my name is Cj"
                className="!text-5xl !normal-case !text-left md:!text-4xl lg:!text-center sm:!text-2xl "
              />

              <p className="my-4 text-1xl font-[600] text">
              I'm a self-taught full-stack developer with a passion for creating engaging and useful websites. With a strong foundation in web development, I am always exploring different technologies and finding new ways to learn. and I am constantly seeking out new challenges to improve my skills

              </p>

              {/* resume & contact links */}
              <div className="flex items-center self-start lg:self-center   ">
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
                    value: 63,
                    density: {
                      enable: false,
                      value_area: 900,
                    },
                  },
                  color: {
                    value: "#000",
                  },
                  shape: {
                    type: "triangle",
                    options: {
                      sides: 1,
                    },
                  },
                  opacity: {
                    value: 0.9,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false,
                    },
                  },
                  size: {
                    value: 3,
                    random: false,
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
                      speed: 5,
                      sync: false,
                    },
                  },
                  line_linked: {
                    enable: true,
                    distance: 200,
                    color: "#0f172a",
                    opacity: 0.4,
                    width: 2,
                  },
                  move: {
                    enable: true,
                    speed: 3,
                    direction: "y",
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
                      enable: false,
                      mode: ["grab"],
                    },
                    onclick: {
                      enable: false,
                      mode: "bubble",
                    },
                    resize: false,
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1,
                      },
                    },
                    bubble: {
                      distance: 10,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3,
                    },
                    repulse: {
                      distance: 200,
                    },
                    push: {
                      particles_nb: 4,
                    },
                    remove: {
                      particles_nb: 2,
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
