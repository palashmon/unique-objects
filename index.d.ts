declare module 'unique-objects' {
	type ObjectType = Record<string, unknown>;

	export default function (arrayInput: ObjectType[], keys: Array<keyof ObjectType>): ObjectType[];
}
