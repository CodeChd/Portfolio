import { useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ListIcon from "./ListIcon";


// generized component

type DetailsProp = {
  postion: string
  company: string
  companyLink: string
  time: number | string
  address: string
}



const Details = ({ postion, company, companyLink, time, address }: DetailsProp) => {
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
        <div className="font-medium  w-full md:text-sm ">
          <ul className="flex flex-col gap-3 my-4 list-disc">
            <li>Familiarity with AWS Amplify</li>
            <li>Implemented pagination and filtering for 5000+ users</li>
            <li>Managed user authentication and authorization roles using AWS Cognito</li>
            <li>Handled user data and uploads to AWS DynamoDB</li>
            <li>Configured S3 SDK and policies to enable upload of user personal information to AWS S3</li>
            <li>Organized Routing to other web pages</li>
            <li>Handled Third party api&apos;s integrated into our project</li>
            <li>Emphasized the importance of Optimization</li>
            <li>Emphasized the importance of keeping documentation up to date</li>
          </ul>
        </div>
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
            time="October 2022"
            address="Quezon City, Philippines"
        
          />
      
        </ul>
      </div>
    </div>
  );
};

export default Experience;
