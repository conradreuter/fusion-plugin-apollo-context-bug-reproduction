/* eslint-env node */
const {readFileSync} = require('fs')

module.exports = {
  extends: ['fusion'],
  rules: {
    'prettier/prettier': ['error', JSON.parse(readFileSync('.prettierrc'))],
  },
}
