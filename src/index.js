module.exports = function check(str, bracketsConfig) {
  var check=[],
  checkStart,
  checkEnd,
  compare
result=true;



function search(bracket='', brackets=[], open=true) {
let position=false; 
let bracketStart=0;
if(!open){
  bracketStart=1;
}
 for(let s=0;s<brackets.length; s++){
   
     if(brackets[s][bracketStart]===bracket){
       position=s;
       break;
     
   }    
 }
return position;
}



for(let i=0; i<str.length; i++){
checkStart=search(str[i], bracketsConfig, true);
//console.log('4--'+checkStart);
if(checkStart!==false){
  check.push(checkStart);
 // console.log(check);
  continue;    
}
 checkEnd=search(str[i], bracketsConfig, false);
 //console.log('3--'+checkEnd);
if(checkEnd!==false){
  compare=check.pop();
 // console.log('2--'+check);
  if(compare!==checkEnd){
    result=false;
    break;
  }
  
}

}
if (check.length !== 0) {
result=false;
if(check.length%2==0){
  result=true;   
}
}
return result;

}