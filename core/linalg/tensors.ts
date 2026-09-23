import { Matrix } from "@/core/linalg/types";
import { randomLcg, randomUniform } from "d3-random";

export function matrix([rows, cols]: [number, number], seed?: number): Matrix {
  const random =
    seed !== undefined
      ? randomUniform.source(randomLcg(seed))(-1, 1)
      : Math.random;

  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => random()),
  );
}

export function vector(rows: number, seed?: number) {
  const random =
    seed !== undefined
      ? randomUniform.source(randomLcg(seed))(-1, 1)
      : Math.random;

  return Array.from({ length: rows }, () => random());
}
