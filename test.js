import test from 'ava';
import uniqueObjects from '.';

test('Return typeerror when arrayInput is not an array.', t => {
	const err = t.throws(() => {
		uniqueObjects(23);
	}, TypeError);
	t.is(err.message, 'Expected an array for arrayInput, got number');
});

test('Return typeerror when keys is not an array.', t => {
	const err = t.throws(() => {
		uniqueObjects([], 23);
	}, TypeError);
	t.is(err.message, 'Expected an array for keys, got number');
});

test('Return empty array when not valid data.', t => {
	t.deepEqual(uniqueObjects(), []);
	t.deepEqual(uniqueObjects([], []), []);
});
