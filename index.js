const prime  = 1233
// check whether it is prime or not
let count =0;

for(let i=1; i<Number(prime); i++){
    if(prime%i===0){
        count++
    }
   
}
if(count>2){
  return   console.log("not a prime no") 
}
 return console.log("yes i t is prime")



console.log("hello from vishal ")