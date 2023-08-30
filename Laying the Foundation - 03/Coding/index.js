import React from "react";
import ReactDOM from "react-dom";

// React.createElement => ReactElement(Js Object) => HTMLElement(render)
const heading = React.createElement("h1", {}, "Heading");



//through ReactElement
const nested = React.createElement("div", {}, [
  React.createElement("h1", { class: "title" }, "heading1"),
  React.createElement("h2", { class: "title" }, "heading2"),
  React.createElement("h3", { class: "title" }, "heading3"),
]);

//through jsx
const nested1 = (
  <div>
    <h1>Heading12</h1>
    <h2>Heading23</h2>
    <h3>Heading34</h3>
  </div>
);

//through component
const nested2 = () => {
  return (
    <>
      <div>
      {nested}
      {nested1}
        <h1>Heading123</h1>
        <h2>Heading23</h2>
        <h3>Heading34</h3>
      </div>
    </>
  );
};


// JSX(transpiled before it reaches the JS) - Parcel - Babel
//JSX => React.creatElement => ReactElement(Js Object) => HTML-Element(render).
const newHeading = <h1>Welcome</h1>; //jsx

const Title = () => {
  return (
    <>
      {heading}
      <h1>heading</h1>
    </>
  );
};


// ---- for testing purpose -----
const Test = ()=>{
  return(
    <>
      { React.createElement("h1", {}, "Heading")}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Test />);
