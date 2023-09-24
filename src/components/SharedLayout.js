import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { Header, MainNav, StyledLink } from "./SharedLayout.styled";

const Wrapper = styled.div`
   padding: 20px;
`

export const SharedLayout = ()=>{
   // const location = useLocation();
   return (
      <Wrapper>
      <Header>
         <MainNav>
            <li><StyledLink to="/" >Home</StyledLink></li>
            <li><StyledLink to="movies" end>Movies</StyledLink></li>
         </MainNav>
      </Header>
      <Outlet/>
      </Wrapper>
   )
}
