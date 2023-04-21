import { useContext } from 'react';
import {AppContext} from './state/AppContext';
import {Landing} from './components/Landing';
import './App.css';

const useRenderPage = () => {
  const {activePage} = useContext(AppContext);

  switch(activePage) {
    case '':
      return <Landing />;
    default:
      return <div>Vroom Vroom</div>;
  }
}

const App = () => {
  return <div>{useRenderPage()}</div>;
}

export default App;
