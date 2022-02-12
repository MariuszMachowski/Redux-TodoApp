import AddTask from './components/AddTask';
import ShowTasks from './components/ShowTasks';
import FilterButtons from './components/FilterButtons';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask />
      <FilterButtons />
      <ShowTasks />
    </div>
  );
}

export default App;
