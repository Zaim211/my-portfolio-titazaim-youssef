import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { formations } from '../constants'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'


const ExperienceCard = ({ formation }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={formation.date}
    iconStyle={{ background: formation.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
          src={formation.icon}
          alt={formation.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
      {formation.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold"
      style={{ margin: 0 }}>{formation.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {formation.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I learn so far.
        </p>
        <h2 className={styles.sectionHeadText}>
          Formation.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {formations.map((formation, index) => (
            <ExperienceCard  key={index} formation={formation}/> 
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')