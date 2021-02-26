interface Foo {
	bar: string;
	baz: number;
}

const PartialFoo: Partial<Foo> = {
	bar: "hogehoge",
	baz: 10
}
