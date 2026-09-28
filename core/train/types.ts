export type Example = {
  input: Array<number>;
  label: Array<number>;
};

export type Dataset = {
  data: Array<Example>;
  get: (idx: number) => Example;
  length: number;
};
