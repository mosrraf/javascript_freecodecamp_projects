function rot13(str) {
  const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const stringArray=str.match(/\W|\w/g);
  return stringArray.map(element=>{
    if(/\W/.test(element)){
      return element;
    }
    let index=letters.indexOf(element)-13;
    if (index<0){
      index+=letters.length;
    }
    return letters[index];
  })
  .join("");
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");