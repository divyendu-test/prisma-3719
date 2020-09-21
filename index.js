const dotenv = require('dotenv')
const ci = require('@prisma/ci-info')

console.log(process.env.CI)
console.log(ci.isCI, ci.name)
dotenv.config() // This won't affect the output
console.log(ci.isCI, ci.name)
