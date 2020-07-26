const Intern = require('../lib/Intern');

test('make sure Intern gets name', () => {
    const name = 'Alfonso'
    const intern = new Intern('Alfonso');
    expect(intern.name).toBe(name);
    
});


test('make sure Intern gets Role', () => {
  const value = "Intern";
  const intern = new Intern(value);
  expect(intern.getRole()).toBe(value);
});

test('make sure Intern gets school', () => {
  const value = 'UTA';
  const intern = new Intern('Alfonso', 100, 'pochobs@gmail.com', value);
  expect(intern.getSchool()).toBe(value);
});