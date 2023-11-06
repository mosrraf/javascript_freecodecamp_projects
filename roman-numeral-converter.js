function convertToRoman(num) {
  //Defining main roman numbers
  const romanNumbers={
    1:'I',
    4:'IV',
    5:'V',
    9:'IX',
    10:'X',
    40:'XL',
    50:'L',
    90:'XC',
    100:'C',
    400:'CD',
    500:'D',
    900:'CM',
    1000:'M'
  };
  //Example:
    /*800/500=>1,300
      300/100=>3,0=>the end
      result=DCCC*/
  //collecting keys
  const romanKeys=Object.keys(romanNumbers);
  //looping in keys reversly
  let roman='';
  let val;
  for (let i=romanKeys.length-1;i>=0;i--){
    if(num/romanKeys[i]>=1){
      val=Math.floor(num/romanKeys[i]);
      for(let j=0;j<val;j++){
        roman+=romanNumbers[romanKeys[i]];
      }
      num=num%romanKeys[i];
    }
  }
  return roman;
}

console.log(convertToRoman(3999));