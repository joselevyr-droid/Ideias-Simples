function Inverter (a) {
  a = a.split("");
  let index1 = 0;
  let index2 = a.length - 1;
  let quantas = (a.length) / 2;
  let ti = undefined;
  let tf = undefined;
  if (a.length % 2 === 0) {
      for (let i = 0; i < quantas; i++) {
        ti = a[index1];
        tf = a[index2];
        a[index1] = tf;
        a[index2] = ti;
        index1++;
        index2--;
      };
    a = a.join("");
    alert(a);
  } else {
    for (let i = 0; i < (quantas - 1); i++) {
        ti = a[index1];
        tf = a[index2];
        a[index1] = tf;
        a[index2] = ti;
        index1++;
        index2--;
      };
    a = a.join("");
    alert(a);
  };
};
let Process = 1;
while (Process === 1) {
let Number1 = Number(prompt('Digite um número: '));
let Number2 = Number(prompt('Digite outro número: '));
let Operator = Number(prompt('Digite agora um numero para seu respectivo operador\n[1] Soma\n [2] Subtrai\n [3] Multiplica\n [4] Divide\n [5] Pontência\n [6] Tira raiz'));
let Result = undefined;
let t1 = undefined;
switch (Operator) {
    case 1:
        t1 = Number1 + Number2;
        Result = t1;
    break;
    case 2:
        t1 = Number1 - Number2;
        Result = t1;
    break;
    case 3:
        t1 = Number1 * Number2;
        Result = t1;
    break;
    case 4:
        t1 = Number1 / Number2;
        Result = t1;
    break;
    case 5:
        const Potencia = [];
        for (let i = 0; i < Number2; i++) {
          Potencia.push(Number1);
        };
        if (Potencia) {
          if (Number2 == 0) {
            Result = 1;
            break;
          } else {
            Number1 = (1/Number1);
            Number2 = Number2 * (-1);
            for (let i = 0; i < Number2; i++) {
              Potencia.push(Number1);
            };
          };
        };
        const IndexPoten = (Potencia.length) - 1;
        let PotenCacul = Number(Potencia[IndexPoten]);
        let xx = (IndexPoten - 1);
        for (let y = (IndexPoten - 1); y >= 0; y--) {
          PotenCacul = Number(PotenCacul) * Number(Potencia[xx]);
          xx--;
        };
        Result = PotenCacul;
        break;
        case 6:
        if (Number2 == 0) {
          Result = 'Indefinido';
          break;
        } else {
          if (Number2 > 0) {
          let hipotese = Number1 / 2;
          for (let i = 0; i < 10; i++) {
            hipotese = ((Number2 - 1) * hipotese + Number1 / (hipotese ** (Number2 - 1))) / Number2;
          };
          Result = hipotese.toFixed(3);
          break;
        } else {
          Result = 'Digite o segundo número maior que zero';
          break;
          };
          };
};
alert(Result);
  if (!isNaN(Result)) {
    if (Result % 2 === 0) {
      alert(`${Result} é par`);
    } else {
      alert(`${Result} é impar`);
    };
    const tabua = [];
    for (let i = 0; i < 11; i++) {
      tabua.push(Result * i);
    };
    alert(` 0 * ${Result} = ${tabua[0]}\n
     1 * ${Result} = ${tabua[1]}\n
     2 * ${Result} = ${tabua[2]}\n
     3 * ${Result} = ${tabua[3]}\n
     4 * ${Result} = ${tabua[4]}\n
     5 * ${Result} = ${tabua[5]}\n
     6 * ${Result} = ${tabua[6]}\n
     7 * ${Result} = ${tabua[7]}\n
     8 * ${Result} = ${tabua[8]}\n
     9 * ${Result} = ${tabua[9]}\n
    10 * ${Result} = ${tabua[10]}\n`)
    Inverter(prompt('Escreva uma palavra'));
    Process++;
    break;
  } else {
    let fim = prompt('Digite 0 caso queira encerrar o program ou qualquer outra coisa para recomeçar.');
    if (fim == 0) {
      Process++;
      break;
    } else {
      continue;
    };
  };
  };
