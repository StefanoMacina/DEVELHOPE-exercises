import React, { useEffect, useState } from "react";

function Fetch2({ username }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUser(username) {
    setLoading(true);
    setError(null);

    // GESTIONE ERRORI IN TRY-CATCH 
    try {
        // CHIAMO IL SERVER E SALVO IN VARIABILI CONVERTENDO IN JSON
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
        // IMPOSTO IL RISULTATO DELLA CHIAMATA NELLO STATE 
      setUser(json);
    } catch (error) {
        // SE SI VERIFICANO ERRORI LI SALVO NELLO STATE RELATIVO AGLI ERRORI
      setError(error);
      setUser(null);
      // CAMBIO LO STATO DELLO STATE CHE GESTISCE I LOADING
    } finally {
      setLoading(false);
    }
  }

  // USO USEFFECT PER CHIAMARE LA FUNZIONE ASINCRONA E PASSO IL PARAMETRO
  useEffect(() => {
    fetchUser(username);
  }, [username]);

  return (
    <div>
      {error && <h1>There has been an error</h1>}
      <h1>{setLoading === true ? "Loading..." : user.login}</h1>
    </div>
  );
}

export default Fetch2;
