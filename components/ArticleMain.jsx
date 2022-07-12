import Image from "next/image";
import duck from "../public/donaldduck.jpeg";
import logo from "../public/logo.png";
import { AiFillAccountBook } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { FiMoreHorizontal } from "react-icons/fi";

const ArticleMain = () => {
  return (
    <div className="flex flex-[3]  items-center justify-center border-l border-r">
      <div className="h-screen overflow-scroll p-[2rem]">
        <div className="flex flex-col justify-between items-center mt-[2.2rem] mb-[1.2rem]">
          {/**-----------nav---------------- */}
          <div className="flex gap-[1rem] w-full ">
            <div className="w-[3rem] h-[3rem] grid  overflow-hidden rounded-full">
              <Image className="object-cover" src={duck} alt="" />
            </div>
            {/**-----------author ------------ */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="font-bold">Donald Duck</div>
              <div>
                <span>
                  June 15 . 7 min{" "}
                  <span className="flex items-center gap-[.2rem] text-[green]">
                    <AiFillAccountBook />
                  </span>
                </span>
              </div>
            </div>
            {/**end of name */}
            {/**--------socials--------------- */}
            <div className="flex gap-[1rem] text-[#787878] cursor-pointer">
              <IoLogoTwitter />
              <FaFacebook />
              <GrLinkedin />
              <HiOutlineLink />
              <div className="w-[.5rem]" />
              <BiBookmarks />
              <FiMoreHorizontal />
            </div>
            {/** end of social */}
          </div>
          {/** end of nav*/}
          {/**---------- article container----------- */}
          <div className="h-[18rem] w-full grid center overflow-hidden mb-[2rem]">
            <div className="flex flex-col gap-[1rem]">
              <Image className="object-cover" src={logo} alt="" />
            </div>
            <h1 className="font-bold text-3xl">
              How to learn JavaScript in hard way
            </h1>
            <h3 className="font-blogSerifItalic text-[1.3rem] text-[#292929]">
              Donald Duck, 20 July.2022
            </h3>
          </div>
          <div className="font-blogSerif text-[1rem] text-[#292929]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            sapiente repudiandae, quam perspiciatis ab, consectetur eveniet
            excepturi doloribus impedit beatae fuga exercitationem eligendi
            obcaecati incidunt dicta itaque. Provident, hic assumenda?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            sapiente repudiandae, quam perspiciatis ab, consectetur eveniet
            excepturi doloribus impedit beatae fuga exercitationem eligendi
            obcaecati incidunt dicta itaque. Provident, hic assumenda?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            sapiente repudiandae, quam perspiciatis ab, consectetur eveniet
            excepturi doloribus impedit beatae fuga exercitationem eligendi
            obcaecati incidunt dicta itaque. Provident, hic assumenda?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            sapiente repudiandae, quam perspiciatis ab, consectetur eveniet
            excepturi doloribus impedit beatae fuga exercitationem eligendi
            obcaecati incidunt dicta itaque. Provident, hic assumenda?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            sapiente repudiandae, quam perspiciatis ab, consectetur eveniet
            excepturi doloribus impedit beatae fuga exercitationem eligendi
            obcaecati incidunt dicta itaque. Provident, hic assumenda?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            sapiente repudiandae, quam perspiciatis ab, consectetur eveniet
            excepturi doloribus impedit beatae fuga exercitationem eligendi
            obcaecati incidunt dicta itaque. Provident, hic assumenda?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            sapiente repudiandae, quam perspiciatis ab, consectetur eveniet
            excepturi doloribus impedit beatae fuga exercitationem eligendi
            obcaecati incidunt dicta itaque. Provident, hic assumenda?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            sapiente repudiandae, quam perspiciatis ab, consectetur eveniet
            excepturi doloribus impedit beatae fuga exercitationem eligendi
            obcaecati incidunt dicta itaque. Provident, hic assumenda?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            sapiente repudiandae, quam perspiciatis ab, consectetur eveniet
            excepturi doloribus impedit beatae fuga exercitationem eligendi
            obcaecati incidunt dicta itaque. Provident, hic assumenda?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            sapiente repudiandae, quam perspiciatis ab, consectetur eveniet
            excepturi doloribus impedit beatae fuga exercitationem eligendi
            obcaecati incidunt dicta itaque. Provident, hic assumenda?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            sapiente repudiandae, quam perspiciatis ab, consectetur eveniet
            excepturi doloribus impedit beatae fuga exercitationem eligendi
            obcaecati incidunt dicta itaque. Provident, hic assumenda?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            sapiente repudiandae, quam perspiciatis ab, consectetur eveniet
            excepturi doloribus impedit beatae fuga exercitationem eligendi
            obcaecati incidunt dicta itaque. Provident, hic assumenda?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            sapiente repudiandae, quam perspiciatis ab, consectetur eveniet
            excepturi doloribus impedit beatae fuga exercitationem eligendi
            obcaecati incidunt dicta itaque. Provident, hic assumenda?
          </div>
          {/** end of article container */}
        </div>
      </div>
    </div>
  );
};
export default ArticleMain;
