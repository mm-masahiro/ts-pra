const calcTotalFee4 = (num: number) => {
	const total = num * 1.1;
	console.log(`合計金額は${total}円です`);
};

const el4 = calcTotalFee4(1000)

type Person = {
	name: string,
	age: number
}

const mm: Person = {
	name: 'mm',
	age: 24
}

console.log(mm)
