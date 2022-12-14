import {Link} from "react-router-dom";

const  NavItem = ({link,name})=>  <li><Link to={link} title={name}>{name}</Link></li>;

export default NavItem
