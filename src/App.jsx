import Message from "./Message"
import LoginForm from './components/LoginForm'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'

function App(){
  return(
  <Routes>
    <Route path="/" element={ <LoginForm /> }></Route>
    <Route path="home" element={ <Home /> }></Route>
  </Routes>
  )

}
/*   <div><LoginForm/></div> */
export default App;