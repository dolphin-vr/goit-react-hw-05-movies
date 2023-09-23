import { serviceGetMovieReviews } from 'api';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewAuthor, ReviewItem, ReviewList, ReviewText } from './Review.styled';

export const Review = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [errorr, setErrorr] = useState(false);
  const controllerRev = useRef();

  useEffect(() => {
    if (controllerRev.current) {
      controllerRev.current.abort();
    }
    controllerRev.current = new AbortController();

    async function getReview() {
      try {
        setErrorr(false);
        const responce = await serviceGetMovieReviews(id, controllerRev.current.signal);
        setReviews(responce.results);
      } catch (error) {
        if (error.message !== 'ERR_CANCELED') {
          setErrorr(true);
        }
      }
    }
    getReview();
    return () => {
      controllerRev.current.abort();
    };
  }, [id]);
//   console.log('reviews= ', reviews)
  const showReview = !!reviews.length;

  return (
    <div>
      {showReview && <ReviewList>
         {reviews.map(el=><ReviewItem key={el.id}>
            <ReviewAuthor>Author: {el.author}</ReviewAuthor>
            <ReviewText>{el.content}</ReviewText>
         </ReviewItem>)}
         </ReviewList>}
      {errorr && <span>ooops</span> }
    </div>
  );
};

// {reviews.length>0 && <div>{reviews[0].author} : {reviews[0].content}</div>}
// {errorr && <span>ooops</span> }
// {/* <span>{showReview.toString()}</span> */}