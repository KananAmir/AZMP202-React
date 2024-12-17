// const Table = ({ students, setStudents }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>GPA</th>
//           <th>Faculty</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students &&
//           students.map((s) => {
//             return (
//               <tr key={s.id}>
//                 <td>{s.id}</td>
//                 <td>{s.studentName}</td>
//                 <td>{s.gpa}</td>
//                 <td>{s.faculty}</td>
//               </tr>
//             );
//           })}
//       </tbody>
//     </table>
//   );
// };

import TableRow from "../TableRow";
import { FaTrashCan } from "react-icons/fa6";
import PropTypes from "prop-types";
// export default Table;

const Table = ({ students, setStudents }) => {
  const handleDelete = (studentId) => {
    setStudents(students.filter((q) => q.id !== studentId));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>GPA</th>
          <th>Faculty</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {students &&
          students.map((s) => {
            return (
              <TableRow key={s.id}>
                <td>{s.id}</td>
                <td>{s.studentName}</td>
                <td>{s.gpa}</td>
                <td>{s.faculty}</td>
                <td style={{ color: "red", cursor: "pointer" }}>
                  <FaTrashCan onClick={() => handleDelete(s.id)} />
                </td>
              </TableRow>
            );
          })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  students: PropTypes.array,
  setStudents: PropTypes.func,
};

export default Table;
