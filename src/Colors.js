import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

const Colors = () => {
  const { location, setIsColorsOpen, tasks, setTasks } = useGlobalContext();
  const colorsRef = useRef(null);

  useEffect(() => {
    const { top, right } = location;
    colorsRef.current.style.left = `${right + 30}px`;
    colorsRef.current.style.top = `${top - 20}px`;
  }, [location]);

  const changeColor = (e) => {
    const color = e.target.style.backgroundColor;
    const { id } = location;
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, color: color } : task;
      })
    );
    setIsColorsOpen(false);
  };

  return (
    <div ref={colorsRef}>
      <span  style={{ color: "black", backgroundColor: "#eb1313" }} onClick={changeColor}>High</span>
      <span style={{ color: "black", backgroundColor: "#FFFF00" }} onClick={changeColor}>Med</span>
      <span style={{ color: "black", backgroundColor: "#4caf50" }} onClick={changeColor}>Low</span>
    </div>
  );
};

export default Colors;
