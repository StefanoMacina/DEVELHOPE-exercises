import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return (
    <div>
      {language === "en" && <h2>Hello!</h2>}
      {language === "fr" && <h2>Bonjour!</h2>}
      {language === "es" && <h2>Hola!</h2>}
    </div>
  );
}

export default DisplayLanguage;