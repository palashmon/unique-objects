function uniqueObjects(arrayInput = [], keys = []) {
	if (!Array.isArray(arrayInput)) {
		throw new TypeError(`Expected an array for arrayInput, got ${typeof arrayInput}`);
	}

	if (!Array.isArray(keys)) {
		throw new TypeError(`Expected an array for keys, got ${typeof keys}`);
	}

	const keySet = new Set();

	return arrayInput.filter(object => {
		const key = keys.map(k => object[k]).join('|');
		const isNew = !keySet.has(key);
		if (isNew) {
			keySet.add(key);
		}

		return isNew;
	});
}

export default uniqueObjects;
