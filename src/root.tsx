import ReactDOM from "react-dom"
// import { Provider } from "react-redux"
// import { createStore} from "redux"
import Nav from './nav'
import React from "react"

// document必须在渲染进程中
// export function render() {
console.log("render")

ReactDOM.render(
    <div>
        <Nav />
    </div>,
    document.getElementById("app")// dom elem in index.html
)
// }
