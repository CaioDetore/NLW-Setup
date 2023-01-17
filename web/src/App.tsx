import "./styles/global.css";

import Habit from "./components/Habits";

function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={20} />
    </div>
  );
}

export default App;
