import styled from "styled-components";

const FormStyle = styled.div`

  .user-form { 
    width: 70%;
    border:1px solid #454545;
    border-radius: 5px;
    margin: 50px auto;
    display: flex;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    justify-content: center;

    div { 
      display: flex;
      flex-basis: 10%;

      input { 
        width: 100% ;
        padding: 10px 5%;
        border: none;
        outline: none;

        &[type=submit] { background: #3498DB  }
      }
    }

    div:first-child { flex-basis: 90% }
   }
`;

export default FormStyle;