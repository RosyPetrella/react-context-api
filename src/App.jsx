import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import PostContext from "./contexts/PostsContext";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import DefaultLayout from "./layouts/DefaultLayout";

// const base_api_url = "http://localhost:3003";
// const post_endpoint = "/api/v1/posts/";
// const { slug } = useParams();

export default function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3003/api/v1/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }, []);

  return (
    <>
      <PostContext.Provider value={{ posts, setPosts }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/Info" element={<Info />} />
              <Route path="/Posts" element={<Posts />} />
              <Route path="/Posts/:slug" element={<Post />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostContext.Provider>
    </>
  );
}
