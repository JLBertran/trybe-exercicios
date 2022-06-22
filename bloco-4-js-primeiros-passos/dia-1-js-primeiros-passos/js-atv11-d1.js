

const sBruto = 13000 ;
let inss ;
let ir ;

console.log("valor do salario bruto R$:", sBruto)

if (sBruto <= 1556.94) {
    inss = sBruto * 0.08;
    console.log("valor do inss = ", inss)
}else if (sBruto <= 2594.92) {
    inss = sBruto *0.09;
    console.log("valor do inss = ", inss)
} else if (sBruto <= 5189.82) {
    inss = sBruto * 0.11;
    console.log("valor do inss = ", inss)
}else {
    inss = 570.88;
    console.log("valor do inss = ", inss)
}

let sBase = sBruto - inss;
console.log("salario base", sBase);

if (sBase <= 1903.98) {
    ir = sBase;
    console.log('isento de IR');
} else if (sBase <= 2826.65){
    ir = (sBase * 0.075) - 142.80;
    console.log (ir);
}else if (sBase <= 3751.05){
    ir = (sBase * 0.15) - 354.80;
    console.log (ir);
}else if (sBase <= 4664.68){
    ir = (sBase * 0.225) - 636.13;
    console.log (ir);
} else {
    ir = (sBase * 0.275) - 869.36
    console.log (ir)
}

let sLiquido = sBase - ir;
console.log(sLiquido);




