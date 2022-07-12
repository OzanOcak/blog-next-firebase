import Image from "next/image";
import logo from "../public/logo.png";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
const PostCard = () => {
  return (
    <Link href={`/post/123`}>
      <div className="flex max-w-[46rem] h-[10rem] gap-[1rem] items-center cursor-pointer">
        <div className="flex-[2.5] flex flex-col justify-content">
          <div className="flex gap-[.5rem]">
            <div className="grid place-items-center rounded-full overflow-hidden h-[1.5rem] w-[1.5rem]">
              <Image
                className="object-cover"
                width={40}
                height={40}
                src={logo}
                alt=""
              />
            </div>
            <div className="font-semibold">Donald Duck</div>
          </div>
          <div className="font-bold text-2xl">
            7 Free Tolls Make You More Productive in 2022
          </div>
          <div className="color-[#787878]">
            Productivity skill that you can learn
          </div>
          <div className="flex items-center justify-between text-[#787878]">
            <span>
              June 15 . 5 min .{" "}
              <span className="bg-[lightgray] p-1 rounded-full">
                productivity
              </span>{" "}
            </span>
            <span>
              <FiBookmark className="h-5 w-5 cursor-pointer" />
            </span>
          </div>
        </div>
        <Image src={logo} height={100} width={100} alt="" />
      </div>
    </Link>
  );
};
export default PostCard;
