/** Exercise 01 - Coins **/

// Add your function here
function calculateChange(amount) {
    // Check for cases where the input is > 100 or <= 0
  if (amount > 100) {
    return `$${amount} ==> Error: the number is too large`;
  }
  if (amount < 0) {
    return `$${amount} ==> Error: the number is too small`;
  }
  if (amount === 0) {
    return `$${amount} ==> 0 dollars`;
  }

  // coins object to store different types of coins
  const coins = [
    { name: "dollar", value: 100 },
    { name: "quarter", value: 25 },
    { name: "dime", value: 10 },
    { name: "nickel", value: 5 },
    { name: "penny", value: 1 },
  ];

  let cents = amount * 100; // Convert dollars to cents
  let result = [];

  // Looping through the coins object and compare its value with cents
  for (let coin of coins) {
    if (cents >= coin.value) {
      // Getting the floor. For example: 462 / 100 = 4 dollars
      let count = Math.floor(cents / coin.value);
      if (count > 0) {
        // Special case for penny to change pennies for plural, for others just add "s" add the end
        const coinName =
          coin.name === "penny" && count > 1
            ? "pennies"
            : coin.name + (count > 1 ? "s" : "");
        result.push(`${count} ${coinName}`);
        // Using modular to get the remainder and continue looping through the "coins" object.
        // For example: 462 % 100 = 62; 62 % 25 = 2; and so on
        cents %= coin.value;
      }
    }
  }

  return `$${amount} ==> ${result.join(", ")}`;
}

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
console.log(calculateChange(0.1));
console.log(calculateChange(-2.5));
console.log(calculateChange(100.0));
console.log(calculateChange(0.0));
console.log(calculateChange(49.84));
