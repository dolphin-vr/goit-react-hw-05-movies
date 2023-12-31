import { Link, useLocation } from "react-router-dom"
import { List, ListItem } from "./MoviesList.styled"

export const MoviesList = ({movies})=>{
   const location = useLocation();
   return(
      <List>
         {movies.map(el=><ListItem key={el.id}><Link to={`/movies/${el.id}` } state={{ from: location }} >{el.title} ({el.release_date.substring(0, 4)})</Link></ListItem>)}
      </List>
   )
}