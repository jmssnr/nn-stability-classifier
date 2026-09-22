import { matrix, vector } from "@/core/linalg/tensors";
import { Activation, Network } from "@/core/network/types";

export function createNetwork(
  num_inputs: number,
  num_outputs: number,
  hidden: number[],
  activations: Array<Activation>,
) {
  const sizes = [num_inputs, ...hidden, num_outputs];
  const network: Network = [];

  for (let i = 1; i < sizes.length; i++) {
    network.push({
      weights: matrix([sizes[i], sizes[i - 1]]),
      biases: vector(sizes[i]),
      activation: activations[i - 1],
    });
  }
  return network;
}
