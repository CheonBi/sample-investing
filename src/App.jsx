import {useState} from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";



function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment : 10000000,
        annualInvestment : 10000000,
        expectedReturn : 10,
        duration: 10,

    });

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputType, newVal){
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputType]: +newVal,
            }
        });
    }

  return (
      <>
        <Header/>
        <UserInput userInput={userInput} onChange={handleChange}/>
          {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
          {inputIsValid && <Results input={userInput}/>}
      </>
  )
}

export default App
