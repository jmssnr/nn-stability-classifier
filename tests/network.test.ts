import { ReLU } from "@/core/network/activations";
import { createNetwork } from "@/core/network/create";
import { expect, test } from "vitest";

test("relu activation", () => {
  const x = [2, -5, 0, -0.2];
  const v = ReLU.value(x);
  const der = ReLU.derivative(x);
  expect(v).toEqual([2, 0, 0, 0]);
  expect(der).toEqual([1, 0, 0, 0]);
});

test("creates network", () => {
  const network = createNetwork(2, 1, [5, 2], [ReLU, ReLU]);
  const numLayers = 3;
  expect(network.length).toEqual(numLayers);
});
