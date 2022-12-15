import styled from "styled-components";

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
  }
}
`;

export default TableStyle;