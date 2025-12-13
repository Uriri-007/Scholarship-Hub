import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import Scholarship from './components/Scholarships'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "scholarships",
    element: <Scholarship />,
  },
  ])
  
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
