function load() {
    let btn = document.getElementById("play")

    btn.onclick = () => {
        window.open("/game")
    }
}

document.addEventListener("load", load)
