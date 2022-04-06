import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaDocker } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Porfolio1 from "../../images/porfolio-1.png";
import Porfolio2 from "../../images/porfolio-2.jpg";
import Porfolio3 from "../../images/porfolio-3.png";

import "./about.scss";

function About() {
  const h3Variants = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const workVariants = {
    visible: (idx) => ({
      opacity: 1,
      transition: {
        delay: idx * 0.6,
      },
    }),
    hidden: { opacity: 0 },
  };

  const works = [
    {
      title: "Dashboard for Cargo",
      imgUrl: Porfolio1,
    },
    {
      title: "Marketplace App",
      imgUrl: Porfolio2,
    },
    {
      title: "Bla bla bla",
      imgUrl: Porfolio3,
    },
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="about__intro">
          <motion.h1
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1,
              repeatType: "reverse",
              type: "spring",
              // velocity: 100, //just
            }}
          >
            Hello am Hero Coder!
          </motion.h1>
          <p>Frontend React Developer</p>
        </div>

        <div className="about__skills">
          <motion.h3
            variants={h3Variants}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              duration: 1,
            }}
          >
            My Skills
          </motion.h3>
          <ul>
            <motion.li
              whileHover={{
                scale: 1.5,
                backgroundColor: "yellow",
              }}
            >
              <FaHtml5 />
              HTML
            </motion.li>
            <li>
              <FaCss3Alt />
              CSS
            </li>
            <li>
              <SiJavascript />
              JavaScript
            </li>
            <li>
              <FaSass />
              Sass
            </li>
            <li>
              <FaReact />
              React
            </li>
            <li>
              <FaDocker />
              Docker
            </li>
          </ul>
        </div>

        <div className="about__portfolio">
          <h3>Latest Works</h3>
          <ul>
            {works.map((work, idx) => (
              <motion.li
                variants={workVariants}
                initial={"hidden"}
                animate={"visible"}
                key={idx}
                custom={idx}
              >
                <img src={work.imgUrl} alt="" />
                <h4>{work.title}</h4>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
