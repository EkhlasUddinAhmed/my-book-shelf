import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BookCard = ({ book }) => {
  const {
    id,
    bookName,
    authorName,
    pages,
    publisher,
    yearOfPublishing,
    imageLink,
  } = book;
  return (
    <Link to={`/bookdetails/${id}`}>
      <div className="m-5">
        <div className="card w-96 shadow-xl bg-orange-100">
          <div className="card-body">
            <h2 className="card-title">{bookName}</h2>
            <p>{authorName}</p>
            <p>{id}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
