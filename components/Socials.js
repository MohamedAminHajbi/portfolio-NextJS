import Link from "next/link";
import {RiInstagramLine, RiFacebookLine,RiLinkedinLine, RiGithubLine, RiYoutubeLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5">
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiGithubLine/>
      </Link>
      
      
      
    </div>
  );
};

export default Socials;