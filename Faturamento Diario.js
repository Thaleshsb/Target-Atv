const dados = require('./dados.json'); 
box = []
media = 0
count= 0

for(i=0;i<dados.length;i++){
    box.push(Object.values(dados[i])[1])
}

Maior = box.reduce(function(a, b) {
    return Math.max(a, b);
  }, -Infinity);

Menor = box.reduce(function(a, b) {
    return Math.min(a, b);
  }, Infinity);

for(i=0;i<box.length;i++){
    media = media + box[i]
}
media = media/box.length

for(i=0;i<box.length;i++){
    if (box[i]>media){
        count++
    }
}

console.log("O menor valor de faturamento ocorrido em um dia do mês: "+Menor+"\n"+"O maior valor de faturamento ocorrido em um dia do mês: "+Maior+"\n"+"Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: "+count)