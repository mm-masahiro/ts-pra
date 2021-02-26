interface Part {
	name: string;
	age: number;
	add(): number
}

const Obj = {
	name: "masahiro",
	age: 24,
	add: () => 1 *2
}

type MethodName<T> = {
	[K in keyof T]: T[K] extends Function ? K : never
} [keyof T]

type result = MethodName<Part>
