import { motion } from "framer-motion"
import Link from "next/link"

// custom motion
const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
        <MotionLink href="/"
         className="w-16 h-16 bg-dark text-light flex items-center justify-center
         rounded-full text-2xl font-bold"
         whileHover={{
            // backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            rotate: 189,
            transition: {duration:0.7, repeat: Infinity,  repeatType: "reverse",}
         }}
         >CJ</MotionLink>
    </div>
  )
}

export default Logo