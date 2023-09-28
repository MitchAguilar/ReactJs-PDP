
import { useState } from 'react';
import './css/App.css';
import colmedica from './assets/descarga.png';

function App() {
  const [count,setCount] = useState(0);
  const [color,setColor] = useState(false);

  const prueba = ()=>{
    console.log("prueba");
    setColor(!color);
  }
  function sum(){
    console.log("función estandar");
  }
  return (
    <div className="App">
      <p className={(color)?'red':'black'} >hola {count}</p>
      <button onClick={() => setCount(count + 1)}>state+</button>
      <br/>
      <button className='btn btn-primay'>hola</button>
      <img src={colmedica} alt='colmedica' onClick={prueba} />
    </div>
  );
}
export default App;
