import React from "react";

const Event = (props) => {

  return (
    <td className = {'Event ' + props.color}>
      <img src={props.img} alt={props.event} />
      <h5>{props.event}</h5>
      <button>Learn more</button>
    </td>
  )
}

export default Event;