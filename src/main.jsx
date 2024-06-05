import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([ // createBrowserRouter is a function that takes an array of route objects
  {
    path: '/', // path is the URL path that the route responds to// will render the App component
    element: <App />,
    errorElement: <Error/>, // errorElement is the component that will be rendered if the route encounters an error //fallback route 
    children: [
      {
        index: true, // index is a boolean that indicates whether the route is the default route for the parent route
        element: <About />, // element is the component that will be rendered when the route is accessed// takes place of outlet 
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
        {
            path: '/Resume',
            element: <Resume />,
        },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> // RouterProvider is a component that takes a router object as a prop
);
