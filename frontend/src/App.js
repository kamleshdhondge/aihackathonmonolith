import { useContext } from 'react';
import {AppContext} from './state/AppContext';
import {Landing} from './components/Landing';
import {Main} from './components/Main';
import './App.css';

const useRenderPage = () => {
  const {activePage} = useContext(AppContext);

  switch(activePage) {
    case '':
      return <Landing />;
    case 'application': 
      return <Main />;
    default:
      return <div>Vroom Vroom</div>;
  }
}

const App = () => {
  return <div>{useRenderPage()}</div>;
}

export default App;
