import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* làm thanh slider bar màu tím */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm
            <span className="green-pink-text-gradient"> Binh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a experienced
            <span className="font-bold green-pink-text-gradient"> Embedded Software Programmer</span>
            <br className="sm:block hidden" />
            in the Automotive Industry.  Proficient in real-time
            <br className="sm:block hidden" />
            operating systems and embedded C programming.
            <br className="sm:block hidden" />
            And suprised, I'm a
            <span className="font-bold green-pink-text-gradient"> Creative Developer </span>
            too...
          </p>
        </div>
      </div>

      <br />
      <br />
      <ComputersCanvas />

      {/* phần tạo ra scroll icon ngay giữa trang */}
      <div className='absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
