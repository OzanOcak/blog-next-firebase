import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import ArticleMain from "../../components/ArticleMain";
import PostSideNav from "../../components/PostSideNav";
import Recommendation from "../../components/Recommendation";
import { BlogContext } from "../../context/blogContext";

const Post = () => {
  const { posts, users } = useContext(BlogContext);
  const router = useRouter();
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);

  //console.log("------------>", posts);

  useEffect(() => {
    if (posts.legth === 0) return;

    //posts.map((post) => console.log("post id:", post.id));
    //console.log(router.query.slug);
    // console.log(posts.find((post) => post.id === router.query.slug));

    setPost(posts.find((post) => post.id === router.query.slug));
    // console.log("-->", users);
    //console.log(users.find((user) => user.id == post?.data?.author));
    setAuthor(users.find((user) => user.id === post.data?.author));
    //TypeError: Cannot read properties of undefined (reading 'author') -> use ?
    //second error: post is set but author didnt get chance to be updated, so we need to give
    // updating dependency will update after first automatic update -->[post] and delete
    // the ? after post?.data? cz post will be empty in the first update
  }, [post]); // useEffect calls in order to process once, not many times,didMount & didUpdate
  return (
    <div className="flex">
      <PostSideNav />
      <ArticleMain post={post} author={author} />
      <Recommendation />
    </div>
  );
};
export default Post;
