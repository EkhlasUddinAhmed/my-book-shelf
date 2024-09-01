import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BookDetails = () => {
  const navigate = useNavigate();
  const [wishBook, setWishBook] = useState([]);
  const [readBook, setReadBook] = useState([]);

  // JSon Data.............

  const myAllBooks = [
    {
      id: 1,
      bookName: "The Great Gatsby",
      authorName: "F. Scott Fitzgerald",
      pages: 180,
      publisher: "Charles Scribner's Sons",
      yearOfPublishing: 1925,
      imageLink: "https://example.com/great-gatsby.jpg",
    },
    {
      id: 2,
      bookName: "To Kill a Mockingbird",
      authorName: "Harper Lee",
      pages: 281,
      publisher: "J.B. Lippincott & Co.",
      yearOfPublishing: 1960,
      imageLink: "https://example.com/to-kill-a-mockingbird.jpg",
    },
    {
      id: 3,
      bookName: "1984",
      authorName: "George Orwell",
      pages: 328,
      publisher: "Secker & Warburg",
      yearOfPublishing: 1949,
      imageLink: "https://example.com/1984.jpg",
    },
    {
      id: 4,
      bookName: "Pride and Prejudice",
      authorName: "Jane Austen",
      pages: 279,
      publisher: "T. Egerton",
      yearOfPublishing: 1813,
      imageLink: "https://example.com/pride-and-prejudice.jpg",
    },
    {
      id: 5,
      bookName: "Moby-Dick",
      authorName: "Herman Melville",
      pages: 635,
      publisher: "Harper & Brothers",
      yearOfPublishing: 1851,
      imageLink: "https://example.com/moby-dick.jpg",
    },
    {
      id: 6,
      bookName: "War and Peace",
      authorName: "Leo Tolstoy",
      pages: 1225,
      publisher: "The Russian Messenger",
      yearOfPublishing: 1869,
      imageLink: "https://example.com/war-and-peace.jpg",
    },
    {
      id: 7,
      bookName: "The Catcher in the Rye",
      authorName: "J.D. Salinger",
      pages: 277,
      publisher: "Little, Brown and Company",
      yearOfPublishing: 1951,
      imageLink: "https://example.com/catcher-in-the-rye.jpg",
    },
    {
      id: 8,
      bookName: "The Lord of the Rings: The Fellowship of the Ring",
      authorName: "J.R.R. Tolkien",
      pages: 423,
      publisher: "George Allen & Unwin",
      yearOfPublishing: 1954,
      imageLink: "https://example.com/fellowship-of-the-ring.jpg",
    },
    {
      id: 9,
      bookName: "The Lord of the Rings: The Two Towers",
      authorName: "J.R.R. Tolkien",
      pages: 352,
      publisher: "George Allen & Unwin",
      yearOfPublishing: 1954,
      imageLink: "https://example.com/two-towers.jpg",
    },
    {
      id: 10,
      bookName: "The Lord of the Rings: The Return of the King",
      authorName: "J.R.R. Tolkien",
      pages: 416,
      publisher: "George Allen & Unwin",
      yearOfPublishing: 1955,
      imageLink: "https://example.com/return-of-the-king.jpg",
    },
  ];

  // Json Data...........

  const { id } = useParams();
  let book = myAllBooks.find((b) => b.id === parseInt(id));
  console.log({ choosenBook: book });

  const alReadyReadThisBook = (bookRead) => {
    const isExists = [...readBook].find((exists) => exists.id === bookRead.id);
    if (isExists) {
      toast("This Book Is Already Read");
    } else {
      console.log({ isExists });
      setReadBook([...readBook, bookRead]);
      toast("This Book Is Set To Read Successfully");
    }
  };


  const handleWishToRead=(wishToRead)=>{

    const alreadyRead=[...readBook].find(rb=>rb.id===wishToRead.id);
    if(alreadyRead){
        toast("This Book is Already Read")
    }else{
        const isExists = [...wishBook].find((exists) => exists.id === wishToRead.id);
        if (isExists) {
          toast("This Book Is Already Set In Wish List");
        } else {
          console.log({ isExists });
          setWishBook([...wishBook,wishToRead]);
          toast("This Book Is Set In Wish List Successfully");
        }
    }


   
  }

  return (
    <div className="grid grid-cols-2">
      <div>
        <h1 className="ml-7">{myAllBooks.length}</h1>
        <h1>{readBook?.length}</h1>
      </div>
      <div>
        <div className="card bg-blue-950 text-neutral-content w-96">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Book Name:{book?.bookName}</h2>
            <p>Author:{book?.authorName}</p>
            <p>Pages:{book?.pages}</p>
            <p>Publishers:{book?.publisher}</p>
            <p>YearOfPublishing:{book?.yearOfPublishing}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => alReadyReadThisBook(book)}
                className="btn btn-primary"
              >
                ReadBook
              </button>
              <button 
              
              onClick={()=>handleWishToRead(book)}
              
              className="btn btn-ghost">WishToRead</button>
              <button
                onClick={() => navigate(-1)}
                className="btn btn-active btn-neutral"
              >
                Back To Home
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BookDetails;
