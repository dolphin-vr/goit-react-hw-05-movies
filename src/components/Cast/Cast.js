import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { IMG_BASE_PATH, PHOTO_SIZE, serviceGetMovieCredits } from 'api';
import { Loader } from 'components/Loader/Loader';
import { Actor, CreditsItem, CretitsList, Role } from './Cast.styled';
import { ErrMsg } from 'components/SharedLayout.styled';

export const Cast = ()=>{
   const { id } = useParams();
   const [credits, setCredits] = useState(null);
   const [loaderc, setLoaderc] = useState(false);
   const [errorc, setErrorc] = useState(null);

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

   const showCast = !!credits
   if (loaderc === errorc) {}
   return (
      <div>
      {loaderc && <Loader />}
       {showCast && <CretitsList>
          {credits.cast.map(el=><CreditsItem key={el.id}>
            <img src={IMG_BASE_PATH+PHOTO_SIZE+el.profile_path} alt={el.name}/>
            <Actor>{el.name} <Role>as {el.character}</Role></Actor>
          </CreditsItem>)}
        </CretitsList> }
      {errorc && <ErrMsg>Sorry, something went wrong. Try reload page Cast</ErrMsg>}
      </div>
   )
}
