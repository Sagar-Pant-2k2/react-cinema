import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home"
import Movie from "./pages/Movie"
import Root from "./pages/Root"
const router = createBrowserRouter([
  {
    path: "/", element: <Root />, children: [
      { path: "/", element: <Home /> },
      { path: "/movie/:id", element: <Movie /> }
    ]
  }
])
export default () => {
  return <RouterProvider router={router} />
}

// http://api.themoviedb.org/3/movie/550?api_key=907a9983cf86e54d69fddbca9b092d1b