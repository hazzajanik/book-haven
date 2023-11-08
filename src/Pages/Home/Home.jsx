import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import BookCard from "../BookCard/BookCard";
import AuthorSpotlight from "../../Components/AuthorSpotlight/AuthorSpotlight";
import ContactUs from "../../Components/ContactUs/ContactUs";

const Home = () => {
    const books = useLoaderData();
    console.log(books)
    return (
        <div>
            <div>
            <Header></Header>
            </div>
            <h1 className="text-center my-5 font-bold text-4xl">Book Category</h1>
            <div className="grid lg:grid-cols-4 gap-10 container mx-auto px-10">

                {
                    books.map(book => <BookCard key={book._id} book={book} ></BookCard>)
                }

            </div>

            <AuthorSpotlight></AuthorSpotlight>

            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;