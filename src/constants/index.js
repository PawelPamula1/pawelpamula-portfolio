import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  next,
  git,
  figma,
  trello,
  mproduction,
  amelco,
  mobx,
  webpack,
  graphql,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
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
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "MobX",
    icon: mobx,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "graphql",
    icon: graphql,
  },
  {
    name: "Webpack",
    icon: webpack,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Amelco Co Uk",
    icon: amelco,
    iconBg: "#fff",
    date: "2022 January - now",
    points: [
      "Developed and enhanced the user interface for a comprehensive betting software, enabling users to place bets on various sports in ReactJS Framework on web and React Native on apps.",
      "Collaborated closely with backend developers and project manager to gather requirements, ensuring seamless communication and alignment between frontend and server-side teams.",
      "Conducted regular code reviews, emphasizing the importance of clean code practices and paying attention to detail for optimal code quality and maintainability.",
      "Proactively identified and implemented solutions to optimize code performance.",
      "Followed Agile methodologies with two-week sprints, promoting efficient development cycles, continuous improvement, and effective collaboration within the development team.",
      "Working with international clients speaking and writing fluently in english",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "MProduction",
    icon: mproduction,
    iconBg: "#fff",
    date: "Nov 2020 - Dec 2021",
    points: [
      "Maintaining simple wordpress website for marketing agency.",
      "Developing website written in custom CMS in HTML, CSS and PHP.",
      "Improving SEO for company website.",
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
    name: "Trello Clone",
    description:
      "Trello Clone. Collaborative project management tool that uses digital boards and cards to help teams organize tasks and workflows visually.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "AppWrite",
        color: "red-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: trello,
    page_link: "https://trello-appwrite-clone-psi.vercel.app/",
    source_code_link: "https://github.com/PawelPamula1/trello-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
