import React, { useState } from "react";

function ListForm() {
  const [val, setVal] = useState({
    tipo: "",
    descrizione: "",
    data: "",
    quantità: "",
    verificato: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setVal({
      ...val,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div>
      <select name="tipo" id="" value={val.tipo} onChange={handleChange}>
        <option value="" selected disabled hidden>
          Choose here
        </option>
        <option value="acquisto">ACQUISTO</option>
        <option value="spesa">SPESA</option>
      </select>
      <label htmlFor="">descrizione</label>
      <input
        type="text"
        name="descrizione"
        value={val.descrizione}
        onChange={handleChange}
      />
      <input type="date" name="data" value={val.data} onChange={handleChange} />
      <input
        type="number"
        name="quantità"
        value={val.quantità}
        min={0.01}
        step={0.5}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Verificato</label>
      <input
        type="checkbox"
        id="checkbox"
        name="verificato"
        checked={val.verificato}
        onChange={handleChange}
      />
      <button onClick={() => console.log(val)}>add</button>
    </div>
  );
}

export default ListForm;
