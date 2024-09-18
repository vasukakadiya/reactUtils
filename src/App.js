import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from "react";

import { Routes,Route} from 'react-router-dom'; 


function App() {
  const[mode,setdarkmode]=useState("light");
  const[alert,setAlert]=useState(null);


  let setdark=()=>{
    if(mode==="light")
    {
      setdarkmode("dark")
      document.body.style.backgroundColor="black"
      showAlert('! Dark mode has been enabled.','Success')
    }else{
      setdarkmode("light")
      document.body.style.backgroundColor="white"
      showAlert('! Light mode has been enabled.','Success')



    }
  }

  let showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
    
  }
  return (
  <>

<Navbar apptitle="Analyzer" mode={mode} setdark={setdark}></Navbar>
<Alert alert={alert}></Alert>


    
    <Routes>
{/* element={<Textform heading="Write your text!!" mode={mode} showAlert={showAlert}>} */}
      <Route exact path="/"  element={<Textform heading="Write your text!!" mode={mode} showAlert={showAlert}/>}></Route>
    </Routes>

    <Routes>
      <Route exact path="/abt" element={<About></About>}></Route>
    </Routes>





</>



  );
}

export default App;
