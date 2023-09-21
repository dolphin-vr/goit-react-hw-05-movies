import { NavLink, Outlet } from "react-router-dom"
import { styled } from "styled-components"

const Wrapper = styled.div`
   padding: 20px;
`

export const Layout = ()=>{
   return (
      <Wrapper>
      <header>
         <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="movies" end>Movies</NavLink></li>
         </ul>
      </header>
      <Outlet/>
      </Wrapper>
   )
}