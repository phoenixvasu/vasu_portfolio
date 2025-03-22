import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaRobot, FaNetworkWired, FaDatabase, FaBrain, FaChartLine } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const categories = [
  {
    title: "Programming",
    courses: [
      { name: "Computer Programming", icon: FaLaptopCode },
      { name: "Application Programming", icon: FaLaptopCode },
      { name: "Object Oriented Programming", icon: FaLaptopCode },
      { name: "Software Engineering", icon: FaLaptopCode }
    ]
  },
  {
    title: "Systems and Networks",
    courses: [
      { name: "Computer System Organisation", icon: FaNetworkWired },
      { name: "Operating Systems", icon: FaNetworkWired },
      { name: "Computer Networks", icon: FaNetworkWired },
      { name: "Parallel and Distributed Computing", icon: FaNetworkWired }
    ]
  },
  {
    title: "AI and Machine Learning",
    courses: [
      { name: "Artificial Intelligence, Ethics and Society", icon: FaBrain },
      { name: "Machine Learning", icon: FaBrain },
      { name: "Artificial Intelligence", icon: FaBrain },
      { name: "Reinforcement Learning", icon: FaBrain },
      { name: "Neural Networks and Deep Learning", icon: FaBrain },
      { name: "Natural Language Processing", icon: FaRobot },
      { name: "Computer Vision Techniques", icon: FaBrain },
      { name: "Optimization Techniques in ML", icon: FaChartLine }
    ]
  },
  {
    title: "Data Science and Algorithms",
    courses: [
      { name: "Calculus for Data Science", icon: FaChartLine },
      { name: "Data Structures", icon: FaDatabase },
      { name: "Design & Analysis of Algorithms", icon: FaChartLine },
      { name: "Data Handling and Visualization", icon: FaChartLine },
      { name: "Database Management Systems", icon: FaDatabase }
    ]
  },
  
];

const Coursework = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <motion.div>
          <p className={`${styles.sectionSubText} text-center`}>Academic Journey</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Coursework.</h2>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mt-12">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">{category.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.courses.map((course, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <course.icon className="text-blue-500 text-3xl mr-4" />
                  <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Coursework, "coursework");
