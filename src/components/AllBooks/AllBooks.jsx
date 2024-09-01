import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch('allBooks.json')
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>Number of Books:{allBooks.length}</h1>
      <div className="grid grid-cols-3 gap-4">
        {
            allBooks.map(book=><BookCard key={book.id} book={book}></BookCard>)
        }
      </div>
    </div>
  );
};

export default AllBooks;
