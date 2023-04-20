declare module 'unique-objects' {
	type Obj = Record<string, unknown>;

	export default function (arrayInput: Obj[], keys: (keyof Obj)[]): Obj[];
}
