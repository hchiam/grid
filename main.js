import { Grid } from "./grid";

function log(text) {
  console.log(text);
  document.querySelector("#log").innerText += text + "\n";
}

const grid = new Grid({ rows: 3, cols: 3 });
grid.set(0, 0, 0);
grid.set(0, 1, 1);
grid.set(0, 2, 2);
grid.set(1, 0, 3);
grid.set(1, 1, 4);
grid.set(1, 2, 5);
grid.set(2, 0, 6);
grid.set(2, 1, 7);
grid.set(2, 2, 8);

console.table(grid.grid);

log(grid.get(0, 0) === 0);
log(grid.get(0, 1) === 1);
log(grid.get(0, 2) === 2);
log(grid.get(1, 0) === 3);
log(grid.get(1, 1) === 4);
log(grid.get(1, 2) === 5);
log(grid.get(2, 0) === 6);
log(grid.get(2, 1) === 7);
log(grid.get(2, 2) === 8);

log(grid.up(0, 0) === 0);
log(grid.up(0, 1) === 1);
log(grid.up(0, 2) === 2);
log(grid.up(1, 0) === 0);
log(grid.up(1, 1) === 1);
log(grid.up(1, 2) === 2);
log(grid.up(2, 0) === 3);
log(grid.up(2, 1) === 4);
log(grid.up(2, 2) === 5);

log(grid.down(0, 0) === 3);
log(grid.down(0, 1) === 4);
log(grid.down(0, 2) === 5);
log(grid.down(1, 0) === 6);
log(grid.down(1, 1) === 7);
log(grid.down(1, 2) === 8);
log(grid.down(2, 0) === 6);
log(grid.down(2, 1) === 7);
log(grid.down(2, 2) === 8);

log(grid.left(0, 0) === 0);
log(grid.left(0, 1) === 0);
log(grid.left(0, 2) === 1);
log(grid.left(1, 0) === 3);
log(grid.left(1, 1) === 3);
log(grid.left(1, 2) === 4);
log(grid.left(2, 0) === 6);
log(grid.left(2, 1) === 6);
log(grid.left(2, 2) === 7);

log(grid.right(0, 0) === 1);
log(grid.right(0, 1) === 2);
log(grid.right(0, 2) === 2);
log(grid.right(1, 0) === 4);
log(grid.right(1, 1) === 5);
log(grid.right(1, 2) === 5);
log(grid.right(2, 0) === 7);
log(grid.right(2, 1) === 8);
log(grid.right(2, 2) === 8);

log(grid.right(0, 0, "a") === "a");
log(grid.right(0, 1, "b") === "b");
log(grid.right(0, 2, "c") === "c");
log(grid.right(1, 0, "d") === "d");
log(grid.right(1, 1, "e") === "e");
log(grid.right(1, 2, "f") === "f");
log(grid.right(2, 0, "g") === "g");
log(grid.right(2, 1, "h") === "h");
log(grid.right(2, 2, "i") === "i");

grid.wrap = true;

grid.set(0, 0, 0);
grid.set(0, 1, 1);
grid.set(0, 2, 2);
grid.set(1, 0, 3);
grid.set(1, 1, 4);
grid.set(1, 2, 5);
grid.set(2, 0, 6);
grid.set(2, 1, 7);
grid.set(2, 2, 8);

console.table(grid.grid);

log(grid.north(0, 0) === 6);
log(grid.north(0, 1) === 7);
log(grid.north(0, 2) === 8);
log(grid.north(1, 0) === 0);
log(grid.north(1, 1) === 1);
log(grid.north(1, 2) === 2);
log(grid.north(2, 0) === 3);
log(grid.north(2, 1) === 4);
log(grid.north(2, 2) === 5);

log(grid.south(0, 0) === 3);
log(grid.south(0, 1) === 4);
log(grid.south(0, 2) === 5);
log(grid.south(1, 0) === 6);
log(grid.south(1, 1) === 7);
log(grid.south(1, 2) === 8);
log(grid.south(2, 0) === 0);
log(grid.south(2, 1) === 1);
log(grid.south(2, 2) === 2);

log(grid.west(0, 0) === 2);
log(grid.west(0, 1) === 0);
log(grid.west(0, 2) === 1);
log(grid.west(1, 0) === 5);
log(grid.west(1, 1) === 3);
log(grid.west(1, 2) === 4);
log(grid.west(2, 0) === 8);
log(grid.west(2, 1) === 6);
log(grid.west(2, 2) === 7);

log(grid.east(0, 0) === 1);
log(grid.east(0, 1) === 2);
log(grid.east(0, 2) === 0);
log(grid.east(1, 0) === 4);
log(grid.east(1, 1) === 5);
log(grid.east(1, 2) === 3);
log(grid.east(2, 0) === 7);
log(grid.east(2, 1) === 8);
log(grid.east(2, 2) === 6);
