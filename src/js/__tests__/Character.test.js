import Character from "../Character";

import Bowman from "../characters/Bowman";
import Daemon from "../characters/Daemon";
import Magician from "../characters/Magician";
import Swordsman from "../characters/Swordsman";
import Undead from "../characters/Undead";
import Vampire from "../characters/Vampire";

test('нельзя new Character', () => {
  expect(() => new Character(2)).toThrow('исключение - запрещено использовать new Character()');
});

// Bowman
test('если bowman', () => {
    const result = new Bowman(3);
    const bowman = {health: 50, level: 3, type: 'bowman', attack: 25, defence: 25};
    expect(result).toEqual(bowman);
});

test('или НЕ bowman', () => {
    expect(() => new Bowman(3, 'generic')).toThrow('исключение - не bowman');
});

// Daemon
test('если daemon', () => {
    const result = new Daemon(3);
    const daemon = {health: 50, level: 3, type: 'daemon', attack: 10, defence: 10};
    expect(result).toEqual(daemon);
});

test('или НЕ daemon', () => {
    expect(() => new Daemon(3, 'generic')).toThrow('исключение - не daemon');
});

// Magician
test('если magician', () => {
    const result = new Magician(3);
    const magician = {health: 50, level: 3, type: 'magician', attack: 10, defence: 10};
    expect(result).toEqual(magician);
});

test('или НЕ magician', () => {
    expect(() => new Magician(3, 'generic')).toThrow('исключение - не magician');
});

// Swordsman
test('если swordsman', () => {
    const result = new Swordsman(3);
    const swordsman = {health: 50, level: 3, type: 'swordsman', attack: 40, defence: 10};
    expect(result).toEqual(swordsman);
});

test('или НЕ swordsman', () => {
    expect(() => new Swordsman(3, 'generic')).toThrow('исключение - не swordsman');
});

// Undead
test('если undead', () => {
    const result = new Undead(3);
    const undead = {health: 50, level: 3, type: 'undead', attack: 40, defence: 10};
    expect(result).toEqual(undead);
});

test('или НЕ undead', () => {
    expect(() => new Undead(3, 'generic')).toThrow('исключение - не undead');
});

// Vampire
test('если vampire', () => {
    const result = new Vampire(3);
    const vampire = {health: 50, level: 3, type: 'vampire', attack: 25, defence: 25};
    expect(result).toEqual(vampire);
});

test('или НЕ vampire', () => {
    expect(() => new Vampire(3, 'generic')).toThrow('исключение - не vampire');
});