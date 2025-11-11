const multiline = `this is a multiline string, it preserves new lines and whitespace. 
You can embed expressions like ${1 + 1}.`;

const createUserCard = (user) => (
  <article className="user-card">
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Company: {user.company}</p>
  </article>
);

const add = (a, b) => a + b;
const sayHi = () => "hi";

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((n) => n * n);
const evens = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
numbers.forEach((n, i) => console.log(n, i));

const htmlList = `
    <ul>
    ${numbers
      .filter((n) => n % 2 === 0)
      .map((n) => `<li>${n}</li>`)
      .join("")}
    </ul>
    `;

console.log(htmlList);
