
import './App.css';

import { Login } from "./components/Login/Login";
import { TodoList } from "./components/TodoList/TodoList";
import { AddTodo } from "./components/AddTodo/AddTodo";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {
          <>
            <TodoList />
          </>
        }></Route>
        <Route path="/login" element = {
          <>
            <Login />
          </>
        }></Route>
        <Route path="/addTodo" element = {
          <>
            <AddTodo />
          </>
        }></Route>
      </Routes>
    </div>
  );
}



export default App;