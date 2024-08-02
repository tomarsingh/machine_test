
import React,{useState} from 'react';
import ChildOne from './component/ChildOne';
import ChildTwo from './component/ChildTwo';

function App() {
  const [count, setCount]=useState(0);
  const Increment=()=>{
    setCount(prev =>prev+1);
  }

  const Decrement =()=>{
    setCount(prev => prev-1)
  }
  return (
    <div className="App">
      <ChildOne onIncrement={Increment} onDecrement={Decrement} />
      <ChildTwo count={count} />
    </div>
  );
}

export default App;
