import React from "react";
// import { ReactDOM } from "react-dom";
// import bookCatlog from "./bookCatlog";
// import Booklist from "./Booklist";
// export const EventExample = () => {
//   const handleFormInput = (e) => {
//     console.log("Change happen!!");
//     console.log(e.target.name);
//     console.log(e.target.value);
//   };
//   return (
//     <section>
//       <h2 style={{ marginLeft: "1rem" }}>Some kind of Form </h2>
//       <form action="">
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: "1rem", fontSize: "2rem", color: "red" }}
//         />
//       </form>
//       <button style={{ marginLeft: "1rem" }}>click Me</button>
//     </section>
//   );
// };

const Books = (props) => {
  const { title, auther, image, index, id } = props;
  // const displayTitle = () => {
  //   console.log(title);
  // };
  // const getSingleBook = () => {
  //   getBook(id);
  // };
  return (
    <div>
      <article className="book">
        <img src={image} alt={title} id={id} />
        <h1>{title}</h1>
        {/* <button onClick={() => getBook(id)}>click Me</button> */}
        <h4>{auther}</h4>
        <span className="number">{`#${index + 1}`}</span>
      </article>
    </div>
  );
};

export default Books;
