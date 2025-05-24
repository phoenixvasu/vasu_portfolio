import {
  talkstraimage,
  blogmentumimage,
  shoppingcartimage,
  skyfareimage,
  cropwiseimage,
  iiitnlogo, // Add this in assets
  aspcslogo, // Add this in assets
  kvlogo,
  blitzboardimage,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About Me" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "achievements", title: "Achievements" },
  { id: "education", title: "Education" },
];

const services = [
  { title: "Full-Stack Developer" },
  { title: "AI Enthusiast" },
  { title: "Problem Solver" },
];

const education = [
  {
    title: "B.Tech in Computer Science and Engineering (AIML)",
    company_name: "Indian Institute of Information Technology, Nagpur",
    icon: iiitnlogo,
    iconBg: "#fff",
    date: "2022 - 2026",
    points: [
      "CGPA - 8.98",
      "Specializing in AI and Machine Learning.",
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
  { name: "React.js" },
  { name: "Node.js" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "Git" },
  { name: "Tailwind CSS" },
];

const projects = [
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
    live_project_link: "https://blitzboard.onrender.com/",
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
    name: "BlogMentum ✍️",
    description:
      "Full Stack blog application with authentication, comments, and like system. Users can create and explore engaging blogs with a seamless interface.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: blogmentumimage,
    source_code_link: "https://github.com/phoenixvasu/Blogmentum",
    live_project_link: "https://blogmentum.onrender.com/",
  },
  {
    name: "Shopping Cart 🛒",
    description:
      "E-commerce platform for buying and selling products. Features include product management, cart management, and checkout functionality.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
    ],
    image: shoppingcartimage,
    source_code_link: "https://github.com/phoenixvasu/shopping-cart",
    live_project_link: "https://shopping-cart-8.onrender.com/",
  },
  {
    name: "Flight Price Prediction",
    description:
      "A machine learning project that predicts flight prices based on various parameters.",
    tags: [
      { name: "Python", color: "text-blue-500" },
      { name: "Machine Learning", color: "text-green-500" },
      { name: "Flask", color: "text-yellow-500" },
    ],
    image: skyfareimage,
    source_code_link: "https://github.com/phoenixvasu/skyfare-insights",
    live_project_link: "https://skyfare-insights-1.onrender.com/",
  },
  {
    name: "Crop Prediction",
    description:
      "An AI-powered crop prediction model that suggests suitable crops based on soil and weather conditions.",
    tags: [
      { name: "Python", color: "text-blue-500" },
      { name: "AI", color: "text-purple-500" },
      { name: "Django", color: "text-green-500" },
    ],
    image: cropwiseimage,
    source_code_link: "https://github.com/phoenixvasu/CropWise",
    live_project_link: "https://cropwise-1-euqg.onrender.com/",
  },
];

export { services, technologies, projects, education };
