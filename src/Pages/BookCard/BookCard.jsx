/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";



const BookCard = ({ book }) => {
    const { img, category } = book;
    return (
        <div>
            <div className="card bg-base-50 shadow-xl image-full">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body gap-5 flex items-center justify-center">
                        <h2 className="card-title text-5xl  ">{category}</h2>
                        <Link to={`/book/${category}`}>
                        <button className="bg-rose-500 rounded-2xl py-3 px-10">Show More</button>
                        </Link>
                    </div>
                </div>
        </div>
    );
};

export default BookCard;