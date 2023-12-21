import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    socialapp,
    tesla,
    appgym,
    carrent,
    jobit,
    freecodecamp,
    appmeals,
    appmusic
  } from "../assets";
  
export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Formation",
    },
    {
      id: "contact",
      title: "Contact",
    },
];
  
const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
];
  
const formations = [
    {
      title: "Front end Developer",
      company_name: "FreecodeCamp",
      icon: freecodecamp,
      iconBg: "#383E56",
      date: "March 2022 - Aout 2022",
      points: [
        "As a Front End Developer, I mastered essential technologies including CSS, HTML, JavaScript, and ReactJS:",
        "I learned to design visually appealing and responsive websites", 
        "enhance user experience through interactive elements, and build dynamic web applications",
        "By the end of the course, I acquired the skills to craft elegant interfaces, optimize user journeys, and prepare for diverse roles in web development", 
        "ranging from UI/UX design to frontend engineering."
      ],
    },
    {
      title: "Software engineering (Full stack)",
      company_name: "Alx Software engineering",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Feb 2024",
      points: [
        "Backend Proficiency: Explore server-side technologies and databases. Acquire skills in backend frameworks such as Node.js, Django, or Express.js. Dive into database management systems like MongoDB or SQL to store and retrieve data efficiently.",
        "Full Stack Synergy: Integrate frontend and backend technologies seamlessly. Understand the architecture of full stack applications, ensuring smooth communication between client and server, and creating dynamic, data-driven websites and web applications.",
        "Version Control & Collaboration: Master tools like Git and GitHub for version control and collaborative coding. Learn the best practices of team development, enabling you to work effectively in a collaborative software development environment."
      ],
    },
    
  ];
  
const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];
  
const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Zaim211/cars_showcase",
      source_code_linked: "https://cars-showcase-mu-beige.vercel.app/",

    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location, saving you time and effort in your job search.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Expo Go",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Zaim211/project_react_native_jobs",
      source_code_linked: "https://scann-application.vercel.app/",
    },
    {
      name: "Meal App",
      description:
        " React.js-powered web application designed to ignite culinary passion. Users can explore diverse meals, uncover detailed recipes, and learn the art of cooking from reliable sources. Experience the joy of discovering new cuisines, exploring their recipes.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "axios",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: appmeals,
      source_code_link: "https://github.com/Zaim211/Meals-App",
      source_code_linked: "https://meals-app-wine-seven.vercel.app/",
    },
    {
      name: "Gym App",
      description:
        "Modern React 18 Fitness Exercises App With APIs. Introducing my state-of-the-art Fitness Exercises App built on Modern React 18! Elevate your workout routine with cutting-edge features and a seamless user experience. Craft personalized exercise plans, explore a vast library of fitness routines",
      tags: [
        {
          name: "Vuejs",
          color: "blue-text-gradient",
        },
        {
          name: "APIs",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: appgym,
      source_code_link: "https://github.com/Zaim211/gym_exercises",
      source_code_linked: "https://app-gym-titay.netlify.app/",
    },
    {
      name: "Social Media App",
      description:
        "Experience the next level of social connectivity with my Full Stack Social Media App. Built using cutting-edge technologies including React JS for dynamic user interfaces, Appwrite for backend simplicity, and Tailwind CSS for sleek design, our app delivers a seamless and responsive social experience.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "axios",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: socialapp,
      source_code_link: "https://github.com/Zaim211/Titay-App-social-media",
      source_code_linked: "https://titay-app-social-media.vercel.app/",
    },
    {
      name: "Music App",
      description:
        "Music-App it's application, inspired by  YouTube and created with React JS. This platform offers users the freedom to explore and engage with a diverse range of content seamlessly. A project developed with a passion for user-centric design and free accessibility, it stands as a testament to my skills in creating engaging and dynamic web applications.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Axios",
          color: "green-text-gradient",
        },
        {
          name: "Rapid API",
          color: "pink-text-gradient",
        },
      ],
      image: appmusic,
      source_code_link: "https://github.com/Zaim211/Music-App",
      source_code_linked: "https://6560d9936234c40579e42467--spiffy-mousse-c59935.netlify.app/",
    },
];
  
  export { services, technologies, formations, testimonials, projects };