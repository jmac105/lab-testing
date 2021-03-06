// Testing Framework
import * as Code from "code";
import * as Lab from "lab";
import getHelper from "../lib/index";
import assert from "assert";
// import { thrower } from "check-verify";

const lab = exports.lab = Lab.script();
const expect = Code.expect;
const testing = getHelper(lab);

const method = testing.createExperiment("LabTesting", "throws");

class TestClass {

  constructor(one, two) {

    assert(one, "one is a required argument");
    assert(two, "one is a required argument");

    // thrower({ one, two })
    //   .check("one").is.string()
    //   .check("two").is.string();

    this.one = one;
    this.two = two;
  }

  method(one, two) {

    assert(one, "one is a required argument");
    assert(two, "one is a required argument");

    // thrower({ one, two })
    //   .check("one").is.string()
    //   .check("two").is.string();

    return;
  }
}

method("methodParameterTest", () => {

  const obj = new TestClass("one", "two");

  testing.throws.methodParameterTest(obj, obj.method, ["one", "two"], "one", "two");

  lab.test("does not error when called correctly", done => {

    const obj1 = new TestClass("one", "two");

    obj1.method("one", "two");
    return done();

  });

});

method("functionParameterTest", () => {

  const fnc = function (one, two) {

    assert(one, "one is a required argument");
    assert(two, "one is a required argument");

    // thrower({ one, two })
    //   .check("one").is.string()
    //   .check("two").is.string();

    return;
  };

  testing.throws.functionParameterTest(fnc, ["one", "two"], "one", "two");

  lab.test("does not error when called correctly", done => {

    const obj1 = new TestClass("one", "two");

    expect(obj1).to.be.an.object();
    fnc("one", "two");
    return done();

  });

});
