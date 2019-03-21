module.exports = function check(str, bracketsConfig) {
  var check=[],
  checkStart,
  checkEnd,
  compare,
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
  if(checkStart!==false){  
    if(bracketsConfig[checkStart][0]===bracketsConfig[checkStart][1]) { 
      if(check.indexOf(checkStart)==-1){
        check.push(checkStart);
        continue; 
        }
    }
    else{
      check.push(checkStart);
      continue; 
    }   
  }
  
  checkEnd=search(str[i], bracketsConfig, false); 
  if(checkEnd!==false){
    compare=check.pop(); 
    if(compare!==checkEnd){
      result=false;
      break;
    }  
  }

}
  if (check.length !== 0) {
  result=false;
  }
  return result;
}