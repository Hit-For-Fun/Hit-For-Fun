import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  return (
      <div className="App">

        <button onClick={()=>setCount(count + 1)}>text</button>
          <h1> Hello world! Changes in Thomas BRanch </h1>
          {count}
    </div>
  );
}

export default App;
