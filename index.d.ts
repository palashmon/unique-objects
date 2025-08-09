declare module 'unique-objects' {
	type Object_ = Record<string, unknown>;

	export default function (arrayInput: Object_[], keys: Array<keyof Object_>): Object_[];
}
