import { Link, useLocation } from "react-router-dom";
import { List, ListItem } from "./Trends.styled";

export const Trends = ({movies}) =>{
   const location = useLocation();
   return(
      <List>
         {movies.map(el=><ListItem key={el.id}><Link to={`movies/${el.id}` } state={{ from: location }} >{el.title}</Link></ListItem>)}
      </List>      
   )
}