import { Activation } from "@/core/network/types";

export const ReLU: Activation = {
  value: (x) => x.map((xi) => Math.max(0, xi)),
  derivative: (x) => x.map((xi) => (xi <= 0 ? 0 : 1)),
};
