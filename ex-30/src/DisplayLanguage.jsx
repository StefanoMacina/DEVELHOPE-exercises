import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

function DisplayLanguage() {
  const language = useContext(LanguageContext)
  return (
    <>
      <h1>language : {language}</h1>
    </>
  );
}

export default DisplayLanguage;
