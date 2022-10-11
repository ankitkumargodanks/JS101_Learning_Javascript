let x=100;
var i=2;
sum=0
count=0
while (i<=x){
  if (i%2==0){
    sum=sum+i
    count=count+1
  }
  i=i+1
}
console.log(sum/count)