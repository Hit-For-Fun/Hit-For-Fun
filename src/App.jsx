import './App.css';
import { useState } from 'react';
import JapaneseHomepage from './JapaneseHomepage';
import AmericanHomepage from './AmericanHomepage';

function App() {
  const isJapaneseSite =  Math.random() < 0.5

  const [count, setCount] = useState(0)



  return <>{isJapaneseSite ? <JapaneseHomepage/> : <AmericanHomepage/>}</>
}

export default App;
