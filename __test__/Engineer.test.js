const Engineer = require("../lib/Engineer");
// test('make sure Engineer gets name', () => {
//     const name = 'Alfonso'
//     const engineer = new Engineer(name);
//     expect(engineer.name).toBe(name);
//   });
test('make sure Engineer gets name', () => {
    const name = 'Alfonso'
    const engineer = new Engineer('Alfonso');
    expect(engineer.name).toBe(name);
    
});


test('make sure Engineer gets Role', () => {
  const value = "Engineer";
  const engineer = new Engineer(value);
  expect(engineer.getRole()).toBe(value);
});

test('make sure Engineer gets Github', () => {
  const value = 'Pochobs';
  const engineer = new Engineer('Alfonso', 100, 'pochobs@gmail.com', value);
  expect(engineer.getGithub()).toBe(value);
});
