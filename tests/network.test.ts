import { identity, ReLU } from "@/core/network/activations";
import { createNetwork } from "@/core/network/create";
import { forward } from "@/core/network/passes";
import { expect, test } from "vitest";

test("relu activation", () => {
  const x = [2, -5, 0, -0.2];
  const v = ReLU.value(x);
  const der = ReLU.derivative(x);
  expect(v).toEqual([2, 0, 0, 0]);
  expect(der).toEqual([1, 0, 0, 0]);
});

test("creates network", () => {
  const network = createNetwork(2, 1, [5, 2], [ReLU, ReLU, ReLU], 0.23);
  const numLayers = 3;
  expect(network.length).toEqual(numLayers);
});

test("forward pass", () => {
  const network = createNetwork(2, 1, [5, 2], [ReLU, ReLU, identity], 0.23);
  const input = [1, 2];
  const { a, z } = forward(network, input);
  expect(a[0]).toEqual(input);
  expect(a[1]).toEqual(ReLU.value(z[0]));
});
