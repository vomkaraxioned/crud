import AxiosPost from "./pages/AxiosPost";
import AxiosGet from "./pages/AxiosGet";

const pages = [
  {url:"/",name:"AxiosGet",component:<AxiosGet/>},
  {url:"/AxiosPost",name:"AxiosPost",component:<AxiosPost/>},
  // {url:"/AxiosPut",name:"AxiosPut",component:<AxiosPut/>},
  // {url:"/AxiosDelete",name:"AxiosDelete",component:<AxiosDelete/>}
];

export default pages;