import logo from './logo.svg';
import './App.css';

// component

import Header from './component/Header';
import Todoform from './component/Todoform';
import Todos from './component/Todos';

function App() {
  return (
  <div>
    <Header/>
    <Todoform/>
    <Todos/>
  </div>
  );
}

export default App;
