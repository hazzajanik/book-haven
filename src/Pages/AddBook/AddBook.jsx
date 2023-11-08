/* eslint-disable no-undef */
import toast from "react-hot-toast";


const AddBook = () => {
    const hundleAddBook = (event) =>{
        event.preventDefault();

        const form = event.target;
        const bookname = form.bookname.value;
        const image = form.image.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const ratting = form.ratting.value;
        const authorname = form.authorname.value;

        const newbook = {bookname: bookname,authorname, image,category,quantity,description,ratting}
        console.log(newbook)

        // send data to server
        fetch('https://book-haven-server.vercel.app/book',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newbook)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                toast.success('Successfully toasted!')
            }
        })

    }
    return (
        <div>
            <div className="flex justify-center">
                <div className="md:w-1/2">
                    <form  onSubmit={hundleAddBook} className="card-body bg-rose-100">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Book Name</span>
                            </label>
                            <input type="text" name="bookname" placeholder="Book Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Author Name</span>
                            </label>
                            <input type="text" name="authorname" placeholder="Author Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Category Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Quantity of the book</span>
                            </label>
                            <input type="text" name="quantity" placeholder=" Quantity of the book" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="ratting" placeholder="Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-cyan-500 rounded-3xl text-white font-semibold hover:bg-rose-500">Add Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;