type Foo4 = {
	name?: string;
	age?: number;
}

// 第2引数で与えたプロパティを除いた型を新たに定義
type OmitFoo = Omit<Foo4, "age">

const omitTest: OmitFoo = {
	name: "morinaga",
}

console.log(omitTest)
