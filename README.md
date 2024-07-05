<div align="center">
    <h1>LUAL UTILS</h1>
    <a href="https://gzappy.com"><img src="https://img.shields.io/badge/LUAL-UTILS-blue" alt="GZAPPY API" /></a>
    <a href="https://www.npmjs.com/package/lual-utils"><img src="https://img.shields.io/npm/v/lual-utils?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/lual-utils"><img src="https://img.shields.io/npm/dt/lual-utils?maxAge=3600" alt="npm downloads" /></a>
</div>

## Introduction 📖

`lual-utils` is a library that was built for creating an article about developing a JavaScript package for publication on NPM. The article is in Portuguese and can be accessed at the following link:

[Artigo: Como criar um pacote JavaScript para o NPM
](https://gzappy.ghost.io/como-criar-um-pacote-javascript-para-o-npm-2/)

In this article, I cover step by step the process of building this package, from project creation to publishing on NPM. However, to make it more than just a theoretical article, I created this package with some utility functions that I use frequently in my daily life and that might be useful for you too.

## Features 🚀

- **Validate CPF** ✅
- **Validate CNPJ** ✅
- **Generate Random Code** ✅
- **Phone Number Masking for Major Countries** ✅
- **Validate Email** ✅
- Password Generator ⏱️

## Contributing 🤝

If you want to contribute to this project, feel free to fork this repository and submit a pull request. I will be happy to review and approve it.

## Installation 📦

To install **lual-utils**, run the following command:

```bash
npm install lual-utils
```

## Validate CPF and CNPJ

Validation of CPF and CNPJ using regular expressions and validation algorithms.

```js
// Import the lual-utils module
import { isCpfOrCnpjValid } from 'lual-utils'

const cpf = '12345678901'
const cnpj = '12345678901234'

console.log(isCpfOrCnpjValid(cpf)) // true or false
console.log(isCpfOrCnpjValid(cnpj)) // true or false
```

## Validate Email

Email validation using regular expressions.

```js
// Import the lual-utils module
import { isEmailValid } from 'lual-utils'

const emailExample = 'example@email.com'

console.log(isEmailValid(emailExample)) // true or false
```

## Generate Random Code

Generate a random code to be used as a token, password, etc. This generation uses the `Math.random()` algorithm.

```js
// Import the lual-utils module
import { genRandomStrCode } from 'lual-utils'

const password = genRandomStrCode(8)
console.log(password) // 7sa2d3f4
```

## Phone Number Masking

Phone number masking for major countries, using regular expressions based on the country codes of the 25+ most used countries.

```js
// Import the lual-utils module
import { setPhoneMask } from 'lual-utils'

const phone = '5511999999999'
const phoneMask = setPhoneMask(phone) // +55 (11) 99999-9999
```
