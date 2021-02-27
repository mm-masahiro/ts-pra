const calcTotalFee = (num: number) => {
	const total = num * 1.1;
	console.log(`合計金額は${total}円です`);
};

const total1 = calcTotalFee(1000)

const total2 = calcTotalFee(3000)
