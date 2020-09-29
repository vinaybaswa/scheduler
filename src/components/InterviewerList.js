import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "./InterviewerList.scss"

export default function InterviewerList(props) {

  const interviewers = props.interviewers.map((interviewer, index) => {
    console.log("=========>>>>>", interviewer.id)
    console.log("prop-Val=========>>>>>", interviewer)
    return (
      <ul className="interviewers__list">
        <InterviewerListItem
          key={index}
          id={interviewer.id}
          name={interviewer.name}
          avatar={interviewer.avatar}
          selected={interviewer.id === props.interviewer}
          setInterviewer={props.setInterviewer}
        />
      </ul>
    )
  })
  
  return (
    <section className="interviewers">
				<h4 className="interviewers__header text--light" >Interviewer</h4>
				<ul className="interviewers__list">{interviewers}</ul>
			</section>
  )
}