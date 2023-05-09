import { motion, useScroll } from "framer-motion"

type ListIcnsProps = {
reference: React.RefObject<HTMLElement>
}

const ListIcon = ({reference}: ListIcnsProps) => {

    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )

  return (
    <figure className="absolute left-0 stroke-dark">

    {/* custom svg */}
        <svg className="-rotate-90 md:w-[60-px] md:h-[60px] xs:w-[40-px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="75" cy="50" r="20" className="stroke-primaryIndigo stroke-1 fill-none"/>

            <motion.circle cx="75" cy="50" r="20" className="stroke-[5px] fill-light"
            style={{
                pathLength: scrollYProgress
            }}/>

            <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-primaryIndigo"/>
        </svg>
        
    </figure>
  )
}

export default ListIcon