import { type } from "os";

type Foo = {
	name?: string;
	age?: number;
}

type RequiredFoo = Required<Foo>;
