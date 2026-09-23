import { Matrix, Vector } from "@/core/linalg/types";

export const add = (v: Vector, u: Vector): Vector =>
  v.map((vi, idx) => vi + u[idx]);

export const sub = (v: Vector, u: Vector): Vector =>
  v.map((vi, idx) => vi - u[idx]);

export const dot = (A: Matrix, x: Vector): Vector =>
  A.map((row) => row.reduce((acc, curr, idx) => (acc += curr * x[idx]), 0));

export const outer = (v: Vector, u: Vector): Matrix =>
  v.map((vi) => u.map((ui) => vi * ui));

export const hadamard = (v: Vector, u: Vector): Vector =>
  v.map((vi, idx) => vi * u[idx]);

export const scale = (scaler: number, x: Vector): Vector =>
  x.map((xi) => scaler * xi);

export const transpose = (A: Matrix): Matrix =>
  A[0].map((_, colIdx) => A.map((row) => row[colIdx]));
