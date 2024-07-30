
// const heading = React.createElement(
//     "h1",
//     { id: "sudhanshu" },
//     "I am sudhanshu barnwal learning react js"
// )

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

// Now create this html structured

/*
    <div id="parent">
        <div id="child1">
            <h1>I am h1 tag</h1>
            <h2>I am h2 tag</h2>
        </div>
        <div id="child2">
            <h1>I am h1 tag</h1>
            <h2>I am h2 tag</h2>
        </div>
    </div>

*/

// React Element(Object) => HTML ( Browser Understands )

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "Sudhanshu barnwal is a good boy")]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]
    )
    ]
)
console.log(parent);
console.log(typeof (parent));

// JSX will going to used in react this is too much tough

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)