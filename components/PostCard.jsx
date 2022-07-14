import Image from "next/image";
import logo from "../public/logo.png";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const PostCard = ({ post }) => {
  const [authorData, setAuthorData] = useState(null);
  // console.log(post);
  useEffect(() => {
    const getAuthorData = async () => {
      if (post.data.author === undefined) return;

      console.log((await getDoc(doc(db, "users", post.data?.author))).data()); // need to (await) in paranthesis

      setAuthorData((await getDoc(doc(db, "users", post.data?.author))).data());
    };
    getAuthorData();
  }, []); // [] => once

  return (
    <Link href={`/post/${post.id}`}>
      <div className="flex max-w-[46rem] h-[10rem] gap-[1rem] items-center cursor-pointer">
        <div className="flex-[2.5] flex flex-col justify-content">
          <div className="flex gap-[.5rem]">
            <div className="grid place-items-center rounded-full overflow-hidden h-[1.5rem] w-[1.5rem]">
              <Image
                className="object-cover"
                width={40}
                height={40}
                src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
                alt=""
              />
            </div>
            <div className="font-semibold">{authorData?.name}</div>
          </div>
          <div className="font-bold text-2xl">{post.data.title}</div>
          <div className="color-[#787878]">{post.data.brief}</div>
          <div className="flex items-center justify-between text-[#787878]">
            <span>
              {new Date(post.data.postedOn).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }) + "  "}
              . {post.data.postLength} min read .
              <span className="bg-[lightgray] px-3 py-1 rounded-full">
                {post.data.category}
              </span>
            </span>
            <span>
              <FiBookmark className="h-5 w-5 cursor-pointer" />
            </span>
          </div>
        </div>
        <Image
          src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
          height={100}
          width={100}
          alt=""
        />
      </div>
    </Link>
  );
};
export default PostCard;
