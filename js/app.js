const change = document.querySelector(".changemode");
const body = document.querySelector("body");

change.addEventListener("click", function (e) {
  if (e.target.name === "moon") {
    e.target.name = "sunny";
    body.classList.add("dark");
    change.classList.add("text-white");
  } else {
    e.target.name = "moon";
    body.classList.remove("dark");
    change.classList.remove("text-white");
  }
});
