console.clear();
var x=600851475143 ; var s=0;
for(var i=2;i<=x ;i++){
  if(x%i===0){
    for(var j=2;j<i;j++){
      if(j%i===0){
        s++;
      }
    }
    if(s===0){
      console.log(i);
      x=x/i;
     }
  }
}