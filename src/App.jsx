import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/ContactUs/ContactUs'
import GiveRent from './pages/GiveRent/GiveRent'
import HowToRent from './pages/HowToRent/HowToRent'
import Caravans from './pages/Caravans/Caravans'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import FaqPage from './pages/FaqPage/FaqPage'
import Blog from './pages/Blog/Blog'
import BlogDetails from './pages/BlogDetails/BlogDetails'
import Admin from './pages/Admin/Admin'
import CookiesPage from './pages/CookiesPage/CookiesPage'
import AboutUs from './pages/AboutUs/AboutUs'
import { useContext } from 'react'
import { AuthContext } from './context/authContext'
import CaravanDetails from './pages/CaravanDetails/CaravanDetails'
import KirayaVerin from './pages/KirayaVerin/KirayaVerin'
import Favori from './pages/Profile/Favori'
import EditPanel from './pages/Profile/EditPanel'
import Adverts from './pages/Profile/Adverts'
import AdvertEdit from './pages/Profile/EditAdvert'
import RentedCaravans from './pages/Profile/RentedCaravans'
import CaravanReserve from './pages/CaravanReserve/CaravanReserve'
import EkUrunler from './pages/CaravanReserve/EkUrunler'
import CreditCard from './pages/CaravanReserve/CreditCard'
import Completed from './pages/CaravanReserve/Completed'
import AdminCaravan from './pages/Admin/AdminCaravan'
import AdminUsers from './pages/Admin/AdminUsers'
import AdminBlogs from './pages/Admin/AdminBlogs'
import Footer from './components/Footer/Footer'
import CaravanUpdate from './pages/Admin/CaravanUpdate'
import BlogUpdate from './pages/Admin/BlogUpdate'
import AdminRentReq from './pages/Admin/AdminRentReq'
import AdminCommentApprove from './pages/Admin/AdminCommentApprove'
import AdminComments from './pages/Admin/AdminComments'
import AdminRentedCaravan from './pages/Admin/AdminRentedCaravan'
import RentedHistory from './pages/Profile/RentedHistory'
import NavbarWhite from './components/NavBar/NavbarWhite'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Ad from './pages/Ad/Ad'


const App = () => {

  const { currentUser } = useContext(AuthContext)


  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }


  const MainLayout = () => {
    return (
      <div>
        <Outlet />
        <Footer bg='white' />
      </div>
    )
  }

  const AdminLayout = () => {
    return (
      <div>
          <Outlet />
      </div>
    )
  }

  const ProfileLayout = () => {
    return (
      <div>
        <ProtectedRoute>
          <NavbarWhite />
          <Outlet />
        </ProtectedRoute>
      </div>
    )
  }


  const router = createBrowserRouter([


    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/admin/caravans",
          element: <AdminCaravan />,
        },
        {
          path: "/admin/caravans/update/:id",
          element: <CaravanUpdate />,
        },
        {
          path: "/admin/users",
          element: <AdminUsers />,
        },
        {
          path: "/admin/blogs",
          element: <AdminBlogs />,
        },
        {
          path: "/admin/blogs/update/:id",
          element: <BlogUpdate />,
        },
        {
          path: "/admin/rent-request",
          element: <AdminRentReq />,
        },
        {
          path: "/admin/comments",
          element: <AdminComments />,
        },
        {
          path: "/admin/comments-approve",
          element: <AdminCommentApprove />,
        },
        {
          path: "/admin/rented-caravan",
          element: <AdminRentedCaravan />,
        }
      ]
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/nasil-kiralarim",
          element: <GiveRent />
        },
        {
          path: "/nasil-kiraya-veririm",
          element: <HowToRent />
        },
        {
          path: "/kiralik-karavanlar",
          element: <Caravans />
        },
        {
          path: "/bize-ulasin",
          element: <Contact />
        },
        {
          path: "/kvkk-cerezler",
          element: <CookiesPage />
        },

        {
          path: "/about-us",
          element: <AboutUs />
        },
        {
          path: "/faq",
          element: <FaqPage />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/blog/:blogId",
          element: <BlogDetails />,
        },
        {
          path: "/caravan/:id",
          element: <CaravanDetails />,
        },
      ]
    },
    {
      path: '/',
      element: <ProfileLayout />,
      children: [
        {
          path: "/caravan-rezerve/:id",
          element: <CaravanReserve />,
        },
        {
          path: "/kiraya-verin",
          element: <KirayaVerin />
        },
        {
          path: "/caravan-rezerve/ek-urunler/:id",
          element: <EkUrunler />,
        },
        {
          path: "/caravan-rezerve/credit-card/:id",
          element: <CreditCard />
        },
        {
          path: "/caravan-rezerve/complete",
          element: <Completed />
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/profile/favorite",
          element: <Favori />,
        },
        {
          path: "/profile/edit",
          element: <EditPanel />,
        },
        {
          path: "/profile/adverts",
          element: <Adverts />,
        },
        {
          path: "/profile/adverts/edit/:id",
          element: <AdvertEdit />,
        },
        {
          path: "/profile/rented-caravans",
          element: <RentedCaravans />,
        },
        {
          path: "/profile/rented-history",
          element: <RentedHistory />,
        },

      ]
    },

    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/sign-up",
      element: <Signup />
    },
    {
      path: "*",
      element: <PageNotFound />
    },
    {
      path: "/ad-caravinn",
      element: <Ad />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App