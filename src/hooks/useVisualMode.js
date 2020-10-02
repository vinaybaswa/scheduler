import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(SECOND, replace = false) {
    setMode(SECOND);
    replace? setHistory([...history]) : setHistory([...history, mode]);
  }

  function back() {
    history.length > 1 && setMode(history.pop());
  }

  return { mode, transition , back};
}