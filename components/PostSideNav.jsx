import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmarks } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import duck from "../public/donaldduck.jpeg";

const PostSideNav = () => {
  return (
    <div className="flex flex-col w-[5rem] h-screen justify-between items-center py-[1rem] ">
      <Link href="/">
        <Image src={logo} className="cursor-pointer" alt="" />
      </Link>
      <div className="flex-1 flex flex-col justify-center gap-[1.35rem] text-3xl text-[#787878]">
        <HiOutlineHome />
        <FiBell />
        <BiBookmarks />
        <RiArticleLine />
        <div className="border-b" />
        <BsPencilSquare />
      </div>
      <div className="w-[3rem] h-[3rem] grid  rounded-full bg-[black] overflow-hidden ">
        <Image className="object-cover" src={duck} alt="" />
      </div>
    </div>
  );
};
export default PostSideNav;
