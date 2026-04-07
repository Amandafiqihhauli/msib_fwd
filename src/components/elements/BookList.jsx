import books from "../../../utils/books";
import { useState } from "react";
import BookCard from "../../elements/BookCard";
import BookList from "../../elements/BookList";


const BookList = () => {
  const [bookList, setBookList] = useState(books);

  return (
    <div className="row">
      {bookList.map((book) => (
        <div className="col-md-4 mb-4" key={book.id}>
          <BookCard
            title={book.title}
            author={book.author}
            year={book.year}
            description={book.description}
            image={book.image}
          />
        </div>
      ))}
    </div>
  );
};

export default BookList;

src/components/elements/BookList.jsx