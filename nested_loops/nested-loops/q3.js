let n=10
for (i=1;i<=n;i++){
  bag=""
  for(j=1;j<=n;j++){
    if (j==1 || j==n || i==1 || i==n){
      bag+="*"
    }else{
      bag+=" "
    }
  }
  console.log(bag)
}