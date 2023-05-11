import React from "react";

const Counter1 = (props) => {
 <button onClick={props.incCount}>
    {props.count}
 </button>
}

export default Counter1