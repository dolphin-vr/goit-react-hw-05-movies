import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { GlobalStyle } from "./GlobalStyle";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import Movie from "pages/Movie/Movie";
import { Cast } from "./Cast/Cast";
import { Review } from "./Review/Review";

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
