import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import CategoryBook from "../Pages/BookCard/CategoryBook";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Error from "../Components/Error/Error";
import DetailsOneBook from "../Components/Details/DetailsOneBook";
import UpdateBook from "../Components/UpdateBook/UpdateBook";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import PrivateRoute from "./PrivateRoute";
import ReadDetail from "../Components/ReadDetail/ReadDetail";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('https://book-haven-server.vercel.app/bookData'),
        },
        {
            path: '/addbook',
            element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
        {
            path: '/allbooks',
            element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
            loader: ()=> fetch('https://book-haven-server.vercel.app/book'),
        },
        {
            path: '/book/:id',
            element: <CategoryBook></CategoryBook>,
            loader: ()=> fetch('https://book-haven-server.vercel.app/book'),
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/books/:id',
          element: <PrivateRoute><DetailsOneBook></DetailsOneBook></PrivateRoute>,
          loader: ({params})=> fetch(`https://book-haven-server.vercel.app/books/${params.id}`),
        },
        {
          path: '/updatebook/:id',
          element: <UpdateBook></UpdateBook>,
          loader: ({params})=> fetch(`https://book-haven-server.vercel.app/books/${params.id}`),
        },
        {
          path: '/borrowbooks',
          element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
          loader: ()=> fetch('https://book-haven-server.vercel.app/borrowBook'),
        },
        {
          path: '/read',
          element: <ReadDetail></ReadDetail>
        }
      ]
      

    },
  ]);

export default router;