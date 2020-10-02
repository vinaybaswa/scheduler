export function getAppointmentsForDay(state, day) {
  let appointmentsForDay = [];
  //const dayName = day;
  const selectedDay = state.days.filter(dayObj => dayObj.name === day)[0];
  if(!selectedDay){
    return appointmentsForDay;
  }
  for (const appointment of selectedDay.appointments) {
    appointmentsForDay.push(appointment);
  }
  appointmentsForDay = appointmentsForDay.map(appointment => state.appointments[appointment]);
  console.log(appointmentsForDay)
  return appointmentsForDay;
  };