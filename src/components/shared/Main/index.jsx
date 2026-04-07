import { useState } from "react";
import books from "../../../utils/books";


export default function Main() {

  const [bookList, setBookList] = useState(books);

  const addBook = () => {
    const newBook = {
      id: bookList.length + 1,
      title: "New Book",
      author: "Unknown Author",
      year: 2024,
      description: "This is a new book added to the list.",
      image: "https://via.placeholder.com/150"
    };
    setBookList([...bookList, newBook]);
  };

    return (

        <>
        <main>

          {/* JUDUL / HERO */}
          <section className="py-5 text-center container" id="book">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">

                <h1 className="fw-light">Best Selling Book</h1>

                <p className="lead text-body-secondary">
                  Something short and leading about the collection below—its contents,
                  the creator, etc. Make it short and sweet, but not too short so folks
                  don’t simply skip over it entirely.
                </p>

                <p>
                  <a href="#" className="btn btn-primary my-2 m-2">Views</a>
                  <a href="#" className="btn btn-secondary my-2">Other Book</a>
                </p>

              </div>
            </div>
          </section>

          {/* PRODUCT SECTION */}
          <section className="py-5 bg-body-tertiary">
            <div className="container">

              <h2 className="text-center mb-4">
                Total Books: {bookList.length}
              </h2>


              <div className="text-center mb-4">
                <button className="btn btn-success" onClick={addBook}>
                  Add Book
                </button>
              </div>


              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                  {bookList.map((book) => (
                    <div className="col" key={book.id}>
                      <div className="card shadow-sm h-100">

                        <img 
                          src={book.image}
                          className="card-img-top"
                          height="300"
                          style={{objectFit:"cover"}}
                        />

                        <div className="card-body">
                          <h5 className="card-title">{book.title}</h5>

                          <p className="card-text">
                            {book.description}
                          </p>

                          <p>Author: {book.author}</p>
                          <p>Year: {book.year}</p>

                          <div className="btn-group">
                            <button className="btn btn-sm btn-outline-primary me-2">View</button>
                            <button className="btn btn-sm btn-outline-secondary">Edit</button>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}


              </div>

            </div>
          </section>


        </main>
        </>
        
    )
}