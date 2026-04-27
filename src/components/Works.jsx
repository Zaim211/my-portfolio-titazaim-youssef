// import { motion } from 'framer-motion'
// import { SectionWrapper } from "../hoc"
// import { styles } from '../styles'
// import { fadeIn, textVariant } from "../utils/motion"
// import { projects } from '../constants'
// import Tilt from 'react-parallax-tilt'
// import { github } from '../assets'
// import {browser} from '../assets'

// const ProjectCard = ({ name, index, description, tags, image, source_code_link, source_code_linked }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450
//         }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
//       >
//         <div className="relative w-full h-[250px]">
//           <img 
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover rounded-2xl"
//           />
//         </div>

//         <div className="mt-5">
//           <h3 className="text-white font-bold text-[22px]">{name}</h3>
//           <p className="mt-1 text-secondary text-[11px]">{description}</p>
//           <div className="absolute flex inset-0 justify-end m-3 card-img_hover">
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full
//               flex justify-center items-center cursor-pointer"
//             >
//               <img 
//                 src={github}
//                 alt="github"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>  
//           </div>
//         </div>

//         <div className='relative flex flex-direction'>
//         <div className='flex flex-wrap gap-2 mt-2'>
//           {tags.map((tag) => (
//             <p key={tag.name} className={`text-[14px] ${tag.color}`}>
//               #{tag.name}
//             </p>  
//           ))}
          
//         </div>
//         <div
//               onClick={() => window.open(source_code_linked, "_blank")}
//               className="gray-gradient w-40 h-10 rounded-lg
//               flex justify-end cursor-pointer"
//             >
//               <img 
//                 src={browser}
//                 alt="browser"
//                 className="w-14 h-14 object-contain"
//               />
//             </div>
//             </div>
//       </Tilt>
//     </motion.div>  
//   )
// }

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>
//           My work
//         </p>
//         <h2 className={styles.sectionHeadText}>
//           Projects.
//         </h2>
//       </motion.div>

//       <div className='w-full flex'>
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-3 text-secondary text-[17px] max-3xl leading-[30px]'
//         >
//           Following projects showcases my skills and experience through
//           real-world examples of my work. Each project is briefly described with
//           links to code repositories and live demos in it. It reflects my
//           ability to solve complex problems, work with different technologies,
//           and manage projects effectively.
//         </motion.p>
//       </div>

//       <div className="flex flex-wrap mt-20 gap-7">
//         {projects.map((project, index) => (
//           <ProjectCard 
//           key={`project-${index}`} 
//           {...project}
//           index={index}
//           />  
//         ))}
//       </div>
//     </>
//   )
// }

// export default SectionWrapper(Works, "")
import { motion } from 'framer-motion'
import { SectionWrapper } from "../hoc"
import { styles } from '../styles'
import { fadeIn, textVariant } from "../utils/motion"
import { projects } from '../constants'
import Tilt from 'react-parallax-tilt'
import { github, browser } from '../assets'

// ─── Animations ───────────────────────────────────────────────────────────────
const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

// ─── Star Rating ──────────────────────────────────────────────────────────────
const Stars = ({ rating }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-[13px] h-[13px] ${i < rating ? 'text-yellow-400' : 'text-white/20'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
    {rating && <span className="text-yellow-400 text-[12px] ml-1 font-medium">{rating}.0</span>}
  </div>
)

// ─── Upwork Card ──────────────────────────────────────────────────────────────
const UpworkCard = ({ title, period, tech, rating, review, price, tasks }) => (
  <motion.div
    variants={cardVariant}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className="bg-tertiary border border-white/[.06] rounded-2xl p-6 flex flex-col gap-4 sm:w-[360px] w-full"
    style={{ boxShadow: '0 2px 24px rgba(0,0,0,.18)' }}
  >
    <div className="flex justify-between items-start gap-3">
      <h3 className="text-white font-bold text-[16px] leading-snug">{title}</h3>
      {/* <span
        className="text-[11px] font-semibold px-3 py-1 rounded-full shrink-0"
        style={{ background: 'rgba(20,168,0,.15)', color: '#4ade80' }}
      >
        {price}
      </span> */}
    </div>

    <div>
      <p className="text-secondary text-[12px]">{period}</p>
      {tech && <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,.35)' }}>{tech}</p>}
    </div>

    {rating ? <Stars rating={rating} /> : (
      <p className="text-secondary text-[12px] italic">No feedback given</p>
    )}

    {review && (
      <p
        className="text-secondary text-[13px] italic leading-relaxed pl-3"
        style={{ borderLeft: '2px solid #4ade80' }}
      >
        "{review}"
      </p>
    )}

    <ul className="flex flex-col gap-2">
      {tasks.map((task, i) => (
        <li key={i} className="flex items-start gap-2 text-secondary text-[12.5px] leading-snug">
          <span className="mt-[5px] w-[5px] h-[5px] rounded-full shrink-0" style={{ background: '#4ade80' }} />
          {task}
        </li>
      ))}
    </ul>

    {/* <div
      className="mt-auto pt-3 flex items-center gap-2"
      style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}
    >
      <svg className="w-[14px] h-[14px]" fill="#4ade80" viewBox="0 0 24 24">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
      <span className="text-secondary text-[11px]">Upwork · Fixed Price</span>
    </div> */}
  </motion.div>
)

// ─── Upwork data ──────────────────────────────────────────────────────────────
const upworkProjects = [
  {
    title: 'Stock Ticker Screen',
    period: 'Jul 25, 2025 – Aug 8, 2025',
    tech: 'Node.js / Next.js',
    rating: 5,
    review: 'I loved working with Mo on this project',
    // price: 'Fixed price',
    tasks: [
      'Built real-time stock ticker display with live market data feed',
      'Implemented server-side rendering with Next.js for performance',
      'Designed a responsive, polished UI with smooth live updates',
    ],
  },
  {
    title: 'Customizing Mermaid.js Open Source',
    period: 'Aug 19, 2025 – Dec 25, 2025',
    tech: 'JavaScript / Open Source',
    rating: null,
    review: null,
    // price: '$195 Fixed',
    tasks: [
      'Forked and extended Mermaid.js with custom diagram types and theming',
      'Added new rendering features and documented changes for the client',
      "Delivered production-ready build integrated into the client's platform",
    ],
  },
]

// ─── Freelance tasks ──────────────────────────────────────────────────────────
const freelanceTasks = [
  'Built cross-platform mobile app (React Native / Expo) with gamification, push notifications & daily check-ins',
  'Delivered MERN eCommerce platform with Stripe payments, ShadCN UI & order tracking',
  'Designed custom CRM with role-based access, real-time notifications & analytics dashboard',
  'Developed AI automation agent — chatbot + outbound call workflows integrated into CRM',
  'Created QR code app for portfolio sharing: React Native + Node.js backend',
  'Integrated third-party APIs, Firebase, Stripe, webhooks & CI/CD pipelines across projects',
]

// ─── Project Card (personal) ──────────────────────────────────────────────────
const ProjectCard = ({ name, index, description, tags, image, source_code_link, source_code_linked }) => (
  <motion.div variants={cardVariant}>
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary border border-white/[.06] p-5 rounded-2xl sm:w-[360px] w-full"
      style={{ boxShadow: '0 2px 24px rgba(0,0,0,.18)' }}
    >
      <div className="relative w-full h-[230px]">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-xl" />
        <div className="absolute inset-0 flex justify-end items-start p-3">
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer
                       opacity-80 hover:opacity-100 transition-opacity"
          >
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-white font-bold text-[19px] leading-snug">{name}</h3>
        <p className="mt-2 text-secondary text-[13px] leading-relaxed">{description}</p>
      </div>

      <div className="flex items-end justify-between mt-4 gap-2">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag.name} className={`text-[12px] font-medium ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
        {source_code_linked && (
          <div
            onClick={() => window.open(source_code_linked, '_blank')}
            className="gray-gradient px-3 h-9 rounded-lg flex items-center gap-1.5 cursor-pointer shrink-0
                       opacity-75 hover:opacity-100 transition-opacity"
          >
            <img src={browser} alt="live demo" className="w-5 h-5 object-contain" />
          </div>
        )}
      </div>
    </Tilt>
  </motion.div>
)

// ─── Works Section ────────────────────────────────────────────────────────────
const Works = () => {
  return (
    <>
      {/* Heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      {/* Intro */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my
          work. Each project is briefly described with links to code repositories and live demos in
          it. It reflects my ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* ── Freelance Client Projects note ───────────────────────────────────── */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-12 rounded-2xl p-6 max-w-6xl"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Header row */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
            style={{ background: 'rgba(20,168,0,.15)' }}
          >
            <svg className="w-4 h-4" fill="#4ade80" viewBox="0 0 24 24">
              <path d="M12 1C8.676 1 6 3.676 6 7v1H4a1 1 0 00-1 1v13a1 1 0 001 1h16a1 1 0 001-1V9a1 1 0 00-1-1h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v1H8V7c0-2.276 1.724-4 4-4zm0 10a2 2 0 110 4 2 2 0 010-4z" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-bold text-[16px]">Freelance Client Projects</h4>
            <p className="text-secondary text-[12px]">Private repos · Oct 2024 – Present</p>
          </div>
        </div>

        <p className="text-secondary text-[14px] leading-[24px] mb-5">
          Source code is under NDA. Below are the key deliverables carried out across five client
          engagements — ranging from mobile apps to AI-powered CRM tools.
        </p>

        <ul className="flex flex-col gap-[10px]">
          {freelanceTasks.map((task, i) => (
            <li key={i} className="flex items-start gap-2.5 text-secondary text-[13px] leading-snug">
              <span
                className="mt-[5px] w-[6px] h-[6px] rounded-full shrink-0"
                style={{ background: '#4ade80' }}
              />
              {task}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* ── Upwork Contracts ─────────────────────────────────────────────────── */}
      <motion.div variants={textVariant()} className="mt-20">
        <p className={styles.sectionSubText}>Upwork</p>
        <h3 className="text-white font-bold text-[26px]">Client Contracts.</h3>
      </motion.div>

      <motion.div
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap mt-8 gap-7"
      >
        {upworkProjects.map((project, index) => (
          <UpworkCard key={`upwork-${index}`} {...project} />
        ))}
      </motion.div>

      {/* ── Personal Projects ─────────────────────────────────────────────────── */}
      <motion.div variants={textVariant()} className="mt-20">
        <p className={styles.sectionSubText}>Where it all started</p>
        <h3 className="text-white font-bold text-[26px]">Personal Projects.</h3>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[15px] max-w-3xl leading-[28px]"
        >
          These are the projects I built for myself before taking on client work — each one was a
          deliberate step to sharpen a new skill, explore a technology, or solve a problem I cared
          about.
        </motion.p>
      </motion.div>

      <motion.div
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap mt-10 gap-7"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, "")