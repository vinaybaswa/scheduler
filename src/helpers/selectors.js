export function getAppointmentsForDay(state, day) {
  let appointmentsForDay = [];
  const selectedDay = state.days.filter(dayObj => dayObj.name === day)[0];
  if(!selectedDay){
    return appointmentsForDay;
  }
  for (const appointment of selectedDay.appointments) {
    appointmentsForDay.push(appointment);
  }
  appointmentsForDay = appointmentsForDay.map(appointment => state.appointments[appointment]);
  return appointmentsForDay;
};

export function getInterview(state, interview) {
  if (interview) {
    return {...interview, interviewer: state.interviewers[interview.interviewer]}
  }
  return null;
};