import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-blue-800">WebGuide.Space</h1>
        <p>This is the Guide!</p>
      </div>
    </div>
  );
}

export default App;
