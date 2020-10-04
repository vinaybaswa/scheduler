import { useState } from 'react';

export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    replace? setHistory([...history]) : setHistory([...history, mode]);
  }

  function back() {
    history.length > 1 && setMode(history.pop());
  }

  return { mode, transition , back };
}