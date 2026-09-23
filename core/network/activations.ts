import { Activation } from "@/core/network/types";

export const ReLU: Activation = {
  value: (x) => x.map((xi) => Math.max(0, xi)),
  derivative: (x) => x.map((xi) => (xi <= 0 ? 0 : 1)),
};

export const identity: Activation = {
  value: (x) => x,
  derivative: (x) => x.map(() => 1),
};

export const tanh: Activation = {
  value: (x) => x.map((xi) => Math.tanh(xi)),
  derivative: (x) => x.map((xi) => 1 - Math.tanh(xi) ** 2),
};
