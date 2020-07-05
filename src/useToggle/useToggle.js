import { useState, useMemo } from 'react';

const useToggle = (initial = false) => {
  const [on, set] = useState(initial);
  const actions = {
    toggle: () => set((prevState) => !prevState),
    toggleOn: () => set(true),
    toggleOff: () => set(false),
  };
  const value = useMemo(() => [on, actions], [actions, on]);
  return value;
};

export default useToggle;
