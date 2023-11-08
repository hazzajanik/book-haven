/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";


const AllBookDetails = ({ bookInfo }) => {
    const { _id, bookname, authorname, image, category, quantity, description, ratting } = bookInfo;

    return (
        <div>
            
            <div className="container mx-auto px-4 mt-8">
                <div className="card  bg-cyan-100">
                    <figure>
                        <img src={image} alt="Shoes" className="rounded-xl h-60 w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{bookname}</h2>
                        <p className="font-medium">({category})</p>
                        <p> <small className="font-semibold">{authorname}</small> </p>
                        <p className='flex items-center gap-2'>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>

                            <span>({ratting})</span></p>
                        <div className="card-actions">
                            <Link to={`/updatebook/${_id}`}>
                            <button className="btn bg-rose-500">Update</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBookDetails;