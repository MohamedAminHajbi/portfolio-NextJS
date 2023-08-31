import Link from "next/link";
import {RiInstagramLine, RiFacebookLine,RiLinkedinLine, RiGithubLine, RiYoutubeLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine/>
      </Link>
    </div>
  );
};

export default Socials;