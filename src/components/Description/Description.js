export const Description = ({movie})=>{
return(
   <>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
      <h2>{movie.title} ({movie.release_date})</h2>
   </>
)
}