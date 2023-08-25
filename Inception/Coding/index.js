const heading = React.createElement("p", { id: "head" }, "heading"); // first is html tag, second is for passing attribute and third one is child or content which go inside paragraph tag
//what is heading??
// heading -> ReactElement -> javaScript function
console.log(heading);

const heading1 = React.createElement("h1",{},"heading");
const child = React.createElement("div",{id:"child"},heading1);
const parent = React.createElement("div",{id:"parent"},child);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading1);









// exapmle

  /* <div>
    <h1>Food</h1>
    <ul>
        <li>tea</li>
        <li>coffe</li>
    </ul>
<div/> */


// const container = React.createElement("div", { class: "container" }, [
//   React.createElement("h1", {}, "Food"),
//   React.createElement("ul", {}, [
//     React.createElement("li", {}, "Tea"),
//     React.createElement("li", {}, "Coffee"),
//   ]),
// ]);
