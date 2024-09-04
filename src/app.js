import "./style.css";
window.onload = function() {
  /*ONLOAD significa como recargar página acá, que cada que recargue haga:*/
  /*seleccionamos el documemnto, que el p de tal doc que es html lo modificamos con el innerHTML y le ponemos la función de acá:*/
  document.querySelector(".excusa").innerHTML = Excusas();
  /*seleccionamos el botón y dimos un escuchador, cada que escuche un click genere excusa aleatoriamente:*/
  document.querySelector(".boton").addEventListener("click", () => {
    document.querySelector(".excusa").innerHTML = Excusas();
  });
};
function Excusas() {
  /*Hice nueva función para que se generen al azar y así:*/
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ]; /*floor para que sea número entero, random al azar y length para que recorra todo:*/
  let sujeto = Math.floor(Math.random() * who.length);
  let verbo = Math.floor(Math.random() * action.length);
  let que = Math.floor(Math.random() * what.length);
  let cuando = Math.floor(Math.random() * when.length);
  /*Retornamos para que se muestre en pantalla:*/
  return (
    who[sujeto] + " " + action[verbo] + " " + what[que] + " " + when[cuando]
  );
}
