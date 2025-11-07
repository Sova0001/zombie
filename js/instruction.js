console.log("Loaded instructions");

// første knap
document.querySelector("#mund").addEventListener("click", mundF);

function mundF() {
  console.log("mundF er trykket paa");
  document.querySelector(".info-text h2").textContent = "Mund";
  document.querySelector(".cls-4").classList.add("my_scale");
  document.querySelector(".cls-4").style.transition = "transform 2s";
}

//anden knap
document.querySelector("#øjnene").addEventListener("click", øjneneF);

function øjneneF() {
  console.log("øjneneF er trykket paa");
  document.querySelector(".info-text h2").textContent = "Øjnene";
  document.querySelector(".cls-3").classList.add("my_scale");
  document.querySelector(".cls-3").style.transition = "transform 2s";
}

//tredje knap
document.querySelector("#koppen").addEventListener("click", koppenF);

function koppenF() {
  console.log("koppenF er trykket paa");
  document.querySelector(".info-text h2").textContent = "Koppen";
  document.querySelector(".cls-12").classList.add("my_scale");
  document.querySelector(".cls-12").style.transition = "transform 2s";
}
