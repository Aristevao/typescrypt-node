import { factorial } from './factorial'

console.log('n-factorial')

const argv = require('yargs').demandOption('num').argv

const num = argv.num

console.log(`O factorial de ${num} é igual a ${factorial(num)}`)
