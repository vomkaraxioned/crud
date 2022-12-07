import Row from "./Row";
import RowForError from "./RowForError";

const Table = ({data,flag})=>{
  return (
   <section className="userDetails">
     <h1>Users</h1>
     <ul className="users">
      {
       flag?data.map(({id,name})=>{
          return <Row id={id} name={name} key={name}/>
        }):<RowForError error={data}/>
      }
     </ul>
   </section>
  );
};

export default Table;