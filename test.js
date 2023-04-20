import test from 'ava';
import uniqueObjects from './index.js';

test('Return typeerror when arrayInput is not an array.', t => {
	const error = t.throws(() => {
		uniqueObjects(23);
	}, TypeError);
	t.is(error.message, 'Expected an array for arrayInput, got number');
});

test('Return typeerror when keys is not an array.', t => {
	const error = t.throws(() => {
		uniqueObjects([], 23);
	}, TypeError);
	t.is(error.message, 'Expected an array for keys, got number');
});

test('Return empty array when not valid data.', t => {
	t.deepEqual(uniqueObjects(), []);
	t.deepEqual(uniqueObjects([], []), []);
});

test('Test with single key.', t => {
	const actual = [{a: 1}, {a: 1}, {a: 2}];
	const expected = [{a: 1}, {a: 2}];
	t.deepEqual(uniqueObjects(actual, ['a']), expected);
});

test('Test with multiple keys.', t => {
	const actual = [{a: 1, b: true}, {a: 1, b: true}, {a: 2, b: true}];
	const expected = [{a: 1, b: true}, {a: 2, b: true}];
	t.deepEqual(uniqueObjects(actual, ['a', 'b']), expected);
});
