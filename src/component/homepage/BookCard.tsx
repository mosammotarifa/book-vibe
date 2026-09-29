
import { Itype } from "@/type/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BookCardProps {
  book: Itype;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden hover:shadow-2xl transition duration-300">
      
      {/* Book Image */}
      <figure className="bg-base-200 p-4">
        <Image
          src={book.image}
          alt={book.bookName}
          width={300}
          height={400}
          className="h-72 w-full object-contain rounded-lg"
        />
      </figure>

      {/* Book Information */}
      <div className="card-body">

        {/* Category */}
        <div className="badge badge-primary badge-outline">
          {book.category}
        </div>

        {/* Title */}
        <h2 className="card-title text-xl">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-base-content/70">
          By <span className="font-semibold">{book.author}</span>
        </p>

        {/* Publisher */}
        <p className="text-sm text-base-content/60">
          Publisher: {book.publisher}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-warning text-lg">★</span>
          <span className="font-semibold">{book.rating}</span>
          <span className="text-sm text-base-content/60">/ 5</span>
        </div>

        {/* Button */}
        <div className="card-actions mt-4">
         <Link  href={`/${book.bookId}`}>
              <button className="btn btn-primary w-full">
            View Details
          </button>
         </Link>
        </div>

      </div>
    </div>
  );
};

export default BookCard;

