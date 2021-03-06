import Banner from "../components/Banner";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { useContext } from "react";
import { BlogContext } from "../context/blogContext";

export default function Home() {
  const { posts } = useContext(BlogContext);
  //const { users } = useContext(BlogContext);console.log(users);
  //console.log(posts);
  return (
    <div>
      <Header />
      <Banner />
      <div className="flex justify-center">
        <div className="flex-1 max-w-7xl">
          <div className="gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3 ">
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
