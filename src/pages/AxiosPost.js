import axiosData from "../axios";
import Form from "../components/Form/index";
import Title from "../components/Title/index"

const AxiosPost = () => {

  const postData = (name) =>   axiosData.post("/users", { name: name }).then( alert("Successfully added")).catch(e => alert(e.message));


  return (
    <>
    <Title name="Post"/>
    <Form  handler={postData} />
    </>
  );
}

export default AxiosPost