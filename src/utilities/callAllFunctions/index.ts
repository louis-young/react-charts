export const callAllFunctions =
  <Parameters extends unknown[]>(
    // eslint-disable-next-line @typescript-eslint/ban-types
    ...fns: Array<Function | undefined>
  ) =>
  (...args: Parameters) =>
    fns.forEach((fn) => typeof fn === "function" && fn(...args));
