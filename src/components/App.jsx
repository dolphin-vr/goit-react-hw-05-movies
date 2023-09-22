import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { GlobalStyle } from "./GlobalStyle";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import Movie from "pages/Movie/Movie";

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies/>}/>
        <Route  path="movies/:id" element={<Movie/>}/>
      </Route>
    </Routes>
    <GlobalStyle />
    </>
  );
};
