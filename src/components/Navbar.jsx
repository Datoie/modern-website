import { navLinks } from "../constants"

import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleNavClick = () => setClick(!click)
  return (
    <div className="flex reenie-beanie fixed pb-[1rem] top-0 bg-black w-full h-[5rem] z-[99]">
      <div className="relative left-0 cursor-pointer logo--hover">
        <Link spy={true} smooth={true} offset={-100} duration={300} to="/" >
          <span className="text-[black] logo--hover text-[1.5rem] z-[11] absolute top-[1rem]">Grdzelo</span>
        </Link>
        <div className="bg--primary w-[51rem] h-[50rem] absolute rounded-[100%]  left-[-39rem] top-[-41rem] cursor-pointer" />
      </div>
      {/* Desktop */}
      <nav className=" absolute right-5 text-center text-[3rem] ">
        <ul className="gap-[1rem] sm:flex hidden">
          {navLinks.map(item => (
            <div key={item.id} className="text-ani">
              <li className=" text--primary  transition-all">
                <Link spy={true} smooth={true} offset={-100} duration={300} to={item.id}>{item.content}</Link>
              </li>
              <div />
            </div>
          ))}
        </ul>
        {/* mobile */}
        {!click ? <ul className="right-[-50rem] transition-all opacity-[0] flex gap-[1rem]
         sm:hidden flex-col bg--primary rounded-[.6rem] p-[1rem]  duration-700 top-[4rem] absolute">
          {navLinks.map(item => (
            <div key={item.id} className="text-ani2">
              <li className=" text-[white] hover:text-[black]  transition-all">
                <Link spy={true} smooth={true} offset={-100} duration={500} to={item.id}>{item.content}</Link>
              </li>
              <div />
            </div>
          ))}
        </ul> :
          <ul className=" transition-all opacity-[1] flex gap-[1rem]
         sm:hidden flex-col bg--primary rounded-[.6rem] p-[1rem] duration-700 text-[1em] top-[5rem] right-0 absolute">
            {navLinks.map(item => (
              <div key={item.id} className="text-ani2">
                <li className=" text-[white] hover:text-[black]  transition-all">
                  <Link spy={true} smooth={true} offset={-100} duration={500} to={item.id}>{item.content}</Link>
                </li>
                <div />
              </div>
            ))}
          </ul>}
        <div className="sm:hidden flex text-[3rem] text-[white]" onClick={() => handleNavClick()}>
          {click ? <HiOutlineBars3BottomRight className=" opacity-[0] absolute top-[1rem] right-0 transition-all" /> :
            <HiOutlineBars3BottomRight className=" opacity-[1] absolute top-[1rem] right-0 transition-all" />}

          {!click ? <AiOutlineFullscreenExit className="  opacity-[0] absolute top-[1rem] right-0 transition-all" /> :
            <AiOutlineFullscreenExit className=" absolute opacity-[1] top-[1rem] right-0 transition-all" />}
        </div>
      </nav>

    </div>
  )
}

export default Navbar