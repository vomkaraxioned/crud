import Row from "./Row";
import RowForError from "./RowForError";
import TableStyle from "../../style/Table.style";
import Title from "../Title/index";

const Table = ({data,flag})=>{
  return (
    <TableStyle>
   <section className="userDetails">
     <Title name="Users"/>
     <ul className="users">
      {
       flag?data.map(({id,name})=>{
          return <Row id={id} name={name} key={name}/>
        }):<RowForError error={data}/>
      }
     </ul>
   </section>
   </TableStyle>
  );
};

export default Table;