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
