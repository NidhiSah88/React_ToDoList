import "./styles.css";
import { useState } from "react";
import Todo from "./fpage.js";
import Listadded from "./listdisplay.js";

export default function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  return (
    <div className="App">
      <h1> TODO LIST</h1>

      <Todo input={input} setInput={setInput} task={task} setTask={setTask} />
      <Listadded task={task} />
    </div>
  );
}
