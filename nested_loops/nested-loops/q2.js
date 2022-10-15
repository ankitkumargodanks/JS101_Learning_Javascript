for (i=1;i<=100;i++){
  let count=0
  for (j=1;j<=i;j++){
    if (i%j==0){
      count=count+1
    }
  }
  if (count==2){
    console.log(i,"is prime")
  }
}