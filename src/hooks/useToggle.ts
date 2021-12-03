import { useState } from 'react';

function useToggle(initialValue: boolean): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = () => setValue(!value);

  return [value, toggleValue];
}
export default useToggle;
