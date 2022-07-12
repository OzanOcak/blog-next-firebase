import PostSideNav from "../../components/PostSideNav";
import Recommendation from "../../components/Recommendation";

const Post = () => {
  return (
    <div className="flex">
      <PostSideNav />
      <div>Article main will go here</div>
      <Recommendation />
    </div>
  );
};
export default Post;
