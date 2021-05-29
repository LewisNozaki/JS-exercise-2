// Solution 1

function isPangram(string){
  let myObj = new Object;
  
  let alphArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  const spaceRegex = /\s/g;
  
  const alphaRegex = /[a-z]/i;
  
  let count = 0;
  
  let arr = string.split("").filter(letter => letter.match(alphaRegex)).map(letter => letter.toLowerCase()).sort();
  
  alphArr.forEach(letter => {
    myObj[letter] = 0;
  })
  
  arr.forEach(letter => {
    myObj[letter]+= 1;
  });
  
  for (let letter in myObj) {
    if (myObj[letter] === 0) {
      count += 1;
    }
  }
  
  return (count === 0);
}