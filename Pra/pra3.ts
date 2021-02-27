const calcTotalFee3 = (num: number): number => {
	const total = num * 1.1;
	return total;
};

const dispTotalFee2 = (num: number) => {
	const total: number = calcTotalFee3(num);
	console.log(`合計金額は${total}円です`);
};

const pra3 = dispTotalFee2(1000);
