const container = document.getElementById("container")
for (i = 1; i < 257; i++) {
  let cell = document.createElement('div');
  cell.setAttribute("class", "cell");
  cell.setAttribute("id", "cell" + i);
  container.appendChild(cell);
}