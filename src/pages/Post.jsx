import { useContext } from "react";
import PostContext from "../contexts/PostsContext";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// const base_api_url = "http://localhost:3003";
// const post_endpoint = "/api/v1/posts/";

export default function Post() {
  // const [posts, setPosts] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();
  const { posts } = useContext(PostContext);

  // useEffect(() => {
  //   fetch(base_api_url + post_endpoint + slug)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //     })
  //     .catch((err) => {
  //       console.log("ERROR", err);
  //     });
  // }, [slug]);
  const post = posts ? posts.find((p) => p.slug === slug) : null;
  return (
    <>
      <main>
        {!posts ? (
          "..Loading"
        ) : (
          <>
            <div className="container">
              <div className="row g-2">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid"
                    src={`http://localhost:3003${posts.image}`}
                    alt=""
                  />
                </div>
                <div className="col-12 col-md-5">
                  <button className="back" onClick={() => navigate(-1)}>
                    GO BACK
                  </button>
                  <h1>{posts.title}</h1>
                  <p>{posts.content}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
