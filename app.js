function pesquisar(){
  let section = document.getElementById("resultados-pesquisa")
console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value

if (!campoPesquisa) {
  section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de marca</p>"
  return 
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = ""; 
let titulo = ""; 
let descricao = "";
let tags  = "";

for (let dado of marcas){
  titulo = dado.titulo.toLowerCase()
  descricao = dado.descricao.toLowerCase()
  tags = dado.tags.toLowerCase()
  if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
    resultados += `<div class="item-resultado">
    <h2>${dado.titulo}</h2>
    <p class="descricao-meta">
    ${dado.descricao}
    </p>
    <a href=" ${dado.instagram}" target="_blank"
      >Instagram Oficial</a
    >
  </div>`
};
  }
   
  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
}

section.innerHTML = resultados
};

