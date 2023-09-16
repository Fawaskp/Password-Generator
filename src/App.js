import React from "react";
import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator";
import PasswordSuggestion from "./components/PasswordSuggestion";


function App() {

  return (
    <>
        <div className="m-16 flex justify-between max-w-7xl mx-auto">
          <PasswordGenerator />
          <PasswordSuggestion/>
        </div>
    </>
  );
}

export default App;
