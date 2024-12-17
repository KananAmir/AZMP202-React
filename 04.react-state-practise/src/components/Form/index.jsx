import { useState } from "react";
import Button from "../Button";
import { nanoid } from "nanoid";
import "./index.scss";

const Form = ({ students, setStudents }) => {
  const [studentName, setStudentName] = useState("");
  const [gpa, setGpa] = useState(0);
  const [faculty, setFaculty] = useState("");

  const handleAddStudent = (e) => {
    e.preventDefault();

    if (studentName && gpa && faculty) {
      const student = {
        id: nanoid(),
        studentName,
        gpa,
        faculty,
      };

      setStudents([...students, student]);

      setStudentName("");
      setFaculty("");
      setGpa(0);
    } else {
      window.alert("fields can not be empty!!");
    }
    // console.log(students);

    // e.target.reset();
  };

  return (
    <form onSubmit={handleAddStudent}>
      <fieldset>
        <legend>Student Form</legend>
        <div className="inputs">
          <input
            type="text"
            id="name"
            placeholder="student name"
            value={studentName}
            onChange={(e) => {
              setStudentName(e.target.value.trim());
            }}
          />
          <input
            type="number"
            id="gpa"
            placeholder="gpa"
            value={gpa}
            onChange={(e) => {
              setGpa(+e.target.value);
            }}
          />
          <input
            type="text"
            id="faculty"
            placeholder="faculty"
            value={faculty}
            onChange={(e) => {
              setFaculty(e.target.value.trim());
            }}
          />
          <Button cName={"success"} btnName={"add"} type={"submit"} />
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
