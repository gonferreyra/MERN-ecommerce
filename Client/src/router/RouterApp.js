import { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from '../helpers/ScrollToTop'
import Home from '../pages/Home'
import Cart from '../components/Cart/Cart'
import { UserContext } from '../components/Context/UserContext'
import Footer from '../components/Footer/Footer'
import Login from '../components/Login/Login'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import SneakerItem from '../components/SneakersSection/SneakerItem/SneakerItem'
import Register from '../components/Login/Register/Register'
import { useDispatch, useSelector } from 'react-redux'
import { loginGoogle, startChecking } from '../redux/Auth/auth-actions'
import Spinner from '../components/Spinner/Spinner'
import Purchase from '../components/Purchase/Purchase'
import PrivateRoute from '../utils/PrivateRoute'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../firebase/firebase-config"
import { getProducts } from '../redux/Products/products-actions'


const RouterApp = () => {

    const { isOpen, toggle } = useContext(UserContext)

    const dispatch = useDispatch();
    const authState = useSelector(state => state.auth);
    const { checking, uid } = authState

    const productsAPIState = useSelector(state => state.products);
    const { loading } = productsAPIState;


    // const [isLoggedIn, setIsLoggedIn] = useState(false);


    // Keep auth state, renew token to keep login alive
    useEffect(() => {
        dispatch(startChecking());
        dispatch(getProducts());
    }, [dispatch])

    // API
    // useEffect(() => {
    //     const loadProducts = () => {
    //         dispatch(getProducts())
    //     }
    //     loadProducts()
    // }, [dispatch])


    // Keep state of user authenticated on reload. user? check if user has something, then look for user.uid
    const [googleLogin, setGoogleLogin] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.photoURL) {
                dispatch(loginGoogle(user.uid, user.displayName, user.photoURL))
                setGoogleLogin(true)
            } else {
                setGoogleLogin(false)
            }
            // setChecking(false)
        })
    }, [dispatch])

    // See what we can add - Spinner???
    if (checking || loading) {
        return (
            <Spinner />
        )
    }

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Cart googleLogin={googleLogin} />
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path='/product/:id' element={<SneakerItem />} />
                <Route path='/register' element={uid ? <Navigate to='/' /> : <Register />} />
                <Route path='/login' element={uid ? <Navigate to='/' /> : <Login />} />
                <Route element={<PrivateRoute />}>
                    <Route path='/exit' element={<Purchase />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouterApp