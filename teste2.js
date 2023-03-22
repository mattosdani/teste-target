const length = 10;
const input = 2;

let n1 = 0;
let n2 = 1;
let proximoNumero;
let encontrou = false;

for (let i = 1; i <= input; i++) {
  proximoNumero = n1 + n2;
  n1 = n2;
  n2 = proximoNumero;
  if (proximoNumero === input) {
    encontrou = true;
  }
}

if (encontrou) {
  console.log("Pertence a sequência.");
} else {
  console.log("Não pertence a sequência.");
}
