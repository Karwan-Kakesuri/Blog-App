import { useEffect, useState } from "react";
import API from "./API/posts.js";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import PostPage from "./components/PostPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([
    {
      author: "Karwan Kakesuri",
      date: "4/21/2025, 4:11:03 PM",
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      author: "Ahmad Khosro",
      date: "4/21/2025, 4:11:03 PM",
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      author: "Milad Amini",
      date: "4/21/2025, 4:11:03 PM",
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState();

  const onInputChange = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredPosts);
  }, [search, posts]);

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
      <Header onInputChange={onInputChange} />
      <Routes>
        <Route path="/Home" element={<Home posts={searchResult} />} />
        <Route path="/PostPage/:id" element={<PostPage posts={posts} />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
