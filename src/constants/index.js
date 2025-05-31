import {
  talkstraimage,
  shoppingcartimage,
  iiitnlogo,
  aspcslogo,
  kvlogo,
  blitzboardimage,
  learnsyncimage,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About Me" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "achievements", title: "Achievements" },
  { id: "education", title: "Education" },
];

export const resumeLink =
  "https://drive.google.com/file/d/1Q2o327JGZ_y9Zi14klp1fwJT6WRSVPRm/view?usp=drive_link";

const services = [
  { title: "Full-Stack Developer" },
  { title: "Web Developer" },
  { title: "Problem Solver" },
];

const education = [
  {
    title: "B.Tech in Computer Science and Engineering",
    company_name: "Indian Institute of Information Technology, Nagpur",
    icon: iiitnlogo,
    iconBg: "#fff",
    date: "2022 - 2026",
    points: [
      "CGPA - 8.98",
      "Specializing in Software Development and Web Technologies.",
      "Active participant in coding competitions.",
    ],
  },
  {
    title: "AISSCE (Class XII)",
    company_name: "Acharya Shri Sudarshan Patna Central School",
    icon: aspcslogo,
    iconBg: "#fff",
    date: "2020 - 2021",
    points: [
      "Aggregate: 97.33%",
      "Excelled in academics with strong problem-solving skills.",
    ],
  },
  {
    title: "AISSE (Class X)",
    company_name: "Kendriya Vidyalaya, Air Force Station, Bihta",
    icon: kvlogo,
    iconBg: "#fff",
    date: "2018 - 2019",
    points: [
      "Aggregate: 96.4%",
      "Achieved academic excellence and leadership skills.",
    ],
  },
];

const technologies = [
  { name: "C++" },
  { name: "Python" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React.js" },
  { name: "Node.js" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "Git" },
  { name: "Tailwind CSS" },
  { name: "Docker" },
];

const projects = [
  {
    name: "LearnSync 📚",
    description:
      "A modern skill-tracking platform with real-time progress monitoring and interactive dashboards. Features include dark mode, markdown-enabled notes, and secure Firebase authentication with real-time data sync and animated skill progress visualizations.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image: learnsyncimage,
    source_code_link: "https://github.com/phoenixvasu/learnsync",
    live_project_link: "https://learnsync-eta.vercel.app/",
  },
  {
    name: "BlitzBoard 📝",
    description:
      "A modern, real-time collaborative text editor built with React, Go, WebSocket, and Supabase. Features include real-time cursor tracking, presence indicators, and automatic saving for seamless collaboration.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Go", color: "green-text-gradient" },
      { name: "WebSocket", color: "pink-text-gradient" },
      { name: "Supabase", color: "purple-text-gradient" },
    ],
    image: blitzboardimage,
    source_code_link: "https://github.com/phoenixvasu/BlitzBoard",
  },
  {
    name: "Talkstra 💬",
    description:
      "Real-time chat application with group chat, authentication, and message history. Built using React, Node.js, and Socket.io for seamless communication.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Socket.io", color: "pink-text-gradient" },
    ],
    image: talkstraimage,
    source_code_link: "https://github.com/phoenixvasu/Talkstra-chat-app",
    live_project_link: "https://talkstra-chat-app.onrender.com/",
  },
  {
    name: "Shopping Cart 🛒",
    description:
      "E-commerce platform for buying and selling products. Features include product management, cart management, and checkout functionality.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Context API", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: shoppingcartimage,
    source_code_link: "https://github.com/phoenixvasu/shopping-cart",
    live_project_link: "https://shopping-cart-8.onrender.com/",
  },
];

export { services, technologies, projects, education };
