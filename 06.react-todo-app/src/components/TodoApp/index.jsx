import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

import Swal from "sweetalert2";

import "./index.css";
class Todo {
  constructor(todoText) {
    this.todoText = todoText;
    this.id = Date.now();
    this.createdAt = new Date();
    this.isCompleted = false;
  }
}

const query = {
  ALL: "ALL",
  COMPLETED: "COMPLETED",
  PENDING: "PENDING",
};
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  const [filterQuery, setFilterQuery] = useState(query.ALL);

  const filteredTodos = todos.filter((todo) => {
    if (filterQuery === query.ALL) {
      return todo;
    } else if (filterQuery === query.COMPLETED) {
      return todo.isCompleted;
    } else {
      return !todo.isCompleted;
    }
  });

  const handleAddTodo = () => {
    if (todoText) {
      const todo = new Todo(todoText);

      setTodos([...todos, todo]);

      console.log(todos);

      setTodoText("");
      setErrorStatus(false);
    } else {
      setErrorStatus(true);
    }
  };

  const handleDeleteTodo = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos(todos.filter((todo) => todo.id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleCLearTodos = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos([]);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const handleToggleCompleted = (id) => {
    const found = todos.find((todo) => todo.id === id);

    found.isCompleted = !found.isCompleted;

    setTodos([...todos]);
  };
  return (
    <div>
      <h1 className="text-center my-4">Todo App</h1>
      <Container>
        <Row className="justify-content-center">
          <Col xs={6} className="">
            <div className="d-flex gap-3">
              <Form.Control
                placeholder="add todo here.."
                onChange={(e) => {
                  setTodoText(e.target.value.trim());
                }}
                value={todoText}
                className={errorStatus && "border-danger border-2"}
              />
              <Button variant="outline-primary" onClick={handleAddTodo}>
                Add
              </Button>
            </div>
            {errorStatus && (
              <p className="error-message text-center mt-3 text-danger">
                Fill Input!
              </p>
            )}
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={6} className="d-flex justify-content-end gap-3">
            <Button variant="primary" onClick={() => setFilterQuery(query.ALL)}>
              All Todos
            </Button>
            <Button
              variant="success"
              onClick={() => setFilterQuery(query.COMPLETED)}
            >
              Completed Todos
            </Button>
            <Button
              variant="warning"
              onClick={() => setFilterQuery(query.PENDING)}
            >
              Pending Todos
            </Button>
            <Button variant="danger" onClick={handleCLearTodos}>
              Clear All
            </Button>
          </Col>
        </Row>
        <hr />

        <Row className="justify-content-center mt-3">
          <Col xs={6}>
            <ListGroup>
              {todos &&
                filteredTodos.map((todo) => {
                  return (
                    <ListGroup.Item
                      action
                      variant="success"
                      className="d-flex justify-content-between align-items-center mb-3"
                    >
                      <div className="d-flex gap-2">
                        <Form.Check
                          checked={todo.isCompleted}
                          type={"checkbox"}
                          onChange={() => handleToggleCompleted(todo.id)}
                        />

                        <span className={todo.isCompleted && "completed"}>
                          {todo.todoText}
                        </span>
                      </div>
                      <div className="actions d-flex gap-2">
                        <Button variant={"success"}>
                          <FaRegEdit />
                        </Button>
                        <Button
                          variant={"danger"}
                          onClick={() => handleDeleteTodo(todo.id)}
                        >
                          <MdDelete />
                        </Button>
                      </div>
                    </ListGroup.Item>
                  );
                })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TodoApp;
