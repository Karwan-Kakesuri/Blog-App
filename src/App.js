import { useEffect, useState } from "react";
import API from "./API/posts.js";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await API.get("/posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          // if not in 200 range
          console.log(err.response.data);
          console.log(err.response.headers);
          console.log(err.response.status);
        } else {
          // if no response
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPost();
  }, []);

  return (
    <div className="App">
      <Header />
      <Home posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
