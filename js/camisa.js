const nome = localStorage.getItem("nome");
const temporada = localStorage.getItem("temporada");
const preço = localStorage.getItem("preço");
const img = localStorage.getItem("img");
const tamanho = localStorage.getItem("tamanho");
const versao = localStorage.getItem("versao");


document.getElementById("imagem").innerHTML=`
<img src=${img}>
${nome}
${temporada}

${preço}
`


document.getElementById("imagem").innerHTML
        
