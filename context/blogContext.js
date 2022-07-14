import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));

      // querySnapshot.docs.map((doc) => console.log(doc.data()));

      setUsers(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: { ...doc.data() },
          };
        })
      );
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "articles"));

      setPosts(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              body: doc.data().body,
              category: doc.data().category,
              postLength: doc.data().postLength,
              bannerImg: doc.data().bannerImg,
              postedOn: doc.data().postLength,
              title: doc.data().title,
              author: doc.data().author,
              brief: doc.data().brief,
            },
          };
        })
      );
    };
    getPosts();
  }, []);

  return (
    <BlogContext.Provider value={{ posts, users }}>
      {children}
    </BlogContext.Provider>
  );
};
export { BlogProvider, BlogContext };
