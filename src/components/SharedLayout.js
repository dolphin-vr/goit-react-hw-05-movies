import { NavLink, Outlet } from "react-router-dom"
import { styled } from "styled-components"
import { Header, MainNav } from "./SharedLayout.styled"

const Wrapper = styled.div`
   padding: 20px;
`

export const SharedLayout = ()=>{
   return (
      <Wrapper>
      <Header>
         <MainNav>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="movies" end>Movies</NavLink></li>
         </MainNav>
      </Header>
      <Outlet/>
      </Wrapper>
   )
}
