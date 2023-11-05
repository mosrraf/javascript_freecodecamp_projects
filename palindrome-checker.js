function palindrome(str) {
  //pick lowercase alphanumeric
  let newStr=str.match(/\w/g).filter(element=>{
    if (!/[#_*'"]/.test(element)){
      return element;
    }
  }).join("").toLowerCase();
  //check if str characters is odd or even
  let size=newStr.length;
  if (size%2==0){
//if even check start with end
    for(let i =0;i<=parseInt(size/2);i++){
      if (newStr[i]!=newStr[size-i-1]){
        return false;
      }
    }
    return true;
  }
  else{
//if odd get centeralized character and check all  around it
    let middle=Math.ceil(size/2);
    for(let i =0;i<middle;i++){
      if (newStr[i]!=newStr[size-i-1]){
        return false;
      }
    }
    return true;
  }
  
  
}

console.log(palindrome("five|\_/|four"));