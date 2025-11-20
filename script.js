function assenze() {
    n = parseInt(document.getElementById("progresso").value);
    console.log(n);
    ore = 999;
    assenze = n * 0;
    ore_assenti = ore - assenze;
    percentuale = (100 * ore_assenti)/ore;
    console.log(percentuale);
    document.getElementById("barra").style.width = percentuale + "%";
}

function calcola() {
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let op = document.getElementById("operazione").value;
    let res;
    if (isNaN(n1)) isNaN
}