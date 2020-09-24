"use strict";

module.exports = {
	configs: {
		"gomarky-says": {
			plugins: [ "@gomarky/no-const-enum", ],
			rules: {},
		},
	},
	rules: {
		"no-const-enum": {
			create: function(context) {
				return {
					TemplateLiteral(node) {
						context.report(node, 'Do not use template literals');
					}
				};
			}
		}
	}
};
