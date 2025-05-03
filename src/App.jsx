import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CreateCompany from './components/admin/CreateCompany'
import SetupCompany from './components/admin/SetupCompany'
import JobsAdmin from './components/admin/JobsAdmin'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/jobs',
    element: <Jobs/>
  },
  {
    path: '/jobs/:id',
    element: <JobDescription/>
  },
  {
    path: '/browse',
    element: <Browse/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },

  //admin
  {
    path: "/admin/companies",
    element: <Companies/>
  },
  {
    path: "/admin/companies/create",
    element: <CreateCompany/>
  },
  {
    path: "/admin/companies/:id",
    element: <SetupCompany/>
  },
  {
    path: "/admin/jobs",
    element: <JobsAdmin/>
  },
 
]);
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
