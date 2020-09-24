#!/usr/bin/env node

"use strict";

var path = require("path");

var Linter = require("eslint").Linter;
var eslinter = global.eslinter = new Linter();
var noConstEnum;

if (process.env.TEST_DIST) {
	noConstEnum = require(path.join(__dirname,"..","dist","eslint-plugin-no-const-enum.js"));
} else if (process.env.TEST_PACKAGE) {
	noConstEnum = require(path.join(__dirname,".."));
} else {
	noConstEnum = require(path.join(__dirname,"..","lib","index.js"));
}

eslinter.defineRule("@gomarky/no-const-enum/no-export", noConstEnum.rules['no-export'])

global.QUnit = require('qunit');

require(path.join("..","tests","tests.no-export.js"));

QUnit.start();
