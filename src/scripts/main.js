'use strict';

// write your code here

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  const sourceCell = row.cells[1];
  const newCell = row.insertCell(row.cells.length - 1);

  newCell.textContent = sourceCell.textContent;

  if (i === 0 || i === table.rows.length - 1) {
    const thElement = document.createElement('th');

    thElement.textContent = sourceCell.textContent;
    row.replaceChild(thElement, newCell);
  }
}
