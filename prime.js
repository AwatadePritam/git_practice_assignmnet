let num = 11;
let flag=false
for (let i = 1; i<num; i++)
  {
   if(num%i==0) {
    flag=true
   }
     
  } 
if(flag==true)
  console.log("Number is not Prime")
else
  console.log("Number is Prime")