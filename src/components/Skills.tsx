import { motion } from "framer-motion";

type SkillsProp = {
  name: string
  x: number | string
  y: number | string
}

// generized component
const SkillComponent = ({name, x,y}: SkillsProp) => {
    return (
        <motion.div 
        className="
        flex items-center justify-center rounded-full 
        font-semibold bg-dark text-light py-3 px-6
        shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 
        xs:bg-transparent  xs:font-bold xs:text-dark"
        whileHover={{scale: 1.05}}
        initial={{x:0,y:0}}
        whileInView={{x,y}}
        transition={{duration: 1.5}}
        viewport={{once: true}}>
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 xs:text-5xl">Skills</h2>
      <div className="w-[90%] mx-auto  h-screen relative flex items-center justify-center rounded-full bg-circleLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightlg md:bg-circleLightmd sm:bg-circleLightsm">
        <motion.div 
        className="
        flex items-center justify-center rounded-full 
        font-semibold bg-dark text-light p-8
        shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
        whileHover={{scale: 1.05}}>
            Web 
        </motion.div>

        <SkillComponent name="CSS" x="-5vw" y="-10vw"/>
        <SkillComponent name="HTML" x="-14vw" y="4vw"/>
        <SkillComponent name="Javascript" x="16vw" y="1vw"/>
        <SkillComponent name="ReactJS" x="-23vw" y="-8vw"/>
        <SkillComponent name="NextJS" x="-28vw" y="8vw"/>
        <SkillComponent name="Firebase" x="15vw" y="14vw"/>
        <SkillComponent name="Supabase" x="23vw" y="19vw"/>
        <SkillComponent name="MongoDB" x="-9vw" y="12vw"/>
        <SkillComponent name="Strapi" x="1vw" y="-21vw"/>
        <SkillComponent name="Github" x="0vw" y="21vw"/>
        <SkillComponent name="Tailwind CSS" x="15vw" y="-14vw"/>
        <SkillComponent name="Bootstrap" x="25vw" y="-4vw"/>
        <SkillComponent name="Flutter" x="-34vw" y="-1vw"/>
        <SkillComponent name="SASS" x="-17vw" y="-17vw"/>
        <SkillComponent name="REST API" x="30vw" y="6vw"/>
        <SkillComponent name="NodeJS" x="-20vw" y="19vw"/>
        <SkillComponent name="Photoshop" x="30vw" y="-10vw"/>
      </div>
    </>
  );
};

export default Skills;
