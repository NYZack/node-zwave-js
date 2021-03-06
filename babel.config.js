module.exports = {
	presets: [
		"@babel/preset-typescript",
		["@babel/preset-env", { targets: { node: "current" } }],
	],
	plugins: [
		["@babel/plugin-transform-typescript", { allowDeclareFields: true }],
		"@babel/plugin-proposal-numeric-separator",
		"@babel/plugin-proposal-optional-chaining",
		"@babel/plugin-proposal-nullish-coalescing-operator",
		"@babel/proposal-object-rest-spread",
		["@babel/plugin-proposal-decorators", { legacy: true }],
		["@babel/plugin-proposal-class-properties", { loose: true }],
	],
};
