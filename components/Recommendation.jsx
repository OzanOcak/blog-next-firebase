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
        {RecommendedPosts.map((post) => (
          <div className="border-b mb-[.5rem]" key="">
            <div className="flex items-center gap-[.6rem]">
              <div className="h-[1.3rem] w-[1.3rem] rounded-full overflow-hidden ">
                <Image
                  src={post.author.image}
                  alt=""
                  height={100}
                  width={100}
                />
              </div>
              <div className="font-semibold mb-[.2rem] text-sm">
                {post.author.name}
              </div>
            </div>
            <div className="flex  justify-between">
              <div className="flex flex-1 items-center font-bold lg:mb-[1rem]">
                {post.title}
              </div>
              <div className="flex flex-1 items-center justify-center h-[3rem] w-[3rem]">
                <Image src={post.image} width={80} height={80} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Recommendation;

const RecommendedPosts = [
  {
    title: "What can you do with JAM stack?",
    image: banner,
    author: {
      name: "Donald Duck",
      image: duck,
    },
  },
  {
    title: "Is Node.js really good option for back-end?",
    image: banner,
    author: {
      name: "Donald Duck",
      image: duck,
    },
  },
  {
    title: "Why React is still future proof in 2022?",
    image: banner,
    author: {
      name: "Donald Duck",
      image: duck,
    },
  },
];
