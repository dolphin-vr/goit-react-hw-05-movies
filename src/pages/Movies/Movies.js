import { serviceSerchMovie } from "api";
import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchBox } from "components/SearchBox/SearchBox";
import { ErrMsg } from "components/SharedLayout.styled";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function Movies (){
   const [movies, setMovies] = useState([]);
   const [loader, setLoader] = useState(false);
   const [error, setError] = useState(false);
   const [searchParams, setSearchParams] = useSearchParams();
   const query= searchParams.get('query') ?? '';

   const handleSubmit = (ev)=>{
      ev.preventDefault();
      // .replace(' ', '%20')
      searchParams.set('query', ev.target.search.value)
      setSearchParams(searchParams);
   }
 
   const controllerRef = useRef();
   useEffect(() => {
      if (query==='') return;
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();
 
     async function getMovies() {
       try {
         setLoader(true);
         setError(false);
         const responce = await serviceSerchMovie(query, controllerRef.current.signal);
         setMovies(responce.results);
       } catch (error) {
          if (error.code !== 'ERR_CANCELED') {setError(true)};
       } finally {
         setLoader(false);
       }
     }
     getMovies();
 
     return () => { controllerRef.current.abort() };
   }, [query]);

   const showMovies = !!movies;

   return (
      <div>
         {loader && <Loader />}
         <SearchBox onSubmit={handleSubmit}/>
         {showMovies && <MoviesList movies={movies} />}
         {error && <ErrMsg>Sorry, something went wrong. Try reload page</ErrMsg>}
      </div>
   )
}
