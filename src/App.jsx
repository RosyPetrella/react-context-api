import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import DefaultLayout from "./layouts/DefaultLayout";
export default function App() {
  return (
    <>
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
    </>
  );
}
