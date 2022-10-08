import "./App.css";
import TodoList from "./components/TodoList";
import PomodoroTimer from "./components/PomodoroTimer";
function App() {
    return (
        <div className="App">
            <TodoList />
            <PomodoroTimer />
        </div>
    );
}

export default App;
