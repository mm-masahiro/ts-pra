type Foo3 = {
	name?: string;
	age?: number;
}

// 第2引数に与えたプロパティのみを取得する新しい型を定義
type PickFoo3 = Pick<Foo3, "name">
