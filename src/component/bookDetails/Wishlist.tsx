'use client'
import { BookContext } from '@/context/BookProvider';
import { Itype } from '@/type/type';
import React, { useContext } from 'react';
interface IWishlist{
    book:Itype
}
const Wishlist = ({book}:IWishlist) => {
    const {wishlist,setWishlist}=useContext(BookContext)
    const handleWishlist=()=>{
        console.log('there is the handlewishlish')
        alert ('ther is wishlist added.')
        setWishlist([...wishlist,book])
    }
     const alreadywishlist= wishlist.some(
  item => item.bookId === book.bookId
)
    return (
        <button disabled={alreadywishlist} onClick={handleWishlist} className="btn btn-outline flex-1">
             {alreadywishlist ? 'already added to the wishlist':'add to the wishlish'}
            </button>
    );
};

export default Wishlist;