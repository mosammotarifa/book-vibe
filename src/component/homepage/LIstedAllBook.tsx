import { Itype } from '@/type/type';
import Image from 'next/image';
import React from 'react';
interface IListedAllBook{
    read:Itype
}
const ListedAllBook = ({read}:IListedAllBook) => {
   
return (
  <div className="card card-side bg-base-100 shadow-lg border border-base-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
    {/* Book Image */}
    <figure className="w-40 md:w-48 shrink-0 bg-base-200">
      <Image
        src={read.image}
        alt={read.bookName}
        width={192}
        height={280}
        className="h-full w-full object-cover"
      />
    </figure>

    {/* Book Information */}
    <div className="card-body p-5">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="badge badge-primary badge-outline">
            {read.category}
          </span>

          <span className="text-sm text-gray-500">
            {read.totalPages} pages
          </span>
        </div>

        <h2 className="card-title text-2xl mb-1">
          {read.bookName}
        </h2>

        <p className="text-sm text-gray-500 mb-3">
          by <span className="font-medium text-base-content">{read.author}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="rating rating-sm">
            <input
              type="radio"
              className="mask mask-star-2 bg-orange-400"
              checked
              readOnly
            />
          </div>

          <span className="font-semibold">{read.rating}</span>
          <span className="text-sm text-gray-500">/ 5</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {read.tags.map((tag: string) => (
            <span key={tag} className="badge badge-ghost">
              #{tag}
            </span>
          ))}
        </div>

        {/* Extra information */}
        <div className="text-sm text-gray-500 space-y-1">
          <p>
            <span className="font-medium text-base-content">Publisher:</span>{" "}
            {read.publisher}
          </p>

          <p>
            <span className="font-medium text-base-content">Published:</span>{" "}
            {read.yearOfPublishing}
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="card-actions justify-end mt-4">
        <button className="btn btn-primary">
          Continue Reading →
        </button>
        <button className="btn btn-primary">
          view all Book details
        </button>
      </div>
    </div>
  </div>
);


};

export default ListedAllBook;