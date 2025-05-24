import { motion } from "framer-motion";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaCode, FaNotesMedical, FaEnvelopeOpenText, FaPage4, FaPagelines, FaPager } from 'react-icons/fa';
import { SiCodeforces, SiCodechef, SiLeetcode } from "react-icons/si";

const TypewriterText = ({ texts }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        const currentText = texts[currentIndex];
        if (displayText.length < currentText.length) {
          setDisplayText((prevText) => currentText.slice(0, prevText.length + 1));
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(true);
            setDisplayText("");
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 2000);
        }
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex, isTyping, texts, displayText]);

  return (
    <span className="inline-block text-[#915EFF] font-bold">
      {displayText.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
      {isTyping && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

const WavingHand = () => {
  return (
    <img 
      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png" 
      alt="Waving Hand"
      className="wave-emoji"
      style={{ display: 'inline-block', marginLeft: '10px', width: '50px', height: '50px' }}
    />
  );
};


const Hero = () => {
  const typedItems = ["Software Developer"];

  const contactLinks = [
    { text: 'Resume', link: 'https://drive.google.com/file/d/15AqRPyQpGAa2IQZQWtpk1l_coT1dx42L/view?usp=sharing', icon: <FaPager /> },
    { text: 'Gmail', link: 'mailto:vasu21aug@gmail.com', icon: <FaEnvelope /> },
    { text: 'LinkedIn', link: 'https://www.linkedin.com/in/vasu-nandan-9bb342257/', icon: <FaLinkedin /> },
    { text: 'GitHub', link: 'https://github.com/phoenixvasu', icon: <FaGithub /> },
    
    { text: 'Codeforces', link: 'https://codeforces.com/profile/phoenix_vasu', icon: <SiCodeforces /> },
    { text: 'Codechef', link: 'https://www.codechef.com/users/phoenix_vasu', icon: <SiCodechef /> },
    { text: 'Leetcode', link: 'https://leetcode.com/phoenix_vasu', icon: <SiLeetcode /> },
    { text: 'Codolio', link: 'https://codolio.com/profile/phoenix_vasu', icon: <FaCode /> },
  ];

  return (
    
    <section className="relative w-full h-screen mx-auto">
       <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(-10deg); }
          20% { transform: rotate(12deg); }
          30% { transform: rotate(-10deg); }
          40% { transform: rotate(9deg); }
          50% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .wave-emoji {
          animation-name: wave;
          animation-duration: 1.8s;
          animation-iteration-count: infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
      `}</style>
      <div className={`absolute inset-0 top-[160px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10`}>
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white mb-6`}>
            Hi, I'm <span className="text-[#915EFF]">Vasu</span> <WavingHand />
          </h1>
          <p className={`${styles.heroSubText} mt-4 mb-8 text-white-100 leading-relaxed`}> 
            {/* I'm a <TypewriterText texts={typedItems} /> */}
            I'm a <span className="text-[#915EFF]">Software Developer</span>
            <br />
            {/* <b>Welcome to my portfolio, please view on desktop for an interactive experience!</b> */}
            <b>skilled in <span className="text-[#915EFF]">Full Stack Development</span> and <span className="text-[#915EFF]">Machine Learning </span></b><br /><b>well versed with data structures and algorithms</b>
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
            {contactLinks.map((btn, index) => (
              <motion.button
                key={index}
                className="w-[200px] h-[60px] text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-md transform transition duration-500 ease-in-out hover:scale-105 active:translate-y-1 flex items-center justify-center gap-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(btn.link, '_blank')}
              >
                {btn.icon && <span className="text-2xl">{btn.icon}</span>}
                <span className="font-semibold">{btn.text}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
