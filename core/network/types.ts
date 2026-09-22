import { Matrix, Vector } from "@/core/linalg/types";

export type Activation = {
  value: (x: Vector) => Vector;
  derivative: (x: Vector) => Vector;
};

export type Layer = {
  weights: Matrix;
  biases: Vector;
  activation: Activation;
};

export type Network = Array<Layer>;
