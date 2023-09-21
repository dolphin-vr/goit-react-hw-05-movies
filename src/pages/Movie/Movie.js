import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { serviceGetMovieDetails } from "api";
import { Description } from "components/Description/Description";

export default function Movie (){
   const {id}= useParams();
   const [movie, setMovie] = useState({});
   const [loader, setLoader] = useState(false);
   const [error, setError] = useState(false);
 
   useEffect(() => {
     async function getDetails() {
       try {
         setLoader(true);
         setError(false);
         const responce = await serviceGetMovieDetails(id);
         setMovie(responce);
       } catch (error) {
         setError(true);
       } finally {
         setLoader(false);
       }
     }
     getDetails();
   });
   
   return (
      <div>
      {loader}
      {error}
         <Description movie={movie}/>
      </div>
   )
}