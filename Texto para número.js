function NinTxt(txt) {
//Salva as palavras dos números dividido em unidade e usando os índices para determinar hierarquia
const NmBr = [
{
numero: ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
},
{
numero:  ['dez', 'onze', 'doze', 'treze', 'quartoze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
},
{
numero: ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']
},
{
numero: ['mil', 'milhão', 'bilhão', 'trilhão', 'quadrilhão', 'quintilhão', 'sextilhão']
}
];
//dar o valor equivalente a cada número
const NmBrPR = [
{
numero: [1, 2, 3, 4, 5, 6, 7, 8, 9]
},
{
numero:  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90]
},
{
numero: [100, 200, 300, 400, 500, 600, 700, 800, 900]
},
{
numero: [1000, 1000000, 1000000000, 1000000000000, 1000000000000000, 1000000000000000000, 1000000000000000000000]
},
{
numero: []
}
];
//armazena alguns erros
let ERRORS = 0;
let ERROR = [];
//transforma o texto em um texto manipulável
let NTrb = txt.toLowerCase();
NTrb = NTrb.split(" e ");
NTrb = NTrb.join(" ");
NTrb = NTrb.split(" ");
//tira ultimo índice do texto
let NTrbQTT = NTrb.length - 1;
//tira último índice da lista total
let iFF = NmBr.length - 1;
let iFFNM = NmBr[iFF].numero.length - 1;
//Variáveis para separação em caso de números quebrados ou só resultado mesmo
//Adendo: todas as variáveis (quando são envolvendo posição frente e trás) com T envolve atrás e F frente
let ResulF = [];
let ResulT = [];
//guarda se o número é quebrado
let Racional = 0;
//variaveis da soma processada
let ResulFS = 0;
let ResulTS = 0;
// função da soma entre elas
function SomaG() {
  if (Racional == 0) {
    ResulFS = ResulFS + ResulF.reduce((acc,n)=> {
      return acc + n;
    }, 0);
  } else {
    ResulTS = ResulTS + ResulT.reduce((acc,n)=> {
      return acc + n;
  }, 0); };
}; //final função soma
//identifica o numero individual escrito
//position é o dado de qual das variáveis o valor deve ser adicionado, se é na frente ou atrás
function Indety (plv, position) {
let n = 0;
// verifica se foi encontrado o valor do indety
let SCSS = 0;
//executa a quantidade de vezes por elemento na lista
for (let i = 0; i < (iFF + 1); i++) {
// executa por cada elemento do elemento da lista
for (let x = 0; x < NmBr[i].numero.length; x++) {
//verifica os plurais do grupo 3 para corrigir ao entendivel
if (i == 3) {
switch (plv) {
case 'milhões':
plv = 'milhão';
break;
case 'bilhões':
plv = 'bilhão';
break;
case 'trilhões':
plv = 'trilhão';
break;
case 'quadrilhões':
plv = 'quadrilhão';
break;
case 'quintilhões':
plv = 'quintilhão';
break;
case 'sextilhões':
plv = 'sextilhão';
break;
}; //fechamento do switch
}; //fechamento do if
//se o número do catálogo específico tratado do número tratado bater com a palavra enviada, ele retorna as coordenadas dessa palavra, e salva se uma hora der como verdadeira
if (plv == NmBr[i].numero[x]) {
SCSS++;
let valorpre = NmBrPR[i].numero[x];
return position.push(i, x, valorpre);
};
//variável q externaliza o x
n = x;
}; //fechamento do segundo for
//caso na reta final ele não encontre a palavra, ele salva a posição dela com um índice que não existe
if (i == iFF && n == NmBr[i].numero.length - 1 && SCSS == 0) {
ERRORS++;
ERROR.push('Um de seus números escritos não foram reconhecidos pelo sistema, experimente ver as constantes e seus possíveis números.');
return position.push(-1, -1);
};
}; //fechamento do for geral
}; //fechamento da função Indety
//função comparadora
//NmAt = índice do nome atual tratado
function Comparator (NmAt) {
  //tem ainda algo na frente
let AFF = 0;
  //numero tratado atual
let ATT = [];
// recebe os dados do Indety
let UNPT = [];
//verifica se ta tudo bem ou ta quebrado
let YNN = 0;
//delay
let char = 0;
Indety(NTrb[NmAt], ATT);
if (ATT[0] == 3) {
  return;
};
  //se ainda tiver algum numero na frente
  if (NmAt < NTrbQTT) {
    Indety(NTrb[NmAt + 1], UNPT);
    AFF++;
  };//fim do primeiro if do comparator
  // se tiver algo na frente
  if (AFF > 0) {
    //verifica se eh um numero q segue a ordem certinha e depois analisa se ele ta quebrado ou não por meio do racional
    if(ATT[2] > UNPT[2] || ATT[2] == UNPT[2] || UNPT[0] == 3) {
      YNN++;
      if (Racional == 0) {
      ResulF.push(ATT[2])
        } else {
      ResulT.push(ATT[2])
        };
    };
    //caso o da frente não for do tipo multiplicativo e for maior, ele soma e quebra o numero
    if (UNPT[0] !== 3 && UNPT[2] > ATT[2]) {
      if (Racional == 0) {
      ResulF.push(ATT[2])
        } else {
      ResulT.push(ATT[2])
        };
    };
    SomaG();
    //pre aciona o quebrado do numero
    if (YNN == 0) {
      char++;
    };
    //caso o numero da frente for multiplicativo, aqui ele faz a muliplicação dele
    if (UNPT[0] == 3) {
      if(Racional == 0) {
        ResulFS = ResulFS * UNPT[2];
      } else {
        ResulTS = ResulTS * UNPT[2];
      };
    };
  } else {
    if (Racional == 0) {
      ResulF.push(ATT[2])
        } else {
      ResulT.push(ATT[2])
        }; //caso não tenha mais numero depois, isso daqui afirma que o numero será acrescentado
    SomaG();
    };//fim do segundo if do comparator
  if (char > 0) {
    Racional++;
  };
};//fechamento função comparadora
for (let i = 0; i <  NTrb.length; i++) {
  Comparator(i);
  ResulF = [];
  ResulT = [];
};
  console.log(`${ResulFS},${ResulTS}`);
  if (ERRORS > 0) {
  console.log(ERROR);
    };
}; //fechamento da função global
let teste = NinTxt(prompt(''));
