import { Matrix } from "@/core/linalg/types";

export function matrix([rows, cols]: [number, number]): Matrix {
  const data = [];
  for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < cols; col++) {
      currentRow.push(Math.random());
    }
    data.push(currentRow);
  }
  return data;
}

export function vector(rows: number) {
  const data = [];
  for (let row = 0; row < rows; row++) {
    data.push(Math.random());
  }
  return data;
}
