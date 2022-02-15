import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-blue-800">WebGuide.Space</h1>
        <p>Count: {count}</p>
        <button className="p-2 mt-2 border border-gray-400 rounded-md" onClick={handleClick}>+1</button>
      </div>
    </div>
  );
}

export default App;
