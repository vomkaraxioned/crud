import styled, { keyframes } from "styled-components";

const rotate = keyframes`
 from{ transform:rotate(0deg) }
 to{ transform:rotate(360deg) }
`;

const TableStyle = styled.section`
padding:40px 0;

h1 { 
  padding:5px 0;
  background:#58D68D;
  color:#fff;
  font-size:21px;
  font-weight:900;
  text-align:center;
}

ul {
  display:flex;
  justify-content:center;
  flex-wrap:wrap;

  li {
    border:1px solid #8E44AD ;
    margin:10px 2% 10px 0;
    display:flex;
    background:#85C1E9 ;
    flex-basis:30%;
    flex-direction:column;

    &:nth-child(3n) { margin-right:0 }

    span { 
      padding:10px 0;
      display:block;
      text-align:center;
      text-transform:capitalize;
    }

    @media only screen and (max-width: 540px) {

      margin:10px 0;

      flex-basis:95%;

      &:nth-child(3n) { margin-right:0 }
    }
  }

  .error { 
    padding:40px 0;
    border:none;
    background:none;
    color:#454545;
    font-size:21px;
    font-weight:700;
    text-align:center;
    text-transform:capitalize;

    .icon-loading {
      position:relative;
      text-indent:-9999px;

      &::after{
        width:100%;
        height:20px;
        display:block;
        position:absolute;
        animation:${rotate} 3s;
        color:#2471A3;
        content:'\f1ce';
        float:right;
        font-family:FontAwesome;
        font-weight:900;
        text-indent:0;
      }
    }
  }
}
`;

export default TableStyle;