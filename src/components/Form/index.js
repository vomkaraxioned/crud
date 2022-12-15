import { useRef } from "react";
import FormStyle from "../../style/Form.style";

const Form = ({handler}) => {
  const userName = useRef(null);
  return (
    <FormStyle>
    <form className="user-form" action="#FIXME" onSubmit={(e)=>{
      e.preventDefault();
     handler(userName.current.value);
    }}>
      <div>
        <div className="user-name" ><input type="text" ref={userName} /></div>
        <div className="btn submit-btn"><input type="submit" /></div>
      </div>
    </form>
    </FormStyle>
  );
};

export default Form;