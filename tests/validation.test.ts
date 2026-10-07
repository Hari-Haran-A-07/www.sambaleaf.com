import { isValidPhone, isValidAddress } from "../lib/validation";

describe("Validation", () => {
  test("validates 10 digit Indian phone numbers", () => {
    expect(isValidPhone("9876543210")).toBe(true);
  });
});
