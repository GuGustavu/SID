var elementosXContent = document.querySelectorAll('div.x_content');
var elementosXPanel = document.querySelectorAll('div.x_panel');
var elementoTable = document.getElementById('dt1');
var elementosTbody = elementoTable.getElementsByTagName('tbody');
var elementosTR = [];
var notaID = document.getElementById('IDNF')

// Percorra as tabelas tbody e colete os elementos tr
for (var i = 0; i < elementosTbody.length; i++) {
  var elementosTRDaTabela = elementosTbody[i].getElementsByTagName('tr');
  for (var j = 0; j < elementosTRDaTabela.length; j++) {
    elementosTR.push(elementosTRDaTabela[j]);
  }
}

for (var i = 0; i < elementosTR.length; i++) {
  elementosTR[i].style.backgroundColor = '#87CEFA';
  elementosTR[i].style.color = "#555";

}

//Se houver observação, deixa a aba aberta.
if (elementosTR.length > 0) {
  elementosXContent[7].style.display="block"
} else {}

//Esconde botoes de "JÁ PAGO" e "SEM PEDIDO".
var botoes = [  {id: "btnNumPedido"},  {id: "btnLancamentoJaPago"}]

botoes.forEach(function (botao) {
  var elemento = document.getElementById(botao.id);
  if (elemento) {
    elemento.style.display = 'none';
  }
});

//Esconde forma de pagamento e dados bancarios caso já esteja pago.
var jaPago = document.getElementById('dt_vencimento')
jaPago.id= 'dt_vencimento1';
var tipoLan = elementosXPanel[3]
var itemForm = tipoLan.querySelectorAll(".form-group")
var linha3 = itemForm[3]
var itensLin3 = linha3.querySelectorAll(".col-xs-12")

if (jaPago.type === 'hidden') {
  itensLin3[1].style.display="none"
  itensLin3[2].style.display="none"
  itensLin3[0].classList.remove("col-md-5")
  itensLin3[0].classList.add("col-md-12")
}


var anexoObs = document.getElementById('CONTEUDOANEXOS')
var anexoTbody = anexoObs.getElementsByTagName('tbody')
var valoresQuartaCelula = [];


if (anexoObs) { // Verifica se a tabela foi encontrada
  var tbody = anexoObs.querySelector("tbody"); // Seleciona o corpo da tabela

  if (tbody) {
    var linhas = tbody.getElementsByTagName("tr"); // Seleciona todas as linhas do corpo da tabela

    for (var i = 0; i < linhas.length; i++) {
      var linha = linhas[i];
      var celula = linha.getElementsByTagName("td")[3]; // Pega a quarta célula (índice 3)

      if (celula) {
        valoresQuartaCelula.push(celula.textContent); // Armazena o valor da quarta célula na array
      }
    }
  }
}

if (valoresQuartaCelula) {
  var celulasQuartaColuna = tbody.querySelectorAll("td:nth-child(4)"); // Seleciona todas as células da quarta coluna

  for (var i = 0; i < celulasQuartaColuna.length; i++) {
    if (valoresQuartaCelula[i] !== null && valoresQuartaCelula[i].trim() !== "") {
      celulasQuartaColuna[i].style.backgroundColor = "#87CEFA"; // Adiciona a classe de estilo
      celulasQuartaColuna[i].style.color = "#555";
      celula.textContent = celula.textContent.toUpperCase();
      celulasQuartaColuna[i].style.border = "1px solid #ccc";
    }
  }
}

var panelTitulo = elementosXPanel[2]
var Titulo = panelTitulo.querySelector('.x_title')
Titulo.style.display = "none"


var linkPed = "https://catagua.sienge.com.br/sienge/ADC/listItemPedido.do?entity.itemPedidoPK.nuPedidoCompra="
var Ped = document.getElementById("nu_pedido").value
var link = linkPed+Ped
var botaoPed = document.getElementById("nu_pedido")
const regex = /^\d{5}$/

botaoPed.addEventListener('click', function() {
  var larguraPopup = 850;
  var alturaPopup = 500;
  var left = (screen.width - larguraPopup) / 2;
  var top = (screen.height - alturaPopup) / 2;

  var config = `width=${larguraPopup}, height=${alturaPopup}, left=${left}, top=${top}, menubar=no, status=no, toolbar=no, location=no, status=no`;

  //window.open(linkPed+Ped, '_blank')
  window.open(link, Ped, config);

})


if (regex.test(Ped)){
  const novaRegraCSS = document.createElement('style');
    novaRegraCSS.innerHTML = `
    #nu_pedido {
      display: inline-block;
      padding: 10px 20px;

   
      transition: 0.3s;
    }

    #nu_pedido:hover {
      background-color: #2980b930;
      cursor: pointer;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    }

    #nu_pedido:active {
      transform: translateY(2px);
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }
    `;
  botaoPed.removeAttribute('disabled')
  botaoPed.setAttribute('readonly', 'true')
  document.head.appendChild(novaRegraCSS);
}

//Verifica a data atual e se ela tem no minimo 7 dias
//Passar mouse emcima mostra a data a ser inserida
const dataInput = document.getElementById('dt_vencimento1');
const dataInserida = new Date(dataInput.value);
const dataAtual = new Date();
const diferencaEmDias = Math.floor((dataInserida - dataAtual) / (1000 * 60 * 60 * 24));

if (diferencaEmDias <= 5) {
  dataInput.style.backgroundColor = "#d9534f25";


  dataInput.addEventListener('mouseenter', function() {
    dataInput.value = novaDataFormatada();
    dataInput.style.backgroundColor = "#5cb85c30";
  });

  dataInput.addEventListener('mouseleave', function() {
    dataInput.value = dataOriginal();
    dataInput.style.backgroundColor = "#d9534f25";
  });


  const novaRegraCSS = document.createElement('style');
    novaRegraCSS.innerHTML = `
    #dt_vencimento1:hover {
      background-color: #2980b930;
      cursor: pointer;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    }
    #dt_vencimento1:active {
      transform: translateY(2px);
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }

    .animar {
      animation: float 3s ease-in-out infinite;
      position:absolute;
      transform: translate(-50%, -50%);
      top:10%;
      right:10%;
      background: radial-gradient(circle, #fff, #bbb);
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    }


    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px)
      }
    }

    `;
  document.head.appendChild(novaRegraCSS);
  
  dataInput.removeAttribute('disabled')
  dataInput.setAttribute('readonly', 'true')

  obsInfo = document.getElementById('ds_informacao')
  obsInfo.value= "Inserido para 7 dias conforme permitido o sistema."

  dataInput.setAttribute('onclick', 'inserirInformacaoExtra()');
}

dataInput.addEventListener('click', function() {
  alert("Adicionado observação de vencimento para 7 dias");
});

function dataOriginal() {
  const datacom1 = new Date(dataInserida);
  datacom1.setDate(dataInserida.getDate() + 1);
  const ano = datacom1.getFullYear();
  const mes = (datacom1.getMonth() + 1).toString().padStart(2, '0');
  const dia = datacom1.getDate().toString().padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

function novaDataFormatada() {
  const datacom7 = new Date(dataAtual);
  datacom7.setDate(dataAtual.getDate() + 7);
  const ano = datacom7.getFullYear();
  const mes = (datacom7.getMonth() + 1).toString().padStart(2, '0');
  const dia = datacom7.getDate().toString().padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

var menuSid = document.querySelector("body.nav-md");
menuSid.classList.remove("nav-md");
menuSid.classList.add("nav-sm");

var popup = menuSid.querySelectorAll("span.bg-green")
for (var i = 0; i < popup.length; i++) {
  popup[i].classList.add("animar")
}



const codigoHTML = `
  <nav class="menu" id=menuBuble>
    <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open">
    <label class="menu-open-button" for="menu-open">
      <span class="lines line-1"></span>
      <span class="lines line-2"></span>
      <span class="lines line-3"></span>
    </label>


  </nav>
`;

const divHTML = document.createElement('div');
divHTML.innerHTML = codigoHTML;
document.body.appendChild(divHTML);
elementosXPanel[9].style.display ="";
elementosXPanel[8].style.margin = "0 0 30px 0";


var bot1 = elementosXPanel[9].querySelectorAll("a")[0]
var bot2 = elementosXPanel[9].querySelectorAll("a")[1]

if (bot1.href === "javascript:editarNF()"){
  const iconAprova =`
  <i class="fa fa-check"></i>
  `;
  const iconReprova =`
  <i class="fa fa-plus"></i>
  `;

  const botBubleAp = document.createElement('a')
  botBubleAp.classList = 'menu-item blue'
  botBubleAp.href = "javascript:editarNF()"
  botBubleAp.innerHTML = iconAprova
  document.getElementById('menuBuble').appendChild(botBubleAp);

  const botBubleRp = document.createElement('a')
  botBubleRp.classList = 'menu-item red'
  botBubleRp.href = "javascript:excluirNF()"
  botBubleRp.innerHTML = iconReprova
  document.getElementById('menuBuble').appendChild(botBubleRp);
  elementosXPanel[9].style.display = "none"

} if (elementosXPanel[9].querySelectorAll(".btn")[0].title === "Finalizar") {
  const iconAprova =`
  <i class="fa fa-check"></i>
  `;
  const iconReprova =`
  <i class="fa fa-plus"></i>
  `;

  const botBubleAp = document.createElement('a')
  botBubleAp.classList = 'menu-item green'
  botBubleAp.setAttribute('onclick',`abrirModalFinalizacao(${notaID.value});`)
  botBubleAp.innerHTML = iconAprova
  document.getElementById('menuBuble').appendChild(botBubleAp);

  const botBubleRp = document.createElement('a')
  botBubleRp.classList = 'menu-item red'
  botBubleRp.setAttribute('onclick',`abrirModalReprovacao(${notaID.value});`)
  botBubleRp.innerHTML = iconReprova
  document.getElementById('menuBuble').appendChild(botBubleRp);
  elementosXPanel[9].style.display = "none"

}



