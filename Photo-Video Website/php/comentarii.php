<?php
// Conectare la baza de date
$servername = "localhost"; // Adresa serverului MySQL
$username = "root"; // Numele utilizatorului MySQL
$password = ""; // Parola utilizatorului MySQL
$database = "comentarii"; // Numele bazei de date

// Creare conexiune
$conn = new mysqli($servername, $username, $password, $database);

// Verificare conexiune
if ($conn->connect_error) {
    die("Conexiunea la baza de date a eșuat: " . $conn->connect_error);
}

// Interogare pentru a extrage datele din tabela user_coments
$sql = "SELECT * FROM user_coments";
$result = $conn->query($sql);

// Verificare dacă există rezultate
if ($result->num_rows > 0) {
    // Creare un array pentru a stoca datele
    $comentarii = array();

    // Parcurgere rezultate și adăugare la array
    while ($row = $result->fetch_assoc()) {
        $comentarii[] = $row;
    }

    // Convertirea array-ului în format JSON
    $json_data = json_encode($comentarii);

    // Scrierea datelor JSON într-un fișier
    file_put_contents('comentarii.json', $json_data);

    // Afisare mesaj de succes
    echo "Datele au fost extrase cu succes și salvate în fișierul comentarii.json";
} else {
    // În cazul în care nu există rezultate
    echo "Nu există comentarii de salvat.";
}

// Închidere conexiune
$conn->close();
