interface Foo {
	bar: string;
	baz: number;
}

// 全てのプロパティをOptional(任意)のプロパティに
const PartialFoo: Partial<Foo> = {
	bar: "hogehoge",
	baz: 10
}
