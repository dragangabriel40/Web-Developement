var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying() {
    var numarPersoane = names.length;


    var random = Math.floor(Math.random() * numarPersoane);
    console.log(names[random])

}



whosPaying();



