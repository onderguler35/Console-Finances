//let's assign the variables that we will need to use
var totalNrMonths = finances.length;
var totalRevenue = 0;
var monthlyChange = 0;
var totalChange = 0;
var changeAverage = 0;
var maxChange = 0;
var minChange = 0;
var bestMonth;
var worstMonth;

//using a for loop so I can iterate through the arrays to calculate required report items.
for (var i = 0; i < totalNrMonths; i++) {
    totalRevenue = totalRevenue + finances[i][1];
    //if we keep the current loop, when i=85 adding 1 below will result undefined, so adding a if clause to make sure the difference calculation is done only up to 84.
    if (i < totalNrMonths-1) {
        //calculating each months profit/loss change by subtracting next month from the current month in the loop using i variable to index correct values.
        monthlyChange = finances[i + 1][1] - finances[i][1];
        //adding each months change to the sum to get the total sum.
        totalChange = totalChange + monthlyChange;
        //storing values to either maxChange or minChange by comparing their values with previous values so at the end of the loop we will have the highest and the lowest change value.
        if (monthlyChange > maxChange) {
            maxChange = monthlyChange;
            bestMonth = finances[i + 1][0];
        } else if (monthlyChange < minChange) {
            minChange = monthlyChange;
            worstMonth = finances[i + 1][0];
        }
    }
}
//calculating the average change between months by dividing the total change to the number of changes between months. Number of changes is 1 less than the number of months since the first month has no prior month to compare and we start from second month to calculate changes.
changeAverage = totalChange / (totalNrMonths-1)
//concatenating all the results to log into the console as required
console.log("Financial Analysis" + "\n------------------------" + "\nTotal Months: " + totalNrMonths + "\nTotal Revenue: " + "$" + totalRevenue + "\nAverage Change: " + "$" + Math.round(changeAverage * 100) / 100 + "\nGreatest increase in profits: " + bestMonth + " ($" + maxChange + ") " + "\nGreatest decrease in profits: " + worstMonth + " ($" + minChange + ")");