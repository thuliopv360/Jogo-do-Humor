document.getElementById("textonome").innerHTML = "Itadori";
document.getElementById("textosituacao").innerHTML = "Humano";

const span = document.querySelector("span");
const img = document.querySelector("#imagemFinal");


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
        document.getElementById("textosituacao").innerHTML = "Rei das Maldições Bravo";
    } else {
        img.setAttribute("src", `${imgList[0]}`);
        document.getElementById("textonome").innerHTML = "Itadori";
        document.getElementById("textosituacao").innerHTML = "Humano";
    }
}