import React from "react";
import "components/DayListItem.scss";
import classnames from "classnames/bind";

export default function DayListItem(props) {

  const formatSpots = (spots) => {
    
    if (spots === 0) {
    return "no spots remaining";
    } else if (spots === 1) {
    return "1 spot remaining";
    }

    return `${spots} spots remaining`;
  }



  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots
  });

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}