# unique-objects ![CI](https://github.com/palashmon/unique-objects/actions/workflows/main.yml/badge.svg)

> Get unique objects from array of objects based on single/multiple keys.

## Install

```
$ npm i unique-objects
```

## Usage

This can be helpful in cases where you need unique records based on a single key or multiple keys.

```js
const uniqueObjects = require('unique-objects');
const users = [
	{ id: 1, username: 'bret' },
	{ id: 2, username: 'samantha' },
	{ id: 2, username: 'samantha' },
	{ id: 2, username: 'samantha2' },
	{ id: 3, username: 'elvis' },
	{ id: 3, username: 'elvis2' },
	{ id: 3, username: 'elvis2' }
];

// Get unique objects in the users array based on just id
uniqueObjects(users, ['id']);

//=> Returns just 3 unique objects out of 7
// [
// 	{ "id": 1, "username": "bret"},
// 	{ "id": 2, "username": "samantha2"},
// 	{ "id": 3, "username": "elvis2"},
// ]

// Get unique objects in the users array based on both id & username
uniqueObjects(users, ['id', 'username']);

//=> Returns just 5 unique objects out of 7
// [
// 	{ "id": 1, "username": "bret"},
// 	{ "id": 2, "username": "samantha"},
// 	{ "id": 2, "username": "samantha2"},
// 	{ "id": 3, "username": "elvis"},
// 	{ "id": 3, "username": "elvis2"},
// ]
```

## API

### uniqueObjects(arrayInput, keys)

#### arrayInput

Type: `Array`<br>
Default: `[]`

Must be a JavaScript Array. This is main array of object that we are going to process.

#### keys

Type: `Array`<br>
Default: `[]`

Must be a JavaScript Array. This is the array of key(s) in the object that is used to find object is unique or not.

## License

MIT © [Palash Mondal](https://github.com/palashmon)
