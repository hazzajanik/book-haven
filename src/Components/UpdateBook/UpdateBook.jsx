/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateBook = () => {

    const updatedIdData = useLoaderData();
    console.log(updatedIdData);
    const { bookname, image, category, ratting, authorname } = updatedIdData;
    const { id } = useParams();
    console.log(id)

    const hundleUpdateBook = (event) => {
        event.preventDefault();

        const form = event.target;
        const bookname = form.bookname.value;
        const image = form.image.value;
        const category = form.category.value;
        const ratting = form.ratting.value;
        const authorname = form.authorname.value;

        const newbook = { bookname, image, category, ratting, authorname }
        console.log(newbook)

        // send data to the server
        fetch(`https://book-haven-server.vercel.app/books/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newbook)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Updated successfully')
                console.log(data)


            })


    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="md:w-1/2">
                    <form onSubmit={hundleUpdateBook} className="card-body bg-rose-100">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Book Name</span>
                            </label>
                            <input type="text" name="bookname" defaultValue={bookname} placeholder="Book Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Author Name</span>
                            </label>
                            <input type="text" name="authorname" defaultValue={authorname} placeholder="Author Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered" required />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            {/* <input type="text" name="category" defaultValue={category} placeholder="Category Name" className="input input-bordered" required /> */}

                            <select type="text" name="category" defaultValue={category} id="dog-names">
                                <option value="Thriller">
                                    Thriller
                                </option>
                                <option value="History">
                                    History
                                </option>
                                <option value="Science">
                                    Science
                                </option>
                                <option value="Drama">
                                    Drama
                                </option>
                            </select>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="ratting" defaultValue={ratting} placeholder="Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-cyan-500 rounded-3xl text-white font-semibold hover:bg-rose-500">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBook;