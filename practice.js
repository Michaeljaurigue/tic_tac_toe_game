function countTotalAndAs(str) {
    let totalCount = 0;
    let aCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char.match(/[a-zA-Z]/)) {
        totalCount++;
        if (char.toLowerCase() === 'a') {
          aCount++;
        }
      }
    }
  
    return { totalCount, aCount };
  }
  
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example usage
  let input = "Michael";
  let counts = countTotalAndAs(input);
  console.log(`Total letters: ${counts.totalCount}, A's: ${counts.aCount}`);
  console.log("Reversed string:", reverseString(input));
  
