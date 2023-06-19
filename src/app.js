/* step 1 - Install Axios cdn at the top of HTML above style.css link*/
/* step 2 - Copy API key to clipboard */
function displayTemperature(response) {
  /* step 7 - define the function displayTemperature that Axios will call which the API sends a response back to the call */
  /* step 8 -  console.log(response.data.temperature.current); */
  let temperatureElement =
    document.querySelector(
      "#temperature"
    ); /* step 12 - select the element with an id="temperature" */
  temperatureElement.innerHTML = response.data.temperature.current;
}
/* step 9 - to display the real temperature in the 'weather temperature' element, remove the hard-coded value in HTML and add an id="temperature" */
/* step 10 - to display the real city in the 'h1' element, remove the hard-coded city in HTML and add an id="city" */
/* step 11 - to display the real weather condition in the 'li' element, remove the hard-coded description in HTML and add an id="description" */
let apiKey = "94f405d2060ftof44a10fbe606f73f39"; /* step 3 - store API key */

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Barcelona&key=${apiKey}&units=metric`; /* step 4 - get documentation for current weather URL & paste here */
/* step 5 - console.log(apiUrl); */

axios
  .get(apiUrl)
  .then(
    displayTemperature
  ); /* step 6 - use Axios to make the API call to fetch the results of the API to display temperatue */
