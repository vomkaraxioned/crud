import AxiosPost from "./pages/AxiosPost";
import AxiosGet from "./pages/AxiosGet";
import AxiosDelete from "./pages/AxiosDelete";

const pages = [
  {url:"/",name:"Get",component:<AxiosGet/>},
  {url:"/post",name:"Post",component:<AxiosPost/>},
  {url:"/delete",name:"Delete",component:<AxiosDelete/>}
];

export default pages;