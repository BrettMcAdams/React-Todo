import React from 'react'
import Todo from './Todo'


const GroceryList = (props) => {
    return (
      <div>
        {props.todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            toggleDone={props.toggleDone}
          />
        ))}
        <button onClick={props.clearList}>
          Clear Done
        </button>
      </div>
    );
  };
  
  export default GroceryList;

