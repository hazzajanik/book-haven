import { useLoaderData } from "react-router-dom";
import AllBookDetails from "./AllBookDetails";

const AllBooks = () => {
    const booksInfo = useLoaderData();
    
    return (
        <div className="bg-rose-50">
            <h1 className="text-5xl font-semibold text-center pt-7 ">All Category Book</h1>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
            {
                booksInfo.map(bookInfo => <AllBookDetails key={bookInfo._id} bookInfo={bookInfo}  ></AllBookDetails>)
            }
        </div>
        </div>
    );
};

export default AllBooks;