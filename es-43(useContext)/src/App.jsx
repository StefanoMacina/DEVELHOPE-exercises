import React, { useState } from "react";
import DisplayLanguage from "./DisplayLanguage";
import LanguageContext from "./LanguageContext";

function App() {
  const [languageVal, setLanguage] = useState("en");

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <select name="" id="" value={languageVal} onChange={handleChange}>
        <option value="en">english</option>
        <option value="it">italian</option>
        <option value="de">deutsche</option>
      </select>
      <LanguageContext.Provider value={languageVal}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
