import Row from "./Row";
import RowForError from "./RowForError";
import TableStyle from "../../style/Table.style";

const Table = ({ data, flag }) => {
  return (
    <TableStyle>
      <ul className="users">
        {
          flag ? data.map(({ id, name }) => {
            return <Row id={id} name={name} key={name} />
          }) : <RowForError error={data} />
        }
      </ul>
    </TableStyle>
  );
};

export default Table;