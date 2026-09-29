"use client"
import { Itype } from '@/type/type';
import React, {  createContext, ReactNode, useState } from 'react';
interface IBookDetails {
    readBook: Itype[];
    setReadBook: React.Dispatch<React.SetStateAction<Itype[]>>;
    wishlist: Itype[];
    setWishlist: React.Dispatch<React.SetStateAction<Itype[]>>;
}
 export const BookContext =createContext<IBookDetails> ({
    readBook:[],
    setReadBook:()=>[],
    wishlist:[],
    setWishlist:()=>[]

})
const BookProvider = ({children}:{children:ReactNode}) => {
    const [readBook, setReadBook]=useState<Itype[]>([])
    const [wishlist,setWishlist]=useState<Itype[]>([])
    const sharedData={
        readBook,
        setReadBook,
        wishlist,
        setWishlist
    }
    return (
        <BookContext.Provider  value={sharedData} >
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;