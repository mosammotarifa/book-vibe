import Image from 'next/image';
import React from 'react';
import { Itype } from '@/type/type';
import ReadBook from '@/component/bookDetails/ReadBook';
import Wishlist from '@/component/bookDetails/Wishlist';
const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching books data", error);
    return [];
  }
};
interface IBookDetails{
    params:{
        id:string
    }
}

const BookDetails = async({params}:IBookDetails) => {
    const {id} =await (params)
    const books = await getBooks()
    const book=books.find((book:Itype)=>book.bookId===Number(id))
    if(!book){
         return <div>Book not found</div>;
    }
   return (
  <div className="min-h-screen bg-base-200 py-10">
    <div className="mx-auto max-w-6xl px-4">
      <div className="card overflow-hidden bg-base-100 shadow-2xl lg:card-side">

        {/* Book Image */}
        <figure className="bg-base-300 p-8 lg:w-2/5">
          <Image
            src={book.image}
            alt={book.bookName}
            width={400}
            height={600}
            className=" w-auto rounded-lg object-cover shadow-xl"
          />
        </figure>

        {/* Book Details */}
        <div className="card-body lg:w-3/5">

          {/* Category */}
          <div>
            <span className="badge badge-primary badge-lg">
              {book.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="text-lg text-base-content/60">
            By{" "}
            <span className="font-semibold text-base-content">
              {book.author}
            </span>
          </p>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xl text-warning">★</span>
            <span className="font-bold">{book.rating}</span>
            <span className="text-base-content/50">/ 5</span>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {book.tags?.map((tag:string) => (
              <span
                key={tag}
                className="badge badge-outline"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Review */}
          <div className="divider"></div>

          <div>
            <h2 className="mb-2 text-xl font-bold">
              About This Book
            </h2>

            <p className="leading-7 text-base-content/70">
              {book.review}
            </p>
          </div>

          {/* Book Information */}
          <div className="divider"></div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

            <div>
              <p className="text-sm text-base-content/50">
                Publisher
              </p>
              <p className="font-semibold">
                {book.publisher}
              </p>
            </div>

            <div>
              <p className="text-sm text-base-content/50">
                Published
              </p>
              <p className="font-semibold">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-sm text-base-content/50">
                Pages
              </p>
              <p className="font-semibold">
                {book.totalPages}
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="card-actions mt-6 flex-col sm:flex-row">
           <ReadBook book={book} />

            <Wishlist  book={book} />
          </div>

        </div>
      </div>
    </div>
  </div>
);
};

export default BookDetails;