module.exports = (arrayInput = [], keys = []) => {
	if (!Array.isArray(arrayInput)) {
		throw new TypeError(`Expected an array for arrayInput, got ${typeof arrayInput}`);
	}
	if (!Array.isArray(keys)) {
		throw new TypeError(`Expected an array for keys, got ${typeof keys}`);
	}

	const keyValues = arrayInput.map(value => {
		const key = keys.map(k => value[k]).join('|');
		return [key, value];
	});

	const kvMap = new Map(keyValues);
	return [...kvMap.values()];
};
