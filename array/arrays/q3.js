let ar=[1,2,3,4,5,6,8,20,12,13,14]
b=ar.length
sum=0
count=0
for (i=0;i<b;i++){
  if(ar[i]%2==0){
    sum=sum+ar[i]
    count=count+1
  }
}
console.log(sum/count)