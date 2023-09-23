import { IMG_BASE_PATH, POSTER_SIZE } from 'api';
import { Info, MovieCard } from './Description.styled';

export const Description = ({ movie }) => {
  const posterUrl = IMG_BASE_PATH + POSTER_SIZE + movie.poster_path;
  return (
    <MovieCard>
      <img src={posterUrl} alt={movie.title} />
      <Info>
        <h2>
          {movie.title} ({movie.release_date})
        </h2>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map(el => el.name).join(', ')}</p>
      </Info>
    </MovieCard>
  );
};
