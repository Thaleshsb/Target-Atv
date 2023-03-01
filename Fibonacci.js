num = process.argv[2];

a = 0, b=1,r=0;
box=[0,1];

for (i=1;i<1000000;i++){ 
  r = a + b;
  box.push(r);
  a=b;
  b=r;
}
if (box.find(element => element == num ) == undefined){
  console.log("O numero: "+ num +" não pertence a sequencia de Fibonacci");
}
else{
  achei = box.find(element => element == num)
  console.log("O numero: "+achei+" pentence sequencia de Fibonacci");
};