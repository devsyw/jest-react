import { useState } from 'react';
import CountButtons from './components/CountButtons';
import CountView from './components/CountView';

function App() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((count) => count + 1);
  }

  const decrementtHandler = () => {
    setCount((count) => count - 1);
  }

  return (
    <>
      <CountView count={count} />
      <CountButtons
        incrementFn={incrementHandler}
        decrementFn={decrementtHandler}
      />
    </>
  );
}

export default App;