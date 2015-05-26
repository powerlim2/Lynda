var prefix = 'Relaying: ';  // local variable (without var, it's global)

module.exports = function (message) {
	console.log(prefix + message);
};