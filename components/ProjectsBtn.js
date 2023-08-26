import Image from "next/image";
import Link from "next/link";
import {HiArrowRight} from 'react-icons/hi2'

const ProjectsBtn = () => {
  return (
    <div>
      <Link href='/work' className="relative w-[115px] h-[115px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group z-10">
        <Image src={'/rounded-text.png'} height={100} width={94} alt="" className="animate-spin-slow w-full h-full max-w-[94px] max-h-[100px]"/>
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"/>  
      </Link>
    </div>
  );
};

export default ProjectsBtn;
