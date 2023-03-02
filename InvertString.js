a = process.argv[2]
let z=0

if(a != undefined){
    console.log("\n"+a)
}

if (a == undefined){
    a = 'Pneumoultramicroscopicossilicovulcanoconiótico'
    console.log("\n"+a)
}

box = a.split("")

for (i=0, j=box.length-1 ; i < box.length/2 ; i++,j--){
    z = box[i]
    box[i] = box[j]
    box[j] = z
}

console.log("\n"+box.join("")+"\n")