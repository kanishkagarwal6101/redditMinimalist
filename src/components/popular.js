import "../App.css";
import React from "react";

export function Popular() {
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
}
