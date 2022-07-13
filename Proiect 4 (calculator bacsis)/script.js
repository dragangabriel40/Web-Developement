

function calcBacsis() {
    var notaDePlata = document.getElementById("notaDePlata").value;
    var servicii = document.getElementById("servicii").value;
    var nrPersoane = document.getElementById("nrPersoane").value;

    if (notaDePlata === "" || servicii == 0) {
        return window.alert("Introdu o suma corecta");
    }

    if (nrPersoane === "" || nrPersoane <= 1) {
        nrPersoane = 1;

        document.getElementById("fiecare").style.display = "none";
    } else {
        document.getElementById("fiecare").style.display = "block";
    }

    var total = (notaDePlata * servicii) / nrPersoane;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("bacsisTotal").style.display = "block";
    document.getElementById("bacsis").innerHTML = total;
}

document.getElementById("bacsisTotal").style.display = "none";
document.getElementById("fiecare").style.display = "none";



