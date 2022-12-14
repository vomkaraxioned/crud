import styled from "styled-components";

const NavStyle = styled.nav`
  ul {
    display:flex;
    list-style-type:none;
  }

  li { 
    margin-right:5% ;

    &:last-child { margin-right:0 }

    a{ 
      background:#0f0;
      color:#00f;
      font-size:16px;
      text-decoration:none;
     }
  }



`;

export  default NavStyle;