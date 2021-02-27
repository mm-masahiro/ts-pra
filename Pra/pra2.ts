const calcTotalFee2 = (num: number) => {
	const total = num * 1.1;
	return total
};

const dispTotalFee = (num: number) => {
	const total = calcTotalFee2(num);
	console.log(`合計金額は${total}円です`);
};

const totalNum = dispTotalFee(1000);

const totalNum2 = dispTotalFee(2000);

