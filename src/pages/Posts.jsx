import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/api/v1/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);
  return (
    <>
      <main>
        <div className="container mt-5">
          <div className="row">
            {posts.map((post) => (
              <div
                className="col col-sm-2 col-md-3 col-lg-4 g-2 p-2"
                key={post.slug}
              >
                <div className="card">
                  <h2 className="card-title text-center pt-3 mt-2">
                    {post.title}
                  </h2>
                  <div className="card-body text-center">
                    {post.content}
                    <div>
                      <button className="btn btn-light mt-2">
                        <Link to={`/posts/${post.slug}`}>Show more</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col col-sm-2 col-md-3 col-lg-4 g-2 p-2">
              <div className="card">
                <div className="card-title">👽 Il Gatto Extraterrestre</div>
                <div className="card-body">
                  {" "}
                  Una creatura con occhi luminescenti e poteri psichici è
                  atterrata nel nostro giardino. Da dove viene?
                </div>
              </div>
            </div>
            <div className="col col-sm-2 col-md-3 col-lg-4 g-2 p-2">
              <div className="card">
                <div className="card-title">🔮 Bastet e il Portale Segreto</div>
                <div className="card-body">
                  Una leggenda egizia racconta di un portale che collega la
                  Terra a una dimensione felina. Bastet potrebbe essere la
                  chiave per aprirlo.
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </main>
    </>
  );
}
