import React    from "react";
import Header   from "./Header"
import Show     from "./Show"
import Empty    from "./Empty"
import Form     from "./Form"
import Status   from "./Status"
import Confirm  from "./Confirm"
import Error    from "./Error"

import "./styles.scss"

import useVisualMode from "hooks/useVisualMode"


export default function Appointment(props) {
  const EMPTY     = "EMPTY";
  const SHOW      = "SHOW";
  const CREATE    = "CREATE";
  const SAVING    = "SAVING";
  const DELETING  = "DELETING";
  const CONFIRM   = "CONFIRM";
  const EDIT      = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);
    
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(err => transition(ERROR_SAVE, true));
  }

  function destroy() {
    transition(DELETING, true)
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(err => transition(ERROR_DELETE, true));
  }

  return (
    <article data-testid="appointment" className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && props.interview && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      )} 

      {mode === CREATE && (
        <Form 
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}

      {mode === SAVING && < Status message={'Saving'} />}

      {mode === DELETING && < Status message={'Deleting'} />}

      {mode === CONFIRM && (
        <Confirm
          message={'Are you sure you would like to delete?'} 
          onCancel={back}
          onConfirm={destroy}
        />
      )}

      {mode === EDIT && (
          <Form
            name={props.interview.student}
            interviewer={props.interview.interviewer.id}
            interviewers={props.interviewers}
            onCancel={back}
            onSave={save}
          />
      )}

      {mode === ERROR_DELETE && (
        <Error message="Could not delete appointment" onClose={() => transition(SHOW)} />
      )}

      {mode === ERROR_SAVE && (
        <Error message="Could not save appointment" onClose={() => {
          if (props.interview) {
            transition(EDIT)
          } else {
            transition(CREATE)}
          }
        }  />
      )}
    </article>)
}