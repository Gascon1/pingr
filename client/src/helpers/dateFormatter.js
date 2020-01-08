 export function dateFormatter(date){

  var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', dateStyle:'medium', timeStyle:'short' }
  const formattedDate = new Date(date).toLocaleString("en-US", options)


  return formattedDate
}
