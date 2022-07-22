// min = 3, max gioi han trong kich thuoc trinh duyet
const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;
const MIN_ROW = 3;
const MIN_Cell = 3;
const MAX_ROW = Math.floor(clientHeight / 30);
const MAX_CELL = Math.floor(clientWidth / 30);

let row, cell;

while (!row || !cell) {
  const inputRow = +prompt(
    `Enter num of rows (min = ${MIN_ROW}, max = ${MAX_CELL})`,
    5
  );
}
