//insira o nome escrito por extenso no txt e ele lhe enviará o numero inteiro ou decimal que tenha escrito
function NinTxt(txt) {
//Salva as palavras dos números dividido em unidade e usando os índices para determinar hierarquia
const NmBr = [
{
numero: ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
},
{
numero:  ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
},
{
numero: ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']
},
{
numero: ['mil', 'milhão', 'bilhão', 'trilhão', 'quadrilhão', 'quintilhão', 'sextilhão', 'septilhão', 'octilhão', 'nonilhão', 'decilhão', ',']
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
numero: [1000, 1000000, 1000000000, 1000000000000, 1000000000000000, 1000000000000000000, 1000000000000000000000, 1000000000000000000000000, 1000000000000000000000000000, 1000000000000000000000000000000, 1000000000000000000000000000000000, 1]
},
{
numero: []
}
];
//armazena alguns erros
let ERRORS = 0;
let ERROR = [];
//resulto multi
let mm = 0;
//transforma o texto em um texto manipulável
let NTrb = txt.toLowerCase();
NTrb = NTrb.split(" e ");
NTrb = NTrb.join(" ");
NTrb = NTrb.split(" ");
//função de tratamento do texto que diminui chance de erro
function textual (txtm) {
  console.log('Entrada:', txtm, '||\n');
  let spend = txtm.length - 1;
  let virgucont = 0;
  let hjk = txtm.length;
  let uik = 0;
  while (uik < hjk) {
    if (txtm[uik] == ',') {
      virgucont++;
      uik++;
      continue;
    };//fim primeiro if
    if (txtm[uik] == ""){
      txtm.splice(uik, 1);
      hjk--;
      continue;
    };
    if (txtm[uik] == "e"){
      txtm.splice(uik, 1);
      hjk--;
      continue;
    };
    if (txtm[uik].includes(',')) {
      let virlist = txtm[uik].split('');
      for (let axs = 0; axs < virlist.length; axs++) {
        if (virlist[axs] == ',') {
           virlist.splice(axs, 1);
        };
        };
      virlist = virlist.join('');
      txtm.splice(uik, 1, virlist);
      let luss = uik + 1;
      txtm.splice(luss, 0, ",");
      hjk++;
    };
    uik++;
  };
  //se tiver mais de uma vigula anula todas
   if (virgucont > 1) {
     let trend = 0;
     let seguidor = 0;
     while (trend !== virgucont) {
       if (txtm[seguidor] == ',') {
      txtm.splice(seguidor, 1);
      trend++;
      continue;
    };//fim primeiro if
       seguidor++;
     };
   };
   NTrb = txtm;//fim do for primario
}; //fim funcao textual
textual(NTrb);
console.log('Saída: ', NTrb);
//tira ultimo índice do texto
let NTrbQTT = NTrb.length - 1;
//tira último índice da lista total
let iFF = NmBr.length - 1;
let iFFNM = NmBr[iFF].numero.length - 1;
//feita para eliminar um loop
let YUI = 0;
//Variáveis para separação em caso de números quebrados ou só resultado mesmo
//Adendo: todas as variáveis (quando são envolvendo posição frente e trás) com T envolve atrás e F frente
let ResulF = [];
let ResulT = [];
//guarda se o número é quebrado
let Racional = 0;
//variaveis da soma processada
let ResulFS = 0;
let ResulTS = 0;
//Armazena histórico de multiplicadores
let memory = [];
//variável reservada para controle de número quebrado com mil no início
let mimi = 0;
//feedback Hierar
let digital = 0;
  //auxiliar em div de blocos
let ResulFSD = [];
let ResulTSD = [];
//saida
let Resultado1 = 0;
let Resultado2 = 0;
let Resultado = undefined;
//save do ATT
let SAT = 0;
let aposVirgula = false;
//alerta do end
let diferentzero = false;
//função q verifica se um multiplicador já se repetiu
function multi() {
  let sensor = 0;
  for (let xy = 0; xy < memory.length; xy++) {
    for (let zy = 0; zy < memory.length; zy++) {
      if (memory[xy] == memory[zy]) {
        sensor++;
      };
    };
  };
  if (sensor > memory.length) {
    return mm = 1;
  } else {
    return mm = 2;
  };
}; // fim func multi
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
//verifica para corrigir ao entendivel
if (i == 0) {
    switch (plv) {
case 'u':
case 'un':
case 'uns':
plv = 'um';
break;        
case 'doi':
plv = 'dois';
break;
case 'tres':
case 'tre':
case 'trê':        
plv = 'três';
break;
case 'quatr':   
plv = 'quatro';
break;
case 'cinc':
plv = 'cinco';
break;
case 'sei':
plv = 'seis';
break;
case 'set':
plv = 'sete';
break;
case 'oit':
plv = 'oito';
break;
case 'nov':
plv = 'nove';
break;
}; //fechamento do switch
  }; //fim if1
    if (i == 1) {
    switch (plv) {
case 'de':
plv = 'dez';
break;        
case 'doz':
plv = 'doze';
break;
case 'trez':       
plv = 'treze';
break;
case 'quatorz':  
case 'catorze':
case 'catorz':
case 'quartoze':
case 'quartoz':
case 'cartoze':
case 'cartoz':
plv = 'quatorze';
break;
case 'quinz':
plv = 'quinze';
break;
case 'dezessei':
case 'dezeceis':
case 'dezecei':
case 'dezasseis':
case 'dezassei':
case 'dezaceis':
case 'dezacei':
plv = 'dezesseis';
break;
case 'dezesset':
case 'dezecete':
case 'dezecet':
case 'dezassete':
case 'dezasset':
case 'dezacete':
case 'dezacet':
plv = 'dezessete';
break;
case 'dezoit':
plv = 'dezoito';
break;
case 'dezenov':
plv = 'dezenove';
break;
case 'vint':
plv = 'vinte';
break;
case 'trint':
plv = 'trinta';
break;
case 'quarent':
plv = 'quarenta';
break;
case 'cinquent':
case 'ciquenta':
case 'ciquent':
plv = 'cinquenta';
break;
case 'sessent':
case 'secent':
case 'secenta':
plv = 'sessenta';
break;
case 'setent':
plv = 'setenta';
break;
case 'oitent':
plv = 'oitenta';
break;
case 'novent':
plv = 'noventa';
}; //fechamento do switch
  }; //fim if2
if (i == 2) {
    switch (plv) {
case 'ce':
case 'cent':
case 'cento':
plv = 'cem';
break;        
case 'duzento':
plv = 'duzentos';
break;
case 'trezento':      
plv = 'trezentos';
break;
case 'quatrocento':  
case 'quatrossentos':
case 'quatrossento':
plv = 'quatrocentos';
break;
case 'quinhento':
plv = 'quinhentos';
break;
case 'seiscento':
case 'seissentos':
case 'seissento':
plv = 'seiscentos';
break;
case 'setecento':
case 'setessentos':
case 'setessento':
plv = 'setecentos';
break;
case 'oitocento':
case 'oitossentos':
case 'oitossento':
plv = 'oitocentos';
break;
case 'novecento':
case 'novessentos':
case 'novessent':
plv = 'novecentos';
break;
}; //fechamento do switch
  }; //fim if3
if (i == 3) {
  switch (plv) {
case 'mi':
case 'milha':
case 'milhar':
case 'milhares':
case 'milhare':
plv = 'mil';
break;
case 'milhões':
case 'milhoes':
case 'milhõe':
case 'milhoe':
case 'milhao':
plv = 'milhão';
break;
case 'bilhões':
case 'bilhoes':
case 'bilhõe':
case 'bilhoe':
case 'bilhao':
case 'bilhã':
case 'bilhõ':
case 'bilha':
case 'bilho':
plv = 'bilhão';
break;
case 'trilhões':
case 'trilhoes':
case 'trilhao':
case 'trilhõe':
case 'trilhõ':
case 'trilho':
case 'trilha':
case 'trilhã':
plv = 'trilhão';
break;
case 'quadrilhões':
case 'quadrilhoes':
case 'quadrilhao':
case 'quadrilha':
case 'quadrilhã':
case 'quadrilhõe':
case 'quadrilhoe':
case 'quadrilho':
case 'quadrilhõ':
plv = 'quadrilhão';
break;
case 'quintilhões':
case 'quintilhoes':
case 'quintilhao':
case 'quintilha':
case 'quintilhã':
case 'quintilhõe':
case 'quintilhoe':
case 'quintilho':
case 'quintilhõ':
plv = 'quintilhão';
break;
case 'sextilhões':
case 'sextilhoes':
case 'sextilhoe':
case 'sextilhõe':
case 'sextilho':
case 'sextilhõ':
case 'sextilha':
case 'sextilhã':
case 'sextilha':
plv = 'sextilhão';
break;
case 'septilhões':
case 'septilhoes':
case 'septilhoe':
case 'septilhõe':
case 'septilho':
case 'septilhõ':
case 'septilha':
case 'septilhã':
case 'septilhao':
plv = 'septilhão';
break;
case 'octilhões':
case 'octilhoes':
case 'octilhoe':
case 'octilhõe':
case 'octilho':
case 'octilhõ':
case 'octilha':
case 'octilhã':
case 'octilhao':
plv = 'octilhão';
break;
case 'nonilhões':
case 'nonilhoes':
case 'nonilhoe':
case 'nonilhõe':
case 'nonilho':
case 'nonilhõ':
case 'nonilha':
case 'nonilhã':
case 'nonilhao':
plv = 'nonilhão';
break;
case 'decilhões':
case 'decilhoes':
case 'decilhoe':
case 'decilhõe':
case 'decilho':
case 'decilhõ':
case 'decilha':
case 'decilhã':
case 'decilhao':
plv = 'decilhão';
break;
}; //fechamento do switch
}; // fim do if4
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
// função de hierarquia entre multiplicadores
function Hierar() {
  for (let jk = 0; jk < memory.length; jk++) {
    if (memory[jk] < memory[jk + 1]) {
      digital++;
      return;
    };
  };
};
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
  //se ainda tiver algum numero na frente
  if (NmAt < NTrbQTT) {
    Indety(NTrb[NmAt + 1], UNPT);
    AFF++;
  };//fim do primeiro if do comparator
//se vier depois da vigula é racional
if (aposVirgula) {
       Racional++;
         };
  //codigo quebra multiplicador
if (UNPT[0] == 3 && (UNPT[2] !== 1) && Racional == 0) {
    memory.push(NTrb[NmAt + 1]);
    multi();
    if (mm == 1) {
      Racional++;
      YUI++;
    };
    Hierar();
    if (digital > 0) {
      Racional++;
      YUI++;
    };
  };
  // se o primeiro ser só mil ele ainda executa
  if ((NmAt == 0 && ATT[0] == 3 && ATT[1] == 0) || (mimi > 0 && ATT[0] == 3 && ATT[1] == 0)) {
     if (mimi == 0) {
       ResulFS = ResulFS + 1000;
       } else {
       if (aposVirgula) {
       ResulTS = ResulTS + 1000;
         };
       };
    mimi = 0;
  };
aposVirgula = false;
if (ATT[0] == 3 && ATT[2] == 1) {
  aposVirgula = true;
  mimi++;
  return; // não processa como número
  };
if (ATT[0] == 3) {
  return;
};
  // se tiver algo na frente
  if (AFF > 0) {
    //verifica se eh um numero q segue a ordem certinha e depois analisa se ele ta quebrado ou não por meio do racional
    if(ATT[2] > UNPT[2] || UNPT[0] == 3) {
      YNN++;
      if (Racional == 0) {
      ResulF.push(ATT[2])
        } else {
      ResulT.push(ATT[2])
        };
    };
    //caso o da frente não for do tipo multiplicativo e for maior, ele soma e quebra o numero
    if ((UNPT[0] !== 3 && ((UNPT[2] > ATT[2]) || (UNPT[2] == ATT[2])))) {
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
        ResulFSD.push(ResulFS * UNPT[2]);
        ResulFS = 0;
        if (UNPT[0] == 3 && UNPT[2] == 1) {
          Racional++;
        };
      } else {
        ResulTSD.push(ResulTS * UNPT[2]);
        ResulTS = 0;
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
};//fechamento função comparadora
for (let i = 0; i <  NTrb.length; i++) {
  Comparator(i);
  ResulF = [];
  ResulT = [];
};
  Resultado1 = ResulFS + ResulFSD.reduce((acc,n)=> {
      return acc + n;
    }, 0);
  Resultado2 = ResulTS + ResulTSD.reduce((acc,n)=> {
      return acc + n;
    }, 0);
function analist1decimal () {
  function molde(val) {
      let zero = val;
      let result2pcs = String(Resultado2);
      let result2sm = zero + result2pcs;
      Resultado2 = Number(result2sm);
      return;
  }; // final função molde
  if (Resultado2 > 0) {
    if (Resultado2 < 10) {
      molde('0.0');
    } else {
      molde('0.');
    }; // fim do if interno
  };//fim do if principal
}; //fim da função analist
  if (Resultado2 !== 0) {
     analist1decimal();
     diferentzero = true;
  }; 
  function end () {
    if (diferentzero == false) {
      Resultado = Number(Resultado1);
    } else {
      Resultado = Number(Resultado1) + Number(Resultado2);
    };
  }; // fim função end
  end();
  if (ERRORS > 0) {
  console.log(ERROR);
    };
  return Number(Resultado);
}; //fechamento da função global
