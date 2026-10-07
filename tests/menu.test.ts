import { MENU_ITEMS } from "../lib/data";

describe("Menu Data Integrity", () => {
  test("contains exactly 4 signature items", () => {
    expect(MENU_ITEMS.length).toBe(4);
  });
  test("all items are marked 100% Halal", () => {
    MENU_ITEMS.forEach(m => expect(m.isHalal).toBe(true));
  });
});
