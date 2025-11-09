import { useState } from "react";
// Style
import "./App.css";
// Routes


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Company Profile 1</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
