import React from "react";
import { Counter } from "./App";
import  ReactDOM  from "react-dom";


ReactDOM.render( < Counter initialValue = {0} increment = {1} interval = {1000}/>, document.querySelector("#root"))