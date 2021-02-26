import { type } from "os";

type Foo = {
	name?: string;
	age?: number;
}

// 全てのプロパティを必須に
type RequiredFoo = Required<Foo>;
