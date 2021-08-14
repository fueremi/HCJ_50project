const button = document.querySelector(".btn");
const search = document.querySelector(".search");

button.addEventListener("click", () => {
  if (search.classList.contains("active")) {
    search.classList.remove("active");
  } else {
    search.classList.add("active");
  }
});
