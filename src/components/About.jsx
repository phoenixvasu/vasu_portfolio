import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { profilepic } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="w-full xs:w-[250px]"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden">
        <motion.img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0"
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  </motion.div>
);

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();


  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView, mainControls]);

  return (
    <div ref={sectionRef} className="pt-[60px] md:pt-0 overflow-hidden">
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile Picture Section */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="w-full md:w-1/3 flex flex-col items-center"
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl">
            <img
              src={profilepic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          
        </motion.div>

        {/* Overview Section */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="w-full md:w-2/3"
        >
          <ul className="mt-4 text-secondary text-[17px] max-w-3xl space-y-6">
            {[
              { emoji: "👨‍💻", text: "I'm a passionate Software Engineer, skilled in full stack development, Data Structures and Algorithms (DSA) and competitive programming."  },
              { emoji: "🎓", text: "Currently pursuing a B.Tech in Computer Science and Engineering at IIIT Nagpur, passionate about building scalable web applications." },
              { emoji: "🛠", text: "Experienced in full-stack development, building scalable web applications and RESTful APIs." },
              { emoji: "🔧", text: "Proficient in modern web technologies and best practices for software development." },
              { emoji: "💡", text: "I love solving complex problems and continuously learning new technologies." },
            ].map((item, index) => (
              <motion.li key={index} className="flex items-start" variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
                <span className="mr-4 text-2xl">{item.emoji}</span>
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
