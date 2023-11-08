import { useLoaderData } from "react-router-dom";
import BorrowedBooksCard from "./BorrowedBooksCard";

const BorrowedBooks = () => {

    const borrowBooks = useLoaderData();
    console.log(borrowBooks);


    return (
        <div className="container mx-auto px-3">
            <h1 className="text-4xl text-cyan-500 text-center font-semibold py-5"> All Borrow Books</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    borrowBooks.map(borrowBook => <BorrowedBooksCard key={borrowBook._id} borrowBook={borrowBook} ></BorrowedBooksCard>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;