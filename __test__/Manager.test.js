const Manager = require("../lib/Manager");

test('make sure Manager gets name', () => {
    const name = 'Alfonso'
    const manager = new Manager('Alfonso');
    expect(manager.name).toBe(name);
    
});


test('make sure Manager gets Role', () => {
  const value = "Manager";
  const manager = new Manager(value);
  expect(manager.getRole()).toBe(value);
});

test('make sure Manager gets Github', () => {
  const value = 2025608197;
  const manager = new Manager('Alfonso', 100, 'pochobs@gmail.com', value);
  expect(manager.getOfficeNumber()).toBe(value);
});