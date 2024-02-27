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
  jobsearchapp,
  snapgramlogin,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "skills",
  },
  {
    id: "projects",
    title: "projects",
  },
  {
    id: "contact",
    title: "contact",
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
    title: "UX/UI designer",
    icon: backend,
  },
  {
    title: "Software Engineer",
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
];

const experiences = [
  {
    title: "BootCamp trainer 8 month",
    company_name: "Evangadi INC",
    iconBg: "#E6DEDD",
    icon: "https://www.evangadi.com/themes/humans/assets/images/favicon.png",

    date: "January 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "implemented server-side functionality using Node.js and Express.js, creating robust and efficient web services",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "projects: ",

      "Developed a full-stack e-commerce website inspired by Amazon using React, Node.js, and Express.js. Implemented featuressuch as user authentication, product catalog, shopping cart functionality,and secure payment integration.",

      "Created a responsive clone of the Apple website using HTML5, CSS3, and JavaScript. Implemented a sleek and modern design with interactive elements and optimized user experience.",
      "Developed a replica of the Netflix streaming platform using React, Firebase, and CSS. Implemented features such as user authentication, movie/TV show browsing, and movie trailer playback functiona",
    ],
  },
  {
    title: "React Native Developer",

    iconBg: "#E6DEDD",
    date: "jun 2023 - september 2023   ",
    points: [
      "Worked collaboratively in a team to develop a React Native mobile application for a client in the automotive industry.",
      "Designed and implemented user interface elements, ensuring an intuitive and engaging user experience.",
      "Integrated the Front-End application with the backend using GraphQL, enabling efficient data exchange and enhancing app functionality.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Job Search App",
    description:
      "A mobile application designed to assist users in discovering and exploring job opportunities. It offers a comprehensive platform with a curated list of popular jobs and options to search for nearby employment. Users can seamlessly access job details and be redirected to the respective job websites for additional information and applications.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPi",
        color: "green-text-gradient",
      },
    ],
    image: jobsearchapp,
    source_code_link: "https://github.com/RedietNegash/Job_Search_App",
  },
  {
    name: "snapgram",
    description:
      "A social media application which contains a stunning authentication system, a home page for exploring posts shared by others with top creators featured on the right the ablity to like and save posts accessible through a separate dedicated page.",
    tags: [
      {
        name: "react context-api",
        color: "blue-text-gradient",
      },
      {
        name: "React Query",
        color: "green-text-gradient",
      },

      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: snapgramlogin,
    source_code_link: "https://github.com/RedietNegash/snapgram",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, /*testimonials,*/ projects };
