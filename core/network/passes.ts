import { add, dot, hadamard, outer, sub, transpose } from "@/core/linalg/ops";
import { Matrix, Vector } from "@/core/linalg/types";
import { Network } from "@/core/network/types";

export function forward(network: Network, input: Vector) {
  const z = [];
  const a = [input];
  let i = 0;
  for (const layer of network) {
    z.push(add(dot(layer.weights, a[i]), layer.biases));
    a.push(layer.activation.value(z[i]));
    i += 1;
  }
  return { z, a };
}

export function backward(
  network: Network,
  z: Array<Vector>,
  a: Array<Vector>,
  y: Vector,
) {
  const gradW: Array<Matrix> = Array.from({ length: network.length });
  const gradB: Array<Vector> = Array.from({ length: network.length });

  let delta = hadamard(
    sub(a[a.length - 1], y),
    network[network.length - 1].activation.derivative(z[z.length - 1]),
  );

  for (let i = network.length - 1; i >= 0; i--) {
    gradB[i] = delta;
    gradW[i] = outer(delta, a[i]);
    if (i > 0) {
      delta = hadamard(
        dot(transpose(network[i].weights), delta),
        network[i - 1].activation.derivative(z[i - 1]),
      );
    }
  }

  return { gradW, gradB };
}

export function predict(network: Network, input: Vector) {
  const { a } = forward(network, input);
  return a[a.length - 1];
}
