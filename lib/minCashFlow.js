// Algorith ref: https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/

function getMin(arr) {

    var minInd = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].amount < arr[minInd].amount)
            minInd = i;
    }
    return minInd;
}


function getMax(arr) {
    var maxInd = 0;
    for (let i = 1; i < arr.length; i++)
        if (arr[i].amount > arr[maxInd].amount)
            maxInd = i;
    return maxInd;
}


function minOf2(x, y) {
    return (x < y) ? x : y;
}


function minCashFlowRec(amounts, transactions) {


    var mxCredit = getMax(amounts), mxDebit = getMin(amounts);


    if (amounts[mxCredit].amount == 0 && amounts[mxDebit].amount == 0)
        return;

  
    var min = minOf2(-amounts[mxDebit].amount, amounts[mxCredit].amount);
    amounts[mxCredit].amount -= min;
    amounts[mxDebit].amount += min;

    console.log("<br>Person " + amounts[mxDebit].id + " pays " + 
        + " to " + "Person " + amounts[mxCredit].id);

        transactions.push({
            payerId:amounts[mxDebit].id,
            receiverId: amounts[mxCredit].id,
            amount: min
        })

    minCashFlowRec(amounts, transactions);
}


module.exports = function calculate(amounts) {
    try {
        let arr = amounts.map(element => {
            return {
                id: element.id, amount: parseInt(element.amount)
            };
        });

        let transactions = [];
        minCashFlowRec(arr, transactions);
        console.log(transactions)
        return transactions;

    } catch (e) {
        console.log(e)
    }
}

