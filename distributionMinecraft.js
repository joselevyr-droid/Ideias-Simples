var Programa = 0;
while (Programa === 0) {
var rodante = 0;
var Alimentos = [];
var indexA = 0;
while (rodante === 0) {
let n = prompt('Qual o nome do seu alimento?');
let q = prompt('Quantos packs desse alimento você possui?');
let qn = prompt('Sobra algo? se sim, quantos?');

function direita(ajeito) {  
    ajeito = ajeito.toLowerCase();  
    ajeito = ajeito.trim();  
    return ajeito  
};  
q = Number(q);  
q = q * 64;  
Alimentos.push({  
    type:0,  
    name: n,  
    quantify: Number(q) + Number(qn)  
});  
indexA++;  
let indexAN = indexA - 1;  
let resposta01 = prompt('Tem mais algum alimento que queira contabilizar?');  
resposta01 = direita(resposta01);  
if (resposta01 === 's' || resposta01 === 'sim') {  
  verif = 0;  
} else {  
  rodante = 1;  
};  
};

let inY = 0;
let inYT = 0;
const ListaAlimentoNormal = Alimentos.filter(function(a) {
inY++;
inYT = inY - 1;
return a.type == 0;
});
let AWAWA = Number(prompt('Quantos jogadores possuem?'));
let AWAWA2 = prompt('Quer dividir percentual por players?');
AWAWA2 = direita(AWAWA2);
if (AWAWA2 == 's' || AWAWA2 == 'sim') {
let Abc = 0;
while (Abc === 0) {
var Omg = Number(prompt('Faça uma divisão, escolhe repartir em quanto?'));
if (AWAWA % Omg == 0) {
Abc++;
} else {
alert('Nao eh possível');
};
};
var separation = [];
var indexCB = -1;
var indexCBM = 0;
let ilnex = 0;
let ilnex1 = 0;
for (let i = 0; i !== Omg; i++) {
separation.push({
quantty: 0,
percentual: 0
});
indexCB++;
indexCBM++;
ilnex++;
ilnex1 = ilnex - 1;
};
var iiaauu = 0;
var ilnex2 = ilnex;
var ilnex3 = ilnex1;
var ilnex4 = ilnex;
var ilnex5 = ilnex1;
var ilnex6COS = ilnex;
var ilnex7COS = ilnex1;
while (iiaauu == 0) {
var YNMY = prompt(`Foram criadas ${ilnex} repartições, digite em sequência os números da quantidade de pessoas de cada grupo com cada uma separada por vírgulas`);
YNMY = YNMY.split(',');
let countlist = YNMY.reduce(function(coun, act) {
return Number(act) + Number(coun);
});
if (countlist > AWAWA) {
console.log('Tem mais jogadores do que entregue')
} else {
iiaauu++;
};
};
for (let i = 0; i !== ilnex; i++) {
separation[ilnex1].quantty = YNMY[ilnex1];
ilnex1--;
};
var iiaauu2 = 0;
while (iiaauu2 == 0) {
var YNMY2 = prompt('Faça a mesma coisa, mas com o percentual de cada, uso só números inteiros');
YNMY2 = YNMY2.split(',');
let countlist2 = YNMY2.reduce(function(coun, act) {
return Number(act) + Number(coun);
});
if (countlist2 > 100) {
alert('Percentual não encaixa')
} else {
iiaauu2++;
};
};
for (let i = 0; i !== ilnex2; i++) {
separation[ilnex3].percentual = YNMY2[ilnex3];
ilnex3--;
};
var checklist = [];
var index455 = -1;
var index444 = -1;
var indexsPG = [];
var index4552 = -1;
var index4442 = -1;
for (let i = 0; i !== inY; i++) {
var Chg = Number(ListaAlimentoNormal[inYT].quantify);
checklist.push({
name: ListaAlimentoNormal[inYT].name,
valores: []
});
index455++;
index4552++;
for (let x = 0; x !== ilnex6COS; x++) {
let countCHG = Chg * ((YNMY2[ilnex5])/100);
countCHG = countCHG / Number(separation[ilnex5].quantty)
checklist[index455].valores.push({
percentual: YNMY2[ilnex5],
peplos: separation[ilnex5].quantty,
quantidade: Math.round(countCHG)
});
index444++;
index4442++;
ilnex5--;
if (ilnex5 <= 0) {
ilnex5 = ilnex7COS;
indexsPG.push(index444);
index444 = -1;
};
};
inYT--;
};
console.log(indexA);
console.log(index455);
function terminandoessabudega (m) {
let AKSF = checklist[m].valores.length - 1;
while (AKSF > -1) {
alert(`O alimento ${checklist[m].name} ira ser distribuidos ${checklist[m].valores[AKSF].quantidade} para cada uma das ${checklist[m].valores[AKSF].peplos} para os de percentual ${checklist[m].valores[AKSF].percentual}`);
AKSF--;
};
};
while (indexA !== 0) {
terminandoessabudega(index4552);
index4552--;
indexA--;
};
} else {
let checklist = [];
for (let i = 0; i < ListaAlimentoNormal.length; i++) {
let alimento = ListaAlimentoNormal[i];
let total = Number(alimento.quantify);
let porPessoa = Math.round(total / AWAWA);

checklist.push({  
  name: alimento.name,  
  quantidade: porPessoa  
});

};
for (let i = 0; i < checklist.length; i++) {
alert(`O alimento ${checklist[i].name} será distribuído em ${checklist[i].quantidade} para cada jogador ${AWAWA} jogadores`);
};
};
let reiniciar = prompt('Deseja executar o programa novamente? (s/n)');
reiniciar = direita(reiniciar);
if (reiniciar === 's' || reiniciar === 'sim') {
Programa = 0;
} else {
Programa = 1;
};
};
