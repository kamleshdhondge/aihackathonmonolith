import { useContext } from 'react';
import {AppContext} from './state/AppContext';
import './App.css';

const useRenderPage = () => {
  const {activePage} = useContext(AppContext);

  switch(activePage) {
    case '':
      return <div>Landing page</div>;
    default:
      return <div>Vroom Vroom</div>;
  }
}

const App = () => {
  return <div>{useRenderPage()}</div>;
}

export default App;
