declare function describe(name: string, fn: () => void): void;
declare function test(name: string, fn: () => void | Promise<void>): void;
declare function it(name: string, fn: () => void | Promise<void>): void;
interface ExpectMatchers {
  toBe(expected: any): void;
  toEqual(expected: any): void;
  toContain(expected: any): void;
  toBeTruthy(): void;
  toBeFalsy(): void;
  toBeGreaterThan(expected: number): void;
  toBeLessThan(expected: number): void;
  toThrow(expected?: any): void;
  toBeDefined(): void;
  toBeUndefined(): void;
}
declare function expect(actual: any): ExpectMatchers;
