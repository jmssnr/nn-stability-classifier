import { add, dot } from "@/core/linalg/ops";
import { Vector } from "@/core/linalg/types";
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
