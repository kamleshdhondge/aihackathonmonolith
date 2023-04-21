import { useEffect } from 'react';
import './App.css';
import {useCallBackend} from './hooks/useCallBackend';

function App() {
  useCallBackend();

  return (
    <div>
      Starting
    </div>
  );
}

export default App;
