import { useEffect, useState } from "react";
import axiosData from "../axios";
import Table from "../components/Table/index";
import Title from "../components/Title/index";

const AxiosGet = () => {

  const [data, setData] = useState([]),
    [flag, setFlag] = useState(false),
    [error, setError] = useState("Loading Please Wait");

  useEffect(() => {
    axiosData.get("/users").then(res => {
      setData(res.data);
      setFlag(true);
    }).catch(e => setError(e.message))
  }, []);

  if (flag) {
    return (
      <>
        <Title name="Users" />
        <Table data={data} flag={flag} />
      </>
    );
  } else {
    return <Table data={error} flag={flag} />
  }
}

export default AxiosGet
