import React from "react";
import Event from "./Event";


const Board = () => {
  return (
    <div className="Board">
      <table>
        <thead>
        Welcome to "Top 10 Programming Languages to Learn in 2024," your ultimate guide to staying ahead in the dynamic world of coding. 
        As technology continues to advance at a rapid pace, mastering the right programming languages is essential for career growth and innovation. 
        Join us as we explore the top languages poised to shape the future of software development and equip you with the skills needed to thrive in the digital age.
        </thead>
        <tbody>
          <tr>
            <Event event='JavaScript' color='blue'/>
            <Event event='Python' color='blue'/>
          </tr>
          <tr>
            <Event event='C++' color='blue'/>
            <Event event='Swift' color='blue'/>
          </tr>
          <tr>
            <Event event='Assembly' color='blue'/>
            <Event event='Rust' color='blue'/>
          </tr>
          <tr>
            <Event event='Typescript' color='blue'/>
            <Event event='PHP' color='blue'/>
          </tr>
          <tr>
            <Event event='Java' color='blue'/>
            <Event event='SQL' color='blue'/>
          </tr>
        </tbody>
        </table>
    </div>
  )
}

export default Board;