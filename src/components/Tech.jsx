import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiRender,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiChakraui,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiPrisma,
  SiPostman,
  SiGithub,
  SiSocketdotio,
  SiJsonwebtokens,
  SiNextdotjs,
  SiNetlify,
  SiVercel,
  SiNumpy,
  SiPandas,
  SiScipy,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiGo
} from "react-icons/si";

// Skill Data with Colors
const programming = [
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
];

const frontend = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
];

const backend = [
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "Flask", icon: SiFlask, color: "#000000" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#000000" },
];

const aiMl = [
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "SciPy", icon: SiScipy, color: "#8CAAE6" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "Keras", icon: SiKeras, color: "#D00000" },
  { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
];

const databases = [
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const tools = [
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "Render", icon: SiRender, color: "#000000" },
];

const categories = [
  { name: "Programming", data: programming },
  { name: "Frontend", data: frontend },
  { name: "Backend", data: backend },
  { name: "AI/ML", data: aiMl },
  { name: "Databases", data: databases },
  { name: "Tools & Deployment", data: tools },
];

const Tech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const hexagonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring" } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <section className="skills py-20" ref={ref}>
      <div className="container mx-auto">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Technical Proficiencies</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>

        {categories.map((category) => (
          <motion.div key={category.name} className="my-12" initial="hidden" animate={mainControls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}>
            <motion.h2 className="text-3xl font-semibold text-center mb-8" variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>{category.name}</motion.h2>
            <div className="flex flex-wrap justify-center gap-8">
              {category.data.map((tech) => (
                <motion.div key={tech.name} className="flex flex-col items-center justify-center w-28 h-28 rounded-2xl shadow-lg bg-white" variants={hexagonVariants} initial="hidden" animate="visible" whileHover="hover">
                  <tech.icon size={50} color={tech.color} />
                  <p className="mt-2 font-semibold text-center text-gray-800">{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
