import { formatINR, formatPortion } from "../lib/formatters";

describe("Formatters", () => {
  test("formats INR correctly", () => {
    expect(formatINR(280)).toContain("280");
  });
  test("formats portion strings", () => {
    expect(formatPortion(1)).toBe("1 Portion");
    expect(formatPortion(2)).toBe("2 Portions");
  });
});
