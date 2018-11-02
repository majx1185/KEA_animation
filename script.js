window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("siden vises");
    //Hvad skal der ske
    showStart();

}

function showStart() {
    console.log("show start");
    document.querySelector("#start").classList.remove("hide");

    document.querySelector("#playknap").classList.add("pulse");
    document.querySelector("#playknap").addEventListener("click", hideStart);

    document.querySelector("#graarottehop").classList.add("jump");
    document.querySelector("#graarottetitel").classList.add("jumpupdown");
    document.querySelector("#nissearm").classList.add("updown");
}

function hideStart() {
    console.log("hide start");
    document.querySelector("#playknap").removeEventListener("click", hideStart);

    document.querySelector("#playknap").classList.remove("pulse");
    document.querySelector("#graarottehop").classList.remove("jump");
    document.querySelector("#graarottetitel").classList.remove("jumpupdown");
    document.querySelector("#nissearm").classList.remove("updown");

    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("start game");
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("fade_out");

    document.querySelector("#start").classList.add("hide");
}

//En variabel med et tal
let points = 0;
let energy = 3;

window.addEventListener("load", pageloaded);

function pageloaded() {
    console.log("Loaded");
    document.querySelector("#points").innerHTML = +points;

    document.querySelector(".figurbeige_rotte").addEventListener("click", clickfigur);

    document.querySelector(".figurgraa_rotte").addEventListener("click", clickfigur);

    document.querySelector(".figurkat").addEventListener("click", clickfigur);

    document.querySelector("#points").innerHTML = +points;

}

function clickfigur() {
    console.log("clickFigur");

    if (this.classList.contains("figurbeige_rotte")) {
        console.log("Beige");
        points++;
        document.querySelector("#points").innerHTML = points;

    } else if (this.classList.contains("figurgraa_rotte")) {
        console.log("Graa");
        points++;
        document.querySelector("#points").innerHTML = points;

    } else if (this.classList.contains("figurkat")) {
        console.log("kat");
        document.querySelector("#star" + energy).classList.add("hide");
        energy--;
    }
    this.classList.add("hide");
    this.addEventListener("animationend", nyFigur);
}

function nyFigur() {
    console.log("nyFigur");

    this.className = "";
    this.classList.add("place" + Math.floor((Math.random() * 3) + 1));
    this.classList.add("figur" + Math.floor((Math.random() * 3) + 1));
}

//function graa_rotteclick() {
//    console.log("der er klikket graa rotte");
//    points++;
//    console.log(points);
//    document.querySelector("#points").innerHTML = +points;
//}
//
//function katclick() {
//    console.log("der er klikket kat");
//    points--;
//    console.log(points);
//    document.querySelector("#points").innerHTML = +points;
//}
