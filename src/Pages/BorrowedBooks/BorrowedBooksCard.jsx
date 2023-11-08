/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import toast from "react-hot-toast";

const BorrowedBooksCard = ({borrowBook}) => {
    const {_id, bookname, authorname, image, category, quantity, description, ratting } = borrowBook;

    const handleDelete = ( id ) => {
        fetch(`https://book-haven-server.vercel.app/borrowBook/${id}`,{
            method:"DELETE",

        })
        .then(res => res.json())
        .then(data => 
            
           {
            if(data){
            toast.success("Successfully Deleted!")
            }
           }
            
            )
    }

    return (
        <div>
            <div className="card bg-cyan-100">
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
                            
                            <button onClick={()=>handleDelete(_id)} className="btn bg-rose-500">Return</button>
                            
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default BorrowedBooksCard;