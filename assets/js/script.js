function mudarNome(id) {
    let indice = 0;
    while (indice < 3) {
        indice++;
        if (indice == 1) {
            document.getElementById("textonome").innerHTML = "Itadori";
            document.getElementById("textosituacao").innerHTML = "Humano";
            indice++;
        } else if (indice == 2) {
            document.getElementById("textonome").innerHTML = "Itadori lutando";
            document.getElementById("textosituacao").innerHTML = "Humano";
        }
    }
}
// document.getElementById("textonome").innerHTML = "Itadori";
// document.getElementById("textosituacao").innerHTML = "Humano";