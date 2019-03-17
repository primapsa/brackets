module.exports = function check(str, bracketsConfig) {
 // var bracketsConfig=[['(', ')']];
  //var str='((()))()))';
  
  var res=false;
  var blacklist=[];
  var blacklist2=[];
  var blacklist3=[];
    if(str.length>0){
     forwar: for(let i=0; i<str.length; i++){
       let checker=blacklist.indexOf(i);
       if(checker==-1){
        let first=str[i];
         //console.log('Element: '+first+' num:'+i);
        for(let t=0; t<bracketsConfig.length; t++){
          let start=bracketsConfig[t][0];
          let end=bracketsConfig[t][1];
          for(let tn=0; tn<bracketsConfig[t].length; tn++){
            if(first===start){
              //console.log('Find: '+start+' num:'+i);
              let second=str[i+1];
              //console.log('Search: '+end+' num: '+i);
              
              for(let j=i; j<str.length; j++){
                
                //console.log('test: '+j);
                if(blacklist.indexOf(j)==-1){
                //  console.log('test2: '+j);
                  // console.log('test___: '+str[j]);
                if(end===str[j]){
                 // console.log('test3: '+j);
                 // console.log('End: '+end+' num: '+j);
                 if(j!==i+2){
                  let addtolist=blacklist.push(i,j);
                 }
                  //let addtolist=blacklist3.push(i,j);
                  //console.log('-----'+blacklist3+'------');
                  continue forwar;
                }
                }
              
              }
            }
          }
        }
      }
      }
      }
  if(str.length-blacklist.length==0){
    res=true;
  }else{
    res=false;
  }
  return res;
  
  
  
  
  
  
}
