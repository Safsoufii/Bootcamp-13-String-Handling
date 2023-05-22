alternativeString = (myString) => {
    // Initialise an empty result string
    let result = "";
    
    // Iterate through the characters of the input string
    for (let i = 0; i < myString.length; i++) {
      // Get the current character
      let c = myString[i];
      
      // Check if the index of the character is even or odd
      if (i % 2 == 0) {
        // If the index is even, convert the character to uppercase
        c = c.toUpperCase();
      } else {
        // If the index is odd, convert the character to lowercase
        c = c.toLowerCase();
      }
      
      // Append the modified character to the result string
      result += c;
    }
    
    // Return the result string
    return result;
  }
  
  
  // DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "Hello World",
    "Hello",
    "HELLO",
    "Software Engineering is Fun",
    "I like Javascript",
    "clown case"
]

let correctStrings = [
    "HeLlO WoRlD",
    "HeLlO",
    "HeLlO",
    "SoFtWaRe eNgInEeRiNg iS FuN",
    "I LiKe jAvAsCrIpT",
    "ClOwN CaSe"
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = alternativeString(test);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}