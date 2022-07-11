import Banner from "../components/Banner";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="flex justify-center">
        <div className="flex-1 max-w-7xl">
          <div className="gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3 ">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
}
