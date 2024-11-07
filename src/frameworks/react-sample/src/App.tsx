import { useAppSelector } from "./hooks/useStore";
import { Counter } from "@components/Counter";
import "./App.css";

function App() {
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div>
      <span>This count is {count}</span>
      <Counter />
    </div>
  );
}

export default App;
