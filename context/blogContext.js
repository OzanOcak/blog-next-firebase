import { createContext, useEffect, useState } from "react";
import { db, auth, provider } from "../firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

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

  const addUserToFirebase = async (user) => {
    await setDoc(doc(db, "users", user.email), {
      email: user.email,
      name: user.displayName,
      imageUrl: user.photoURL,
      followCount: 0,
    });
  };

  const handleUserAuth = async () => {
    const userData = await signInWithPopup(auth, provider);
    const user = userData.user;
    console.log(user);
    setCurrentUser(user);
    addUserToFirebase(user);
  };

  return (
    <BlogContext.Provider value={{ posts, users, handleUserAuth, currentUser }}>
      {children}
    </BlogContext.Provider>
  );
};
export { BlogProvider, BlogContext };
