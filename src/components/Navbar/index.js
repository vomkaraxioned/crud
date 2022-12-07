import NavItem from "./NavItem/index";
import pages from "../../pagesObj";

function Navbar() {
  return (
  <header>
    <ul className="navigation">
   {
    pages.map(({url,name})=><NavItem link={url} name={name} key={name}/>)
   }
    </ul>
  </header>
  );
}

export default Navbar;
