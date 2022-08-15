import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import { auth } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import ProtectedRoute from "./component/ProtectedRoute";
import NoFound from "./pages/NoFound";
import Loading from "./component/Loading";
// import Home from "./pages/Home";
// import Search from "./pages/Search";
// import SearchName from "./pages/SearchName";
// import CategoryPage from "./pages/CategoryPage";
// import Favorite from "./pages/Favorite";
// import DetailItem from "./pages/DetailItem";
const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const Favorite = lazy(() => import("./pages/Favorite"));
const SearchName = lazy(() => import("./pages/SearchName"));
const DetailItem = lazy(() => import("./pages/DetailItem"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

const Routers = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, loading] = useAuthState(auth);


    return (
      <>
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/search"
              element={
                <ProtectedRoute>
                  <Search />
                </ProtectedRoute>
              }
            />
            <Route
              path="/search/category/:name"
              element={
                <ProtectedRoute>
                  <CategoryPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/favorite"
              element={
                <ProtectedRoute>
                  <Favorite />
                </ProtectedRoute>
              }
            />
            <Route
              path="/search/:name"
              element={
                <ProtectedRoute>
                  <SearchName />
                </ProtectedRoute>
              }
            />
            <Route
              path="/detailfood/:id"
              element={
                <ProtectedRoute>
                  <DetailItem />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <ProtectedRoute loginOnly={false}>
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute loginOnly={false}>
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NoFound />} />
          </Routes>
           </Suspense>
        </BrowserRouter>
      </>
    );
  };

export default Routers;
