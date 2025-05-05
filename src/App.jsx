import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Jobs from './pages/Jobs';
import JobDescription from './pages/JobDescription';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Companies from './pages/admin/Companies';
import CreateCompany from './pages/admin/CreateCompany';
import SetupCompany from './pages/admin/SetupCompany';
import JobsAdmin from './pages/admin/JobsAdmin';
import PostJob from './pages/admin/PostJob';
import Applicants from './components/Applicants';
import Browse from './pages/Browse';


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
    element: <ProtectedRoute><Companies/></ProtectedRoute>
  },
  {
    path: "/admin/companies/create",
    element: <ProtectedRoute><CreateCompany/></ProtectedRoute>
  },
  {
    path: "/admin/companies/:id",
    element: <ProtectedRoute><SetupCompany/></ProtectedRoute>
  },
  {
    path: "/admin/jobs",
    element: <ProtectedRoute><JobsAdmin/></ProtectedRoute>
  },
  {
    path: "/admin/jobs/create",
    element: <ProtectedRoute><PostJob/></ProtectedRoute>
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: <ProtectedRoute><Applicants/></ProtectedRoute>
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
