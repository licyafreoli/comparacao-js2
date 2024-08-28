// Desestruturação de Arrays
function sumFirstTwo([a, b]) {
    return a + b;
}

const numbers = [5, 10, 15, 20];
const result = sumFirstTwo(numbers);
console.log(result); // Output: 15

// Desestruturação de Objetos
function displayBookInfo({ title, author, year }) {
    console.log(`${title} foi escrito por ${author} em ${year}.`);
}

const book = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};

displayBookInfo(book); // Output: "1984 foi escrito por George Orwell em 1949."

//Comparação com e sem destruturação 
//Sem Desestruturação Arrays
function getFirstAndSecond(arr) {
    const first = arr[0];
    const second = arr[1];
    return `First: ${first}, Second: ${second}`;
}

const result = getFirstAndSecond([10, 20, 30]);
console.log(result); // Output: "First: 10, Second: 20"

//Com Desestruturação Arrays
function getFirstAndSecond([first, second]) {
    return `First: ${first}, Second: ${second}`;
}

const result = getFirstAndSecond([10, 20, 30]);
console.log(result); // Output: "First: 10, Second: 20"

//Sem Desestruturação Objetos
function getUserInfo(user) {
    const name = user.name;
    const age = user.age;
    return `${name} is ${age} years old.`;
}

const user = { name: "Alice", age: 25 };
console.log(getUserInfo(user)); // Output: "Alice is 25 years old."

//Com Desestruturação Objetos
function getUserInfo({ name, age }) {
    return `${name} is ${age} years old.`;
}

const user = { name: "Alice", age: 25 };
console.log(getUserInfo(user)); // Output: "Alice is 25 years old."

//Podemos concluir que a a desestruturação torna o código mais limpo e legível.
