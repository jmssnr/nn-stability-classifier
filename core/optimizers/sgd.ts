import { Matrix, Vector } from "@/core/linalg/types";
import { Network } from "@/core/network/types";

export function sgd(learningRate: number) {
  return (network: Network, gradW: Array<Matrix>, gradB: Array<Vector>) => {
    let i = 0;
    for (const layer of network) {
      layer.weights = layer.weights.map((row, r) =>
        row.map((w, c) => w - learningRate * gradW[i][r][c]),
      );
      layer.biases = layer.biases.map((b, r) => b - learningRate * gradB[i][r]);
      i += 1;
    }
    return network;
  };
}
