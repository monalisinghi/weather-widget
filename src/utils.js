/* This function formats temperature based on Unit
 *  @params value: temperature value in celsius
 *  @param unit: true if unit is `Metric`, false if unit is `Imperial`
 *
 * */
export const displayTemperature = (value, unit) => {
  if (unit) {
    return `${value.toFixed(0)}\u2103`; // return value in celsius
  } else {
    return `${(value * 1.8 + 32).toFixed(0)}\u2109`; // return value in fahrenheit
  }
};

/* This function formats distance based on Unit
 *  @params value: distance value in miles per hour (mph)
 *  @param unit: true if unit is `Metric`, false if unit is `Imperial`
 *
 * */
export const displayDistance = (value, unit) => {
  if (unit) {
    return `${(value * 1.8).toFixed(0)} kp/h`; // return value in kilometers
  } else {
    return `${value.toFixed(0)} mph`; // return value in miles
  }
};

/* This function return week day name
 *  @params day: date to get weekday from
 *
 * */
export const getDayName = (day) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date(day);
  return days[d.getDay()]; // return weekday name based on date
};

/* This function converts date in Human readable format i.e `Saturday, 10 October`
 *  @params dataToConvert: date to be converted
 *
 * */
export const humanReadableDate = (dataToConvert) => {
  const options = { weekday: "long", day: "numeric", month: "long" };
  return new Date(dataToConvert).toLocaleDateString(undefined, options); // return date based on local date string
};
