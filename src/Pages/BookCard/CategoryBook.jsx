import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryTypeAllBooks from "./CategoryTypeAllBooks";

const CategoryBook = () => {
    const [books,setBooks] = useState([]);
    const {id} = useParams();
    console.log(typeof(id));
    const allBook = useLoaderData();

    console.log(allBook)

    useEffect(()=>{
        const matchBook = allBook.filter((book) => book.category.toLowerCase() == id.toLowerCase() )
        setBooks(matchBook)
        
    },[]);
    
    console.log(books)

    return (
        <div  className="bg-rose-50">
            <h1 className="text-4xl text-center font-semibold py-5">Category Type All Books</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    books.map(book => <CategoryTypeAllBooks key={book._id} book={book} ></CategoryTypeAllBooks>)
                }
            </div>
        </div>
    );
};

export default CategoryBook;