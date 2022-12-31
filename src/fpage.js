export default function todo({ input, setInput, task, setTask }) {
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setTask([...task, input]);
    setInput("");
    console.log(task);
  };

  return (
    <form>
      <h3>ADD item</h3>
      <input
        type="text"
        value={input}
        placeholder="Add Items"
        onChange={handleChange}
      />
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "end",
          margin: "9px"
        }}
      >
        <button type="submit" onClick={handleClick}>
          Add
        </button>
      </div>
    </form>
  );
}
