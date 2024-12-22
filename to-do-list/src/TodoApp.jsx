import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
  const [itemsList, setItemsList] = useState([]);

  const addTodo = (item) => {
    if (item.trim() !== '') {
      setItemsList([...itemsList, { text: item, isEditing: false }]);
    }
  };

  const deleteTodo = (index) => {
    setItemsList(itemsList.filter((_, i) => i !== index));
  };

  const updateTodo = (index, newText) => {
    const updatedList = [...itemsList];
    updatedList[index] = {
      ...updatedList[index],
      text: newText,
      isEditing: false,
    };
    setItemsList(updatedList);
  };

  const toggleEdit = (index) => {
    const updatedList = [...itemsList];
    updatedList[index] = {
      ...updatedList[index],
      isEditing: !updatedList[index].isEditing,
    };
    setItemsList(updatedList);
  };

  return (
    <div className="app">
      <TodoForm addTodo={addTodo} />
      <TodoList
        itemsList={itemsList}
        deleteTodo={deleteTodo}
        toggleEdit={toggleEdit}
        updateTodo={updateTodo}
      />
    </div>
  );
};

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = () => {
    addTodo(input);
    setInput('');
  };

  return (
    <div className="form">
      <input
        className="form-input"
        type="text"
        value={input}
        onChange={changeHandler}
        placeholder="Enter a new task"
      />
      <button className="form-submit" onClick={submitHandler}>
        Add Todo
      </button>
    </div>
  );
};

const TodoList = ({ itemsList, deleteTodo, toggleEdit, updateTodo }) => (
  <ul className="todolist">
    {itemsList.map((item, index) => (
      <Todo
        key={index}
        item={item}
        index={index}
        deleteTodo={deleteTodo}
        toggleEdit={toggleEdit}
        updateTodo={updateTodo}
      />
    ))}
  </ul>
);

const Todo = ({ item, index, deleteTodo, toggleEdit, updateTodo }) => {
  const [editInput, setEditInput] = useState(item.text);

  const handleEditChange = (event) => {
    setEditInput(event.target.value);
  };

  const handleEditSubmit = () => {
    updateTodo(index, editInput.trim());
  };

  return (
    <li className="todo">
      {item.isEditing ? (
        <div>
          <input
            className="form-input"
            type="text"
            value={editInput}
            onChange={handleEditChange}
          />
          <button className="todo-edit" onClick={handleEditSubmit}>
            Save
          </button>
          <button className="todo-delete" onClick={() => toggleEdit(index)}>
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <span className="todo-label">{item.text}</span>
          <div className="todo-buttons">
            <button className="todo-edit" onClick={() => toggleEdit(index)}>
              Edit
            </button>
            <button className="todo-delete" onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoApp;
