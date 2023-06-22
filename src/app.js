/* step 1 - Install Bootstrap CSS and JS, then Axios cdn at the top of HTML above style.css link*/
/* step 2 - Copy API key to clipboard */
function formatDate(timestamp) {
  /* step 25 - created a new function formatDate that is going to receive a timestamp (w/c calculates the date and time in milliseconds recorded since 1970) */

  let date = new Date(
    timestamp
  ); /* step 28 - defining date to display timestamp of current date from 1970 */
  let hours =
    date.getHours(); /* step 27 - formatting the various elements of the dateElement */
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]; /* step 29 - defining the days of the week and creating a variable below to fetch the actual day of the week */
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`; /* step 30 - using template literals, this should display the format of the day and time in the dateElement which are called by the formatDate function */
}

function displayTemperature(response) {
  /* step 7 - define the function displayTemperature that Axios will call which the API sends a response back to the call */
  /* step 8 -  console.log(response.data.temperature.current); */

  let temperatureElement =
    document.querySelector(
      "#temperature"
    ); /* step 12 - select the element with id="temperature" */
  let cityElement =
    document.querySelector(
      "#city"
    ); /* step 14 - select the element with id="city" */
  let descriptionElement =
    document.querySelector(
      "#description"
    ); /* step 16 - select the element with id="descriprtion" */

  let humidityElement =
    document.querySelector(
      "#humidity"
    ); /* step 20 - select the element with id="humidity" */

  let windElement =
    document.querySelector(
      "#wind"
    ); /* step 22 - select the element with id="wind" */

  let pressureElement =
    document.querySelector(
      "#pressure"
    ); /* step 18 - select the element with id="pressure" */

  let dateElement =
    document.querySelector(
      "#date"
    ); /* step 24 - select the element with id="date" */

  let iconElement =
    document.querySelector(
      "#icon"
    ); /* step 31 - select the element with id="icon" */

  temperatureElement.innerHTML = Math.round(
    response.data.temperature.current
  ); /* step 13 - temperatureElement with id="temperature" displays rounded current temperature */
  cityElement.innerHTML =
    response.data.city; /* step 15 - cityElement with id="city" displays current city */
  descriptionElement.innerHTML =
    response.data.condition.description; /* step 17 - descriptionElement with id="description" displays current weather condition */
  humidityElement.innerHTML =
    response.data.temperature.humidity; /* step 21 - humidityElement with id="humidity" displays current humidity value */
  windElement.innerHTML = Math.round(
    response.data.wind.speed
  ); /* step 23 - windElement with id="wind" displays current wind value */
  pressureElement.innerHTML =
    response.data.temperature.pressure; /* step 19 - humidityElement with id="humidity" displays current humidity value */
  dateElement.innerHTML = formatDate(
    response.data.time * 1000
  ); /* step 25 - dateElement with id="date" displays current date and time * 1000 to convert time to milliseconds from date and time since 1970 */
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  ); /* step 32 - setAttribute for the src link of the icon for the city variable and with template literals string `${}` replacing hard-coded icon code to insert the relevant icon */
  iconElement.setAttribute(
    "alt",
    response.data.condition.description
  ); /* step 33 - setAttribute for the "alt" text for weather icon */
}
/* step 34 - see index.html <form id="search-form"> */
/* step 9 - to display the real temperature in the 'weather temperature' element, remove the hard-coded value in HTML and add an id="temperature" */
/* step 10 - to display the real city in the 'h1' element, remove the hard-coded city in HTML and add an id="city" */
/* step 11 - to display the real weather condition in the 'li' element, remove the hard-coded description in HTML and add an id="description" */

function search(city) {
  let apiKey =
    "94f405d2060ftof44a10fbe606f73f39"; /* step 3 - store API key in a variable for authentication*/
  /* step 45 - removed this test variable "let city = "Barcelona"; /* added this variable to test the API" */
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`; /* step 4 - get documentation for current weather URL endpoint & paste here */
  axios.get(apiUrl).then(displayTemperature);
  /* step 6 - use Axios to make the API call to fetch the results of the API to display temperature */
  /* step 5 - console.log(apiUrl); */
} /* step 43 - now that the function search has been changed to handleSubmit, a function search is created to receive a city inputted in the form */
/* step 44 - moved the apiKey, test city variable, apiUrl, and axios inside this function that will take care of making an AJAX call and displaying the city */

function handleSubmit(event) {
  event.preventDefault(); /* step 39 - added preventDefault to the event to prevent the default behavior of the form from reloading */
  /* step 39 - created a function for search which was renamed 'handleSubmit' that was defined in the eventListener below */
  /* step 40 - see index.html input adding id="city-input" */
  let cityInputElement =
    document.querySelector(
      "#city-input"
    ); /* step 41 - target the element with id="city-input" */
  /* step 42 -console.log(cityInputElement.value); to ensure city-input is working properly */
  search(
    cityInputElement.value
  ); /* step 47 - to execute the API call to fetch the data of the city submitted in the form */
}

/* step 46 - to test if the function search is working: 'search("Paris");' on reload should display weather for Paris */

let form =
  document.querySelector(
    "#search-form"
  ); /* step 37 - target the element with id="search-form" so JS have control over it */
form.addEventListener(
  "submit",
  handleSubmit
); /* step 38 - added an eventListener to the form so whenever a user submits an input, it will execute a search */
