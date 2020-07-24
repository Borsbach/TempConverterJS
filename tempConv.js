var temp;

function tempCalcFaren() {
  temp = document.getElementById("temp-1").value;
  temp = Math.round(((temp - 32) / 9) * 5 * 100) / 100;
  // console.log(temp);
  if (temp <= 0) {
    document.getElementById("temp").style.color = "darkblue";
    document.getElementById("freeze-img").style.display = "block";
  } else if (temp <= 12) {
    document.getElementById("temp").style.color = "lightskyblue";
    document.getElementById("cold-img").style.display = "block";
  } else if (temp <= 28) {
    document.getElementById("temp").style.color = "lightyellow";
    document.getElementById("warm-img").style.display = "block";
  } else {
    document.getElementById("temp").style.color = "red";
    document.getElementById("hot-img").style.display = "block";
  }
  document.getElementById("temp").innerHTML = temp + " °C";
}

// function tempCalcCels(value)
//   console.log(value / 5) * 9 + 32;
// var input = document.querySelector("first-input").value

// document.getElementById("temp-1").textContent = temp;

// function tempCalcFaren(temp) {
//   console.log((temp-32) / 9 * 5)
// }
// tempCalcFaren(103)
