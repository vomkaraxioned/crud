import Navbar from "./components/Navbar/index";
import {Routes,Route} from "react-router-dom";
import pages from "./pagesObj";

const App = ()=>{

  return (
    <>
    <div className="container">
      <Navbar/>
    </div>
    <Routes>
      {
        pages.map(({url,name,component})=><Route path={url} element={component} key={name}/>)
      }
    </Routes>
    </>
  );
}

export default App;
