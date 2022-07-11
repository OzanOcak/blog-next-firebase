import Image from "next/image";
import banner from "../public/banner.png";

const Banner = () => {
  return (
    <div className="h-max-[10rem] flex items-center justify-center bg-[orange] border-y border-black">
      <div className="flex flex-1 max-w-7xl justify-between">
        <div className="space-y-5 p-10 flex-[3]">
          <h1 className="max-w-xl text-[6rem] font-blogSerif">Stay Curious</h1>
          <h3 className="text-2xl">
            Discover stories,thinking,and expertise from writers on any topic
          </h3>
          <button className="text-white bg-[black] py-2 px-4 rounded-full">
            Start Reading
          </button>
        </div>
        <div className="flex-1">
          <Image
            className="hidden h-32 md:inline-flex object-contain"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Banner;
