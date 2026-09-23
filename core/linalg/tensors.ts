import { Matrix } from "@/core/linalg/types";

export function matrix([rows, cols]: [number, number]): Matrix {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Math.random()),
  );
}

export function vector(rows: number) {
  return Array.from({ length: rows }, () => Math.random());
}
