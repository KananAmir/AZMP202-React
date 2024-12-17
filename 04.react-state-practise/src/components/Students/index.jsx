import { useState } from "react";
import Form from "../Form";
import Table from "../Table";

const Students = () => {
  const [students, setStudents] = useState([]);

  return (
    <div>
      <Form students={students} setStudents={setStudents} />
      <hr />
      <Table students={students} setStudents={setStudents} />
    </div>
  );
};

export default Students;
