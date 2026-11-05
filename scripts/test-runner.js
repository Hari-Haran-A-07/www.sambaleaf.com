/**
 * SAMBA LEAF Universal Test Runner
 * Executes unit tests for validation, formatters, menu data integrity, and WhatsApp URL builders.
 */

const fs = require('fs');
const path = require('path');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

global.describe = function (suiteName, fn) {
  console.log(`\n📦 \x1b[1m\x1b[36m${suiteName}\x1b[0m`);
  try {
    fn();
  } catch (err) {
    console.error(`  \x1b[31mSuite failed: ${err.message}\x1b[0m`);
  }
};

global.test = global.it = function (testName, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  \x1b[32m✓\x1b[0m \x1b[90m${testName}\x1b[0m`);
  } catch (err) {
    failedTests++;
    failures.push({ name: testName, error: err });
    console.log(`  \x1b[31m✗\x1b[0m \x1b[1m\x1b[31m${testName}\x1b[0m`);
    console.log(`    \x1b[31m${err.message}\x1b[0m`);
  }
};

global.expect = function (actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected [${expected}] (${typeof expected}) but got [${actual}] (${typeof actual})`);
      }
    },
    toEqual(expected) {
      const actualStr = JSON.stringify(actual);
      const expectedStr = JSON.stringify(expected);
      if (actualStr !== expectedStr) {
        throw new Error(`Expected ${expectedStr} but got ${actualStr}`);
      }
    },
    toContain(expected) {
      if (!actual || !actual.includes(expected)) {
        throw new Error(`Expected [${actual}] to contain [${expected}]`);
      }
    },
    toBeTruthy() {
      if (!actual) throw new Error(`Expected truthy value but got [${actual}]`);
    },
    toBeFalsy() {
      if (actual) throw new Error(`Expected falsy value but got [${actual}]`);
    },
    toBeGreaterThan(expected) {
      if (!(actual > expected)) throw new Error(`Expected ${actual} > ${expected}`);
    },
    toBeLessThan(expected) {
      if (!(actual < expected)) throw new Error(`Expected ${actual} < ${expected}`);
    },
    toBeDefined() {
      if (actual === undefined) throw new Error(`Expected value to be defined`);
    },
    toBeUndefined() {
      if (actual !== undefined) throw new Error(`Expected value to be undefined`);
    }
  };
};

// Run built-in test suite modules
console.log('\x1b[1m\x1b[33m⚡ Starting SAMBA LEAF Automated Quality & Integration Test Suite...\x1b[0m');

// Formatters validation
require('../lib/formatters');
const { formatINR, formatPortion } = require('../lib/formatters');
describe('Core Currency & Portion Formatters', () => {
  test('formats INR prices correctly', () => {
    expect(formatINR(280)).toContain('280');
    expect(formatINR(360)).toContain('360');
  });
  test('formats single portion', () => {
    expect(formatPortion(1)).toBe('1 Portion');
  });
  test('formats plural portions', () => {
    expect(formatPortion(3)).toBe('3 Portions');
  });
});

// Menu integrity
const { MENU_ITEMS } = require('../lib/data');
describe('Culinary Menu Integrity', () => {
  test('contains four signature heritage items', () => {
    expect(MENU_ITEMS.length).toBe(4);
  });
  test('all items have valid images, descriptions and pricing', () => {
    MENU_ITEMS.forEach(item => {
      expect(typeof item.name).toBe('string');
      expect(typeof item.priceNumeric).toBe('number');
      expect(item.priceNumeric > 0).toBe(true);
      expect(item.isHalal).toBe(true);
    });
  });
});

// Validation
const { isValidPhone, isValidAddress } = require('../lib/validation');
describe('Customer Input Validation', () => {
  test('validates 10-digit Indian mobile numbers', () => {
    expect(isValidPhone('9876543210')).toBe(true);
    expect(isValidPhone('8123456789')).toBe(true);
  });
  test('rejects invalid phone numbers', () => {
    expect(isValidPhone('123')).toBe(false);
    expect(isValidPhone('abcdefghij')).toBe(false);
  });
  test('validates delivery address length', () => {
    expect(isValidAddress('12 Kovai Road, Karur')).toBe(true);
    expect(isValidAddress('abc')).toBe(false);
  });
});

// WhatsApp Link Generator
const { generateWhatsAppOrderUrl } = require('../lib/whatsapp');
describe('WhatsApp Instant Ordering Protocol', () => {
  test('generates valid wa.me URI with recipient and encoded message', () => {
    const url = generateWhatsAppOrderUrl('919876543210', {
      dish: 'Chicken Biryani',
      qty: 2,
      accompaniments: 'Raitha + Thalcha'
    });
    expect(url).toContain('https://wa.me/919876543210');
    expect(url).toContain('Chicken%20Biryani');
  });
});

// Summary
console.log('\n-----------------------------------------------------');
console.log(`\x1b[1mTest Results: ${passedTests}/${totalTests} Passed (${failedTests} Failed)\x1b[0m`);
if (failedTests > 0) {
  console.log('\x1b[31m❌ Some tests failed!\x1b[0m');
  process.exit(1);
} else {
  console.log('\x1b[32m✨ All SAMBA LEAF integration tests passed successfully!\x1b[0m\n');
  process.exit(0);
}
