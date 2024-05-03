import logo from '../assets/kevinRushLogo.png';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub,FaLinkedin,FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10' src={logo} alt="mainlogo" />
        </div>
        <div className='flex items-center justify-center gap-4 text-2xl'>
            <FaGithub />
            <FaInstagram />
            <FaLinkedin />
            <FaXTwitter />
        </div>
    </nav>
  )
}

export default Navbar