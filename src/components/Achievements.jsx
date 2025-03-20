import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { SiCodeforces, SiCodechef, SiLeetcode } from "react-icons/si";

// Achievement Data
const achievements = [
  {
    title: "Expert Title on Codeforces",
    description: "Peak Rating: 1691",
    logo: SiCodeforces,
    color: "#1F8ACB",
    link: "https://codeforces.com/profile/phoenix_vasu", // Add your Codeforces profile link
  },
  {
    title: "5 Stars on CodeChef",
    description: "Peak Rating: 2031",
    logo: SiCodechef,
    color: "#FF7300",
    link: "https://www.codechef.com/users/phoenix_vasu", // Add your CodeChef profile link
  },
  {
    title: "Guardian Badge on LeetCode",
    description: "Peak Rating: 2185",
    logo: SiLeetcode,
    color: "#FFA116",
    link: "https://leetcode.com/phoenix_vasu", // Add your LeetCode profile link
  },
  {
    title: "Global Rank 15 in CodeChef Starters 122 Div-2",
    description: "Achieved out of thousands of participants",
    logo: SiCodechef,
    color: "#FF7300",
    link: "https://www.codechef.com/rankings/START122B?itemsPerPage=100&order=asc&page=1&sortBy=rank",
  },
  {
    title: "Global Rank 36 in CodeChef Starters 159 Div-2",
    description: "Achieved among global competitors",
    logo: SiCodechef,
    color: "#FF7300",
    link: "https://www.codechef.com/rankings/START159B?itemsPerPage=100&order=asc&page=1&sortBy=rank",
  },
  {
    title: "Global Rank 101 in Codeforces Round 995 Div-3",
    description: "Among 13k+ participants",
    logo: SiCodeforces,
    color: "#1F8ACB",
    link: "https://codeforces.com/bestRatingChanges/16094644",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="achievements py-20" ref={ref}>
      <div className="container mx-auto">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            Showcasing My Milestones
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Programming Achievements
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {achievements.map((achievement, index) => (
            <motion.a
              key={index}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-80 p-6 rounded-2xl shadow-lg bg-white hover:cursor-pointer transition-all"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <div className="flex items-center space-x-4 mb-4">
                <achievement.logo size={50} color={achievement.color} />
                <div>
                  <h3 className="text-xl font-bold text-gray-600">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
              <p className="text-blue-500 font-semibold">View Details →</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Achievements, "achievements");
