import { motion } from 'framer-motion'
import { SectionWrapper } from "../hoc"
import { styles } from '../styles'
import { fadeIn, textVariant } from "../utils/motion"
import { projects } from '../constants'
import Tilt from 'react-parallax-tilt'
import { github } from '../assets'
import {browser} from '../assets'

const ProjectCard = ({ name, index, description, tags, image, source_code_link, source_code_linked }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[250px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px]">{name}</h3>
          <p className="mt-1 text-secondary text-[11px]">{description}</p>
          <div className="absolute flex inset-0 justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full
              flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>  
          </div>
        </div>

        <div className='relative flex flex-direction'>
        <div className='flex flex-wrap gap-2 mt-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>  
          ))}
          
        </div>
        <div
              onClick={() => window.open(source_code_linked, "_blank")}
              className="gray-gradient w-40 h-10 rounded-lg
              flex justify-end cursor-pointer"
            >
              <img 
                src={browser}
                alt="browser"
                className="w-14 h-14 object-contain"
              />
            </div>
            </div>
      </Tilt>
    </motion.div>  
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="flex flex-wrap mt-20 gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`} 
          {...project}
          index={index}
          />  
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")