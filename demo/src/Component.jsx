import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Component() {
  const [val, setVal] = useState({});

  const fetchMeteo = async () => {
    try {
      const rsp = await axios.get(
        "https://api.open-meteo.com/v1/ecmwf?latitude=52.52&longitude=13.41&hourly=temperature_2m"
      );

      setVal(rsp.data);
      console.log(rsp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMeteo();
  }, []);

  return (
    <div>
      <h1>Latitude : {val.latitude ? val.latitude : 'loading...'}</h1>
    </div>
  );
}

export default Component;
