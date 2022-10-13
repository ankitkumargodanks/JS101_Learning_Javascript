let st="a mn bhij"
space=0
for (i=0;i<st.length;i++){
  st[i]==" " ? space++ : null
}

st.length==0 ? console.log(0):console.log(space+1)