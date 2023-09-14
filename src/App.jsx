import "./App.css";
import Counter from "./components/Counter";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import KeypressedCounter from "./components/KeyPressedCounter";

function App() {
  return (
    <div className="app">
      <h3>Render Props Practice</h3>
      <Counter>
        {(count, incrementCounter) => (
          <ClickCounter count={count} incrementCount={incrementCounter} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCounter) => (
          <ClickCounter count={count} incrementCount={incrementCounter} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCounter={incrementCount} />
        )}
      </Counter>

      <Counter>
        {(count, incrementCount) => (
          <KeypressedCounter count={count} incrementCounter={incrementCount} />
        )}
      </Counter>
    </div>
  );
}

export default App;
