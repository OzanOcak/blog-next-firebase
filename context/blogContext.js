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

      querySnapshot.docs.map((doc) => console.log(doc.data()));
    };
    getUsers();
  }, []);

  return (
    <BlogContext.Provider value={{ posts, users }}>
      {children}
    </BlogContext.Provider>
  );
};
export { BlogProvider, BlogContext };
