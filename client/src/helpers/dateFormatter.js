 export function dateFormatter(appointmentDateTime, requestDate, requestTime){

  const apptDateTimeOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', dateStyle:'medium', timeStyle:'short' }
  const formattedApptDateTime = new Date(appointmentDateTime).toLocaleString("en-US", apptDateTimeOptions)

  const reqDateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', dateStyle:'medium'}
  const formattedReqDate = new Date(requestDate).toLocaleString("en-US", reqDateOptions)

  const reqTimeOptions = { timeStyle:'short' }
  const formattedReqTime = new Date(requestTime).toLocaleString("en-US", reqTimeOptions)
  
  if(appointmentDateTime){
    return formattedApptDateTime
  }

  if(requestDate){
    return formattedReqDate
  }

  if(requestTime){
    return formattedReqTime
  }
  
}
