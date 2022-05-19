
import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Box from './components/Box';

function App() {
  const [boxColorArray, setBoxColorArray ] = useState([]);

  return (
    <div className="App">
      

      <Form boxColorArray={boxColorArray} setBoxColorArray={setBoxColorArray} />
      <Box boxColorArray={boxColorArray} />
        
      

     
      
    </div>
  );
}

export default App;
