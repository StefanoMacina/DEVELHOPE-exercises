import { useState } from "react";


export function useForm() {
  const [val, setVal] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return {
    username : val.username,
    password : val.password,
    handleChange
    
  }
}
