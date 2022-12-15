import AxiosPost from "./pages/AxiosPost";
import AxiosGet from "./pages/AxiosGet";
import AxiosDelete from "./pages/AxiosDelete";

const pages = [
  {url:"crud/",name:"Get",component:<AxiosGet/>},
  {url:"crud/post",name:"Post",component:<AxiosPost/>},
  {url:"crud/delete",name:"Delete",component:<AxiosDelete/>}
];

export default pages;