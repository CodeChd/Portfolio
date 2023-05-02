import { useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ListIcon from "./ListIcon";


// generized component
const Details = ({ postion, company, companyLink, time, address, work }) => {
    const ref = useRef(null)

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 mx-auto w-[60%] flex flex-col items-start justify-between md:w-[80%] ">
      
      <ListIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration: 0.8, type:"spring"}}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {postion}&nbsp;
          <a href={companyLink} target="_blank" className="text-primaryBlue">
            @{company}
          </a>
        </h3>
        <span className="capitalize  font-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium  w-full md:text-sm ">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

    // animate scroll
    const ulChildren = useRef(null)
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    useEffect(() => {
         ulChildren.current.children.length;
      }, []);
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>


      <div ref={ref} className="w-[60%] mx-auto relative md:w-full">

      {/* <motion.div

    //enable this after more data is put into experience   style={{}}

    // className="absolute top-[2px] left-9 w-[4px] h-full bg-dark origin-top"/> */}

      
        <ul ref={ulChildren} className="w-full flex flex-col items-start justify-between ml-[25px] ">
          <Details
            postion="Full Stack Developer"
            company="DEVKINETICS"
            companyLink="https://www.devkinetics.com/"
            time="October 2022 - Present"
            address="Quezon City, Philippines"
            work="tba"
          />
      
        </ul>
      </div>
    </div>
  );
};

export default Experience;
