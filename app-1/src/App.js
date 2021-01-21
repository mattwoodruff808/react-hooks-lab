import {useState} from 'react';
import AddTodo from './Components/AddTodo';
import List from './Components/List';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newList = [...todos, todo];
    setTodos(newList);
  }

  return (
    <div className='App'>
      <AddTodo addTodoFn={addTodo} />
      <List list={todos} />
    </div>
  )
}

export default App;