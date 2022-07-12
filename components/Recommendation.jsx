import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import banner from "../public/banner.png";
import duck from "../public/donaldduck.jpeg";

const Recommendation = ({ author }) => {
  return (
    <div className="flex flex-col h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]">
      <button className="text-white bg-[black] flex items-center justify-center rounded-full my-[2rem] py-[.6rem]">
        Get unlimited access
      </button>
      <div className="flex items-center gap-[0.6rem] h-[2.6rem] border px-[1rem] rounded-full">
        <AiOutlineSearch />
        <input
          className="border-none w-full bg-nane outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      {/**---------------------------------------------------- */}

      <div className="h-[5rem] w-[5rem] rounded-full overflow-hidden my-2 ">
        <Image src={duck} width={110} height={110} alt="" />
      </div>
      <div className="font-semibold mb-[.2rem] mt-[1rem]">Swan</div>
      <div className="text-[#787878]">2.3M Followers</div>
      <div className="flex gap-[.6rem] my-[1rem]">
        <button className="bg-[green] text-white rounded-full text-sm px-[.6rem] py-[5.rem]">
          Follow
        </button>
        <button className="bg-[green] text-white rounded-full text-sm px-[.6rem] py-[5.rem]">
          <MdMarkEmailUnread />
        </button>
      </div>

      {/**---------------------------------------------------- */}

      <div>
        <div className="my-[1rem] font-bold">More from Medium</div>
        <div>
          <div className="flex items-center gap-[.6rem]">
            <div className="h-[1.3rem] w-[1.3rem] rounded-full overflow-hidden ">
              <Image src={duck} alt="" height={100} width={100} />
            </div>
            <div className="font-semibold mb-[.2rem] text-sm">Donald Duck</div>
          </div>
          <div className="flex  justify-between">
            <div className="flex flex-1 items-center font-bold">
              Learn JavaScript with the hard way
            </div>
            <div className="flex flex-1 items-center justify-center h-[4rem] w-[4rem]">
              <Image src={banner} width={100} height={100} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recommendation;
