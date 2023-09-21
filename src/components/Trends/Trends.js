import { Link } from "react-router-dom"
import { List, ListItem } from "./Trends.styled"

export const Trends = ({movies}) =>{
   return(
      <List>
         {movies.map(el=><ListItem key={el.id}><Link to={`movies/${el.id}`}>{el.title}</Link></ListItem>)}
      </List>      
   )
}