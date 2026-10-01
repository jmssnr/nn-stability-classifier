import { Matrix, Vector } from "@/core/linalg/types";
import { Network } from "@/core/network/types";

export type Optimizer = (
  network: Network,
  gradW: Array<Matrix>,
  gradB: Array<Vector>,
) => Network;
