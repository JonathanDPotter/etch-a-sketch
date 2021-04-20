const container = document.getElementById("container");

function drawCanvas(squaresPerSide) {
  container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
  for (i = 1; i <= squaresPerSide ** 2; i++) {
    let cell = document.createElement("div");
    cell.classList.add("hidden", "cell");
    cell.setAttribute("id", "cell" + i);
    cell.addEventListener("mouseover", function () {
      this.classList.remove("hidden");
    });
    container.appendChild(cell);
  }
}
drawCanvas(16);

document.getElementById("reset").addEventListener("click", () => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((c) => c.classList.add("hidden"));
  let squares = prompt("How many squares per side? ");
  drawCanvas(squares);
});
