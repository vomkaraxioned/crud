import styled from "styled-components";

const NavStyle = styled.nav`
  ul {
    padding:10px 0;
    border-bottom:1px solid #000;
    display:flex;
    background:#2E86C1 ;
  }

  li { 
    margin-right:5% ;

    &:last-child { margin-right:0 }

    a{ 
      color:#fff;
      font-size:16px;
      font-weight:900;

      &:hover { color: #17202A }
     }
  }



`;

export  default NavStyle;