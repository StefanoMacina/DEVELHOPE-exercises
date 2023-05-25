import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowObj from "./showObj";

function DataFetch() {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    try {
      const rsp = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(rsp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {comments.length == 0 && <h1>...Loading</h1>}
      {comments.map((el, index) => {
        if (index < 20) {
          return (
            <ShowObj key={el.id} name={el.name} body={el.body} id={el.id} />
          );
        }
      })}
    </div>
  );
}

export default DataFetch;
