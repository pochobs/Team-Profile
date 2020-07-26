const Employee = require("../lib/Employee");
const { TestScheduler } = require("jest");
test('make sure name is a string', () => {
    const employee = new Employee('Alfonso')
    expect(employee.name).toEqual(expect.any(String));
})
test('make sure id is a number', () => {
    const idValue = 100
    const employee = new Employee("Alfonso", idValue)
    expect(employee.id).toBe(idValue);
})
test('make sure that email has a value', () => {
    const emailValue = "pochobs@mgail.com";
    const employee = new Employee("Alfonso", 100, emailValue);
    expect(employee.email).toBe(emailValue);
})
test('make sure get name gets value', () => {
    const value = "Alfonso";
    const employee = new Employee(value);
    expect(employee.getName()).toBe(value);
})
test('make sure get id gets value', () => {
    const idValue = 100;
    const employee = new Employee("Alfonso", idValue);
    expect(employee.getId()).toBe(idValue);
})
  
  test('make sure gets email ', () => {
    const testValue = "pochobs@gmail.com";
    const employee = new Employee("Foo", 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
})
  
  test("getRole() should return \"Employee\"", () => {
    const emailValue = "Employee";
    const e = new Employee("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(emailValue);
})

