function convertToRoman(num) {
  	const symbols = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
    let result = '';
    for (let i = 0; i < symbols.length; i++) {
        while (num >= symbols[i][1]) {
            result += symbols[i][0];
            num -= symbols[i][1];
        }
        // Check for subtraction cases (e.g., IV, IX, XL, XC, etc.)
        if (i % 2 === 0 && i < symbols.length - 2) {
            const nextIndex = i + 2;
            const nextSymbol = symbols[nextIndex][0];
            const diff = symbols[i][1] - symbols[nextIndex][1];
            if (num >= diff) {
                result += nextSymbol + symbols[i][0];
                num -= diff;
            }
        } else if (i % 2 === 1 && i < symbols.length - 1) {
            const nextIndex = i + 1;
            const nextSymbol = symbols[nextIndex][0];
            const diff = symbols[i][1] - symbols[nextIndex][1];

            if (num >= diff) {
                result += nextSymbol + symbols[i][0];
                num -= diff;
            }
        }
    }
    return result;
  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
