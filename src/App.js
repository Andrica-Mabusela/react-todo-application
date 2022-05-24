import  TodoHeader  from './components/TodoHeader'
import SearchBar from './components/SearchBar';
import AddTodoForm from './components/AddTodoForm'

// CSS
import './App.css'

function App() {
  return (
    <div className="App">
        <TodoHeader />
        <SearchBar />
        <AddTodoForm />
    </div>
  );
}

export default App;
