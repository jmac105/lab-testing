# lab-testing

[![Build Status](https://travis-ci.org/midknight41/lab-testing.svg?branch=master)](https://travis-ci.org/midknight41/lab-testing) [![Coverage Status](https://coveralls.io/repos/github/midknight41/lab-testing/badge.svg?branch=master)](https://coveralls.io/github/midknight41/lab-testing?branch=master)
[![Deps](https://david-dm.org/midknight41/lab-testing.svg)](https://david-dm.org/midknight41/lab-testing?info=dependencies) [![devDependency Status](https://david-dm.org/midknight41/lab-testing/dev-status.svg)](https://david-dm.org/midknight41/lab-testing?info=devDependencies)

[![NPM](https://nodei.co/npm/lab-testing.png?downloads=true)](https://www.npmjs.com/package/lab-testing/)

## Installation

```js
npm install lab-testing --save-dev
```

## Standard Constructor Test
Executes basic tests for nulls and undefined against all constructor parameters.

### Parameters:

- **class:** *Class* - The class to instantiate
- **labels:** *string[]* - description of the parameters for the constructor
- **parameters:** *...params* - The correct values for the constructor

```js

import * as Code from "code";
import * as Lab from "lab";
import getHelper from "lab-testing";

const lab = exports.lab = Lab.script();
const helper = getHelper(lab);

lab.experiment("standardContructorTest", () => {

  helper.standardContructorTest(TestClass, ["one", "two"], "one", "two");

});

```
## Function Parameter Test
Executes basic tests for nulls and undefined against all function parameters.

### Parameters:

- **function:** *Function* - The function to test
- **labels:** *string[]* - description of the parameters for the constructor
- **parameters:** *...params* - The correct values for the constructor

```js
import * as Lab from "lab";
import getHelper from "lab-testing";

const lab = exports.lab = Lab.script();
const helper = getHelper(lab);

lab.experiment("functionParameterTest", () => {

  const fnc = function (one, two) {

    // no parameter checks! This will fail some tests
    return;
  };

  helper.functionParameterTest(fnc, ["one", "two"], "one", "two");

});
```

## Method Parameter Test
Executes basic tests for nulls and undefined against all method parameters.

### Parameters:

- **object:** *Object* - The instance of a class
- **function:** *Function* - The method on that instance
- **labels:** *string[]* - description of the parameters for the constructor
- **parameters:** *...params* - The correct values for the constructor

```js
import * as Lab from "lab";
import getHelper from "lab-testing";

const lab = exports.lab = Lab.script();
const helper = getHelper(lab);

lab.experiment("methodParameterTest", () => {

  const obj = new TestClass("one", "two");

  helper.functionParameterTest(obj, obj.method, ["one", "two"], "one", "two");

});
```


## createExperiment
Sometimes you want to represent hierarchy in your tests which, with lab, means a lot of indenting. This just reduces that indent and eliminates the boilerplate code.

### Parameters:

- **service:** *string* - The top level in the hierarchy
- **component:** *string* - The secondary level in the hierarchy

```js

import * as Code from "code";
import * as Lab from "lab";
import getHelper from "lab-testing";

const lab = exports.lab = Lab.script();
const expect = Code.expect;
const helper = getHelper(lab);

const method = helper.createExperiment("Service", "Component");

method("methodOne", () => {

  lab.test(done => {
    return done();
  });

});

```
