import React from "react";

const Event = (props) => {

  return (
    <td className = "Event">
      <h5 className = {'Event' + props.color}>{props.event}</h5>
    </td>
  )
}

export default Event;