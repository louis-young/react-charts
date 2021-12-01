import { callAllFunctions } from "..";

describe("callAllFunctions", () => {
  it("calls all functions with arguments", async () => {
    const firstArgument = "__FIRST_ARGUMENT__";
    const secondArgument = "__SECOND_ARGUMENT__";

    const firstFunction = jest.fn();
    const secondFunction = jest.fn();

    callAllFunctions(firstFunction, secondFunction)(
      firstArgument,
      secondArgument,
    );

    expect(firstFunction).toHaveBeenCalledWith(firstArgument, secondArgument);
    expect(secondFunction).toHaveBeenCalledWith(firstArgument, secondArgument);
  });
});
