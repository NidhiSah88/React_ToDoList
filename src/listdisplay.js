const list = ({ task }) => {
  return (
    <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
      <ul>
        {task.length > 0 &&
          task.map((x, index) => {
            return <li key={index}> {x} </li>;
          })}
      </ul>
    </div>
  );
};

export default list;
