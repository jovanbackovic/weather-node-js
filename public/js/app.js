console.log("Client side javascript file is loaded!");
fetch("http://localhost:3000/weather?address=beograd").then(response => {
  response.json().then(data => {
    console.log(data);
  });
});

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = search.value;
  fetch(`/weather?address=${encodeURI(location)}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        text1.textContent = data.error;
      } else {
        text1.textContent = data.location;
        text2.textContent = data.forecastData;
      }
    });
  });
});
