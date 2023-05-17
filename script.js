const input = document.querySelector("input");

const button = document.querySelector("button");

const img = document.querySelector("img");

const city = document.querySelector("#city");

const degree = document.querySelector("#degree");

const content = document.querySelector(".content");



button.addEventListener("click", async () => {

  if (!input.value) return;



  try {

    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input.value)}&units=metric&appid=YOUR_API_KEY_HERE`;

    const res = await fetch(urlApi);

    const data = await res.json();



    if (data?.cod && data.code === "404") {

      return alert("Cidade não encontrada.");

    }



    loadWeatherInfo(data);

  } catch (error) {

    alert(error);

  }

});



function loadWeatherInfo(data) {

  city.innerHTML = data.name;

  // Complete the rest of the code to load and display the weather information

  // using the data retrieved from the API

}

