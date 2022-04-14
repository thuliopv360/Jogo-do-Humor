// let img = document.getElementById("teste");

// document.getElementById("textonome").innerHTML = "Itadori";
// document.getElementById("textosituacao").innerHTML = "Humano";

// let momento = false;

// function mudarNome(id) {
//     while (momento == false) {
//         img.src = "https://i1.sndcdn.com/artworks-T5YyETaYHzOdTMKp-Mfzvhg-t500x500.jpg"
//         document.getElementById("textonome").innerHTML = "Itadori";
//         document.getElementById("textosituacao").innerHTML = "Lutando";
//         momento = true;
//     }
//     if (momento == true) {
//         img.src = "https://p16.resso.me/img/tos-alisg-v-2102/1a33c2771b5f470d9e95d0d8cfcf21b6~c5_500x500.jpg"
//         document.getElementById("textonome").innerHTML = "Itadori";
//         document.getElementById("textosituacao").innerHTML = "Lutando";
//         momento = false;
//     }
// }
document.getElementById("textonome").innerHTML = "Itadori";
document.getElementById("textosituacao").innerHTML = "Humano";

const span = document.querySelector("span");
const img = document.querySelector("#teste");

// div_id.addEventListener("click", () => {
//     console.log("Eu fui clicado");
// })


const imgList = ["./assets/img/itadori.png", "./assets/img/itadoriLutando.png", "./assets/img/sukuna.png", "./assets/img/sukunaLutando.png"];

function handleChangeImg() {
    if (img.attributes.src.nodeValue == imgList[0]) {
        img.setAttribute("src", `${imgList[1]}`);
        document.getElementById("textonome").innerHTML = "Itadori Lutando";
        document.getElementById("textosituacao").innerHTML = "Humano usando energia Amaldiçoada";
    } else if (img.attributes.src.nodeValue == imgList[1]) {
        document.getElementById("textonome").innerHTML = "Sukuna Intediado";
        document.getElementById("textosituacao").innerHTML = "Rei das Maldições";
        img.setAttribute("src", `${imgList[2]}`);
    } else if (img.attributes.src.nodeValue == imgList[2]) {
        img.setAttribute("src", `${imgList[3]}`);
        document.getElementById("textonome").innerHTML = "Sukuna Lutando";
        document.getElementById("textosituacao").innerHTML = "Rei das Maldicoes Bravo";
    } else {
        img.setAttribute("src", `${imgList[0]}`);
        document.getElementById("textonome").innerHTML = "Itadori";
        document.getElementById("textosituacao").innerHTML = "Humano";
    }
}