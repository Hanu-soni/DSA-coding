// A painter discovered that one of his painting has been stolen. He immediately informs the police of the theft.
// It is known that the policeman and thief move on the number line.
// You are given that:
// The initial location of the policeman on the number line is X and his speed is 2 units per second. The initial location of the thief on the number line is Y and his speed is 1 unit per second.\
// Find the minimum time (in seconds) in which the policeman can catch the thief. Note that, the policeman catches the thief as soon as their locations become equal and the thief will try to evade the policeman for as long as possible.


function catchThief(X, Y) {
    const relativeSpeed = 2 - 1; // relative speed between policeman and thief
    const distance = Math.abs(X - Y); // distance between the initial locations of policeman and thief
    const time = distance / relativeSpeed; // time taken for policeman to catch the thief
    return time;
  }
