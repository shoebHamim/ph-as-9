import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './Components/Home/Home'
import Quiz from './Components/Quiz/Quiz';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './Components/Blog/Blog';
import Stat from './Components/Stat/Stat';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},
        { path: '/home', element: <Home></Home> },
        {path:'/quiz/:quizId',
        loader: async({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        element:<Quiz></Quiz>
      },{
        path:'/blog',
        element:<Blog></Blog>
      },{
        path:'/statistics',
        loader: async()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Stat></Stat>
      }
      ]
    },{
      path:'/*',element:<div className='text-center text-xl'> 404 Not Found! <br /> This path doesn't exist</div>
    }

  ])
  return (
    <div className="App font-mono   mb-20 ">
      {/* <Home></Home> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
