function load() {
    let btn = document.getElementById("play")

    btn.onclick = () => {
        window.open("/game")
    }
}

document.onload = load
