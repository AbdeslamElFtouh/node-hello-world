import {cowsay} from 'cowsayjs';

console.log('Hello World');
console.log('Hello Boolean');

// const fraseDaTerminale = process.argv

// Prendiamo solo il nostro argomento:
const fraseDaTerminale = process.argv.slice(2)
console.log(fraseDaTerminale);

const arrayDiStringhe = ['Questa ',' è ',' Spartaaaa']

console.log('Questa è follia...');
console.log(cowsay(`${arrayDiStringhe}`));
