// A mathematician was on a quest to find the n-th prime number. They wrote a function called PrimeMover 
// which takes an integer n as input and returns the n-th prime number. They knew that the range 
// of n would be from 1 to 10,000. For example, if n is 16, the function should return 53 because
//  53 is the 16th prime number. The mathematician spent many days and nights developing an
//   algorithm to find the n-th prime number.

// As a good developer, help him complete this task.


// Input:
// 9

// Output:
// 23

// Example 2:
// Input:
// 100

// Output:
// 541

function PrimeMover(num) {
    let primes = [2];
    let i = 3;
    while (primes.length < num) {
      let isPrime = true;
      for (let j = 0; j < primes.length; j++) {
        if (i % primes[j] === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(i);
      i += 2;
    }
    return primes[num - 1];
  }