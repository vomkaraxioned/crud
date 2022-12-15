import NavItem from "./NavItem/index";
import pages from "../../pagesObj";
import  NavStyle from "../../style/Navbar.style";

function Navbar() {  

  return (
   <NavStyle color="#f00">
     <nav>
    <ul className="navigation">
   {
    pages.map(({url,name})=><NavItem link={url} name={name} key={name}/>)
   }
    </ul>
    </nav>
 </NavStyle>

  );
}

export default Navbar;
