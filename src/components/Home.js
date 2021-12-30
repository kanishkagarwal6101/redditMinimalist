import { Outlet, Link } from "react-router-dom";
import "../../src/App.css";
import { SearchBar } from "./searchBar";
import React from "react";
const Home = () => {
  const myStyleForHeading = {
    display: "flex",
    padding: "20px",
    backgroundColor: "#303030",
  };
  const myStyleForName = {
    paddingRight: "200px",
    fontSize: "20px",
    color: "red",
  };
  const styleForLinks = {
    textDecoration: "none",
    color: "red",
  };
  const styleForList = {
    display: "inline-block",
    width: "100%",
    textAlign: "center",
    whiteSpace: "nowrap",
  };
  const stylePosition = {
    position: "absolute",
    top: "7px",
    right: "700px",
  };
  let parentdiv = document.createElement("div");
  parentdiv.id = "popular";
  fetch(`https://www.reddit.com/r/popular.json`)
    .then((response) => response.json())
    .then((body) => {
      for (let i = 0; i < body.data.children.length; i++) {
        if (body.data.children[i].data.post_hint === "image") {
          let div = document.createElement("div");
          let h4 = document.createElement("h4");
          let image = document.createElement("img");
          image.src = body.data.children[i].data.url_overridden_by_dest;
          h4.textContent = body.data.children[i].data.title;
          div.appendChild(h4);
          div.appendChild(image);
          parentdiv.appendChild(div);
        }
        document.body.appendChild(parentdiv);
      }
    });
  return (
    <div className="header" style={myStyleForHeading}>
      <span className="heading" style={myStyleForName}>
        RedditMinimal
      </span>
      <SearchBar className="search-bar-main" />
      <nav style={stylePosition}>
        <ul style={styleForList}>
          <li style={styleForList}>
            <Link to="/memes" style={styleForLinks}>
              memes
            </Link>
          </li>
          <li style={styleForList}>
            <Link to="/popular" style={styleForLinks}>
              popular
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
