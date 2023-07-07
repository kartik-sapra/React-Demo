import logo from './logo.svg';
import './App.css';
import  Mybutton from './MyButton';
import Employee from './Employee';
import { Empcount } from './Empcount';
import CountCharacters from './Countcharacters';
import { Listemp } from './Listemp';
import Classlistemp from './Classlistemp';
function App() {
  var myStyle = {
    fontSize: 100,
    color: '#FF0000'
  }

  return (
    <div className="App">
      <h1 style={myStyle}>SIDHU MOOSEWALA</h1>
      <p style={{ color: 'red' }}> E MERA ILAKA HEGA</p>
      {5 + 5}
      
      <Mybutton />
      <Employee name="raj" salary="50000" />
     
      <Empcount />
      <CountCharacters/>
      <Listemp/>
      <Classlistemp/>
    </div>
  );
}

export default App;
