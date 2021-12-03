import { Dispatch, SetStateAction, useState } from 'react';

const useCounter = (ms = 1000): [number, Dispatch<SetStateAction<number>>] => {
  const [count, setCount] = useState(0);
  setTimeout(() => {
    setCount(count + 1);
  }, ms);
  return [count * 3, setCount];
};

export default useCounter;
