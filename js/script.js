function load() {
    let btn = document.getElementById("play");

    btn.addEventListener("click", () => {
        window.open("/game/");
    });
};

document.addEventListener("load", load);
