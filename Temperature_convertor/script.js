function convertTemp() {
  let degrees = parseFloat(document.getElementById("degrees").value);
  let type = document.getElementById("type").value;
  let result = document.getElementById("result");

  if (isNaN(degrees)) {
    result.innerHTML = "Enter a number!";
    return;
  }

  let celsius, fahrenheit, kelvin;

  if (type === "Celsius") {
    celsius = degrees;
    fahrenheit = (degrees * 9/5) + 32;
    kelvin = degrees + 273.15;
  } else if (type === "Fahrenheit") {
    celsius = (degrees - 32) * 5/9;
    fahrenheit = degrees;
    kelvin = celsius + 273.15;
  } else if (type === "Kelvin") {
    kelvin = degrees;
    celsius = degrees - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
  }

  result.innerHTML = `
    🌡️ ${celsius.toFixed(2)} °C <br>
    🔥 ${fahrenheit.toFixed(2)} °F <br>
    ❄️ ${kelvin.toFixed(2)} K
  `;
}

function resetForm() {
  document.getElementById("degrees").value = "";
  document.getElementById("type").value = "Celsius";
  document.getElementById("result").innerHTML = "--";
}
