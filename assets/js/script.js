let img = document.getElementById("teste");

document.getElementById("textonome").innerHTML = "Itadori";
document.getElementById("textosituacao").innerHTML = "Humano";

let momento = false;

function mudarNome(id) {
    while (momento == false) {
        img.src = "https://i1.sndcdn.com/artworks-T5YyETaYHzOdTMKp-Mfzvhg-t500x500.jpg"
        document.getElementById("textonome").innerHTML = "Itadori";
        document.getElementById("textosituacao").innerHTML = "Lutando";
        momento = true;
    }
    if (momento == true) {
        img.src = "https://p16.resso.me/img/tos-alisg-v-2102/1a33c2771b5f470d9e95d0d8cfcf21b6~c5_500x500.jpg"
        document.getElementById("textonome").innerHTML = "Itadori";
        document.getElementById("textosituacao").innerHTML = "Lutando";
        momento = false;
    }
}
// document.getElementById("textonome").innerHTML = "Itadori";
// document.getElementById("textosituacao").innerHTML = "Humano";