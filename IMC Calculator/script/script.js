function calculeaza() {
  let greutate = document.getElementById("greutate").value;
  let inaltime = document.getElementById("inaltime").value;
  let info = document.getElementById("info");
  greutate = parseFloat(greutate);
  inaltime = parseFloat(inaltime) / 100;

  if (isNaN(greutate) || isNaN(inaltime) || greutate < 0 || inaltime < 0) {
    alert("Introdu valori valide pentru greutate si inaltime");
    return;
  }
  let bmi = greutate / (inaltime * inaltime);

  let rezultat = document.getElementById("rezultat");
  rezultat.innerHTML = "Indicele este " + bmi.toFixed(2);

  switch (true) {
    case bmi < 18.5:
      info.innerHTML = "~Subponderal~";
      break;
    case bmi >= 18.5 && bmi < 24.9:
      info.innerHTML = "~Normal~";
      break;
    case bmi >= 25 && bmi < 29.9:
      info.innerHTML = "~Supraponderal~";
      break;
    case bmi >= 30:
      info.innerHTML = "~Obezitate~";
      break;
    default:
      info.innerHTML = "~Categorie necunoscută~";
      break;
  }
}

function reseteazaValorile() {
  document.getElementById("greutate").value = "";
  document.getElementById("inaltime").value = "";

  document.getElementById("rezultat").innerHTML = "";
  document.getElementById("info").innerHTML = "";
}
