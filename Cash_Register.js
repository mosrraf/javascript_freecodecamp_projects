function checkCashRegister(price, cash, cid) {
  let change=cash-price;
  let checkChange=cash-price;
  let sum=0;
  let status;
  let changed=[];
  for (let i=0;i<cid.length;i++){
    sum+=cid[i][1];
  }
  if (change>sum){
    status="INSUFFICIENT_FUNDS";
  }
  else if(change==sum){
    status="CLOSED";
    changed=cid;
  }
  else{
    status="OPEN";
    const currency={
      "PENNY":0.01,"NICKEL":0.05,"DIME":0.1,"QUARTER":0.25,"ONE":1,"FIVE":5,"TEN":10,"TWENTY":20,"ONE HUNDRED":100
    }
    for(let i=cid.length-1;i>=0;i--){
      if(change>currency[cid[i][0]]){
        let numberOfCurrencies=cid[i][1]/currency[cid[i][0]];
        let neededChange=Math.floor(change/currency[cid[i][0]]);
        let toChange;
        if (neededChange>numberOfCurrencies){
          toChange=numberOfCurrencies;
        }
        else{
          toChange=neededChange;
        }
        //console.log(change,currency[cid[i][0]],toChange);
        change-=toChange*currency[cid[i][0]]
        change=change.toFixed(2);
        changed.push([cid[i][0],toChange*currency[cid[i][0]]])
      }
      

    }
  }
  sum=0;
  for (let i=0;i<changed.length;i++){
    sum+=changed[i][1];
  }
  sum=sum.toFixed(2);
  if (sum==checkChange){
    return {status:status,change:changed};
  }
  else{
    return {status:"INSUFFICIENT_FUNDS",change:[]};
  }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));