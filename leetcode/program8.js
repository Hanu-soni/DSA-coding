// Input:
// fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'banana', 'cherry', 'cherry', 'cherry'];

// Output:
// ['cherry', 'banana', 'apple']

// Explanation:
// In the given example, we have an array fruits containing 3 different types of fruits: apple, banana, and cherry. The number of times each fruit appears in the array is as follows:

// apple: 2 times
// banana: 3 times
// cherry: 4 times
// Hence, the sorted list of fruits would be:

// ['cherry', 'banana', 'apple']
function printFruitsByFrequency(fruits) {
    const frequency = {}; // Object to store the frequency of each fruit
    for (let i = 0; i < fruits.length; i++) {
      frequency[fruits[i]] = (frequency[fruits[i]] || 0) + 1; // Count frequency of each fruit
    }
    const sortedFruits = Object.keys(frequency).sort((a, b) => {
      if (frequency[b] === frequency[a]) { // If frequency is same, sort based on their index in the original array
        return fruits.indexOf(a) - fruits.indexOf(b);
      }
      return frequency[b] - frequency[a]; // Sort based on frequency
    });
    return sortedFruits;
  }