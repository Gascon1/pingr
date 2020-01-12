export function dateFormatter(appointmentDateTime, requestDate, requestTime) {
  const apptDateTimeOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC"
  };
  const formattedApptDateTime = new Date(appointmentDateTime).toLocaleString(
    "en-GB",
    apptDateTimeOptions
  );

  const reqDateOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    dateStyle: "medium",
    timeZone: "UTC"
  };
  const formattedReqDate = new Date(requestDate).toLocaleString(
    "en-GB",
    reqDateOptions
  );

  const reqTimeOptions = { timeStyle: "short", timeZone: "UTC" };
  const formattedReqTime = new Date(requestTime).toLocaleString(
    "en-GB",
    reqTimeOptions
  );

  if (appointmentDateTime) {
    return formattedApptDateTime;
  }

  if (requestDate) {
    return formattedReqDate;
  }

  if (requestTime) {
    return formattedReqTime;
  }
}
