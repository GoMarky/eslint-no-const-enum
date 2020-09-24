"use strict";

var linterOptions = {
	paramsDefault: {
		parserOptions: { ecmaVersion: 2015, },
		rules: { "@gomarky/no-const-enum/no-export": "error", },
	},
};

QUnit.test( "PARAMS (default): conforming", function test(assert){
	var code = '`const enum Test = {Var1,Var2}`';
	
	var results = eslinter.verify( code, linterOptions.paramsDefault );
	
	assert.expect( 1 );
	assert.strictEqual( results.length, 0, "no errors" );
});
