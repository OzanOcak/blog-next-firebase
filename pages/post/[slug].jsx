import ArticleMain from "../../components/ArticleMain";
import PostSideNav from "../../components/PostSideNav";
import Recommendation from "../../components/Recommendation";

const Post = () => {
  return (
    <div className="flex">
      <PostSideNav />
      <ArticleMain />
      <Recommendation />
    </div>
  );
};
export default Post;
