import Image from "next/image";
import { useContext } from "react";
import { BlogContext } from "../context/blogContext";
import logo from "../public/logo.png";
import Modal from "react-modal"; //yarn add
import { Router, useRouter } from "next/router";
import Link from "next/link";
import PostModal from "./PostModal";

Modal.setAppElement("#__next");

const customStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%,-50%)",
    backgroundColor: "#fff",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10,11,13,0.75)",
  },
};

const Header = () => {
  const router = useRouter();
  const { currentUser, handleUserAuth } = useContext(BlogContext);
  console.log("---------->", currentUser);
  return (
    <div className="flex justify-center p-5 gap-10 bg-[orange]">
      <div className="flex flex-1 max-w-7xl justify-between gap-10">
        <div className="flex items-center">
          <Image
            className="cursor-pointer object-contain"
            alt=""
            src={logo}
            height={40}
            width={200}
          />
        </div>
        {/**------------top nav right----------- */}
        {currentUser ? (
          <div className="flex cursor-point items-center space-x-5">
            <div>Our Story</div>
            <div>Membership</div>

            {/**if 1 open, 0 close */}
            <Link href={"/?addNew=1"}>
              <div className="cursor-pointer  hover:text-[red]">Write</div>
            </Link>

            <div className="bg-[black] text-white py-2 px-4 rounded-[1.5rem]">
              Get Unlimited Access
            </div>
          </div>
        ) : (
          <div className="flex cursor-point items-center space-x-5">
            <div>Our Story</div>
            <div>Membership</div>
            <div
              onClick={handleUserAuth}
              className="cursor-pointer  hover:text-[red]"
            >
              Sign In
            </div>
            <div className="bg-[black] text-white py-2 px-4 rounded-[1.5rem]">
              Get Started
            </div>
          </div>
        )}
      </div>
      <Modal
        isOpen={Boolean(router.query.addNew)}
        onRequestClose={() => router.push("/")}
        style={customStyle}
      >
        <PostModal />
      </Modal>
    </div>
  );
};

export default Header;
