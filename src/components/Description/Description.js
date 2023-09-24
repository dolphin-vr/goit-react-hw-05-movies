import { IMG_BASE_PATH, POSTER_SIZE } from 'api';
import { Image, Info, MovieCard } from './Description.styled';
import noImgUrl from '../../img/noimage-available.svg';

export const Description = ({ movie }) => {
  const posterUrl = movie.poster_path ? IMG_BASE_PATH + POSTER_SIZE + movie.poster_path : noImgUrl;
  return (
    <MovieCard>
      <Image src={posterUrl} alt={movie.title} />
      <Info>
        <h2>
          {movie.title} ({movie.release_date.substring(0, 4)})
        </h2>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map(el => el.name).join(', ')}</p>
      </Info>
    </MovieCard>
  );
};
