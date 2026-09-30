import { Itype } from '@/type/type';
import React from 'react';
import BookCard from './BookCard';
import booksData from '@/data/booksData.json'

// const getBooks = async ()=> {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`
//     );

//     const data = await res.json();

//     return data;
//   } catch (error) {
//     console.error("Error fetching books data", error);
//     return [];
//   }
// };
const Books = () => {
    const book:Itype[] = booksData;
   return (
  <section className="min-h-screen bg-base-200 py-10">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      {/* Section Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Explore Our Popular Books
        </h1>

        <p className="mt-3 text-base-content/60">
          Discover your next favorite book from our collection.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {book .slice(0,6).map((book:Itype) => (
          <BookCard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>

    </div>
  </section>
);
};

export default Books;