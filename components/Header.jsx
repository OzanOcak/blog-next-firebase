import Image from "next/image";
import logo from "../public/logo.png";

const Header = () => {
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
        <div className="flex cursor-point items-center space-x-5">
          <div>Our Story</div>
          <div>Membership</div>
          <div>Sign In</div>
          <div className="bg-[black] text-white py-2 px-4 rounded-[1.5rem]">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
