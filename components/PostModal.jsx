import { useContext, useState } from "react";
import { BlogContext } from "../context/blogContext";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const PostModal = () => {
  const { currentUser } = useContext(BlogContext);

  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [category, setCategory] = useState("");
  const [postLength, setPostLength] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [body, setBody] = useState("");

  const addPostToFireBase = async (event) => {
    event.preventDefault();

    await addDoc(collection(db, "articles"), {
      bannerImage: bannerImage,
      body: body,
      category: category,
      brief: brief,
      postedOn: serverTimestamp(),
      postLength: Number(postLength),
      title: title,
      author: currentUser?.email,
    });
  };

  console.log(bannerImage);

  return (
    <div className="w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll">
      <div>Create a New Post</div>
      <div className=" w-full flex justify-between gap-[1rem]">
        <span className="flex-1 text-end">Title</span>
        <span className="flex-[5] h-min border-2 border-[green]">
          <input
            className="w-full border-0 outline-none bg-transparent"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </span>
      </div>

      <div className=" w-full flex justify-between gap-[1rem]">
        <span className="flex-1 text-end">Brief</span>
        <span className="flex-[5] h-min border-2 border-[green]">
          <input
            className="w-full border-0 outline-none bg-transparent"
            type="text"
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
          />
        </span>
      </div>

      <div className=" w-full flex justify-between gap-[1rem]">
        <span className="flex-1 text-end">Banner Image URL</span>
        <span className="flex-[5] h-min border-2 border-[green]">
          <input
            className="w-full border-0 outline-none bg-transparent"
            type="text"
            value={bannerImage}
            onChange={(e) => setBannerImage(e.target.value)}
          />
        </span>
      </div>

      <div className=" w-full flex justify-between gap-[1rem]">
        <span className="flex-1 text-end">Category</span>
        <span className="flex-[5] h-min border-2 border-[green]">
          <input
            className="w-full border-0 outline-none bg-transparent"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </span>
      </div>

      <div className=" w-full flex justify-between gap-[1rem]">
        <span className="flex-1 text-end">
          Estimated Read Length (in minutes)
        </span>
        <span className="flex-[5] h-min border-2 border-[green]">
          <input
            className="w-full border-0 outline-none bg-transparent"
            type="text"
            value={postLength}
            onChange={(e) => setPostLength(e.target.value)}
          />
        </span>
      </div>

      <div className=" w-full flex justify-between gap-[1rem]">
        <span className="flex-1 text-end">Article Text</span>
        <span className="flex-[5] h-min border-2 border-[green]">
          <textarea
            className="w-full border-0 outline-none bg-transparent"
            type="text"
            rows={12}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </span>
      </div>

      <button
        onClick={addPostToFireBase}
        className="text-white bg-green-600 py-1 px-2 rounded-full"
      >
        Submit
      </button>
    </div>
  );
};
export default PostModal;
