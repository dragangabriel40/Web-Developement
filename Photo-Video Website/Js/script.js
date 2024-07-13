// Folosim AJAX pentru a solicita datele din fișierul JSON
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    var comentariiDiv = document.getElementById("comentarii");

    if (data.length > 0) {
      var listaComentarii = "<ul>";
      for (var i = 0; i < data.length; i++) {
        listaComentarii +=
          "<li><strong>" +
          data[i]["Nume si Prenume"] +
          "</strong>: " +
          data[i]["Review"] +
          " (" +
          data[i]["Data"] +
          ")</li>";
      }
      listaComentarii += "</ul>";
      comentariiDiv.innerHTML = listaComentarii;
    } else {
      comentariiDiv.innerHTML = "Nu există comentarii de afișat.";
    }
  }
};
xhttp.open("GET", "comentarii.json", true);
xhttp.send();
