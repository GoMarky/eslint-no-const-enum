#!/usr/bin/env node

"use strict";

var path = require("path");

var Linter = require("eslint").Linter;
var eslinter = global.eslinter = new Linter();
var properArrows;

/* istanbul ignore next */
if (process.env.TEST_DIST) {
	//
}
/* istanbul ignore next */
else if (process.env.TEST_PACKAGE) {
	//
}
else {
	//
}

global.QUnit = require("qunit");

QUnit.start();
