import React, {useState} from 'react';

const App = () => {
const[fullName, setfullName] = useState({
  fname : '',
  lname : '',
});

const inputEvent = (event) => {
  console.log(event.target.value);
  };

const onSubmits = (event) => {
  event.preventDefault();
  alert("form submitted");
  };

return(
    <>
  <div className="main_div">
    <form onSubmit={onSubmits}>
    <div>
      <h1>Hello, {fullName.fname} {fullName.lname} </h1>

      <input type="text"
      placeholder="Enter Your Name."
      name="fname"
      onChange={inputEvent}
      //value = {fullName.fname}  
      />
      <br/>
      <input type="text"
      placeholder="Enter Your Last Name."
      name="lname"
      onChange={inputEvent}
     // value = {fullName.lname}  
      />
      <button type='submit'>Submit Me</button>
    </div>
    </form>
  </div>
</>
)
 };
export default App;
