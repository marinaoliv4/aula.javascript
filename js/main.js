

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigada por clicar");
}

function redirecionar(){
    window.open("https://www.alura.com.br/artigos/css-guia-do-flexbox"); //abre em outra página - é o melhor
    //window.location.href = "https://www.alura.com.br/artigos/css-guia-do-flexbox"; //abre na mesma pagina

}

function trocar(elemento){
    //alert("trocar texto");
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"; //trocar o texto passe o mouse para obrigado por passar o mouse
    elemento.innerHTML = "Obrigado por passar o mouse";

}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";

}

function load(){
    alert("página carregada");

}

function funcaoChange(elemento){
    console.log(elemento.value);

}

/*var d = new Date();
alert(d.getDay());
*/

/*
var count;
for (count=0; count <=5; count++){
    alert(count);
};
*/
/*
var count = 0;
while (count <= 5){
  console.log(count);
  alert(count)
  count++;
};
*/
/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
  alert("menor de idade")
};
*/

/*var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/
//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));

/*var nome = "Marina Oliveira";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//*alert(nome + " tem " + idade + " anos");
//*alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
//*alert(frase.replace("Japão" , "Brasil"));
*/