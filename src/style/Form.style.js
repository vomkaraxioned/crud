import styled from "styled-components";

const FormStyle = styled.div`

  .user-form { 
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: center;

    div { 
      display: flex;
      flex-basis: 10%;

      input { 
        width:90% ;
        padding:10px 5%;
      }
    }

    div:first-child { flex-basis: 40% }
   }
`;

export default FormStyle;