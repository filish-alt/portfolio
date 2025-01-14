import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {services} from '../constants'
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from '../hoc'

const ServiceCard =({index, title, icon}) =>{
  return(
    <Tilt classNmae="xs:w-[250px] w-full">{title}
       <motion.div variants={fadeIn("right","spring", 0.5 * index, 0.75)}
       className='w-full grey-gradient p-[1px] rounded-[20px] shadow-card'
       >
        <div options={{
          max: 45,
          scale:1,
          speed:450
        }}
         className="bg-tertiary rounded-[20px]
         py-5 px-12 min-h-[280px] flex justify-evenly items-center flex=col"
        >
          <img src={icon} alt={title}
           className="w-16 h016 objecct-contain"/>
          <h3 classNmae="text-white text-[20px] font-bold text-center">{title}</h3>


        </div>

       </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
         <p className={styles.sectionSubText}>Introduction</p>
         <h2 className={styles.sectionHeadText}> Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className='mt=4 text-secondary text=[17px]
    max=w=3xl leading-[]30px'>
    I am a versatile developer with a robust skill set spanning both web and mobile development. My expertise includes:
    <br />
    &nbsp;&nbsp;&nbsp;
       Backend: Proficient in .NET and Golang, Java Spring boot frame work building scalable and secure server-side applications.
       <br />
       &nbsp;&nbsp;&nbsp;
       Frontend: Skilled in Angular and React, crafting responsive and dynamic user interfaces.
       <br />
       &nbsp;&nbsp;&nbsp;
       Web Development: Experienced with PHP, delivering robust and efficient web solutions.
    </motion.p>
    &nbsp;&nbsp;&nbsp;
    <div className='mt=30 flex flex-wrap gap-10 ml=30'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index=
        {index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")