import axiosData from "../axios";
import Form from "../components/Form/index";

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
    <Form handler={deleteData} />
  );
}

export default AxiosPost