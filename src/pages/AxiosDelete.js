import axiosData from "../axios";
import Form from "../components/Form/index";
import Title from "../components/Title/index"

const AxiosPost = () => {

  const deleteData = (name) => {
    axiosData.get("/users").then(res => {
      const users = res.data;
      users.map((user) => {
        if (name.toLowerCase() === user.name.toLowerCase()) {
          axiosData.delete(`/users/${user.id}`).then(alert("Successfully deleted")).catch(e => alert(e.message));
        }
      })
    })
  }


  return (
    <>
      <Title name="Delete" />
      <Form handler={deleteData} btnName="Delete"/>
    </>
  );
}

export default AxiosPost