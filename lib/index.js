"use strict";

module.exports = {
	configs: {
		"gomarky-says": {
			plugins: [ "@gomarky/no-const-enum",],
			rules: {
				"@gomarky/no-const-enum/no-export": "error",
			},
		},
	},
	rules: {
		"no-export": {
			meta: {
				type: "problem",
				docs: {
					description: "Do not use const-enum",
				},
			},
			create: function(context) {
				return {
					TemplateLiteral(node) {
						console.log(node);
						
						context.report(node, 'Do not use template literals');
					}
				};
			}
		}
	}
};
