const requestURL = './camisas.Json';
const  request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();
request.onload = function(){
  const  dadosProdutos = request.response;
  console.log(dadosProdutos);
  listarProdutos(dadosProdutos);
}
function proximaPagina(nome, temporada, preço, versao, tamanho, img ){
    localStorage.setItem("nome", nome);
    localStorage.setItem("temporada", temporada);
    localStorage.setItem("preço", preço);
    localStorage.setItem("versao", versao);
    localStorage.setItem("tamanho", tamanho);
    localStorage.setItem("img", img);

    window.location = "http://127.0.0.1:5500/camisa.html";
}
function exibeProdutos(produtos){
    return `
        <div class="produtos">
            <div onclick="proximaPagina(
                '${produtos.nome}','${produtos.temporada}','${produtos.preço}','${produtos.versao}','${produtos.tamanho}', '${produtos.img}'
                 )">
                <img class = "product-photo" src = "${produtos.img}">
                        <div class ="legenda">
                            ${produtos.nome}
                            ${produtos.preço}
                        </div>
            </div>
        </div>
    `
}
function listarProdutos(produtos){
    document.getElementById("gridProdutos").innerHTML=`
        ${produtos.Camisas.map (exibeProdutos).join('')}
    `
}
