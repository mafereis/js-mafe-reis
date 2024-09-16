// zootopia:Essa Cidade é o Bicho, LIVRE Infantil/Comédia 
// irmao urso, LIVRE :Infantil/Fantasia
// diarios de um vampiro, 16 :Ação/Aventura/Drama/Romance/Suspense
// fate: a saga winx, 16 : Terror/Ação/Drama/Aventura/Ficção científica/Fantasia sombria/Ficção supernatural
// shadowhunters, 16 :  Fantasia/Romance/Drama/Terror/Ação/Aventura/Ficção científica/Sobrenatural/Mistério

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 01) {
    if (idade >= 16) {
      return "zootopia:Essa Cidade é o Bicho";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "zootopia:Essa Cidade é o Bicho";          
        } else{
         return "diarios de um vampiro";
        }
      } else {
        if (gostaDeFantasia) {
          return "fate: a saga winx";
        } else {
          return "shadowhunters";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "irmao urso";
    } else {
      return "";
    }
  }
}
