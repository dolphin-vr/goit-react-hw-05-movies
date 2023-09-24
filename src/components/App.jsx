import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { GlobalStyle } from "./GlobalStyle";
const Home = lazy(()=> import("pages/Home/Home"));
const Movies = lazy(()=> import("pages/Movies/Movies"));
const Movie = lazy(()=> import("pages/Movie/Movie"));
const Cast = lazy(()=> import("./Cast/Cast"));
const Review = lazy(()=> import("./Review/Review"));

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies/>}/>
        <Route  path="movies/:id" element={<Movie/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="review" element={<Review/>}/>
        </Route>
      </Route>
    </Routes>
    <GlobalStyle />
    </>
  );
};
