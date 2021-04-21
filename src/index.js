import React from "react"
import ReactDOM from "react-dom"
//parent component file imported
import TodoContainer from "./functionBased/components/TodoContainer"
//react routing
import { BrowserRouter as Router } from "react-router-dom"

//stylesheet
import "./functionBased/App.css"

import { MyContext } from "./Context";


const element = <h1>Hello from Create React App</h1>

ReactDOM.render(element, document.getElementById("root"))
ReactDOM.render(
    // strict mode-- checks and logs warnings
    // wrapping the MyContext data over the parent compTodoContainer
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <TodoContainer />
        </Router>,
    </React.StrictMode>,
     document.getElementById("root"))