import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () =>  {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState({ index: null, text: "" });

  const handleNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  const handleEditTodo = (index) => {
    setEditingTodo({ index: index, text: todos[index] });
  };

  const handleUpdateTodo = () => {
    if (editingTodo.text.trim()) {
      setTodos([
        ...todos.slice(0, editingTodo.index),
        editingTodo.text,
        ...todos.slice(editingTodo.index + 1),
      ]);
      setEditingTodo({ index: null, text: "" });
    }
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h1>Todo List</h1>
          <Form>
            <Form.Group controlId="newTodo">
              <Form.Label>New Todo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a new todo"
                value={newTodo}
                onChange={handleNewTodo}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddTodo}>
              Add Todo
            </Button>
          </Form>
          <ListGroup className="mt-3">
            {todos.map((todo, index) => (
              <ListGroup.Item key={index}>
                {editingTodo.index === index ? (
                  <Form>
                    <Form.Control
                      type="text"
                      value={editingTodo.text}
                      onChange={(event) =>
                        setEditingTodo({
                          ...editingTodo,
                          text: event.target.value,
                        })
                      }
                    />
                    <Button
                      variant="primary"
                      className="mt-3"
                      onClick={handleUpdateTodo}
                    >
                      Save
                    </Button>
                  </Form>
                ) : (
                  <>
                    {todo}
                    <Button
                      variant="warning"
                      className="mx-3"
                      onClick={() => handleEditTodo(index)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteTodo(index)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

