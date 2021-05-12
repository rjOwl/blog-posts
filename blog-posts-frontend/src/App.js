import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [tags, setTags] = useState("");
  const [sortValue, setSortValue] = useState("id");
  const [direction, setDirection] = useState("asc");
  const [posts, setPosts] = useState([]);
  const baseURL = "https://secure-oasis-88951.herokuapp.com";
  const localURL = "http://localhost:3001";
  const handleSend = async (e) => {
    e.preventDefault();
    console.log(
      `${baseURL}/api/posts?tags=${tags}&sortBy=${sortValue}&direction=${direction}`
    );
    await fetch(
      `${baseURL}/api/posts?tags=${tags}&sortBy=${sortValue}&direction=${direction}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("RESPONSE satus: ", res.status);
        if (res.posts) {
          if (res.posts.length < 1) setPosts({ error: "Not found" });
          else setPosts(res.posts);
        } else if (res.error) setPosts({ error: res.error });
      });
  };

  return (
    <div className="App">
      <h2>Welcome to Hatchways Blog-posts assessment</h2>
      <form onSubmit={handleSend}>
      <table class="row justify-content-center">
        <tbody>
          <tr>
            <td class="align-baseline">
              <div class="form-group">
                <label for="tags" class="control-label">
                  Tags
                </label>
                <input
                  class="form-control"
                  value={tags}
                  onChange={(e) => {
                    setTags(e.target.value);
                  }}
                  id="tags"
                />
              </div>
            </td>
            <td class="align-middle">
              <div class="form-group">
                <label for="sort" class="control-label">
                  sort
                </label>
                <select
                  id="sort"
                  class="form-control"
                  onChange={(e) => {
                    setSortValue(e.target.value);
                  }}
                >
                  <option value="id">id</option>
                  <option value="reads">reads</option>
                  <option value="likes">likes</option>
                  <option value="popularity">popularity</option>
                </select>
              </div>
            </td>
            <td class="align-bottom">
              <div class="form-group">
                <label for="direction" class="control-label">
                  direction
                </label>
                <select
                  id="direction"
                  className="form-control"
                  onChange={(e) => {
                    setDirection(e.target.value);
                  }}
                >
                  <option value="asc">asc</option>
                  <option value="desc">desc</option>
                </select>
              </div>
            </td>
          </tr>
              <button>Fetch posts</button>
        </tbody>
      </table>
            </form>

      <section class="wrapper-fostrap">
        <div class="container-fostrap">
          <div class="content">
            <div class="container">
              <div class="row">
                {posts.map((post) => {
                  return (
                    <div class="col-xs-12 col-sm-4">
                      <div class="card" id={post.id}>
                        <div class="card-content" id={post.authorId}>
                          <h4 className="card-title">Author: {post.author}</h4>
                          <p className="card-text">
                            <p> Popularity: {post.popularity} </p>
                            Tags:{" "}
                            {post.tags.map((tag) => {
                              return (
                                <span class="badge badge-pill badge-secondary">
                                  {tag}
                                </span>
                              );
                            })}
                          </p>
                        </div>
                        <div class="card-footer" id="cont">
                          <small class="text-muted">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-heart"
                                viewBox="0 0 16 16"
                              >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                              </svg>{" "}
                              <p id="inline_p">{post.likes}</p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-eye-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                              </svg>
                              {post.reads}
                            </div>
                            <div></div>
                          </small>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 

      {posts.length>1?
      posts.map((post) => {
        return (
          <div className="card mycard" id={post.id}>
            <div className="card-body">
              <h5 className="card-title">Author: {post.author}</h5>
              <p className="card-text">
              Tags: {post.tags.map((tag)=>{
                return <p id="inline_tags"> {tag} </p>
              })}
              </p>
            </div>
            <div class="card-footer" id="cont">
              <small class="text-muted">
              <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>{" "}
                  <p id="inline_p">{post.likes}</p>
                           
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>
                  {post.reads}
                </div>
                <div>
                </div>
              </small>
            </div>
          </div>
        );
      }): <p> {posts.error} </p>
      } */}
    </div>
  );
}
export default App;
