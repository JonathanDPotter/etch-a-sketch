const container = document.getElementById("container")
for (i = 1; i < 257; i++) {
  let cell = document.createElement('div');
  cell.classList.add("hidden", "cell");
  cell.setAttribute("id", "cell" + i);
  cell.addEventListener("mouseover", function () {
   this.classList.remove("hidden") 
  })
  container.appendChild(cell);
}
document.getElementById("reset").addEventListener("click", () => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((c) => c.classList.add("hidden"));
})