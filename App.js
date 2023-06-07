import logo from './logo.svg';
import './App.css';
import * as yup from "yup"; 62.4k (gzipped: 19.4k)
import { userschema } from "./validations/userValidation";


function App() {


  const createuser  = () => {
event.preventDefault()
let formData ={
  name: event.target[0].value,
  email: event.target[1].value,
  passord: event.target[2].value,
};
const isvalid = await userschema.isvalid(formData);
console.log(isvalid);

  };
  return (
    <div className="App">
      <form onsubmit= {createuser}>
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="email@email.com" />
        <input type="text" placeholder="password123" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
