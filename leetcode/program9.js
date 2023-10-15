// Input:
// 4

// Output:
// [[1], [1,1], [1,2,1], [1,3,3,1]]

// Example 2:
// Input:
// 6

// Output:
// [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1], [1,5,10,10,5,1]]
//PASCAL TRIANGLE

function pascalsTriangle(n) {
    const triangle = [];
  
    for (let i = 0; i < n; i++) {
      triangle[i] = [];
      triangle[i][0] = 1;
  
      for (let j = 1; j < i; j++) {
        triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
      }
  
      triangle[i][i] = 1;
    }
  
    return triangle;
  }