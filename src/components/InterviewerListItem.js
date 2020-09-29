import React from "react";
import "./InterviewerListItem.scss";
import classnames from "classnames/bind";

export default function InterviewerListItem(props) {

  const interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={interviewerClass} >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
        onClick={props.setInterviewer}
      />
      {props.selected && props.name}
    </li>
  );
}