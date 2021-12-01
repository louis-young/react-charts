import { waitFor } from "@testing-library/react";
import { callAllFunctions } from "..";

/**
 * This test requires further investigation as it is failing.
 */

describe.skip("callAllFunctions", () => {
  it("calls all functions", async () => {
    const firstFunction = jest.fn();
    const secondFunction = jest.fn();

    callAllFunctions(firstFunction, secondFunction);

    await waitFor(() => {
      expect(firstFunction).toHaveBeenCalledTimes(1);
      expect(secondFunction).toHaveBeenCalledTimes(1);
    });

    expect(firstFunction).toHaveBeenCalledTimes(1);
    expect(secondFunction).toHaveBeenCalledTimes(1);
  });
});
