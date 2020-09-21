const dotenv = require('dotenv')
// const dotenv = require('dotenv').config()
const ci = require('@prisma/ci-info')

console.log(process.env.CI)
console.log(ci.isCI, ci.name)
dotenv.config() // This won't affect the output
console.log(ci.isCI, ci.name) // ci.isCLI is still false, comment line 1 and uncomment line 2 to fix it i.e. dotenv.config() should be called before @prisma/ci-info import
