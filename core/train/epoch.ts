import { hadamard } from "@/core/linalg/ops";
import { backward, forward } from "@/core/network/passes";
import { Network } from "@/core/network/types";
import { Optimizer } from "@/core/optimizers/types";
import { dataLoader } from "@/core/train/data-loader";
import { Dataset, TrainingConfig } from "@/core/train/types";

export function epoch(
  network: Network,
  dataset: Dataset,
  config: TrainingConfig,
  optimizer: Optimizer,
) {
  const { minibatchSize } = config;

  const loader = dataLoader(dataset, minibatchSize);

  let epochLoss = 0;

  for (const batch of loader) {
    const sumGradW = network.map((L) =>
      L.weights.map((row) => row.map(() => 0)),
    );
    const sumGradB = network.map((L) => L.biases.map(() => 0));

    for (const example of batch) {
      const { z, a } = forward(network, example.input);
      const { gradW, gradB } = backward(network, z, a, example.label);

      for (let i = 0; i < network.length; i++) {
        for (let r = 0; r < gradW[i].length; r++) {
          for (let c = 0; c < gradW[i][r].length; c++) {
            sumGradW[i][r][c] += gradW[i][r][c];
          }
          sumGradB[i][r] += gradB[i][r];
        }
      }
      const out = a[a.length - 1];
      epochLoss += -hadamard(out, example.label).reduce(
        (acc, curr) => (acc += Math.log(curr)),
        0,
      );
    }

    network = optimizer(network, sumGradW, sumGradB);
  }

  return epochLoss;
}
