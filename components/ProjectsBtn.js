import Image from "next/image";
import Link from "next/link";
import {HiArrowRight} from 'react-icons/hi2'

const ProjectsBtn = () => {
  return (
    <div>
      <Link href={'/work'} className="relative w-[185px] h-[185px] flex justify-center items-center">
        <Image src={'/rounded-text.png'} height={148} width={141} alt="" className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"/>
        <HiArrowRight className="absolute text-4xl"/>  
      </Link>
    </div>
  );
};

export default ProjectsBtn;
