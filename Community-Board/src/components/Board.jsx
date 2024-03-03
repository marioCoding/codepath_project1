import React from "react";
import Event from "./Event";

const Board = () => {
  return (
    <div className="Board">
      <table>
        <thead>
          Programming Langagues
        </thead>
        <tbody>
          <tr>
            <Event event='JavaScript' color='blue' img ='./javascript.jpg'/>
            <Event event='Python' color='blue' img ='./python.png'/>
          </tr>
          <tr>
            <Event event='C++' color='blue' img ='./cpp.png'/>
            <Event event='Swift' color='blue' img='./swift.jpg'/>
          </tr>
          <tr>
            <Event event='Assembly' color='blue' img='./assembly.webp'/>
            <Event event='Rust' color='blue' img='rust.png'/>
          </tr>
          <tr>
            <Event event='Typescript' color='blue' img='typescript.png'/>
            <Event event='PHP' color='blue' img='php.png'/>
          </tr>
          <tr>
            <Event event='Java' color='blue' img='java.png'/>
            <Event event='SQL' color='blue' img='sql.png'/>
          </tr>
        </tbody>
        </table>
    </div>
  )
}

export default Board;