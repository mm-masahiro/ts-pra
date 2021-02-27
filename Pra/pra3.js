var calcTotalFee3 = function (num) {
    var total = num * 1.1;
    return total;
};
var dispTotalFee2 = function (num) {
    var total = calcTotalFee3(num);
    console.log("\u5408\u8A08\u91D1\u984D\u306F" + total + "\u5186\u3067\u3059");
};
var pra3 = dispTotalFee2(1000);
