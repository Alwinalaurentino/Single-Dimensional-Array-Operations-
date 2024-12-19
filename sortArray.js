// Use prompt to accept input or use default arrays
const numbers = prompt("Enter numbers separated by commas: (e.g., '24,65,21,5,9,32,42,80,57')")?.split(',').map(Number) || [24, 65, 21, 5, 9, 32, 42, 80, 57];
const names = prompt("Enter names separated by commas: (e.g., 'Zenvo,Erica,Jordie,Alicia,Redon')")?.split(',') || ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Log original arrays
console.log("Original Numbers Array:", numbers);
console.log("Original Names Array:", names);

// Merge both arrays and log to the console
const mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse order and log to the console
const sortedNumbersDescending = [...numbers].sort((a, b) => b - a);
console.log("Numbers Sorted in Reverse:", sortedNumbersDescending);

// Sort names alphabetically and log to the console
const sortedNamesAlphabetically = [...names].sort((a, b) => a.localeCompare(b));
console.log("Names Sorted Alphabetically:", sortedNamesAlphabetically);
