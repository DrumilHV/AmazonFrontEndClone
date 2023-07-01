// import Books, { EventExample } from "./Books";
import Books from "./Books";
import Title from "./Title";
import { bookCatlog } from "./bookCatlog";
export const Booklist = () => {
  const getBook = (id) => {
    bookCatlog.forEach((buk) => {
      if (buk.id === id) {
        console.log(buk);
      }
    });
  };
  return (
    <>
      {/* <EventExample /> */}
      <Title />
      <section className="booklist">
        {bookCatlog.map((book, index) => {
          return (
            <Books {...book} key={book.id} getBook={getBook} index={index} />
          );
        })}
      </section>
    </>
  );
};
export default Booklist;
