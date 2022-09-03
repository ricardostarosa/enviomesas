window.addEventListener("load", () => {
  alert("página carregada!");
});

const body = document.querySelector("body");

const h1 = document.querySelector("h1");

const form = document.createElement("form");
const label = document.createElement("label");
const inputNome = document.createElement("input");
const inputEndereco = document.createElement("input");
const paragrafo = document.createElement("p");

const enviar = document.createElement("button");
const reset = document.createElement("button");

enviar.textContent = "enviar";
reset.textContent = "reset";

label.setAttribute("for", "nome");
label.textContent = "Nome:";
inputNome.setAttribute("id", "nome");

form.appendChild(label);
form.appendChild(inputNome);
form.appendChild(enviar);
form.appendChild(reset);

body.appendChild(form);

function changeColorH1(color) {
  return function () {
    h1.style.color = color;
  };
}

h1.addEventListener("mouseover", changeColorH1("red"));

h1.addEventListener("mouseout", changeColorH1("black"));

let contador = 0;
let texto = "";

function capturaValueInput() {
  texto = inputNome.value;
  contador++;
}

inputNome.addEventListener("keyup", capturaValueInput);

function insereInfoEvento(event) {
  event.preventDefault();
  const valorInput = inputNome.value || 'Digite no campo "nome"';

  if (event.submitter.textContent === "enviar") {
    paragrafo.innerHTML = `Caracteres digitados:<em>${texto}</em> <p>Número de chamadas de evento:<em>${contador}</em></p>`;
    form.insertAdjacentElement("afterend", paragrafo);

    contador = 0;
    inputNome.value = "";
    texto = valorInput;
  } else {
    inputNome.value = "";
    paragrafo.innerHTML = "";
  }

  texto = valorInput;
}

form.addEventListener("submit", insereInfoEvento);
