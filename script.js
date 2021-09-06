const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const nomeResult = document.getElementById("nomeResult");
const mensalResult = document.getElementById("mensalResult");
const finalResult = document.getElementById("finalResult");
const anosResult = document.getElementById("anosResult");

const nomeInput = document.getElementById("nome");
const mensalInput = document.getElementById("mensalidade");
const tempoInput = document.getElementById("tempo");

function simular() {
    let nome = nomeInput.value;
    let mensal = Number(mensalInput.value);
    let tempo = Number(tempoInput.value);

    let displayTempo;
    if (tempo < 12) {
        displayTempo = `${tempo} meses`
    } else if (tempo > 12) {
        displayTempo = `${tempo / 12} anos`
    } else {
        displayTempo = "1 ano"
    }

    if (nome != "" && mensal != "") {
        let juros = 0.0052;
        let resultado = mensal;

        for (let i = 1; i < tempo; i++) {
            resultado = resultado * (1 + juros);
            resultado += mensal;
        }
        page1.style.display = "none";
        page2.style.display = "flex";

        nomeResult.textContent = nome;
        mensalResult.textContent = mensal.toFixed(2);
        finalResult.textContent = resultado.toFixed(2);
        anosResult.textContent = displayTempo;
    }
}

function simularNovamente() {
    page2.style.display = "none";
    page1.style.display = "flex";

    nomeInput.value = "";
    mensalInput.value = "";
    tempoInput.value = 12;
}