import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailFood from "./pages/DetailFood";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./component/ProtectedRoute";
import NoFound from "./pages/NoFound";
import Search from "./pages/Search";
import SearchName from "./pages/SearchName";
import CategoryPage from "./pages/CategoryPage";
import Favorite from "./pages/Favorite";
import DetailItem from "./pages/DetailItem";
import Intructions from "./component/Intructions";

const Routers = () => {

  return (
    <>
      <BrowserRouter>
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
            element={ <ProtectedRoute>   <DetailItem /> </ProtectedRoute>
            } >
          <Route path="instruction"   element={
              <ProtectedRoute>
                <Intructions />
              </ProtectedRoute>
            }  />
          </Route>
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
          <Route path="*" element={
            <NoFound />
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;