import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradiant-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto xl:pb-0 pb-20">
          <motion.h2 variants={fadeIn('down',0.2)} initial='hidden' animate='show' exit='hidden' className="h2">
            Transforming Ideas <br/> Into <span className="text-accent">Digital Reality</span>
          </motion.h2>
          <motion.p variants={fadeIn('down',0.3)} initial='hidden' animate='show' exit='hidden' className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</motion.p>
          <div className="flex justify-center xl:hidden">
            <ProjectsBtn/>
          </div>
          <motion.div variants={fadeIn('down',0.4)} initial='hidden' animate='show' exit='hidden' className="hidden xl:flex xl:pb-10">
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge"></div>
        <ParticlesContainer/>
        <motion.div variants={fadeIn('up',0.5)} initial='hidden' transition={{duration: 1, ease:'easeInOut'}} animate='show' exit='hidden' className="w-full h-full max-w-[537px] max-h-[478px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"><Avatar/></motion.div>
      </div>
    </div>
  );
};

export default Home;