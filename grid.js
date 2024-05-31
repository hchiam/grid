export function Grid({ rows, columns, defaultValue = "", wrap = false }) {
  this.grid = init2dArray(rows, columns, defaultValue);
  this.wrap = wrap;
}

function init2dArray(rows, cols, val = "") {
  return new Array(rows).fill(null).map(() =>
    new Array(cols).fill(null).map(() => {
      return val;
    })
  );
}

Grid.prototype.get = function (row, col) {
  return this.grid[row][col];
};

Grid.prototype.set = function (row, col, val) {
  return (this.grid[row][col] = val);
};

Grid.prototype.up = function (row, col, val) {
  const r = this.wrap
    ? (row - 1 + this.grid.length) % this.grid.length
    : Math.max(row - 1, 0);
  if (typeof val !== "undefined") this.grid[r][col] = val;
  return this.grid[r][col];
};

Grid.prototype.down = function (row, col, val) {
  const r = this.wrap
    ? (row + 1 + this.grid.length) % this.grid.length
    : Math.min(row + 1, this.grid.length - 1);
  if (typeof val !== "undefined") this.grid[r][col] = val;
  return this.grid[r][col];
};

Grid.prototype.left = function (row, col, val) {
  const c = this.wrap
    ? (col - 1 + this.grid[0].length) % this.grid[0].length
    : Math.max(col - 1, 0);
  if (typeof val !== "undefined") this.grid[row][c] = val;
  return this.grid[row][c];
};

Grid.prototype.right = function (row, col, val) {
  const c = this.wrap
    ? (col + 1 + this.grid[0].length) % this.grid[0].length
    : Math.min(col + 1, this.grid[0].length - 1);
  if (typeof val !== "undefined") this.grid[row][c] = val;
  return this.grid[row][c];
};

Grid.prototype.north = function (row, col, val) {
  return this.up(row, col, val);
};

Grid.prototype.south = function (row, col, val) {
  return this.down(row, col, val);
};

Grid.prototype.west = function (row, col, val) {
  return this.left(row, col, val);
};

Grid.prototype.east = function (row, col, val) {
  return this.right(row, col, val);
};
