import React from 'react'
import uuid from 'react-uuid'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import "./styles.css";
import styled from 'styled-components'

const StyledWhole = styled.div`
  height: 100vh;
  background: #FFB6C1;
  text-align: center;
  color: white;
  h2 {
    color: white;
    font-size: 3rem;
  }
`

const initialTodo = [
  {
    name: "",
    id: "",
    done: false
  },
]



class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoData: initialTodo
    }
  }

  toggleDone = (clickedItemID) => {
    this.setState({
      todoData: this.state.todoData.map((item) => {
        if (item.id === clickedItemID) {
          return {
            ...item,
            done: !item.done
          }
        } else {
          return item;
        }
      })
    })
  }

  clearList = () => {
    this.setState({
      todoData: this.state.todoData.filter((item) => {
        return item.done === false;
      })
    })
  }

  addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: uuid(),
      done: false
    };
    this.setState({
      todoData: [...this.state.todoData, newItem]
    });

  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <StyledWhole>
        <div>
          <h2>To Do</h2>
          <TodoForm addItem={this.addItem} />
        </div>

        <TodoList 
          todos={this.state.todoData}
          toggleDone={this.toggleDone}
          clearList={this.clearList}
        />
      </StyledWhole>
    );
  }
}

export default App;
