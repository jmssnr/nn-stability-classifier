import { expect, test } from "vitest";
import { add, dot, outer, scale, sub, transpose } from "../core/linalg/ops";
import { matrix, vector } from "../core/linalg/tensors";

test("add vectors", () => {
  const v = [1, 2, 3, 4];
  const u = [10, 20, 30, 40];
  const b = add(v, u);
  expect(b).toEqual([11, 22, 33, 44]);
});

test("subtract vectors", () => {
  const v = [1, 2, 3, 4];
  const u = [10, 20, 30, 40];
  const b = sub(u, v);
  expect(b).toEqual([9, 18, 27, 36]);
});

test("matrix vector product", () => {
  const x = [1, 2, 3];
  const A = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  const b = dot(A, x);
  expect(b).toEqual([1 * 1 + 2 * 2 + 3 * 3, 1 * 4 + 2 * 5 + 3 * 6]);
});

test("transpose matrix", () => {
  const A = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  expect(transpose(A)).toEqual([
    [1, 4],
    [2, 5],
    [3, 6],
  ]);
});

test("scale vector", () => {
  const x = [1, 2, 3, 4];
  expect(scale(10, x)).toEqual([10, 20, 30, 40]);
});

test("outer vector product", () => {
  const v = [1, 2, 3];
  const u = [10, 20, 30];

  expect(outer(v, u)).toEqual([
    [10, 20, 30],
    [20, 40, 60],
    [30, 60, 90],
  ]);
});

test("creates random matrix", () => {
  const A = matrix([3, 5]);
  const rows = A.length;
  const cols = A[0].length;
  expect(rows).toEqual(3);
  expect(cols).toEqual(5);
});

test("creates random matrix", () => {
  const x = vector(5);
  const rows = x.length;
  expect(rows).toEqual(5);
});
