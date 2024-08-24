const { defineConfig } = require('cypress');

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	// e2e: {
	// 	setupNodeEvents(on, config) {
	// 		// implement node event listeners here
	// 		(screenshotOnRunFailure = true),
	// 			require('cypress-mochawesome-reporter/plugin')(on);
	// 	},
	// },
	env: {
		baseUrl: 'http://localhost:8484',
	},

	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
