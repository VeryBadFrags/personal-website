import "./index.scss";
import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Dynamic background
// const startColor = [76, 86, 106]; // #4C566A nord3
// const endColor = [59, 66, 82]; // #434C5E nord1

// document.body.style.backgroundColor = `rgba(${startColor[0]}, ${startColor[1]}, ${startColor[2]}, 1)`;

// window.addEventListener("scroll", () => {
//   let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   let height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   let scrolled = (winScroll / height) * 100;

//   let newColors = [];
//   for (let i = 0; i < 3; i++) {
//     newColors[i] =
//       startColor[i] + ((endColor[i] - startColor[i]) * scrolled) / 100;
//   }

//   document.body.style.backgroundColor = `rgba(${newColors[0]}, ${newColors[1]}, ${newColors[2]}, 1)`;
// });
