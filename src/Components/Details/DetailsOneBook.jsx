/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const DetailsOneBook = () => {
    const oneBookData = useLoaderData();

    // console.log(oneBookData)
    const { bookname, authorname, image, category, quantity, description, ratting } = oneBookData;

    const hundleBorrow = () =>{
        const oneBook = {bookname, authorname, image, category, quantity, description, ratting}
        console.log(oneBook)
        // send data to database 
        fetch('https://book-haven-server.vercel.app/borrowBook',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(oneBook)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                toast.success('Successfully Borrow!')
            }
        })
    }

    return (
        <div>
            
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <img className="h-96 w-[300px] mx-auto mb-10  " src={image} alt="" />
                        <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">{bookname}</h2>
                        <p className="text-gray-500">{authorname}</p>
                        <p className="leading-relaxed text-lg"> {description} Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy  cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO  pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                        <div className="flex gap-5 items-center justify-center">
                        <button onClick={hundleBorrow} className="btn bg-rose-500">Borrow</button>
                        <button className="btn bg-rose-500">Read</button>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailsOneBook;