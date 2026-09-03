import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Send from './components/Send/Send'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'
import Pizza from './components/Pizza/Pizza'

function App() {
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'send', element: <Send /> },
      { path: 'pizza', element: <Pizza /> },
    ]
  }
]);

  return (
    <>
        <RouterProvider router={routes}/>
    </>
  )
}
export default App
