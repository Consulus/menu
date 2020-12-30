const point = document.querySelectorAll(".point");

point.forEach((a) =>
  a.addEventListener("click", () => {
    point.forEach((a) => a.classList.remove("color"));
    a.classList.toggle("color");
  })
);

console.log(point);
