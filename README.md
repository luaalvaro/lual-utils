<div align="center">
    <h1>LUAL UTILS</h1>
    <a href="https://gzappy.com"><img src="https://img.shields.io/badge/LUAL-UTILS-blue" alt="GZAPPY API" /></a>
    <a href="https://www.npmjs.com/package/lual-utils"><img src="https://img.shields.io/npm/v/lual-utils?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/lual-utils"><img src="https://img.shields.io/npm/dt/lual-utils?maxAge=3600" alt="npm downloads" /></a>
</div>

## Introdução

`lual-utils` é uma biblioteca que foi construída para criação de um artigo sobre a criação de um pacote JavaScript para publicação no NPM.

<!-- // link -->

[Artigo: Como criar um pacote JavaScript para o NPM
](https://gzappy.ghost.io/como-criar-um-pacote-javascript-para-o-npm-2/)

Neste artigo eu abordo etapa por etpada sobre a construção deste pacote, desde a criação do projeto até a publicação no NPM.

## Funcionalidades

- **Validar CPF** ✅
- **Validar CNPJ** ✅
- Validar Email ⏱️
- Máscara de WhatsApp ⏱️

## Instalação

Para instalar o GZAPPY, execute o seguinte comando:

```bash
npm install lual-utils
```

## Uso

```js
// Importação do módulo lual-utils
import { isCpfOrCnpjValid } from "lual-utils";

const cpf = "12345678901";
const cnpj = "12345678901234";

console.log(isCpfOrCnpjValid(cpf)); // false
console.log(isCpfOrCnpjValid(cnpj)); // false
```
