// Primeira Fase
function iniciar () {
    var nome = document.getElementById("name").value
    var body = document.querySelector("body")

    body.innerHTML += `<p>OPA.<br>
    Você, ${nome}, Com o que estamos vivendo, quem será capaz de achar a cura do covid 19 ?.<br>
    Mas averá obstáculos. e ai, está preparado?<br>`
    body.innerHTML += `<button onclick="primeiraSim()">Sim</button>
    <button onclick="primeiraNao()">Não</button>`
    
    
}

function primeiraNao () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `LOST!.<br>`
    body.innerHTML += `<br>`
    body.innerHTML += `<button onclick="location.reload()">Voltar</button>`
}

function primeiraSim () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Mec demais, o que pretende fazer ??<br><br>`
    body.innerHTML += `<button onclick="irRua()">Ir na Rua</button><br><br>`
    body.innerHTML += `<button onclick="ficaCasa()">Ficar em Casa</button><br><br>`
    body.innerHTML += `<button onclick="noticia()">Ver as Notícias</button><br><br>`
}

function irRua(){
    var body = document.querySelector("body")
    body.innerHTML += `Escolha o lado que quer ir ! <br> `
    body.innerHTML += `<button onclick="direita()">Direita</button><br><br>`
    body.innerHTML += `<button onclick="esquerda()">Esquerda</button><br>`
}

function direita(){
    var body = document.querySelector("body")
    body.innerHTML += `VOCÊ ACHOU UMA ACLOMERAÇÃO DE PESSOAS E MORREU!!!! <br><br>`
    body.innerHTML +=  `<button onclick="location.reload()">Voltar</button>`
}

function esquerda(){
    var body = document.querySelector("body")
    body.innerHTML += `Você encontrou um alido para a pesquisa!!! <br><br>`
    body.innerHTML += `<button onclick="procuraLaboratorio()">SHOW!!!</button><br><br>`
}

function procuraLaboratorio(){
    var body = document.querySelector("body")
    body.innerHTML += `Você e seu aliado acham um laboratório com pesquisas da COVID-19 o que vocês fazem?<br><br>`
    body.innerHTML += `<button onclick="entraLaboratorio()">Entrar</button>`
    body.innerHTML += `<button onclick="laboratorio()">Não entrar</button><br><br>`
}

function entraLaboratorio(){
    var body = document.querySelector("body")
    body.innerHTML += `GRAÇAS A VC TODOS OS IDOSOS E DOENTES DE CV 19 FORAM CURADO, PARABENS!!<br><br>`
    body.innerHTML += `YOU WIN! <br><br>`
    body.innerHTML += `<button onclick="location.reload()">FIM</button>`
}

function laboratorio(){
    var body = document.querySelector("body")
    body.innerHTML += `YOU OTARIO E FRACO, POR CONTA DISSO TODOS MORRERAM!!!!<br><br>`
    body.innerHTML += `<button onclick="location.reload()">Voltar</button>`
}

// Segunda Fase
function ficaCasa () {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `Mas e ai ? vai ficar fazendo o que ? <br><br>`
    body.innerHTML += `<button onclick= "procrastina()">Procrastinar</button> <br><br>`
    body.innerHTML += `<button onclick= "primeiraSim()">Ver as Notícias</button> <br><br>`
}
function procrastina(){
    var body = document.querySelector("body")
    body.innerHTML += `Você é idiota ? A sua pesquisa iria salvar milhares de vidas!!!!`
    body.innerHTML += `<br><button onclick="location.reload()">Voltar</button>`
}
function noticia(){
    var body = document.querySelector("body")
    body.innerHTML += `Você fica indignado com pesquisas!!!<br><br>`
    body.innerHTML += `<button onclick="irRua()">Ir para a rua achar pesquisas!</button><br><br>`
}