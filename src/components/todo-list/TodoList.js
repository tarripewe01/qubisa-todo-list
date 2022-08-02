import React from "react";
import { TodoCard, ActionButton } from "../rootcomponents";

const TodoList = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map((card) => (
        <TodoCard key={card.id} text={card.text} />
      ))}
      <ActionButton  />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#98DDCA",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 10,
    height: '100%'
  },
};

export default TodoList;