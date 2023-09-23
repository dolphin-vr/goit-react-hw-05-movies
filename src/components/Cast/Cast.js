import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { serviceGetMovieCredits } from 'api';
import { Loader } from 'components/Loader/Loader';
// import { ErrMsg } from 'components/SharedLayout.styled';

export const Cast = ()=>{
   const { id } = useParams();
   const [credits, setCredits] = useState(null);
   const [loaderc, setLoaderc] = useState(false);
   const [errorc, setErrorc] = useState(false);

   const controllerCast = useRef();
   useEffect(() => {
     if (controllerCast.current) {
      controllerCast.current.abort();
     }
     controllerCast.current = new AbortController();
 
     setLoaderc(true);
     async function getCredits() {
       try {
         setErrorc(false);
         const responce = await serviceGetMovieCredits(id, controllerCast.current.signal);
         setCredits(responce);
       } catch (error) {
         if (error.message !== 'ERR_CANCELED') {
           setErrorc(true);
         }
       } finally {
        setLoaderc(false);
      }
     }
     getCredits();
     return () => {
      controllerCast.current.abort();
     };
   }, [id]);

  //  console.log('credits= ', credits);
   const showCast = !!credits
   if (loaderc === errorc) {}
   return (
      <div>
      {loaderc && <Loader />}
       <span>Casting {id} cr-len </span>
       {showCast && <div>{credits.cast[0].name} as {credits.cast[0].character} : {credits.cast[0].profile_path}</div>}
      </div>
   )
}

// {
//    "id": 565770,
//    "cast": [
//      {
//        "adult": false,
//        "gender": 2,
//        "id": 1185997,
//        "known_for_department": "Acting",
//        "name": "Xolo Mariduena",
//        "original_name": "Xolo Mariduena",
//        "popularity": 38.07,
//        "profile_path": "/tJMI7BpjlhHSMpzSz9e1XxygnKd.jpg",
//        "cast_id": 8,
//        "character": "Jaime Reyes",
//        "credit_id": "6108c3452f8d090048e996c9",
//        "order": 0
//      },
//      {
//        "adult": false,
//        "gender": 1,
//        "id": 4038,
//        "known_for_department": "Acting",
//        "name": "Susan Sarandon",
//        "original_name": "Susan Sarandon",
//        "popularity": 31.538,
//        "profile_path": "/oHYYL8bNakAREaLUBtMul5uMG0A.jpg",
//        "cast_id": 19,
//        "character": "Victoria Kord",
//        "credit_id": "62587acf09191b0065327af2",
//        "order": 2
//      },
//    ]
//  }