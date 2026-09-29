import React from 'react';
import Image from 'next/image';
import heroPic from '@/assets/book-vibe.jpg'
import Link from 'next/link';
const Hero = () => {
  return (
  <div className="container mx-auto px-4 py-10">
    <div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-10 rounded-3xl bg-base-200 px-6 py-12 md:px-12 lg:px-20 shadow-sm">
      
      {/* Left Side */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Discover Your Next Read
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Books to freshen up your{" "}
          <span className="text-primary">bookshelf</span>
        </h1>

        <p className="text-base-content/70 text-lg max-w-xl">
          Explore amazing books, discover new authors, and find your next
          favorite story.
        </p>

       <Link href={'/allbook'} >
        <button className="btn btn-primary rounded-full px-8">
          View the Book List
        </button>
       </Link>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>

          <Image
            src={heroPic}
            width={300}
            height={400}
            alt="Book vibe"
            className="relative rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>

    </div>
  </div>
);
};

export default Hero;