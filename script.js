// FORMULÁRIO
const form = document.querySelector("#form-contato");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.querySelector("input[name='nome']").value;
  const email = document.querySelector("input[name='email']").value;

  if (nome === "" || email === "") {
    alert("Preencha todos os campos!");
  } else {
    alert("Mensagem enviada com sucesso!");
  }
});

// BOTÃO TEMA
const botaoTema = document.querySelector("#tema-btn");

botaoTema.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");

  if (botaoTema.textContent === "Escuro") {
    botaoTema.textContent = "Claro";
  } else {
    botaoTema.textContent = "Escuro";
  }
});

// PROJETOS DINÂMICOS
const projetos = [
  {
    titulo: "Portfólio Pessoal",
    descricao: "Projeto inicial utilizando HTML, CSS e JavaScript.",
    link: "#"
  },
  {
    titulo: "Projeto Educacional",
    descricao: "Atividades voltadas para apoio à aprendizagem.",
    link: "#"
  }
];

const container = document.querySelector("#lista-projetos");

projetos.forEach(projeto => {
  container.innerHTML += `
    <article>
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}">Ver no GitHub</a>
    </article>
  `;
});
