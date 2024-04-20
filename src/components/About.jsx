import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, serviceEmbedded } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-24 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My skills</p>
          <p className={styles.sectionHeadText}>Introduction</p>
          <p className={styles.sectionSubText}>About Embedded Programing</p>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          As an automotive Embedded Software Engineer with expertise in AutoSAR,
          <br className="sm:block hidden" />
          I specialize in crafting intricate digital ecosystems for vehicles.
          <br className="sm:block hidden" />
          With a passion for innovation, I design, develop, and optimize software solutions
          <br className="sm:block hidden" />
          tailored to meet automotive embedded systems' unique demands,
          <br className="sm:block hidden" />
          leveraging my AutoSAR proficiency.
        </motion.p>
      </>
      <div className='mt-20 flex flex-wrap gap-10'>
        {serviceEmbedded.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <br /><br /><br /><br />

      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>About Creative Developer</p>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a skilled fullstack developer with experience in JavaScript and TypeScript,
          <br className="sm:block hidden" />
          and expertise in frameworks like React, Node.js, and Three.js.
          <br className="sm:block hidden" />
          I'm a quick learner and collaborate closely with clients to create efficient, scalable,
          <br className="sm:block hidden" />
          and user-friendly solutions that solve real-world problems. 
          <br className="sm:block hidden" />
          Let's work together to bring your ideas to life!
        </motion.p>
      </>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
