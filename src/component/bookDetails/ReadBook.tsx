'use client'
import { BookContext } from '@/context/BookProvider';
import { Itype } from '@/type/type';
import React, { useContext } from 'react';
interface IReadBook{
    book:Itype
}
const ReadBook = ({book}:IReadBook) => {
    const {readBook,setReadBook}=useContext(BookContext)
    const handleReadBook=()=>{
        console.log(' not added the handleReadBook')
        alert('woooo added the ReadBook Button.')
        setReadBook([...readBook,book])
    }
    const alreadyRead = readBook.some(
  item => item.bookId === book.bookId
)
    return (
        <button   disabled={alreadyRead} onClick={handleReadBook} className="btn btn-primary flex-1">
             {alreadyRead ? 'already read':'read Book'}
            </button>
    );
};

export default ReadBook;