import { calcTileType } from "../utils";

test('should top-left', () => {
  const result = calcTileType(0, 8);
  expect(result).toBe('top-left');
});

test('should top-right', () => {
  const result = calcTileType(7, 8);
  expect(result).toBe('top-right');
});

test('should bottom-left', () => {
  const result = calcTileType(56, 8);
  expect(result).toBe('bottom-left');
});

test('should bottom-right', () => {
  const result = calcTileType(63, 8);
  expect(result).toBe('bottom-right');
});

test('should top', () => {
  const result = calcTileType(5, 8);
  expect(result).toBe('top');
});

test('should bottom', () => {
  const result = calcTileType(60, 8);
  expect(result).toBe('bottom');
});

test('should left', () => {
  const result = calcTileType(32, 8);
  expect(result).toBe('left');
});

test('should right', () => {
  const result = calcTileType(31, 8);
  expect(result).toBe('right');
});

test('should center', () => {
  const result = calcTileType(30, 8);
  expect(result).toBe('center');
});

// /**

import { calcHealthLevel } from "../utils";

test('health < 15 - critical', () => {
  const result = calcHealthLevel(10);
  expect(result).toBe('critical');
});

test('health < 50 - normal', () => {
  const result = calcHealthLevel(30);
  expect(result).toBe('normal');
});

test('health > 50 - high', () => {
  const result = calcHealthLevel(60);
  expect(result).toBe('high');
});