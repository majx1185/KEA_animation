window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("siden vises");
    //Hvad skal der ske
    showStart();



    document.querySelector("#beige_rotte").addEventListener("click", clickfigur);

    document.querySelector("#graa_rotte").addEventListener("click", clickfigur);

    document.querySelector("#kat").addEventListener("click", clickfigur);

    document.querySelector("#points").innerHTML = +points;


}

function showStart() {
    console.log("show start");
    document.querySelector("#start").classList.remove("hide");

    document.querySelector("#playknap").classList.add("pulse");
    document.querySelector("#playknap").addEventListener("click", hideStart);

    document.querySelector("#graarottehop").classList.add("jump");
    document.querySelector("#graarottetitel").classList.add("jumpupdown");
    document.querySelector("#nissearm").classList.add("updown");

    document.querySelector("#settingsknap").addEventListener("click", showSettings);
    //    document.querySelector("#settings_close").addEventListener("click", showSettings);


}


function addMove() {
    document.querySelector("#beige_rotte").classList.add("move");
    document.querySelector("#graa_rotte").classList.add("move");
    document.querySelector("#kat").classList.add("move");

    document.querySelector("#beige_rotte").classList.remove("hide");
    document.querySelector("#graa_rotte").classList.remove("hide");
    document.querySelector("#kat").classList.remove("hide");

}


function removeMove() {


    document.querySelector("#beige_rotte").classList.remove('move');
    document.querySelector("#graa_rotte").classList.remove('move');
    document.querySelector("#kat").classList.remove('move');
    setTimeout(addMove, 300);
}


function hideStart() {
    addMove();

    document.querySelector("#beige_rotte").addEventListener('animationend', removeMove);
    document.querySelector("#graa_rotte").addEventListener('animationend', removeMove);
    document.querySelector("#kat").addEventListener('animationend', removeMove);




    console.log("hide start");
    document.querySelector("#playknap").removeEventListener("click", hideStart);

    document.querySelector("#playknap").classList.remove("pulse");
    document.querySelector("#graarottehop").classList.remove("jump");
    document.querySelector("#graarottetitel").classList.remove("jumpupdown");
    document.querySelector("#nissearm").classList.remove("updown");

    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", startGame);

    timeOver();
}

function startGame() {
    console.log("start game");
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("fade_out");

    document.querySelector("#start").classList.add("hide");

    document.querySelector("#spil_igen_knap").removeEventListener("click", startGame);

}

function showSettings() {
    console.log("showSettings");
    document.querySelector("#settings").classList.toggle("hide");

}

//En variabel med et tal
let time = 30;
let points = 0;
let energy = 3;



function clickfigur() {
    console.log("clickFigur");

    if (this.classList.contains("figur1")) {
        console.log("Beige");
        points++;
        document.querySelector("#points").innerHTML = points;

    } else if (this.classList.contains("figur2")) {
        console.log("Graa");
        points++;
        document.querySelector("#points").innerHTML = points;

    } else if (this.classList.contains("figur3")) {
        console.log("kat");
        document.querySelector("#star" + energy).classList.add("hide");
        energy--;
    }
    this.classList.add("hide");

    this.addEventListener("animationend", nyFigur);
    gameStatus();

    setTimeout(addMove, 300);
}

function nyFigur() {
    console.log("nyFigur");

    this.className = "";
    this.classList.add("place" + Math.floor((Math.random() * 3) + 1));
    this.classList.add("figur" + Math.floor((Math.random() * 3) + 1));
}

function gameStatus() {
    console.log("gameStatus");

    if (energy == 0) {
        document.querySelector("#gameover").classList.remove("hide");


    } else if (points == 10) {
        document.querySelector("#levelcomplete").classList.remove("hide");
    }
}

function timeOver() {
    console.log("tælller ned fra" + time);


    if (time > 0) {
        time--;
        setTimeout(timeOver, 1000);
        document.querySelector("#time").innerHTML = time;

    } else {
        gameOver();
    }
}

function gameOver() {
    console.log("gameOver");
    document.querySelector("#gameover").classList.remove("hide");

    document.querySelector("#spil_igen_knap").addEventListener("click", showStart);
    document.querySelector("#stopspil_knap").addEventListener("click", sidenVises);

}

function levelCompleted() {
    console.log("levelCompleted");
    document.querySelector("#levelcomplete").classList.remove("hide");

    document.querySelector("#spil_igen_knap").addEventListener("click", showStart);
    document.querySelector("#stopspil_knap").addEventListener("click", sidenVises);
}
