import { Dataset } from "@/core/train/types";
import { shuffle } from "d3-array";

export function* dataLoader(dataset: Dataset, batchSize: number) {
  const size = dataset.length;
  const indices = shuffle(Array.from({ length: size }, (_, i) => i));

  for (let i = 0; i < size; i += batchSize) {
    const batchIndices = indices.slice(i, i + batchSize);
    if (batchIndices.length < batchSize) break;

    const batch = [];

    for (const idx of batchIndices) {
      batch.push(dataset.get(idx));
    }

    yield batch;
  }
}
