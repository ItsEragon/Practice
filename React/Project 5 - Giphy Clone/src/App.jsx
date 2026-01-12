import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import HomePage from './pages/HomePage'
import Categories from './pages/Categories'
import Search from './pages/Search'
import SingleGif from './pages/SingleGif'
import Favourites from './pages/Favourites'
import GifProvider from './context/GifContext'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/:category',
        element: <Categories />
      },
      {
        path: '/search/:query',
        element: <Search />
      },
      {
        path: '/:type/:slug',
        element: <SingleGif />
      },
      {
        path: '/favourites',
        element: <Favourites />
      },
    ]
  }
])

function App() {

  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  )
}

export default App
