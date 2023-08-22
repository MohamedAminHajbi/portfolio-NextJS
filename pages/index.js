import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'


const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradiant-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <h1 className="h1">
            Transforming Ideas <br/> Into <span className="text-accent">Digital Reality</span>
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
