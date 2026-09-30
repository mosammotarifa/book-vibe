"use client";

import { BookContext } from "@/context/BookProvider";
import ListedAllBook from "@/component/homepage/LIstedAllBook";
import React, { useContext, useState } from "react";
import { Itype } from "@/type/type";

const ListedBook = () => {
  const { readBook, wishlist } = useContext(BookContext);

  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  // console.log(sortBy, 'sortBy');

  const sortBooks = (book: Itype[]) => {
    const sortedBooks = [...book];
    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };

  const sortedReadBooks=sortBooks(readBook)
  const sortedWishlist =sortBooks(wishlist)
  return (
    <div>
      <div className="text-center">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          className="select select-accent text-center"
        >
          <option value="rating">Rating</option>
          <option value="pages">Page of Book</option>
          <option value="year">Year of Publishing</option>
        </select>
      </div>

      <div className="tabs tabs-border">
        {/* Read Books */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`readBook ${readBook.length}`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortedReadBooks.length
            ? sortedReadBooks.map((read) => (
                <ListedAllBook key={read.bookId} read={read} />
              ))
            : "not found"}
        </div>

        {/* Wishlist */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`wishlist ${wishlist.length}`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortedWishlist.length
            ? sortedWishlist.map((read) => (
                <ListedAllBook key={read.bookId} read={read} />
              ))
            : "not found"}
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
