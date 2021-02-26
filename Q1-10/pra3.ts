type Foo3 = {
	name?: string;
	age?: number;
}

type PickFoo3 = Pick<Foo3, "name">
