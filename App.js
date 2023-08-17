import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Subscribe from './components/Subscribe';
import Counter from './components/Counter';
import GetName from './components/GetName';
// import LifeCycle from './components/lifeCycle';
import EmployeeList from './components/emp/EmployeeList';
import { render } from '@testing-library/react';
import About from './components/About';
// import "./styles.css"
import About1 from './components/About1';
// import "./styels1.css"
import TradeTable from './components/TradeTable';
import "./components/Table.css"
import "./components/Trade_Data.json"
import Forgotpass from './components/Forgotpass';



function App() {
  return (
    <div className="App">
      {/* <EmployeeList/> */}
      {/* <TradeTable/> */}
      <Forgotpass/>
    </div>
  );
}

export default App;
