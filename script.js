const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const result = document.getElementById("result");

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
        page2.style.display = "block";

        result.textContent = `Olá ${nome}, juntando R$${mensal.toFixed(2)} todo mês, 
        você terá R$${resultado.toFixed(2)} em ${displayTempo}.`
    }
}

function simularNovamente() {
    page2.style.display = "none";
    page1.style.display = "block";

    nomeInput.value = "";
    mensalInput.value = "";
    tempoInput.value = 12;
}