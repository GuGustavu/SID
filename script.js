// Defina a variável com o link HTML
var linkHtml = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />';

// Crie um elemento temporário para conter o link
var tempDiv = document.createElement('div');
tempDiv.innerHTML = linkHtml;

// Adicione o link ao <head> da página
var headElement = document.head;
headElement.appendChild(tempDiv.firstChild);





if (document.querySelectorAll(".x_title")[2].querySelector('h2').textContent.includes("PEDIDO:")){
  var DivNumPedido = document.querySelectorAll(".x_title")[2].querySelector('h2').textContent.split(':')
  document.querySelectorAll(".x_title")[2].querySelector('h2').style.display = "none"


var novoBotaoHTML = `<div class="col-md-6 col-sm-12 col-xs-12" style="padding:0px">
<button id="btnPed" class="btn btn-danger" style="display:flex;flex-direction:row;align-itens:end;">
    <div id="textPed" style="text-align: right;width:0px;overflow: hidden;padding-left:20px;pointer-events: none;">
       PEDIDO:
    </div>
    <div class="NumeroPedido" style="margin-right:1px;pointer-events: none;">
       <strong>${DivNumPedido[1]}</strong>
    </div>
    <div class="" style="position: absolute;left:25px;top:10px;transform: translate(-17.5%, -32%);width:85px;height: 35px;pointer-events: none;;">
        <i class="fa-solid fa-receipt fa-bounce" style="position: absolute; top: 30%; left: 3%;pointer-events: none;"></i>
    
    
</div></button></div>
`;

}

if (document.querySelectorAll(".x_title")[2].querySelector('h2').textContent.includes("PEDIDO:")){
  const pedidoEco = document.querySelectorAll(".x_content");
  const obsPed = '<label>Observação do pedido:</label><input type="text" id="pedidoEco" class="form-control" placeholder="Sem observação inserida no pedido."  value="" disabled>';

// Certifique-se de que o pedidoEco[3] existe antes de tentar adicioná-lo
if (pedidoEco.length > 3) {
  pedidoEco[3].innerHTML = obsPed;
  document.querySelectorAll(".x_title")[2].insertAdjacentHTML('afterbegin', novoBotaoHTML);

}





function obterValorDaTdSiengeEocultarLinhas() {
    var infoSiengeTable = pedidoEco[4].querySelectorAll("tr");
    var valorDaTd3 = null; // Inicialize com um valor padrão ou null
  
    for (var i = 0; i < infoSiengeTable.length; i++) {
      var td2 = infoSiengeTable[i].querySelector("td:nth-child(2)");
      var td3 = infoSiengeTable[i].querySelector("td:nth-child(3)");
  
      if (td2 && td2.textContent.trim() === "SIENGE") {
        valorDaTd3 = td3.textContent.trim();
        infoSiengeTable[i].style.display = "none"; // Oculta a linha
        break; // Parar a busca após encontrar o valor "SIENGE"
      }
    }
  
    return valorDaTd3;
  }
  
  var valorDaTd3Sienge = obterValorDaTdSiengeEocultarLinhas();

document.getElementById('pedidoEco').value =  valorDaTd3Sienge


setTimeout(function() {
	document.querySelector("#textPed").style.transition = "width 0.5s";
    document.querySelector("#textPed").style.width = "78px"
}, 500); // 3000 milissegundos = 3 segundos

setTimeout(function() {
	document.querySelector("#textPed").style.transition = "width 0.5s";
    document.querySelector("#textPed").style.width = "0px"
}, 2000); // 3000 milissegundos = 3 segundos

	for (var i = 0; i < document.querySelectorAll("#btnPed").length; i++) {
		document.querySelectorAll("#btnPed")[i].addEventListener("mouseenter", function() {
        // Ação a ser executada quando o mouse entra no botão
        var btn2s = document.querySelectorAll("#textPed");
        for (var j = 0; j < btn2s.length; j++) {
            btn2s[j].style.transition = "width 0.5s";
            btn2s[j].style.width = "78px";
        }
    });
}

for (var i = 0; i < document.querySelectorAll("#btnPed").length; i++) {
  document.querySelectorAll("#btnPed")[i].addEventListener("mouseout", function() {
        // Ação a ser executada quando o mouse entra no botão
        var btn2s = document.querySelectorAll("#textPed");
        for (var j = 0; j < btn2s.length; j++) {
            btn2s[j].style.transition = "width 0.5s";
        	btn2s[j].style.width = "0";
        }
    });
}}

if (document.querySelectorAll(".x_title")[2].querySelector('h2').textContent.includes("PEDIDO:")){
document.querySelector("#btnPed").addEventListener('dblclick', function() {
  var linkPed = "https://catagua.sienge.com.br/sienge/ADC/listItemPedido.do?entity.itemPedidoPK.nuPedidoCompra="+parseInt(DivNumPedido[1])
  var larguraPopup = 900;
  var alturaPopup = 500;
  var config = `width=${larguraPopup}, height=${alturaPopup}, menubar=no, status=no, toolbar=no, location=no, status=no`;
  //window.open(linkPed+Ped, '_blank')
  window.open(linkPed, '', config);

})

document.querySelector("#btnPed").addEventListener('click', function() {
  copiarParaAreaDeTransferencia(textoParaCopiar)

})

function copiarParaAreaDeTransferencia(texto) {
  const elementoTemporario = document.createElement("textarea");
  elementoTemporario.value = texto;
  document.body.appendChild(elementoTemporario);
  elementoTemporario.select();
  document.execCommand("copy");
  document.body.removeChild(elementoTemporario);
}

// Exemplo de uso:
const textoParaCopiar = parseInt(DivNumPedido[1]);
}






document.querySelectorAll(".row")[0].style.display = "grid";
document.querySelectorAll(".row")[0].style.gridTemplateColumns = "1fr 31vw 32vw";


if (document.querySelectorAll(".x_title")[2].querySelector('h2').textContent.includes("PEDIDO:")){
  document.querySelectorAll(".row > div")[0].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[0].style.gridRow = 1;
  document.querySelectorAll(".row > div")[0].classList.remove("col-md-8")
  document.querySelectorAll(".row > div")[0].classList.add("col-md-12")
  document.querySelectorAll(".row > div")[1].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[1].style.gridRow = 4;
  document.querySelectorAll(".row > div")[1].classList.remove("col-md-4")
  document.querySelectorAll(".row > div")[1].classList.add("col-md-12")
  document.querySelectorAll(".row > div")[2].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[2].style.gridRow = 3;
  document.querySelectorAll(".row > div")[4].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[4].style.gridRow = 5;
  document.querySelectorAll(".row > div")[7].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[7].style.gridRow = 6;
  document.querySelectorAll(".row > div")[8].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[8].style.gridRow = 2;
  document.querySelectorAll(".row > div")[9].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[9].style.gridRow = 7;
  document.querySelectorAll(".row > div")[10].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[10].style.gridRow = 8;
  document.querySelectorAll(".x_title")[2].querySelector('[align="right"]').style.display = "none";
}else{
  document.querySelectorAll(".row > div")[0].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[0].style.gridRow = 1;
  document.querySelectorAll(".row > div")[0].classList.remove("col-md-8")
  document.querySelectorAll(".row > div")[0].classList.add("col-md-12")
  document.querySelectorAll(".row > div")[1].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[1].style.gridRow = 3;
  document.querySelectorAll(".row > div")[1].classList.remove("col-md-4")
  document.querySelectorAll(".row > div")[1].classList.add("col-md-12")
  document.querySelectorAll(".row > div")[2].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[2].style.gridRow = 4;
  document.querySelectorAll(".row > div")[5].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[5].style.gridRow = 5;
  document.querySelectorAll(".row > div")[6].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[6].style.gridRow = 2;
  document.querySelectorAll(".row > div")[8].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[8].style.gridRow = 7;
  document.querySelectorAll(".row > div")[7].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[7].style.gridRow = 6;
  /*document.querySelectorAll(".row > div")[10].style.gridColumn = 1;
  document.querySelectorAll(".row > div")[10].style.gridRow = 8;*/

}

var RefNota = document.querySelectorAll(".x_title")[0].querySelectorAll("a")[2].href
var RefAprov = document.querySelectorAll(".x_title")[0].querySelectorAll("a")[0].href
var NotaDiv = `<div class="col-md-12 col-sm-12 col-xs-12" style="width:64vw;position:absolute;right: 0px;">
<div class="x_panel">
	<a class="collapse-link collapsed">
		<div class="x_title">
			<h2>Visualização</h2>
			
			<div id="LocalBotoes" class="clearfix"style="display:flex;justify-content: flex-end;">
        <button id="BtnNotaIframe" type="button" class="btn btn-dark" style="margin-left: 10px;width: 40px;"><i class="fa fa-file-text"></i></button>


        <button id="BtnHistIframe" type="button" class="btn btn-info" style="text-align: left;"><i class="fa-solid fa-list-check"></i></button>
      </div>
		</div>
	</a>

	
	<iframe id="IframeNota" src="${RefNota}" style="
    width: 100%;
    height: 1404px;
"></iframe>

</div>
</div>`

// Iterar sobre os elementos e adicionar NotaDiv como um elemento filho em cada um

  // Criar um elemento temporário para conter NotaDiv
  var tempDiv = document.createElement("div");
  tempDiv.innerHTML = NotaDiv;

  // Adicionar o elemento temporário como um filho de elementoRow
  document.querySelectorAll(".row")[0].appendChild(tempDiv);
  document.querySelectorAll(".x_title")[0].querySelectorAll("a")[2].style.display = "none"

  document.querySelector('#BtnNotaIframe').addEventListener('click', function(){
    document.querySelector('#IframeNota').src = RefNota
  })

  document.querySelector('#BtnHistIframe').addEventListener('click', function(){
    document.querySelector('#IframeNota').src = RefAprov
  })

  function handleClick(event) {
    var href = event.target.getAttribute("data-href");
    console.log(href);
  }
  
  
  var tbody = document.querySelector("#CONTEUDOANEXO tbody");
  var trElementsCenter = tbody.querySelectorAll("td[align='center']");

  if (trElementsCenter.length >= 1) {
    for (var i = 0; i < trElementsCenter.length; i++) {
      var BtnAnexoIncluido = `
        <button class="BtnAnexo${i} btn btn-success" onclick="document.querySelector('#IframeNota').src = '${trElementsCenter[i].querySelectorAll('a')[1].href}'">
          <i class="fa-solid fa-file"></i>
        </button>
      `;
      document.querySelector("#LocalBotoes").insertAdjacentHTML('beforeend', BtnAnexoIncluido)
    }
  }

  document.querySelectorAll(".x_title")[0].querySelector('[align="right"]').style.display = "none";
