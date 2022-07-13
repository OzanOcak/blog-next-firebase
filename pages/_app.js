import "../styles/globals.css";
import { BlogProvider } from "../context/blogContext";

function MyApp({ Component, pageProps }) {
  return (
    <BlogProvider>
      <Component {...pageProps} />
    </BlogProvider>
  );
}

export default MyApp;
